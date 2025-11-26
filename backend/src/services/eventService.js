import { supabase } from '../config/supabase.js'

export const EventService = {
  async getAll() {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('start_time', { ascending: true })
    return { data, error }
  },

  async getPublic() {
    const { data, error } = await supabase
      .from('public_events')
      .select('*')
      .order('start_time', { ascending: true })
    return { data, error }
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  async create(event) {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
    return { data, error }
  },

  async update(id, event) {
    const { data, error } = await supabase
      .from('events')
      .update(event)
      .eq('id', id)
      .select()
    return { data, error }
  },

  async remove(id) {
    const { data, error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)
    return { data, error }
  },

  async search(params) {
    const { q, from_ts, to_ts } = params

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
