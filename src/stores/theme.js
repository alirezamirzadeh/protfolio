import {writable} from 'svelte/store'
import { browser } from "$app/env"

const initia = browser &&  localStorage.getItem('theme') || "dark";

export const theme = writable(initia);



export const changeTheme = () =>{
 if (browser) {
  const darkMode = window.document.body.classList.toggle('dark-mode')
  const changeData = darkMode ? 'dark' : 'light';

    localStorage.setItem('theme',changeData)
    theme.set(changeData)
 }
}