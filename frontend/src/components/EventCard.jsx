import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  // Format dates for better readability
  const startTime = new Date(event.start_time).toLocaleString();
  const endTime = new Date(event.end_time).toLocaleString();

  return (
    <Link to={`/events/${event.id}`} className="block bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-green-500">{event.title}</h3>
          <p className="text-sm text-gray-400">
            {startTime} — {endTime}
          </p>
        </div>
      </div>

      {event.description && (
        <p className="mt-3 text-sm text-gray-300 border-l-2 border-gray-700 pl-3">{event.description}</p>
      )}
    </Link>
  )
}
