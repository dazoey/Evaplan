import { supabase } from './config/supabase.js'
import { validateEvent } from './utils/validateEvent.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query; // For /api/events/:id
  const { q, from_ts, to_ts, public: only_public } = req.query; // For search

  try {
    switch (req.method) {
      case 'GET':
        if (id) {
          // Get by ID
          const { data, error } = await supabase
            .from('events')
            .select('*')
            .eq('id', id)
            .single();
          if (error) {
            if (error.code === 'PGRST116') return res.status(404).json({ error: 'Event not found' }); // Not Found
            throw error;
          }
          return res.status(200).json(data);
        } else if (q || from_ts || to_ts) {
          // Search events (assuming `search_events` RPC exists as per original backend)
          const { data, error } = await supabase.rpc('search_events', {
            q: q || '',
            from_ts: from_ts || null,
            to_ts: to_ts || null,
            only_public: only_public === 'true', // Convert string 'true' to boolean
            _limit: 50,
            _offset: 0
          });
          if (error) throw error;
          return res.status(200).json(data);
        } else if (req.query.public === 'true') { // Added condition for public events
          // Get public events
          const { data, error } = await supabase
            .from('public_events') // Querying 'public_events' table
            .select('*')
            .order('start_time', { ascending: true });
          if (error) throw error;
          return res.status(200).json(data);
        } else {
          // Get all events
          const { data, error } = await supabase
            .from('events')
            .select('*')
            .order('start_time', { ascending: true });
          if (error) throw error;
          return res.status(200).json(data);
        }

      case 'POST':
        const { error: vError } = validateEvent(req.body);
        if (vError) return res.status(400).json({ error: vError.error });

        const { data: createData, error: createError } = await supabase
          .from('events')
          .insert([req.body])
          .select();
        if (createError) throw createError;
        return res.status(201).json(createData);

      case 'PATCH':
        if (!id) return res.status(400).json({ error: 'Event ID is required for update' });
        const { data: updateData, error: updateError } = await supabase
          .from('events')
          .update(req.body)
          .eq('id', id)
          .select();
        if (updateError) throw updateError;
        return res.status(200).json(updateData);

      case 'DELETE':
        if (!id) return res.status(400).json({ error: 'Event ID is required for delete' });
        const { data: deleteData, error: deleteError } = await supabase
          .from('events')
          .delete()
          .eq('id', id);
        if (deleteError) throw deleteError;
        return res.status(200).json({ message: 'Event deleted', data: deleteData });

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
