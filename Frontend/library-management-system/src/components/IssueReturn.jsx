// IssueReturn.jsx
import React, { useState } from 'react';
import './issueReturn.css';

function IssueReturn() {
  const members = ['Alice Johnson', 'Bob Smith'];
  const books = ['C Programming', 'Java Complete Reference'];

  const [issueData, setIssueData] = useState({
    member: '',
    book: '',
    issueDate: '',
  });

  const [issuedBooks, setIssuedBooks] = useState([]);

  const handleChange = (e) => {
    setIssueData({ ...issueData, [e.target.name]: e.target.value });
  };

  const handleIssue = (e) => {
    e.preventDefault();
    if (!issueData.member || !issueData.book || !issueData.issueDate) return;
    setIssuedBooks([...issuedBooks, issueData]);
    setIssueData({ member: '', book: '', issueDate: '' });
  };

  const handleReturn = (index) => {
    const updated = [...issuedBooks];
    updated.splice(index, 1);
    setIssuedBooks(updated);
  };

  return (
    <div className="issue-container">
      <h2>Issue / Return Management</h2>

      <form className="issue-form" onSubmit={handleIssue}>
        <select name="member" value={issueData.member} onChange={handleChange} required>
          <option value="">Select Member</option>
          {members.map((m, i) => (
            <option key={i} value={m}>{m}</option>
          ))}
        </select>
        <select name="book" value={issueData.book} onChange={handleChange} required>
          <option value="">Select Book</option>
          {books.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>
        <input
          type="date"
          name="issueDate"
          value={issueData.issueDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Issue Book</button>
      </form>

      <div className="issued-table-wrapper">
        <table className="issued-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {issuedBooks.map((item, index) => (
              <tr key={index}>
                <td>{item.member}</td>
                <td>{item.book}</td>
                <td>{item.issueDate}</td>
                <td>
                  <button onClick={() => handleReturn(index)} className="return-btn">Return</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IssueReturn;
