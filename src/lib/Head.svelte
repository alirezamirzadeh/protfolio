<script>
      import { page } from "$app/stores";
        import {theme,changeTheme} from '../stores/theme';
        import {onMount} from 'svelte';
    onMount (() => {
        if ($theme === 'dark') {
            changeTheme()
        }
    })

        
    let menus = [
        {name: "خانه",url: "/"},
        {name: "بلاگ",url: "/blog"},
        {name: "پروژه ها",url: "/projects"},
        {name: "تکه کد",url: "/snippets"},
    ]

</script>

<header>
    <nav>
            {#each menus as menu (menu.name)}
        
                <a {...$$props} class:active={$page.url.pathname === menu.url} href={menu.url} >{menu.name}</a>
             
            {/each}
    </nav>
    <img on:click={changeTheme} src="/images/{$theme}.svg" alt="">
</header>



<style>

    header {
        display: flex;
        width: 100%;
        margin-inline: auto;
        justify-content: space-between;
        margin-top: 2rem;
    }    

    nav {
        display: flex;
        align-items: center;
  
    }
    a {
        color: rgba(110, 110, 110, 1); 
         text-decoration: inherit; 
         margin-left: 2rem;
         font-size: 19px;
         font-weight: 400;
         padding: .25rem .5rem ;
        border-radius: .5rem;
        transition: .3s all;

    }

    a:hover {
        background-color: rgba(110, 110, 110, .1);
    }


    .active {
        font-weight: 600;
        color: inherit;
    }
      img {
            color: white;
            border: none;
            border-radius: .5rem;
            padding: 0.5rem;
            text-transform: uppercase;
            cursor: pointer;
            background-color: rgba(153, 153, 153, .3);
            box-shadow: 0 .5rem 1rem (0,0,0,0.1);
            border: 3px solid transparent;
            transition: all .3s;
            background-clip: padding-box;
            height: 21px;
    }
        :global(body.dark-mode) img {
            filter: invert(98%) sepia(38%) saturate(85%) hue-rotate(06deg) brightness(83%) contrast(100%);
            background-color: rgba(82, 88, 92, 0.3);
        }

    img:hover {
        border: 3px solid rgb(153, 153, 153);
    }    
</style>

