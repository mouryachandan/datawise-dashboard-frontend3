
const Users = () => {
  const userList = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
      <h2>Registered Users</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index} style={{ padding: '5px 0' }}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
