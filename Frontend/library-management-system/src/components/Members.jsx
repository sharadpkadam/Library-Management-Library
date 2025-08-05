// Members.jsx
import React, { useState } from 'react';
import './members.css';

function Members() {
  const [members, setMembers] = useState([
    { name: "Alice Johnson", email: "alice@gmail.com", contact: "9876543210" },
    { name: "Bob Smith", email: "bob@gmail.com", contact: "9123456780" },
  ]);

  const [newMember, setNewMember] = useState({ name: '', email: '', contact: '' });

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.name || !newMember.email || !newMember.contact) return;
    setMembers([...members, newMember]);
    setNewMember({ name: '', email: '', contact: '' });
  };

  return (
    <div className="members-container">
      <h2>Members Management</h2>

      <form className="member-form" onSubmit={handleAddMember}>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newMember.email}
          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Contact"
          value={newMember.contact}
          onChange={(e) => setNewMember({ ...newMember, contact: e.target.value })}
          required
        />
        <button type="submit">Add Member</button>
      </form>

      <div className="member-table-wrapper">
        <table className="member-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Members;
