// Books.jsx
import React, { useState } from 'react';
import './books.css';

function Books() {
  const [books, setBooks] = useState([
    // Sample static data
    { title: "C Programming", author: "Dennis Ritchie", copies: 10, rack: "Rack A" },
    { title: "Java Complete Reference", author: "Herbert Schildt", copies: 5, rack: "Rack B" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "", copies: "", rack: "" });

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author || !newBook.copies || !newBook.rack) return;
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "", copies: "", rack: "" });
  };

  return (
    <div className="books-container">
      <h2>Books Management</h2>

      <form className="book-form" onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Copies"
          value={newBook.copies}
          onChange={(e) => setNewBook({ ...newBook, copies: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Rack No"
          value={newBook.rack}
          onChange={(e) => setNewBook({ ...newBook, rack: e.target.value })}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <div className="book-table-wrapper">
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Copies</th>
              <th>Rack</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.copies}</td>
                <td>{book.rack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Books;
