import { useState } from 'react'
import { createEvent } from '../api/eventApi'
import EventForm from '../components/EventForm'

export default function AddEvent() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: ''
  })
  //  ini fungsi buat ngirim data event ke backend
  const submit = async (e) => {
    e.preventDefault()
    // untuk fungsi validasi sederhana di frontend
    const trimmedTitle = form.title.trim()
    if (trimmedTitle === '') {
      alert('Title cannot be empty or just spaces')
      return
    }

    e.target.querySelector('button').innerText = 'Submitting...';
    await createEvent({ ...form, title: trimmedTitle })
    window.location.href = '/'
  }

  return (
    <>
      <h2 className="text-green-500 text-lg mb-4">$ add-event</h2>
      <EventForm form={form} setForm={setForm} onSubmit={submit} />
    </>
  )
}
