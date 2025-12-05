export function validateEvent(body) {
  // simple validation buat event
  if (!body.title || !body.start_time || !body.end_time) {
    return { error: 'title, start_time, end_time wajib diisi' }
  }
  // validasi kosong atau hanya spasi
  if (body.title.trim() === '') {
    return { error: 'title tidak boleh kosong atau hanya berisi spasi' }
  }
  if (body.description && body.description.trim() === '') {
    return { error: 'description tidak boleh hanya berisi spasi' }
  }
  // validasi format tanggal
  return { error: null }
}
