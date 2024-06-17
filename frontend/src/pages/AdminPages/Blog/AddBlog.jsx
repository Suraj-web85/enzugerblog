import React, { useState } from 'react';

function AddBlog({ onBlogAdded }) {
    const [blog, setBlog] = useState({
        category: '',
        img: null, // Store file data here
        lastTime: 0,
        title: '',
        content: '',
        user: '',
        date: '' // Added date field
    });
    const [error, setError] = useState(null); // State to hold error messages
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog(prevBlog => ({ ...prevBlog, [name]: value }));
    };

    // Function to handle file input change
    const handleFileChange = (e) => {
        setBlog({ ...blog, img: e.target.files[0] }); // Store the selected file
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('category', blog.category);
        formData.append('lastTime', blog.lastTime);
        formData.append('date', new Date().toISOString().split('T')[0]); // Set current date
        formData.append('title', blog.title);
        formData.append('content', blog.content);
        formData.append('user', blog.user);
        formData.append('img', blog.img); // Append the file data to formData
        
        fetch('http://localhost:3001/addBlog', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setSuccessMessage('Blog added successfully');
            setError(null);
            setBlog({
                category: '',
                img: null,
                lastTime: 0,
                title: '',
                content: '',
                user: '',
                date: '' // Clear date field after submission if needed
            });
            // onBlogAdded(data); 
        })
        .catch(error => {
            console.error('Error:', error);
            setError('Failed to add blog');
        });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="category" value={blog.category} onChange={handleChange} placeholder="Category" required />
                <input type="file" name="img" onChange={handleFileChange} required /> {/* File input for image */}
                <input type="number" name="lastTime" value={blog.lastTime} onChange={handleChange} placeholder="Last Time" required />
                {/* Removed date input */}
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
