---
title: تمام صفحه کردن
sum: برای استفاده sveltejs
image: svelte.png
url: full-screen
---
# {title}
### {sum}


```js
import {writable} from 'svelte/store'

export let icon = writable('max')

export function useFullscrren () {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();
        icon.set('min')

    } else if (document.exitFullscreen) {

        icon.set('max')
        document.exitFullscreen();
   
    }
}
```
[مثال کامل](https://github.com/alirezamirzadeh/crypto/blob/main/src/stores/fullscreen.js)
