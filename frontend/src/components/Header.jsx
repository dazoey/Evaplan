export default function Header() {
  return (
    <header className="border-b border-black/10 py-4 mb-6">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-tight">Event Scheduler</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/add" className="hover:underline">Add Event</a>
        </nav>
      </div>
    </header>
  )
}
