export default function EventForm({ form, setForm, onSubmit }) {
  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={handle}
        placeholder="Title"
        className="w-full border border-black/20 p-3 rounded"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handle}
        placeholder="Description (optional)"
        className="w-full border border-black/20 p-3 rounded h-28"
      />

      <div>
        <label className="text-sm">Start Time</label>
        <input
          type="datetime-local"
          name="start_time"
          value={form.start_time}
          onChange={handle}
          className="w-full border border-black/20 p-3 rounded mt-1"
        />
      </div>

      <div>
        <label className="text-sm">End Time</label>
        <input
          type="datetime-local"
          name="end_time"
          value={form.end_time}
          onChange={handle}
          className="w-full border border-black/20 p-3 rounded mt-1"
        />
      </div>

      <button
        type="submit"
        className="w-full border border-black font-medium py-3 rounded hover:bg-black hover:text-white transition"
      >
        Save Event
      </button>
    </form>
  )
}
