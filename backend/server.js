const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_db'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Create Blog Table
app.get('/createBlogTable', (req, res) => {
    let sql = 'CREATE TABLE blogs (id int AUTO_INCREMENT, category VARCHAR(255), img VARCHAR(255), lastTime int, date VARCHAR(255), title VARCHAR(255), content TEXT, user VARCHAR(255), PRIMARY KEY(id))';
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
        if (err) throw err;
        res.send('Blog added...');
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
app.delete('/deleteBlog/:id', (req, res) => {
    let sql = `DELETE FROM blogs WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Blog deleted...');
    });
});

app.listen('3001', () => {
    console.log('Server started on port 3001');
});
