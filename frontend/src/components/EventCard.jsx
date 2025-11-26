export default function EventCard({ event, onDelete }) {
  // Format dates for better readability
  const startTime = new Date(event.start_time).toLocaleString();
  const endTime = new Date(event.end_time).toLocaleString();

  return (
    <div className="bg-gray-800 p-4 rounded">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-green-500">{event.title}</h3>
          <p className="text-sm text-gray-400">
            {startTime} — {endTime}
          </p>
        </div>
        <button
          onClick={() => onDelete(event.id)}
          className="text-red-500 hover:text-red-400 font-bold"
          aria-label={`Delete event ${event.title}`}
        >
          [x]
        </button>
      </div>

      {event.description && (
        <p className="mt-3 text-sm text-gray-300 border-l-2 border-gray-700 pl-3">{event.description}</p>
      )}
    </div>
  )
}
