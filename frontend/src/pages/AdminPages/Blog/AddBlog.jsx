
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddBlog() {
    const [blog, setBlog] = useState({
        category: '',
        img: '',
        lastTime: 0,
        date: '',
        title: '',
        content: '',
        user: ''
    });
    const [error, setError] = useState(null); // State to hold error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog(prevBlog => ({ ...prevBlog, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/addBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log('Success:', data);
                // Optionally redirect or show a success message
                setError(null); // Clear any previous error
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Failed to add blog'); // Set error state for displaying error messages
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="category" onChange={handleChange} placeholder="Category" required />
            <input type="text" name="img" onChange={handleChange} placeholder="Image URL" required />
            <input type="number" name="lastTime" onChange={handleChange} placeholder="Last Time" required />
            <input type="text" name="date" onChange={handleChange} placeholder="Date" required />
            <input type="text" name="title" onChange={handleChange} placeholder="Title" required />
            <textarea name="content" onChange={handleChange} placeholder="Content" required></textarea>
            <input type="text" name="user" onChange={handleChange} placeholder="User" required />
            <button type="submit">Add Blog</button>
            {error && <p className="error">{error}</p>}
            {/* <div className="sflex" style={{ justifyContent: "flex-end" }}>
            </div> */}
        </form>
    );
}

export default AddBlog;

