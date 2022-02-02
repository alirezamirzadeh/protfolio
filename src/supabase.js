import {createClient} from '@supabase/supabase-js';


const supabaseUrl =process.env.VITE_PUBLIC_SUBSCRIBE_URL
;
const supabaseAnonKey =process.env.VITE_PUBLIC_SUBSCRIBE_ANON_KEY;

export const supabase = createClient(supabaseUrl,supabaseAnonKey)
