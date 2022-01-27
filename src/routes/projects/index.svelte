<script context="module">
    const allProject = import.meta.glob("../../../data/projects/*.md");
    console.log(allProject);

    let project = [];


    for (let path in allProject) {
     project.push(
      allProject[path]().then( ({metadata}) => {
       return { path, metadata}
      })
     );  
    }


    export async function load() {
      const projects = await (await Promise.all(project))
      return {
        props: {projects}
      }
    }
</script>

<script>
    export let projects;
    console.log(projects[0].path.replace(".md","").replace("/data/projects","").replace("../../../",""));
</script>


<main>
    <h2>پروژه ها</h2>
    <section>
        {#each projects as {path, metadata: {tags,image,url}} (path)}
        <a href={url} class="project">
            <img src="/images/{image}" alt=""  >
            <div class="tags">
                {#each tags.split(' ') as tag}
                     <span class="tag">{tag}</span>
                {/each}
            </div>
        </a>
        {/each}
      
    </section>
</main>

<style>

  
    h2 {
        font-size: 28px;
        font-weight: 600;
        margin: 0;
        margin-top: 3rem;
    }
    section {

        display: grid;
        grid-gap: 1.25rem;
        position: relative;
        margin-top: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        
        
    }


    .project {
        transition: .3s all;
        overflow: hidden;
        position: relative;
        border-radius: .75rem;


    }

    .project:hover {
        transform: scale(1.025);
    }
   
    .tags {
        transform: translateX(150%);
        transition: 1s ease-in-out  ;
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        position: absolute;
        z-index: 11;
        top:4rem;
        right: 2rem;
        cursor: pointer;
        pointer-events: none;

        
    }
    .tag {
        background: rgba(200, 200, 200, 1);
        padding: .25rem .5rem;
        border-radius: .25rem;
        color: #000;

    }

    .project:hover .tags{
    transform: translateX(0);
    }

    img {
        width: 100%;
        min-height: 230px;
        display: table-cell;
        border-radius: .75rem;
        margin: 0;
        padding: 0;
        cursor: pointer;
        background-size:cover;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);

    }

    img:hover {
        filter: blur(2px);
        transition: 2s all;
        transform: scale(1.2);
        z-index: 2;
    }
</style>