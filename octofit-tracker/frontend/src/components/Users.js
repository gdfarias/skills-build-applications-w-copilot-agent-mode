import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_CODESPACE_NAME
  ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users endpoint:', API_URL);
        console.log('Fetched users:', results);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} ({u.email}) - Team: {u.team}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
