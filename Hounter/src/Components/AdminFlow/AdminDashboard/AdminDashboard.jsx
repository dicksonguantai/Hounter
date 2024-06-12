import { Link } from 'react-router-dom';
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    
      <div className="admin-dashboard flex">
        <aside className="sidebar bg-gray-800 text-white h-screen p-5">
          <h2 className="text-2xl font-semibold mb-5">Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-3">
                <Link to="/admin/houses" className="text-lg">Manage Houses</Link>
              </li>
              <li>
                <Link to="/admin/bookings" className="text-lg">Manage Bookings</Link>
              </li>
            </ul>
          </nav>
        </aside>
        
      </div>

  );
}
