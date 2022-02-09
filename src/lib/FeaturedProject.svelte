<script>
    export let projects
</script>

<section>
    <h2>نمونه کارها</h2>
    <div class="projects">
        {#each projects as {path,metadata: {title,body,tags,url,github}} (path)}
        <a href={url} target="_blank" class="project__box">
            <div class="project__nav">
               
                <img src="/images/Folder.svg" alt="" width="40" height="40">
                <div class="nav__right">
                    {#if github }
                    <a href={github} target="_blank" aria-label="Github">
                        <img src="/images/GitHub.svg" alt="" width="24" height="24">
                    </a>
                    {/if}
                    <img class="lickimage" src="/images/link.svg" alt="" width="24" height="24">
                </div>
            </div>
            <p class="title">{title}</p>
            <p class="body">{body}</p>
            <div class="box__tag">
                {#each tags.split(' ') as tag}
                <span class="tag">{tag}</span> 

                {/each}
            </div>
        </a>
        {/each}
     
    </div>
    <a href="/projects" class="all__posts"> تمام نمونه کارها <span class="larr">&larr</span></a>

</section>



<style>
    h2 {
        font-size: 28px;
        font-weight: 900;
    }
    section {
        margin-top: 3rem;
    }
    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
  
     
    }
    img {
        filter: invert(0%) sepia(0%) saturate(1333%) hue-rotate(318deg) brightness(0%) contrast(20%);
    }

    :global(body.dark-mode) img {
        filter: none;
    }

   


    .project__box {
        flex: 1 1 280px;
        height: 276px;     
        padding: 2rem;
        background-color: #fff;
        border-radius: 1rem;
        cursor: pointer;
        transition: all .3s;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .1);
        position: relative;
   

    }

  

    :global(body.dark-mode) .project__box{
        background-color: inherit;
        border:4px solid rgb(34, 34, 34,1);
    }

    .project__box:hover {
        transform: translateY(-.5rem);

    }
    .project__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .nav__right  {
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .title {
        font-size: 1.125rem;
        font-weight: 600;
        opacity: .9;
        margin-bottom: 1rem;
    }
    .body {
        opacity: .8;
        margin-bottom: 1.5rem;

    }

    .box__tag {
        display: flex;
        gap: 1rem;
        opacity: .5;
        bottom: 2rem;
        position: absolute;
        flex-wrap: wrap;

    }

    .all__posts {
        color: #666;
        margin-top: 1.5rem;
        font-size: 1.15rem;
        cursor: pointer;

    }

    .larr {
        font-size: 2rem;
        font-weight: bold;
    }
    .all__posts:hover {
        color: inherit;
        opacity: .8;
    }

    .lickimage {
       transform: translateY(-4px);
    }    

    @media (max-width:600px) {
        .project__box {
            height: 100%;
            padding: 1.5rem ;
        }
        .box__tag {
            margin-top: 3rem !important;
            position: relative;
            bottom: 0;
        }

      
    }
</style>