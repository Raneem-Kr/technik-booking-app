import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjltcsytpqooyjhwpztp.supabase.co'

const supabaseAnonKey = 'sb_publishable_9xE1WsuZ3V1PgZcTMwfTAA_HtxA4FB6'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)