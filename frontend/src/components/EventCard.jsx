export default function EventCard({ event, onDelete }) {
  return (
    <div className="border border-black/10 rounded-lg p-5 mb-4">
      <h3 className="text-lg font-semibold mb-1">{event.title}</h3>

      <p className="text-sm text-black/60">
        {new Date(event.start_time).toLocaleString()} — {new Date(event.end_time).toLocaleString()}
      </p>

      {event.description && (
        <p className="mt-3 text-sm">{event.description}</p>
      )}

      <button
        onClick={() => onDelete(event.id)}
        className="mt-4 text-sm border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
      >
        Delete
      </button>
    </div>
  )
}
