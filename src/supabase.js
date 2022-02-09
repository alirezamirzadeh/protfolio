import {createClient} from '@supabase/supabase-js';


const supabaseUrl =process.env.VITE_PUBLIC_SUBSCRIBE_URL;
const supabaseAnonKey =process.env.VITE_PUBLIC_SUBSCRIBE_ANON_KEY;

export const supabase = createClient("https://kntpbswqgigekwtcnivn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI4OTI5OCwiZXhwIjoxOTU4ODY1Mjk4fQ.J4cA1tP5Ec8dhip9fUIlje_9s5jGDbdGsPMGM10Y_V4")
