<script>
  import { SvelteUIProvider } from "@svelteuidev/core";
</script>

<SvelteUIProvider themeObserver="dark">
  <div class="topBar">
    <div class="imgSlot">
      <img class="logo" src="/nukeoption.png" alt="" />
      <h1 style="height: 60px">Nuclear Option WIKI</h1>
    </div>
  </div>
  <div class="slot">
    <slot />
  </div>
</SvelteUIProvider>

<style>
  :global(body) {
    background-color: #1b1b1f;
    color: white;
    margin: 0px !important;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .imgSlot {
    margin-left: 50%;
    align-items: middle;
    display: flex;
  }

  .imgSlot * {
    display: inline-block;
    margin: 0px;
  }

  .logo {
    height: 60px;
  }

  .topBar {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    top: 0px;
    height: var(--topbar-height);
    border-bottom: 1px solid black;
    max-width: 100vw;
    background-color: #1a1b1e;
    z-index: 110;
    height: 60px;
  }
  .slot {
    margin-top: 60px;
    margin: 10px;
  }

  @font-face {
    font-family: "LiberationSans";
    src: url("/fonts/LiberationSans-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "LiberationSans";
    src: url("/fonts/LiberationSans-Italic.ttf") format("truetype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "LiberationSans";
    src: url("/fonts/LiberationSans-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "LiberationSans";
    src: url("/fonts/LiberationSans-BoldItalic.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
  }

  :global(a){
    color: #2795e4;
  }

  :global(a:visited){
    color: rgb(180, 135, 252);

  }
</style>
