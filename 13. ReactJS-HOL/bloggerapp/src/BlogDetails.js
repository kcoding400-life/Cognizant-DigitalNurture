import React from "react";

function BlogDetails() {
  const blog = {
    title: "Understanding Conditional Rendering in React",
    author: "Dev",
    date: "July 32, 2026",
    content:
      "Conditional rendering in React allows you to control what gets displayed based on application state or props. It’s a powerful way to make your UI dynamic and responsive."
  };

  return (
    <div style={{ border: "1px solid #4caf50", padding: "16px", margin: "16px" }}>
      <h2>📝 Blog Details</h2>
      <p><strong>Title:</strong> {blog.title}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {blog.date}</p>
      <p><strong>Content:</strong> {blog.content}</p>
    </div>
  );
}

export default BlogDetails;