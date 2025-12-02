import { supabase } from '../config/supabase.js'
// logika buat ngurusin operasi terkait event di database
export const EventService = {
  async getAll() {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('start_time', { ascending: true })
    return { data, error }
  },
// ini fungsi buat nampilin event yang bersifat public
  async getPublic() {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_public', true)
      .order('start_time', { ascending: true })
    return { data, error }
  },
// ini fungsi buat nampilin detail event berdasarkan id (keknya dipake di EventDetail.jsx)
  async getById(id) {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },
// ini fungsi buat nambahin event baru (harusnya dipake di admin panel nanti)
  async create(event) {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
    return { data, error }
  },
// ini fungsi buat ngupdate data event
  async update(id, event) {
    const { data, error } = await supabase
      .from('events')
      .update(event)
      .eq('id', id)
      .select()
    return { data, error }
  },
// ini fungsi buat ngapus event
  async remove(id) {
    const { data, error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)
    return { data, error }
  },
// ini fungsi buat nyari event berdasarkan query
  async search(params) {
    const { q, from_ts, to_ts } = params
    // panggil stored procedure search_events di database
    const { data, error } = await supabase.rpc('search_events', {
      q,
      from_ts,
      to_ts,
      only_public: true,
      _limit: 50,
      _offset: 0
    })

    return { data, error }
  }
}
