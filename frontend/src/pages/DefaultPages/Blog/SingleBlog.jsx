import React, { useEffect, useState } from "react";
import "./SingleBlog.css";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/getBlog/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => setError(error));
  }, [id]);

  if (error) {
    return <div>Error fetching blog post.</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const bgImg = {
    background: `url('http://localhost:3001${blog.img}') no-repeat top / cover`,
  };

  return (
    <div className="mn-cn-blog-sngle-pg">
      <div style={bgImg} className="bnner-too-img"></div>
      <div className="mn-cntr-dvbgpg">
        <div className="sb-dv-sle-blg-pg">
          <h1 className="head-sg-blg">{blog.title}</h1>
          <hr />
          <div className="use-up-sc-sbgl">
            <div className="user-img-dv">
              <img src="/images/tempUserImg.jpg" alt="" />
            </div>
            <div>
              <p className="use-nm">NAGENDRA KUMAR</p>
              <span className="date-dur-tion">
                {blog.date} <GoDotFill className="dot" /> {blog.lastTime} min read
              </span>
            </div>
          </div>
          <div className="cont-ent-sngle-pg-blg-unds">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
