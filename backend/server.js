const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4eaee6f4ddsrysuraj@",
  database: "blog_db",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // Adjust path to backend/public/images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

// Create Blog Table if not exists
app.get("/createBlogTable", (req, res) => {
  let sql = `CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        category VARCHAR(255),
        img VARCHAR(255),
        lastTime INT,
        date VARCHAR(255),
        title VARCHAR(255),
        content TEXT,
        user VARCHAR(255)
    )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Blogs table created...");
  });
});

app.post("/addBlog", upload.single("img"), (req, res) => {
  let blog = req.body;
  blog.img = "/images/" + req.file.filename;
  let sql = "INSERT INTO blogs SET ?";
  db.query(sql, blog, (err, result) => {
    if (err) {
      console.error("Error adding blog:", err);
      res.status(500).json({ error: "Failed to add blog" });
      return;
    }
    blog.id = result.insertId; // Get the newly inserted blog's ID
    console.log("Blog added successfully");
    res.json(blog); // Return the newly added blog
  });
});

// Get All Blogs
app.get("/getBlogs", (req, res) => {
  let sql = "SELECT * FROM blogs";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching blogs:", err);
      res.status(500).json({ error: "Failed to fetch blogs" });
      return;
    }
    res.json(results);
  });
});

// Delete Blog by ID
app.delete("/deleteBlog/:id", (req, res) => {
  const { id } = req.params;
  let sql = "DELETE FROM blogs WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting blog:", err);
      res.status(500).json({ error: "Failed to delete blog" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }
    res.json({ success: true, message: "Blog deleted successfully" });
  });
});



app.get("/getBlog/:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM blogs WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error fetching blog:", err);
      res.status(500).json({ error: "Failed to fetch blog" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.json(result[0]);
  });
});

app.listen("3001", () => {
  console.log("Server started on port 3001");
});


// Update Blog by ID
// app.put("/updateBlog/:id", upload.single("img"), (req, res) => {
//   const { id } = req.params;
//   let updatedBlog = req.body;

//   if (req.file) {
//     updatedBlog.img = "/public/images/" + req.file.filename;
//   }

//   let sql = "UPDATE blogs SET ? WHERE id = ?";
//   db.query(sql, [updatedBlog, id], (err, result) => {
//     if (err) {
//       console.error("Error updating blog:", err);
//       res.status(500).json({ error: "Failed to update blog" });
//       return;
//     }
//     if (result.affectedRows === 0) {
//       res.status(404).json({ error: "Blog not found" });
//       return;
//     }
//     res.json({ success: true, message: "Blog updated successfully" });
//   });
// });