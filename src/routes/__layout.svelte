<script>
import Footer from "$lib/Footer.svelte";
import Head from "$lib/Head.svelte";

</script>

<Head/>
 
<slot></slot>

<Footer />


<style>
    @font-face {
        font-family: Estedad;
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/Estedad.woff2") format("woff2");
      }
      * {
        margin: 0;
        padding: 0;
      }
      :global(body) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Estedad";
      background-color: rgba(249, 250, 251,1);
      color: #111;
      transition: background-color .5s;
      direction: rtl;
      max-width: 768px;
      height: 100%;
      margin-inline: auto;
      padding: 1rem;

      }
      :global(body.dark-mode) {
            background-color: #131516;
            color: #eee;
      }
      

      :global(a) {
        text-decoration: none;
        color: inherit;
      }

</style>