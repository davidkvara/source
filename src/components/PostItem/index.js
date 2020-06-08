import React from "react";
import "./post.css";
import { Link } from "gatsby";

const Post = ({ date, title, to }) => (
  <Link to={to} className="post-link">
    <div className="post-date">{date}</div>
    <div className="post-title">{title}</div>
  </Link>
);

export default Post;
