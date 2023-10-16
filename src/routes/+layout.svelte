<script>
  //import { SvelteUIProvider } from "@svelteuidev/core";
  import "./glob.css";
  import "./sidebar.css";
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon.png">
</svelte:head>

<div class="topBar">
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" style="display:none;" />
  <label for="openSidebarMenu" id="firstCollapse">⚟</label>
  <label for="openSidebarMenu" id="secondCollapse">⚞</label>

  <div class="imgSlot">
    <img class="logo" src="/nukeoption.png" alt="" />

  </div>    

  <div class="sidenav">
    <details open>
      <summary>Aircraft</summary>
        <a href="/w/TA-30">T/A-30 Compass</a><br>
        <a href="/w/FS-12">FS-12 Revoker</a><br>
        <a href="/w/CI-22">CI-22 Cricket</a><br>

    </details>

    <details open>
      <summary>Missiles</summary>
        <a href="/w/AGM-48">AGM-48</a><br>
        <a href="/w/AGM-68">AGM-68</a><br>
        <a href="/w/MMR-S3">MMR-S3</a><br>
    </details>

    <details open>
      <summary>Bombs</summary>
        <a href="/w/500kg-bomb">500kg bomb</a><br>
        <a href="/w/1.5kt-nuke">1.5kt Nuclear Bomb</a><br>

    </details>
  </div>
</div>

<div class="slot">
  <slot />
</div>

<style>
</style>
