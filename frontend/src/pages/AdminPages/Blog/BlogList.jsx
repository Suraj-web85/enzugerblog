// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function BlogList() {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3001/getBlogs')
//             .then(response => response.json())
//             .then(data => setBlogs(data))
//             .catch(error => console.error('Error:', error));
//     }, []);

//     const handleDelete = (id) => {
//         fetch(`http://localhost:3001/deleteBlog/${id}`, {
//             method: 'DELETE'
//         })
//             .then(response => response.json())
//             .then(() => {
//                 // Remove the deleted blog from the state
//                 setBlogs(blogs.filter(blog => blog.id !== id));
//             })
//             .catch(error => console.error('Error:', error));
//     };

//     return (
//         <div>

//             <h2>Blog List</h2>
//             <ul>
//                 {blogs.map(blog => (
//                     <li key={blog.id}>
//                         <h3>{blog.title}</h3>
//                         <button onClick={() => handleDelete(blog.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             <Link className="add-product-btn com-btn" to="add-blog">
//           + Add Blog
//         </Link>
//         </div>
//     );
// }

// export default BlogList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/getBlogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => setError(error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.text())  // Parse response as text
            .then(text => {
                try {
                    const json = JSON.parse(text);  // Try to parse the text as JSON
                    if (json.success) {  // Assuming server sends { success: true }
                        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
                    } else {
                        throw new Error(json.message || 'Failed to delete blog');
                    }
                } catch (err) {
                    throw new Error('Invalid JSON response');
                }
            })
            .catch(error => setError(error.message));
    };

    return (
        <div>
            <h2>Blog List</h2>
            {error && <p className="error">{error}</p>}
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
        </div>
    );
}

export default BlogList;

