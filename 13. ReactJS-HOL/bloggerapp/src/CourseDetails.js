import React from "react";

function CourseDetails() {
  const course = {
    name: "ReactJS Hands-on Lab",
    instructor: "Dev",
    duration: "60 minutes",
    level: "Beginner to Intermediate",
    description:
      "This course introduces the fundamentals of React, focusing on conditional rendering, component extraction, and using keys with lists. By the end, you’ll be able to build dynamic applications with multiple components."
  };

  return (
    <div style={{ border: "1px solid #2196f3", padding: "16px", margin: "16px" }}>
      <h2>🎓 Course Details</h2>
      <p><strong>Course Name:</strong> {course.name}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Level:</strong> {course.level}</p>
      <p><strong>Description:</strong> {course.description}</p>
    </div>
  );
}

export default CourseDetails;
