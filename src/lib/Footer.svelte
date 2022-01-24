<hr>
<footer>
    <div class="menu">
        <h3>خانه</h3>
        <h3>درباره من</h3>
    </div>
    <div class="menu">
        <h3>گیتهاب</h3>
        <h3>تلگرام</h3>
        <h3>دریبل</h3>
    </div>
    <div class="menu">
        <h3>ابزارها</h3>
        <h3>دفترچه مهمان</h3>
        <h3>تکه کد</h3>
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
    h3 {
        font-weight: 300;
        opacity: .5;
        transition: .3s all ;
        cursor: pointer;
        font-size: 1rem;
        text-align: right;
        width: 100%;
    }
    h3:hover {
        color: #666;
        opacity: 1;
    }
</style>