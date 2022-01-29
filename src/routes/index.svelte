<script context="module">
    const allPosts = import.meta.glob("./blog/*.md");
    const allProject = import.meta.glob("../../data/projects/*.md");

    let body = [];
    let project = [];
    for (let path in allPosts) {
     body.push(
      allPosts[path]().then( ({metadata}) => {
       return { path, metadata}
      })
     );  
    }

    for (let path in allProject) {
     project.push(
      allProject[path]().then( ({metadata}) => {
       return { path, metadata}
      })
     );  
    }


    export async function load() {
     const posts = await (await Promise.all(body)).slice(-3)
      const projects = await (await Promise.all(project))
      return {
        props: {posts,projects}
      }
    }
</script>


<script>

import Bio from "$lib/Bio.svelte";
import FeaturedPost from "$lib/FeaturedPost.svelte";
import FeaturedProject from "$lib/FeaturedProject.svelte";
import Telegram from "$lib/Telegram.svelte";
export let posts;
export let projects;

</script>
<main>
<Bio />
<FeaturedPost {posts}/>
<FeaturedProject {projects} />
<Telegram />
</main>

<style>
   
</style>