<script context="module">
    const allPosts = import.meta.glob("./**/*.md");
    let body = [];
    for (let path in allPosts) {
     body.push(
      allPosts[path]().then( ({metadata}) => {
       return { path, metadata}
      })
     );  
    }

    export async function load() {
     const posts = await (await Promise.all(body)).slice(-3)
 
   return {
    props: {posts}
   }
 }
</script>


<script>

import Bio from "$lib/Bio.svelte";
import FeaturedPost from "$lib/FeaturedPost.svelte";
import FeaturedProject from "$lib/FeaturedProject.svelte";
import Telegram from "$lib/Telegram.svelte";
export let posts;
</script>
<main>
<Bio />
<FeaturedPost {posts}/>
<FeaturedProject />
<Telegram />
</main>

<style>
   
</style>