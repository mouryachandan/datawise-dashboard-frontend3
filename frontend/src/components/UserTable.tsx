
import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
      <h2>User Activity Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Name</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Email</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>{user.id}</td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>{user.name}</td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>{user.email}</td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
