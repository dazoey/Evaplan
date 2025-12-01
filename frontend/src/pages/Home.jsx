import { useEffect, useState } from 'react'
import { getPublicEvents } from '../api/eventApi'
import EventCard from '../components/EventCard'
// ini logika buat halaman utama yang nampilin daftar event
export default function Home() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
// ini efek buat ngeload daftar event pas component pertama kali di render
  useEffect(() => {
    load()
  }, [])
// ini fungsi buat ngeload daftar event dari backend
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

  return (
    // ini buat nampilin daftar event
    <>
      <h2 className="text-green-500 text-lg mb-4">$ list-events</h2>
      {/* ini buat loading state */}
      {loading && <p>Loading events...</p>}
      { /* ini buat error state */}
      {error && <p className="text-red-500">{error}</p>}
      {/* ini buat nampilin pesan kalo ngga ada event */}
      {!loading && !error && events.length === 0 && (
        <p className="text-gray-500">No events found.</p>
      )}
      {/* ini buat nampilin daftar event kalo ada */}
      <div className="space-y-4">
        {!loading && !error && events.map(ev => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </>
  )
}
