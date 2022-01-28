<script>
import { browser } from "$app/env";

      import { page } from "$app/stores";

	let navOpen = false;

    $: if(navOpen && browser) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";

    }

	
	function handleNav() {
		navOpen = !navOpen;
	}

    let menus = [
        {name: "خانه",url: "/"},
        {name: "دفترچه مهمان",url: "/guestbook"},
        {name: "بلاگ",url: "/blog"},
        {name: "پروژه ها",url: "/projects"},
        {name: "تکه کد",url: "/snippets"},
        {name: "ابزارها",url: "/uses"},
        {name: "درباره من",url: "/about"},

    ]

    function handleOnClick() {
        navOpen = false;
    }



</script>

    <div  class="sidenav" class:open={navOpen}>
        
        {#each menus as menu (menu.name)}
                    
        <a on:click={handleOnClick} class:active={$page.url.pathname === menu.url} href={menu.url} >{menu.name}</a>

        {/each}
    </div>

    
    <div class="container" class:change={navOpen} on:click={handleNav}>
		<div class="block bar1"></div>
		<div class="block bar2"></div>
	</div>




<style>


.container {
	position: absolute;
    display: inline-block;
    cursor: pointer;
    z-index: 10;
}

.block {
  width: 1.25rem;
  height: 2px;
  background-color: #131516 ;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: .125rem;
}

:global(body.dark-mode)  .block {
    background-color: #131516 ;

}

:global(body.dark-mode) .block {
    background-color: rgba(249, 250, 251,1);
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-2px, 1px);
  transform: rotate(-45deg) translate(-2px, 1px);
}


.change .bar2{
  -webkit-transform: rotate(45deg) translate(-4px, -4px);
  transform: rotate(45deg) translate(-4px, -4px);
}

a:nth-child(1) {
    margin-top: 3rem;
}

.sidenav {
  height: 100%; 
  width: 0; 
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(249, 250, 251,1);
  overflow-y: scroll;
  transition: 0.5s all;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
}

:global(body.dark-mode)  .sidenav {
    background-color: #131516 ;

}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 2px solid rgba(200, 200, 234, .05);
  padding: 1rem 0 ;
  color: inherit;
  display: block;
  transition: 0.3s;
  margin: 0 2rem;
  text-align: start;
}

a:nth-child(1){
    margin-top: 4.75rem;
}
.sidenav a:hover {
  color: #777;
}

:global(body.dark-mode)  .sidenav {
  color: #f1f1f1;

}

/* .sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
} */


	
.open {
	width: 100%;
    
}	


</style>