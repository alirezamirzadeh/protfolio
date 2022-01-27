<hr>
<footer>
    <div class="menu">
        <a href="/">خانه</a>
        <a href="/about">درباره من</a>
    </div>
    <div class="menu">
        <a href="https://github.com/alirezamirzadeh" target="_blank">گیتهاب</a>
        <a href="https://t.me/amooalireza" target="_blank">تلگرام</a>
        <a href="https://dribbble.com/rexalirz72" target="_blank">دریبل</a>
    </div>
    <div class="menu">
        <a href="/uses">ابزارها</a>
        <a href="/guestbook">دفترچه مهمان</a>
        <a href="/snippets">تکه کد</a>
    </div>

</footer>



<style>

    hr {
        opacity: .2;
        margin-top: 5rem;
         height: 1px; 
         border: 0;
        background-color: #999;

    }
    footer {
        margin-top: 1rem;
        grid-template-columns: repeat(3,minmax(0,1fr));
        display: grid;
    }
    a {
        font-weight: 300;
        opacity: .5;
        transition: .3s all ;
        cursor: pointer;
        font-size: 1rem;
        text-align: right;
        width: 100%;
    }
    a:hover {
        color: #333;
        opacity: 1;
    }

    .menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>