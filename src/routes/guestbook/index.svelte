<script>

import { bubble } from "svelte/internal";

</script>

<main>
    <p class="title">
        دفترچه مهمان
    </p>
    <p class="body">
        خب سلام، امیدوارم که حالتون خوب باشه و همچین چیز های مرسومی، دو هفته پیش یک پادکستی منتشر کردم درمورد مفهوم MVP ، ایده این بود

    </p>
    <div class="box__send">
        <p class="title">وقت نوشتنه :))</p>
        <p class="body">
            برای بازدیدکنندگان آینده سایت من پیامی به اشتراک بگذارید.

        </p>
        <div class="box__input">
            <input class="box__sub" placeholder="پیام شما ...">
            <button>عضویت</button>
        </div>
        <p class="information">اطلاعات شما فقط برای نمایش نام شما استفاده می شود</p>
    </div>

    <section>
        
        <div class="message">
            <p class="text">وب سایت شما واقعا عالی است!</p>
            <div class="box__inf">
                <span class="name">علیرضا</span> <span class="fun">|</span>
                <span class="date">{new Date().toLocaleDateString('fa-IR')}</span>
            </div>
        </div>
        <div class="message">
            <p class="text">Hi, we need content about SvelteKit :)))))))))))))
            </p>
            <div class="box__inf">
                <span class="name">مهدیار</span> <span class="fun">|</span>
                <span class="date">{new Date().toLocaleDateString('fa-IR')}</span>
            </div>
        </div>
        <div class="message">
            <p class="text">سلام! وب سایت دوست داشتنی، چند سال پیش من سعی کردم چیزی که در حال پخش است را پیاده سازی کنم، اکنون که آن را در وب سایت شما می بینم، تمایل دارم به وب سایت خود نیز اضافه کنم</p>
            <div class="box__inf">
                <span class="name">رضا</span> <span class="fun">|</span>
                <span class="date">{new Date().toLocaleDateString('fa-IR')}</span>
            </div>
        </div>
        <div class="message">
            <p class="text">وب سایت شما واقعا عالی است!</p>
            <div class="box__inf">
                <span class="name">مازیار</span> <span class="fun">|</span>
                <span class="date">{new Date().toLocaleDateString('fa-IR')}</span>
            </div>
        </div>
        <div class="message">
            <p class="text">کار شگفت انگیز!
            </p>
            <div class="box__inf">
                <span class="name">عرفان مولا </span> <span class="fun">|</span>
                <span class="date">{new Date().toLocaleDateString('fa-IR')}</span>
            </div>
        </div>
    </section>
    
</main>





<style>
    main {
        margin-top: 3rem;
    }
    .box__send {
        background-color: rgb(239 246 255);
        padding: 1rem 2rem;
        border-radius: .25rem;
        margin-top: 2.5rem;
        box-shadow: 0 .125rem .5rem rgba(0, 0, 0, 0.05);
        border: 2px solid rgba(0, 0, 0, .1);
        
    }
    :global(body.dark-mode) .box__send {
        background-color: rgb(13 42 148/16%);

    }
    .title {
        font-size: 28px;
        font-weight: 600;
        opacity: .95;
        margin: 0;
    }
    .body {
        opacity: .75;
        margin: .5rem 0 0 0;

    }


    :global(body.dark-mode) .box__sub {
        background-color: rgb(34 34 34/1);

    }

    button {
        background-color: rgb(235 235 235/1);
        width: 150px;
        border-radius: .25rem;
        border: 0;
        color: inherit;
        font-family: inherit;
        height: 80%;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
        padding-top: .2rem;
        position: absolute;
        top: 4px;
        left: .3rem;
    }
    :global(body.dark-mode) button {
        background-color: rgb(51 51 51/1);
    }


    .information {
        opacity: .65;
        margin-top: 1rem;
        font-size: .95rem;
    }
   
    .box__input {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        position: relative;
    }

    input {
        height: 3rem;
        border-radius: .5rem;
        border: 0;
        padding-right: 1rem;
        color: inherit;
        font-family: inherit;
        font-size: .9rem;
    }

    section {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem
    }
    .text {
        font-size: 1.1rem;
        opacity: .9;
        margin: 0;
    }
    .box__inf {
        opacity: .5;
        display: flex;
        gap: 2rem;
        margin-top: .5rem;
        font-size: .95rem;
    }

    .date {
        opacity: .8;
    }

    .fun {
        opacity: .4;
    }
  
</style>