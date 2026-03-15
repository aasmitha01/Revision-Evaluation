import { createClient } from '@supabase/supabase-js'
const supabase=createClient(
    process.env.SUPABASE_URL,
    Process.env.SUPABASE_URL
);
export default supabase;