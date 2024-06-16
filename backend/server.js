const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4eaee6f4ddsrysuraj@',
    database: 'blog_db'
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); // Destination directory for storing images
    },
    filename: function (req, file, cb) {
        // Generate a unique filename for the uploaded image
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Create Database
app.get('/createDatabase', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS blog_db';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Database created...');
    });
});

// Create Blog Table
app.get('/createBlogTable', (req, res) => {
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
        res.send('Blogs table created...');
    });
});

// Add Blog
app.post('/addBlog', (req, res) => {
    let blog = req.body;
    let sql = 'INSERT INTO blogs SET ?';
    db.query(sql, blog, (err, result) => {
        if (err) {
            console.error('Error adding blog:', err);
            res.status(500).json({ error: 'Failed to add blog' }); // Send JSON error response
            return;
        }
        console.log('Blog added successfully');
        res.json({ message: 'Blog added successfully' }); // Send JSON success response
    });
});

// Get Blogs
app.get('/getBlogs', (req, res) => {
    let sql = 'SELECT * FROM blogs';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Update Blog
app.put('/updateBlog/:id', (req, res) => {
    let newTitle = req.body.title;
    let sql = `UPDATE blogs SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Blog updated...');
    });
});

// Delete Blog
// app.delete('/deleteBlog/:id', (req, res) => {
//     let sql = `DELETE FROM blogs WHERE id = ${req.params.id}`;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('Blog deleted...');
//     });
// });
// Delete Blog
app.delete('/deleteBlog/:id', (req, res) => {
    let sql = `DELETE FROM blogs WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Failed to delete blog' });
        } else {
            res.json({ success: true, message: 'Blog deleted successfully' });
        }
    });
});


app.listen('3001', () => {
    console.log('Server started on port 3001');
});
