
<main>
    <h2>
        تکه کدها
    </h2>
    <h3 class="">
        دنیای توسعه سمت کاربر یا Front-End پر از تکاپو و چالش‌های مختلف است. میزان ابزارهای جدیدی که در این بخش از توسعه اپلیکیشن‌ها منتشر می‌شود بسیار بیشتر از هر عرصه دیگری‌ست. 
    </h3>
    <section>
        <div class="snippet">
            <img src="/images/light.svg" alt="">
            <p class="title">جستجو</p>
            <p class="body">برای استفاده svelte</p>
        </div>
        <div class="snippet">
            <img src="/images/dark.svg" alt="">
            <p class="title">جستجو</p>
            <p class="body">برای استفاده svelte</p>
        </div>
        <div class="snippet">
            <img src="/images/GitHub.svg" alt="">
            <p class="title">جستجو</p>
            <p class="body">برای استفاده svelte</p>
        </div>
        <div class="snippet">
            <img src="favicon.png" alt="">
            <p class="title">جستجو</p>
            <p class="body">برای استفاده svelte</p>
        </div>
    </section>
</main>

<style>
    h2 {
        margin: 2rem 0 1rem 0;
        font-size: 28px;
        font-weight: 600;
    }

    h3 {
        font-weight: 300;
        font-size: 1rem;
        opacity: .7;
        margin: 0;
    }

    section{
        display: grid;
        grid-gap: 1.25rem;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        margin-top: 3rem;
    }
    .snippet {
        border:3px solid rgba(34, 34, 34,.1);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .05);
        padding: 1rem;
        border-radius: .5rem;
        background-color: #fff;
        cursor: pointer;
        transition: .5s all;
    }

    .snippet:hover {
        background-color: rgba(150, 150, 150, .05);
    }

    :global(body.dark-mode) .snippet:hover {
        background-color: rgba(255, 255, 255, .025);

    }

    :global(body.dark-mode) .snippet {
        background-color: inherit;
        border:3px solid rgb(34, 34, 34,.6);

    }

    img {
        background-color: rgba(255, 255, 255,.95);
        padding: .25rem;
        border-radius: 50%;
        width: 2rem;
        background-position: center;
        background-size: contain;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        margin: .25rem 0;
    }
    .body {
        font-size: 1rem;
        opacity: .7;

    }

</style>