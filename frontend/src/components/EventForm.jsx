export default function EventForm({ form, setForm, onSubmit }) {
  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle = "w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-green-500";
  const labelStyle = "block text-sm text-gray-400 mb-1";

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-6">
      <div>
        <label htmlFor="title" className={labelStyle}>Title:</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handle}
          placeholder="Event Title"
          className={inputStyle}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className={labelStyle}>Description:</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handle}
          placeholder="Details about the event..."
          className={`${inputStyle} h-28`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="start_time" className={labelStyle}>Start Time:</label>
          <input
            id="start_time"
            type="datetime-local"
            name="start_time"
            value={form.start_time}
            onChange={handle}
            className={inputStyle}
            required
          />
        </div>
        <div>
          <label htmlFor="end_time" className={labelStyle}>End Time:</label>
          <input
            id="end_time"
            type="datetime-local"
            name="end_time"
            value={form.end_time}
            onChange={handle}
            className={inputStyle}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-gray-900 font-bold py-3 rounded hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Execute
      </button>
    </form>
  );
}
