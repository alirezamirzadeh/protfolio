import {createClient} from '@supabase/supabase-js';


const supabaseUrl =import.meta.env.VITE_PUBLIC_SUBSCRIBE_URL;
const supabaseAnonKey =import.meta.env.VITE_PUBLIC_SUBSCRIBE_ANON_Key;


export const supabase = createClient(supabaseUrl,supabaseAnonKey)
