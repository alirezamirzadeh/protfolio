


<main>
    <h2>پروژه ها</h2>
    <section>
        <div class="project">
            <img src="/images/protfolio.jpg" alt=""  >
            <div class="tags">
                <span class="tag">SvelteKit</span>
                <span class="tag">CSS</span>
                <span class="tag">HTML</span>
                <span class="tag">SSR</span>
                <span class="tag">Animation</span>

            </div>
        </div>
        <div class="project">
            <img src="/images/protfolio.jpg" alt="" >
            <div class="tags">
                <span class="tag">SvelteKit</span>
                <span class="tag">CSS</span>
                <span class="tag">HTML</span>
                <span class="tag">SSR</span>
                <span class="tag">Animation</span>

            </div>
        </div>
        <div class="project">
            <img src="/images/protfolio.jpg" alt="" >
            <div class="tags">
                <span class="tag">SvelteKit</span>
                <span class="tag">CSS</span>
                <span class="tag">HTML</span>
                <span class="tag">SSR</span>
                <span class="tag">Animation</span>

            </div>
        </div>
        <div class="project">
            <img src="/images/pish.jpg" alt=""  >
            <div class="tags">
                <span class="tag">SvelteKit</span>
                <span class="tag">CSS</span>
                <span class="tag">HTML</span>
                <span class="tag">SSR</span>
                <span class="tag">Animation</span>

            </div>
        </div>
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