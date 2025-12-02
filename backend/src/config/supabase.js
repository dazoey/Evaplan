import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
// untuk akses supabase dari backend
dotenv.config()

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)
