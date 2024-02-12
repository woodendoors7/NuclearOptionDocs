<script>
  //import { SvelteUIProvider } from "@svelteuidev/core";
  import "./glob.css";
  import "./sidebar.css";
  import "./fontface.css"
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon.png">
</svelte:head>

<div class="topBar">
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" style="display:none;" />
  <label for="openSidebarMenu" id="firstCollapse">⚟</label>
  <label for="openSidebarMenu" id="secondCollapse">⚞</label>

  <div class="imgSlot">
    <a href="/"><img class="logo" src="/nukeoption.webp" alt="Nuclear Option game logo" /></a>
  </div>    

  <div class="sidenav">
    <b>Nuclear Option WIKI</b>

    <details open>
      <summary>Aircraft</summary>
        <a href="/w/TA-30">T/A-30 Compass</a><br>
        <a href="/w/FS-12">FS-12 Revoker</a><br>
        <a href="/w/CI-22">CI-22 Cricket</a><br>
        <a href="/w/SFB-81">SFB-81 Darkreach</a>
    </details>

    <details open>
      <summary>Missiles</summary>
        <a href="/w/AGM-48">AGM-48</a><br>
        <a href="/w/AGM-68">AGM-68</a><br>
        <a href="/w/MMR-S3">MMR-S3</a><br>
        <a href="/w/IRM-S1">IRM-S1</a><br>
        <a href="/w/AAM-29">AAM-29 Scythe</a><br>
        <a href="/w/GGM">Ground-to-Ground</a><br>

    </details>

    <details open>
      <summary>Bombs</summary>
        <a href="/w/500kg-bomb">500kg bomb</a><br>
        <a href="/w/1.5kt-nuke">1.5kt Nuclear Bomb</a><br>
    </details>

    <details open>
      <summary>Tutorials</summary>
        <a href="/w/how-to-custom-sounds">Custom Sounds</a><br>

    </details>

    <div class="bottom">
      <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img src="/ByNcSaSmall.svg" style="position:absolute; bottom:0;" alt="Creative commons logo">
      </a>
    </div>
  </div>
</div>

<div class="slot">
  <slot />
</div>

<style>
</style>
