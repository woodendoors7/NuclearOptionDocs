<script>
  //import { SvelteUIProvider } from "@svelteuidev/core";
  import "./glob.css";
  import "./sidebar.css";
</script>

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
        <a href="/w/TA-30">T/A-30 Compass</a>
        <a href="/w/FS-12">FS-12 Revoker</a>
    </details>

    <details open>
      <summary>Missiles</summary>
        <a href="/w/AGM-48">AGM-48 </a>
    </details>
  </div>
</div>

<div class="slot">
  <slot />
</div>

<style>
</style>
