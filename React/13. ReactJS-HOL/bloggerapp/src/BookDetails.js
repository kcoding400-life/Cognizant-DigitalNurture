import React from "react";

function BookDetails() {
  const book = {
    title: "Learning React",
    author: "Alex Banks & Eve Porcello",
    year: 2020,
    publisher: "O'Reilly Media"
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px" }}>
      <h2>📚 Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
    </div>
  );
}

export default BookDetails;