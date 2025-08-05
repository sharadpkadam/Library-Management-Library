// Payments.jsx
import React, { useState } from 'react';
import './payments.css';

function Payments() {
  const [payments, setPayments] = useState([
    { member: "Alice Johnson", type: "Fine", amount: 50, date: "2025-08-01" },
    { member: "Bob Smith", type: "Membership", amount: 200, date: "2025-08-03" },
  ]);

  const [form, setForm] = useState({
    member: '',
    type: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddPayment = (e) => {
    e.preventDefault();
    if (!form.member || !form.type || !form.amount || !form.date) return;
    setPayments([...payments, form]);
    setForm({ member: '', type: '', amount: '', date: '' });
  };

  return (
    <div className="payments-container">
      <h2>Payments Management</h2>

      <form className="payment-form" onSubmit={handleAddPayment}>
        <input
          type="text"
          name="member"
          placeholder="Member Name"
          value={form.member}
          onChange={handleChange}
          required
        />
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Membership">Membership</option>
          <option value="Fine">Fine</option>
        </select>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Record Payment</button>
      </form>

      <div className="payment-table-wrapper">
        <table className="payment-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, index) => (
              <tr key={index}>
                <td>{p.member}</td>
                <td>{p.type}</td>
                <td>₹{p.amount}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;
