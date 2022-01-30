<script>
  import Footer from "$lib/Footer.svelte";
  import Head from "$lib/Head.svelte";
  import {onMount} from 'svelte';
  import {checkUser} from '../stores/auth';
  import PageTransition from "$lib/PageTransition.svelte";
  
  export let key
  onMount(checkUser)
  
</script>
<script context="module">
  export const load = async ({ url }) => ({
   
    props: {
      key: url.href,
      
    },
  })
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href="favicon.png" />
</svelte:head>

<Head/>
 
<PageTransition refresh={key}>
    <slot></slot>
</PageTransition>

<Footer />

<style>
    @font-face {
        font-family: vazir;
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/vazir.woff2") format("woff2");
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

      }
      :global(body) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "vazir";
      background-color: rgba(249, 250, 251,1);
      color: #111;
      transition: background-color .5s;
      direction: rtl;
      max-width: 768px;
      height: 100%;
      margin-inline: auto;
      padding: 1rem;
      overflow-x: hidden;

 

      }
      :global(body.dark-mode) {
            background-color: #131516;
            color: #eee;
      }

      @media (max-width: 600px) {
        :global(body) { padding: .5rem 2rem }
      }
      @media (max-width: 380px) {
        :global(body) { padding: 1rem }
      }
      
      

      :global(a) {
        text-decoration: none;
        color: inherit;
      }
      :global(.language-js) {
        direction: ltr !important;
        overflow: auto;
      }
      :global(.language-js > *) {
        color: rgb(34 197 94);

      }

      :global(.keyword) {
        color: rgb(50 20 220);

      }
      :global(.punctuation) {
        color: rgb(59 130 246);

      }
      :global(.operator) {
        color: rgb(234 100 0);
      }
      :global(.string) {
        color: rgb(168 85 247);
      }

      :global(.function) {
        color: rgb(236 72 153);
      }
    
      
</style>