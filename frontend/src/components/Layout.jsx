import { Link } from 'react-router-dom';
import ReloadPrompt from './ReloadPrompt';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200 font-mono">
      {/* Header */}
      <header className="flex items-center h-10 px-4 bg-gray-800 flex-shrink-0">
        <div className="flex items-center">
          {/* <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div> */}
        </div>
        <div className="flex-1 text-center text-sm">
          <Link to="/" className="hover:underline">event-tracker</Link>
        </div>
        <nav className="text-sm">
          <Link to="/add" className="hover:underline">
            + Add Event
          </Link>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {children}
      </main>

      <ReloadPrompt />

      {/* Footer */}
      <footer className="bg-gray-800 p-2 text-xs text-center flex-shrink-0">
        <p>Status: <span className="text-green-500">OK</span></p>
      </footer>
    </div>
  );
}
