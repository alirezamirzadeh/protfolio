import {createClient} from '@supabase/supabase-js';


const supabaseUrl =process.env.VITEPUBLICSUBSCRIBEURL;
const supabaseAnonKey =process.env.VITEPUBLICSUBSCRIBEANONKEY;

export const supabase = createClient(supabaseUrl,supabaseAnonKey)
