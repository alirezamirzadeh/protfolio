<script>
    import uses from '../../../data/uses.js';
    
    
</script>

<main>
    <p class="title">ابزارهای من</p>
    <p class="body">
            خب سلام، امیدوارم که حالتون خوب باشه و همچین چیز های مرسومی، این ها لیست ابزارهایی که در طول روز استفاده میکنم
            گفتم شاید کسی دوست داره بدونه
        </p>
    <ul>
        {#each uses as use (use.key)}
             <li>{use.key}:   &nbsp {use.value} </li>
        {/each}
    </ul>
</main>



<style>
    main {
        margin-top: 2rem;
    }

    .title {
        font-size: 28px;
        font-weight: 600;
    }

    .body {
        opacity: .7;
        margin-top: 1rem;
    }

    ul {
        margin: 2rem 0 0 0;
        padding: 1rem;
    }

    li {
        margin-bottom: 1rem;
    }
</style>