import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddBlog from './AddBlog'; // Import the AddBlog component

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        fetch('http://localhost:3001/getBlogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => setError(error)); // Store the error object
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())  // Parse response as JSON
            .then(result => {
                if (result.success) {  // Assuming server sends { success: true }
                    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
                } else {
                    throw new Error(result.message || 'Failed to delete blog');
                }
            })
            .catch(error => setError(error.message)); // Store the error message
    };

    const handleBlogAdded = (newBlog) => {
        setBlogs(prevBlogs => [...prevBlogs, newBlog]); // Add the new blog to the list
    };

    return (
        <div>
            <h2>Blog List</h2>
            {error && <p className="error">{error.message}</p>} {/* Render error.message */}
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h3>{blog.title}</h3>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link className="add-product-btn com-btn" to="add-blog">
                + Add Blog
            </Link>
            {/* <AddBlog onBlogAdded={handleBlogAdded} /> Include the AddBlog component */}
        </div>
    );
}

export default BlogList;
