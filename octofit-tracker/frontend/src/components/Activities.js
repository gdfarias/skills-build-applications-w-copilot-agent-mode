import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_CODESPACE_NAME
  ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities endpoint:', API_URL);
        console.log('Fetched activities:', results);
      });
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((a, i) => (
          <li key={i}>{a.user} - {a.type} - {a.duration} min - {a.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
