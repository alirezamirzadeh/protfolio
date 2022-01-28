<section>
    <p class="title">عضو شدن داخل کانال تلگرام</p>
    <p class="body">
        با عضویت در کانال تلگرام من از جالب ترین مطالبی که مشاهده میکنم باخبر میشید
    </p>
    <div class="box__sub">
        <span class="id">alirzaemirzadeh@</span>
        <a href="https://t.me/alirezamirzadeh">عضویت</a>
    </div>
    <p class="vpn">برای عضویت داخل کانال، روشن بودن VPN ضروری است</p>
</section>



<style>
    section {
        background-color: rgb(239 246 255);
        padding: .5rem 2rem;
        border-radius: .25rem;
        margin-top: 4rem;
        box-shadow: 0 .125rem .5rem rgba(0, 0, 0, 0.05);
        border: 2px solid rgba(0, 0, 0, .1);
        
    }
    :global(body.dark-mode) section {
        background-color: rgb(13 42 148/16%);

    }
    .title {
        font-size: 20px;
        font-weight: 600;
        opacity: .95;
    }
    .body {
        margin-top: .25rem;
        opacity: .75;
    }
    .box__sub {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: .5rem;
        background-color: #fff;
        border-radius: .5rem;
        margin-top: 1rem;
        height: 36px;
        gap: .25rem;
        align-items: center;
    }

    :global(body.dark-mode) .box__sub {
        background-color: rgb(34 34 34/1);

    }

    @media (max-width:500) {
        a {
            width: 100%;
        }

        .id {
            font-size: 12px;
        }
    }

    a {
        background-color: rgb(235 235 235/1);
        width: 150px;
        border-radius: .25rem;
        border: 0;
        color: inherit;
        font-family: inherit;
        height: 100%;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
        padding-top: .2rem;
    }
    :global(body.dark-mode) a {
        background-color: rgb(51 51 51/1);
    }
    .id {
        margin-right: .25rem;
        opacity: .5;
    }

    .vpn {
        opacity: .65;
        margin-top: 1rem;
        font-size: .95rem;
    }
   
</style>