import React from "react";
import { Link } from "react-router-dom";
import "./BlogThrd.css";
import blogs from '../../assets/data/BlogPgTp.json';
import BlogTitle from "./BlogTitle";

function BlogThrd() {
  return (
    <div className="blg-thrd-mn-ctr">
      <div className='ti-tl-lg'>
      <BlogTitle className="hd-tp-rd" title="Explore Articles"/>
      </div>
      
      {blogs.map((blog, index) => (
        <div key={blog.id} className="blg-thrd-sb-dv">
        <div className="ti-tl-lg">
        
        </div>
          <div className={`gd-cnt ${blog.id % 2 === 0 ? "flipped" : ""}`}>
            <div className="gbsbfr-ctr">
              <h3>{blog.heading}</h3>
              <p>{blog.content}</p>
              
              <Link to={`/blog/${blog.id}`} className="read-more-link">
                <button type="button">Read more</button>
              </Link>
            </div>
            <div className="img-cntr">  
              <img src={`/images/${blog.img}`} alt={blog.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogThrd;
