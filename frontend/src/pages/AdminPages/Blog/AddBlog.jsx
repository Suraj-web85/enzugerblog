import React, { useState } from 'react';

function AddBlog() {
    const [blog, setBlog] = useState({
        category: '',
        img: '',
        lastTime: 0,
        date: '',
        title: '',
        content: '',
        user:''
    });
    const [error, setError] = useState(null); // State to hold error messages
    const [successMessage, setSuccessMessage] = useState('');

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
                setSuccessMessage('Blog added successfully'); // Set success message for displaying
                setError(null); // Clear any previous error
                setBlog({
                    category: '',
                    img: '',
                    lastTime: 0,
                    date: '',
                    title: '',
                    content: '',
                    user: ''
                }); // Clear the form after successful submission
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Failed to add blog'); // Set error state for displaying error messages
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="category" value={blog.category} onChange={handleChange} placeholder="Category" required />
                <input type="text" name="img" value={blog.img} onChange={handleChange} placeholder="Image URL" required />
                <input type="number" name="lastTime" value={blog.lastTime} onChange={handleChange} placeholder="Last Time" required />
                <input type="text" name="date" value={blog.date} onChange={handleChange} placeholder="Date" required />
                <input type="text" name="title" value={blog.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="content" value={blog.content} onChange={handleChange} placeholder="Content" required></textarea>
                <input type="text" name="user" value={blog.user} onChange={handleChange} placeholder="User" required />
                <button type="submit">Add Blog</button>
                {successMessage && <p className="success">{successMessage}</p>}

                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default AddBlog;
