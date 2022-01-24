import {writable} from 'svelte/store'
import { browser } from "$app/env"

const initia = browser &&  localStorage.getItem('theme') || "light";

export const theme = writable(initia);



export const changeTheme = () =>{
  const darkMode = window.document.body.classList.toggle('dark-mode')
  const changeData = darkMode ? 'dark' : 'light';

    localStorage.setItem('theme',changeData)
    theme.set(changeData)
}