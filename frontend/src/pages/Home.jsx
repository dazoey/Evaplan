import { useEffect, useState } from 'react'
import { getPublicEvents } from '../api/eventApi'
import EventCard from '../components/EventCard'

export default function Home() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sortOrder, setSortOrder] = useState('start_time,asc')

  useEffect(() => {
    load()
  }, [sortOrder])

  const load = async () => {
    try {
      setLoading(true)
      const [sortBy, order] = sortOrder.split(',')
      const res = await getPublicEvents(sortBy, order)
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
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-green-500 text-lg">$ list-events</h2>
        <select 
          className="bg-gray-800 text-white p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="start_time,asc">Sort by Date (Asc)</option>
          <option value="start_time,desc">Sort by Date (Desc)</option>
          {/* <option value="name,asc">Sort by Name (A-Z)</option>
          <option value="name,desc">Sort by Name (Z-A)</option> */}
        </select>
      </div>
      {/* ini buat nampilin list event */}
      {loading && <p>Loading events...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && events.length === 0 && (
        <p className="text-gray-500">No events found.</p>
      )}
      <div className="space-y-4">
        {!loading && !error && events.map(ev => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </>
  )
}
