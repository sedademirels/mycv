import React from 'react';
import { Link } from 'react-router-dom';
import "../components/BlogCard.css"

function BlogCard({ title, date, summary, slug }) {
  return (
    <div className="blog-card">
      <h3 className="blog-title">{title}</h3>
      <p className="blog-date">{date}</p>
      <p className="blog-summary">{summary.slice(0, 100)}...</p>
      <Link to={`/blog/${slug}`} className="blog-link">
        Devamını Oku →
      </Link>
    </div>
  );
}

export default BlogCard;
