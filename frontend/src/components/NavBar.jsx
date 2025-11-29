import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2 flex justify-around items-center md:static md:p-0 md:bg-transparent md:flex-row">
      <Link to="/" className="text-sm hover:underline p-2 md:p-0">Home</Link>
      <Link to="/add" className="text-sm hover:underline p-2 md:p-0">
        + Add Event
      </Link>
      <Link to="/about" className="text-sm hover:underline p-2 md:p-0">
        About
      </Link>
      <Link to="/profile" className="text-sm hover:underline p-2 md:p-0">
        Profile
      </Link>
    </nav>
  );
}
