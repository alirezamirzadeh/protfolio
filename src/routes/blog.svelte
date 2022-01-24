<script>
import Search from "$lib/Search.svelte";

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
        <div class="article">
            <div class="nav__article">
                <h3>
                    زندگی ساده شده‌ی برنامه‌نویسی
                </h3>
                <span> 2 پسند کردن</span>
            </div>
            <p>            من توی کارم یاد گرفتم اگر فرایندی داره خیلی پیچیده میشه، احتمالا راه حل بهینه نیست و باید راجع‌بهش فکر کرد و حرف زد و عوضش کرد.
            </p>
        </div>
        <div class="article">
            <div class="nav__article">
                <h3>
                    زندگی ساده شده‌ی برنامه‌نویسی
                </h3>
                <span> 2 پسند کردن</span>
            </div>
            <p>            من توی کارم یاد گرفتم اگر فرایندی داره خیلی پیچیده میشه، احتمالا راه حل بهینه نیست و باید راجع‌بهش فکر کرد و حرف زد و عوضش کرد.
            </p>
        </div>
        <div class="article">
            <div class="nav__article">
                <h3>
                    زندگی ساده شده‌ی برنامه‌نویسی
                </h3>
                <span> 2 پسند کردن</span>
            </div>
            <p>            من توی کارم یاد گرفتم اگر فرایندی داره خیلی پیچیده میشه، احتمالا راه حل بهینه نیست و باید راجع‌بهش فکر کرد و حرف زد و عوضش کرد.
            </p>
        </div>
        <div class="article">
            <div class="nav__article">
                <h3>
                    زندگی ساده شده‌ی برنامه‌نویسی
                </h3>
                <span> 2 پسند کردن</span>
            </div>
            <p>            من توی کارم یاد گرفتم اگر فرایندی داره خیلی پیچیده میشه، احتمالا راه حل بهینه نیست و باید راجع‌بهش فکر کرد و حرف زد و عوضش کرد.
            </p>
        </div>
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

    .article {
        margin-bottom: 3rem;
    }

    .box_articles {
        margin-top: 1rem;
    }
</style>