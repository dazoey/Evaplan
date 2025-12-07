import { Link } from 'react-router-dom';
import ReloadPrompt from './ReloadPrompt';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200 font-mono">
      {/* Header */}
      <header className="flex items-center h-10 px-4 bg-gray-800 flex-shrink-0">
        <div className="flex-1 text-center text-sm md:text-left">
          <Link to="/" className="hover:underline hidden md:inline">EvaPlan</Link>
        </div>
        <div className="hidden md:block">
          <NavBar />
        </div>
      </header>
      
      {/* konten utama */}
      <main className="flex-1 p-4 overflow-y-auto pb-16 md:pb-4"> {/* Add pb-16 for mobile to account for bottom nav */}
        {children}
      </main>

      <ReloadPrompt />

      {/* Mobile NavBar */}
      <div className="md:hidden">
        <NavBar />
      </div>

      {/* Footer (sebenernya ga butuh2 amat cuma iseng bikin beginian) */}
      {/* <footer className="bg-gray-800 p-2 text-xs text-center flex-shrink-0">
        <p>Status: <span className="text-green-500">OK</span></p>
      </footer> */}
    </div>
  );
}
