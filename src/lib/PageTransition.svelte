
  
<script>
    import { fly } from "svelte/transition"
    export let refresh = ""
  </script>
  
  {#key refresh}
    <div
      in:fly={{ x: -5, duration: 500}}
      out:fly={{ x: 5, duration: 500 }}
    >
      <slot />
    </div>
  {/key}