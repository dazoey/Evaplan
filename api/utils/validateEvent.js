export function validateEvent(body) {
  if (!body.title || !body.start_time || !body.end_time) {
    return { error: 'title, start_time, end_time wajib diisi' }
  }
  return { error: null }
}
