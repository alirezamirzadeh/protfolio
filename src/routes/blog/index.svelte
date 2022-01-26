<script context="module">
    const allPosts = import.meta.glob("./*.md");
    let body = [];
    for (let path in allPosts) {
     body.push(
      allPosts[path]().then( ({metadata}) => {
       return { path, metadata}
      })
     );  
    }

    export async function load() {
     const posts = await Promise.all(body);
   return {
    props: {posts}
   }
 }
</script>

<script>
import Search from "$lib/Search.svelte";
export let posts;

</script>



<main>
    <h2>
        وبلاگ
    </h2>
    <p>
        شاید بشه گفت هر کسی که برنامه‌نویس شد یه روزی با یه نخ نامرئی وصل شد به یه عالمه معما که هرچی حلشون میکردی و کنار هم میذاشتی تموم نمیشد
    </p>
    <Search />
    <h2>
        تمام مقالات
    </h2>

    <div class="box_articles">
        {#each  posts as {path, metadata: {title,sum}} }
            <a href={`/blog/${path.replace(".md","").replace("/data","")}`} class="article">
                <div class="nav__article">
                    <h3>
                    {title} 
                    </h3>
                    <span> 0 پسند کردن</span>
                </div>
            <p>{sum}</p>
            </a>
       {/each}
    </div>
</main>

<style>
    main {
        margin-top: 3rem;
    }
    h2 {
        font-size: 28px;
        font-weight: 600;
        margin: 0;
    }

    p {
        opacity: .6;
        margin-top: .5rem;
    }

    h3 {
        margin: 0;
    }
    span {
        opacity: .7;
    }

    .nav__article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }


 

    .box_articles {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
</style>