<script>
import Footer from "$lib/Footer.svelte";
import Head from "$lib/Head.svelte";

</script>


<main>
    <p class="title">صفحه ای یافت نشد</p>
    <p class="code">404</p>
</main>




<style>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    opacity: .7;
}
.title {
    font-size: 2rem;
    font-weight: bold;
}

.code {
    font-size: 2.5rem;
    font-weight: 600;
}
</style>