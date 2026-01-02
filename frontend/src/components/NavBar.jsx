import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaInfoCircle, FaUser } from 'react-icons/fa';

export default function NavBar() {
  const linkClass = "flex flex-col items-center text-sm hover:text-green-400 transition-colors p-2 md:p-0 md:flex-row md:hover:text-white md:hover:underline";
  const iconClass = "w-5 h-5 mb-1 md:hidden";

  return (
    // navbar buat buat mobile ama desktop
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2 flex justify-around items-center md:static md:p-0 md:bg-transparent md:flex-row md:space-x-4">
      <Link to="/" className={linkClass}>
        <FaHome className={iconClass} />
        <span>Home</span>
      </Link>
      {/* ini buat nambahin event */}
      <Link to="/add" className={linkClass}>
        <FaPlus className={iconClass} />
        <span className="md:hidden">Add</span>
        <span className="hidden md:inline">+ Add Event</span>
      </Link>
      {/* ini buat about page */}
      <Link to="/about" className={linkClass}>
        <FaInfoCircle className={iconClass} />
        <span>About</span>
      </Link>
       {/* ini buat profile page */}
      {/* <Link to="/profile" className={linkClass}>
        <FaUser className={iconClass} />
        <span>Profile</span>
      </Link> */}
    </nav>
  );
}
