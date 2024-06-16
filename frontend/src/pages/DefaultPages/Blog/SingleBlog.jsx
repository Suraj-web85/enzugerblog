import React from "react";
import "./SingleBlog.css";
import { useParams } from "react-router-dom";
import data from '../../../assets/data/BlogPgTp.json';
import { GoDotFill } from "react-icons/go";

function SingleBlog() {
  const { id } = useParams();
  const blog = data.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  const bgImg = {
    background: `url('/images/${blog.img}') no-repeat top / cover`,
  };

  return (
    <div className="mn-cn-blog-sngle-pg">
    <div style={bgImg} className="bnner-too-img"></div>
    <div className="mn-cntr-dvbgpg">
    <div className="sb-dv-sle-blg-pg">
      <h1 className="head-sg-blg">{blog.title} </h1>
      <hr />
      <div className="use-up-sc-sbgl">
        <div className="user-img-dv">
          <img src="/images/tempUserImg.jpg" alt="" />
        </div>
        <div>
          <p className="use-nm">NAGENDRA KUMAR</p>
          <span className="date-dur-tion">
            {blog.Date} <GoDotFill className="dot" /> {blog.lastTime} min read
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
