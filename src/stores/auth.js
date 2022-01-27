import {writable} from 'svelte/store';
import {supabase} from '../supabase.js';


export const auth = writable(null);


export function checkUser() {
    console.log(supabase.auth.user());
    auth.set(supabase.auth.user())
}

export async function signIn () {
    supabase.auth.signIn({
      provider: 'github',
    })
}
  