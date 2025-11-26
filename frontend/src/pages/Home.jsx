import { useEffect, useState } from 'react'
import { getPublicEvents, deleteEvent } from '../api/eventApi'
import EventCard from '../components/EventCard'

export default function Home() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    try {
      setLoading(true)
      const res = await getPublicEvents()
      setEvents(res.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch events. Please try again later.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id)
      load()
    } catch (err) {
      console.error('Failed to delete event:', err)
      // Optionally, show an error message to the user
    }
  }

  return (
    <>
      <h2 className="text-green-500 text-lg mb-4">$ list-events</h2>

      {loading && <p>Loading events...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && events.length === 0 && (
        <p className="text-gray-500">No events found.</p>
      )}

      <div className="space-y-4">
        {!loading && !error && events.map(ev => (
          <EventCard key={ev.id} event={ev} onDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}
