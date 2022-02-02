import {createClient} from '@supabase/supabase-js';


const supabaseUrl =import.meta.env.VITEPUBLICSUBSCRIBEURL;
const supabaseAnonKey =import.meta.env.VITEPUBLICSUBSCRIBEANONKEY;

export const supabase = createClient(supabaseUrl,supabaseAnonKey)
