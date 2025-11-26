import { useState } from 'react'
import { createEvent } from '../api/eventApi'
import EventForm from '../components/EventForm'
import Header from '../components/Header'

export default function AddEvent() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    await createEvent(form)
    window.location.href = '/'
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Add New Event</h2>
        <EventForm form={form} setForm={setForm} onSubmit={submit} />
      </div>
    </>
  )
}
