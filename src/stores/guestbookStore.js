import {writable} from 'svelte/store';
import {supabase} from '../supabase.js';



export const messages = writable(null);


export const loadMessages= async () => {
    const {data, error} = await supabase.from('guestbook').select();
    if(error) {
        return console.error(error);
    }
    messages.set(data);
}
loadMessages();


export const addMessage = async (message,username) => {
    const {data, error} = await supabase.from('guestbook').insert([{ username,message}]);
    
    if(error) {
        return console.error(error);
    }

    messages.update(cur => [...cur, data[0]]);
};

