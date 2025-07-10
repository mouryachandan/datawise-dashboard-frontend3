// src/components/Sidebar.tsx
import { Link } from 'react-router-dom';
//import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Datawise</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
