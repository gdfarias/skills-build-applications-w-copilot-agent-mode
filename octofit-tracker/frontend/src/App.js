import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="container-fluid p-0 min-vh-100" style={{background: 'none'}}>
      <nav className="navbar navbar-expand-lg mb-4">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="/octofitapp-small.png" alt="OctoFit Logo" className="octofit-logo" />
          OctoFit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <div className="container py-3">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2 className="mt-4">Bienvenido a OctoFit Tracker</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
