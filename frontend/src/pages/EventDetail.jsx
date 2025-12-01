import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventById, updateEvent, deleteEvent } from '../api/eventApi'
import EventForm from '../components/EventForm'

// ini logika buat detail event
export default function EventDetail() {
  const [event, setEvent] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formState, setFormState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
// ini fungsi buat ngeload data event
  const loadEvent = useCallback(async () => {
    try {
      // ini buat set loading state
      setLoading(true)
      // ini buat reset error state
      setError(null)
      const res = await getEventById(id)
      // ini buat set data event ke state
      setEvent(res.data)
      // ini buat format tanggal dan waktu ke input type datetime-local
      setFormState({
        title: res.data.title,
        description: res.data.description,
        start_time: new Date(res.data.start_time).toISOString().slice(0, 16),
        end_time: new Date(res.data.end_time).toISOString().slice(0, 16),
      })
      // ini buat reset error state
      setError(null)
    } catch (err) {
      setError('Failed to fetch event. Please try again later.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [id])
// ini efek buat ngeload data event pas component pertama kali di render
  useEffect(() => {
    loadEvent()
  }, [loadEvent])
// ini fungsi buat ngupdate data event
  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateEvent(id, formState)
      setIsEditing(false)
      loadEvent()
    } catch (err) {
      console.error('Failed to update event:', err)
      // buat kasi liat error ke user
    }
  }
// ini fungsi buat ngapus event
  const handleDelete = async () => {
    try {
      await deleteEvent(id)
      navigate('/')
    } catch (err) {
      console.error('Failed to delete event:', err)
      // buat kasi liat error ke user
    }
  }

// ini fungsi buat download event sebagai file TXT
  const handleDownload = () => {
    if (!event) return;
// ini buat format tanggal dan waktu ke string
    const startTime = new Date(event.start_time).toLocaleString();
    const endTime = new Date(event.end_time).toLocaleString();
// ini buat format isi file
    const fileContent = `Title: ${event.title}\n` +
                        `Start Time: ${startTime}\n` +
                        `End Time: ${endTime}\n` +
                        `Description: ${event.description || 'N/A'}`;
// ini buat bikin blob dan download link
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.title.replace(/[^a-z0-9]/gi, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <p>Loading event...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
// ini buat tampilin detail event
    <div>
      {isEditing ? (
        <div>
          <h2 className="text-green-500 text-lg mb-4">$ edit-event</h2>
          <EventForm form={formState} setForm={setFormState} onSubmit={handleUpdate} />
          <button onClick={() => setIsEditing(false)} className="mt-4 text-gray-400">Cancel</button>
        </div>
      // ini buat tampilin detail event kalo lagi ngga edit
      ) : (
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-green-500 text-lg font-semibold">{event.title}</h2>
              <p className="text-sm text-gray-400">
                {new Date(event.start_time).toLocaleString()} — {new Date(event.end_time).toLocaleString()}
              </p>
            </div>
            { /* ini buat tombol edit, delete, dan download */}
            <div>
              <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-400 font-bold mr-2">
                [Edit]
              </button>
              <button onClick={handleDelete} className="text-red-500 hover:text-red-400 font-bold mr-2">
                [Delete]
              </button>
              <button onClick={handleDownload} className="text-green-500 hover:text-green-400 font-bold">
                [Download TXT]
              </button>
            </div>
          </div>
          { /* ini buat deskripsi event */}
          {event.description && (
            <p className="mt-3 text-sm text-gray-300 border-l-2 border-gray-700 pl-3">{event.description}</p>
          )}
          <button onClick={() => navigate('/')} className="mt-4 text-gray-400">Back to list</button>
        </div>
      )}
    </div>
  )
}
