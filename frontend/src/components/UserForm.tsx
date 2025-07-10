// src/components/UserForm.tsx
import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name,
        email,
        message,
      });

      console.log(response.data);
      setStatus('✅ Submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('❌ Submission failed.');
    }
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label><br />
          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </div>
  );
};

export default UserForm;
