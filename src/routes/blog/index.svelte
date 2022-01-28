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
export let posts;
let value ='';

let filterBlog= ''
 $: filterBlog = posts.filter(item => item.metadata.title.toLowerCase().includes(value.toLowerCase()))

</script>



<main>
    <h2>
        وبلاگ
    </h2>
    <p>
        شاید بشه گفت هر کسی که برنامه‌نویس شد یه روزی با یه نخ نامرئی وصل شد به یه عالمه معما که هرچی حلشون میکردی و کنار هم میذاشتی تموم نمیشد
    </p>
    <div class="search">
        <input bind:value type="text" placeholder="جستجو مقاله">
    <img src="/images/search.svg" alt="">
    </div>
    <h2>
        تمام مقالات
    </h2>

    <div class="box_articles">
      {#if filterBlog.length > 0}  
        {#each  filterBlog as {path, metadata: {title,sum}} }
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
    
        {:else}

        <h3>مقاله ای وجود نداره</h3>
    {/if}
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

    .search {
        position: relative;
        width: 100%;
    }
    input {
        margin: 1.5rem 0 3rem 0;
        width: 96%;
        height: 2.5rem;
        border-radius: .5rem;
        font-family: inherit;
        padding-right: 1rem;
        border: 0;
        outline: none;
        font-size: .95rem;
        border: 3px solid rgba(0, 0, 0, 0.05);
        color: inherit;
    }

    input:focus{
        border:3px solid #000;

    }

    :global(body.dark-mode) input:focus {
        border:3px solid #fff;
    }


    :global(body.dark-mode) input {
        background-color: rgba(255, 255, 255, .05);
    }

    img {
        position: absolute;
        top: 2.3rem;
        left: 1rem;
        filter: invert(78%) sepia(38%) saturate(85%) hue-rotate(06deg) brightness(83%) contrast(100%);

    }

    @media (max-width: 700px) {
        .nav__article{
            flex-direction: column;
            align-items: flex-start;
        }
        span {
            font-size: .8rem;
        }
    }

    @media (max-width: 380px) {

        input {
            width: 92%;
        }
    }
    
</style>