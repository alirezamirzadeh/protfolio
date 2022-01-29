import {writable} from 'svelte/store';
import {supabase} from '../supabase.js';



export const messages = writable(null);


export const loadTodos = async () => {
    const {data, error} = await supabase.from('guestbook').select();
    if(error) {
        return console.error(error);
    }
    messages.set(data);
}
loadTodos();


export const addTodo = async (message,email) => {
    const {data, error} = await supabase.from('guestbook').insert([{ email,message}]);
    
    if(error) {
        return console.error(error);
    }

    messages.update(cur => [...cur, data[0]]);
};

