import { useEffect, useState } from 'react'
import { getPublicEvents, deleteEvent } from '../api/eventApi'
import EventCard from '../components/EventCard'
import Header from '../components/Header'

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
      <Header />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">All Events</h2>

        {loading && <p>Loading events...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && events.length === 0 && (
          <p className="text-sm text-black/60">Belum ada event</p>
        )}

        {!loading && !error && events.map(ev => (
          <EventCard key={ev.id} event={ev} onDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}
