import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  // State to control which component to show
  const [view, setView] = useState("book"); // default is "book"

  // Example list for rendering multiple components with keys
  const componentsList = [
    { id: 1, type: "book" },
    { id: 2, type: "blog" },
    { id: 3, type: "course" }
  ];

  // Switch-case rendering
  const renderComponent = () => {
    switch (view) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <h2>No Component Selected</h2>;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 BloggerApp</h1>

      {/* Buttons to change state */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("book")}>Show Book</button>
        <button onClick={() => setView("blog")}>Show Blog</button>
        <button onClick={() => setView("course")}>Show Course</button>
      </div>

      {/* 1. Switch Case Rendering */}
      <h2>🔄 Switch Case Rendering</h2>
      {renderComponent()}

      {/* 2. Ternary Operator Rendering */}
      <h2>❓ Ternary Operator Rendering</h2>
      {view === "book" ? <BookDetails /> : <BlogDetails />}

      {/* 3. Logical AND Rendering */}
      <h2>✅ Logical AND Rendering</h2>
      {view === "course" && <CourseDetails />}

      {/* 4. Rendering Multiple Components with map() and keys */}
      <h2>📋 Rendering Multiple Components with Keys</h2>
      {componentsList.map(item => {
        if (item.type === "book") return <BookDetails key={item.id} />;
        if (item.type === "blog") return <BlogDetails key={item.id} />;
        if (item.type === "course") return <CourseDetails key={item.id} />;
        return null;
      })}
    </div>
  );
}

export default App;
