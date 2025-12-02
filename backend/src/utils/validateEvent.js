export function validateEvent(body) {
  // simple validation buat event
  if (!body.title || !body.start_time || !body.end_time) {
    return { error: 'title, start_time, end_time wajib diisi' }
  }
  // validasi format tanggal
  return { error: null }
}
