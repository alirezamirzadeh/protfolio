import {writable} from 'svelte/store';
import {supabase} from '../supabase.js';


export const auth = writable(supabase.auth.user() || null);


export function checkUser() {
    auth.set(supabase.auth.user())
}

export async function signIn () {
  await auth.set(true)
  await supabase.auth.signIn({
      provider: 'github',
    })
    checkUser()
}
  