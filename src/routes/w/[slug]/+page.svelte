<script async>
  export let data;
  export let info;
  export let indexMD;
  import "./style.css";
  $: indexMD = data.indexMD;
  $: info = data.info;
</script>

<div class="article">
  <a href="https://github.com/woodendoors7/NuclearOptionDocs/tree/main/static/pages/{info.slug}" style="float:right">Edit</a>
  <h1>{info.title}</h1>
  <hr />
  <a href="/pages/{info.slug}/media/lossless/{info.photo.replace(".webp", ".png")}" target="_blank">
    <img class="titleImg" src="/pages/{info.slug}/media/{info.photo}" alt="{info.photoAlt}" />
  </a>
  <svelte:component this={indexMD} />
</div>

<svelte:head>
  <title>{info.title} | Nuclear Option WIKI</title>

  <meta name="description" content="{info.description}">

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nuclearoption.wiki/w/{info.slug}" />
  <meta property="og:title" content="{info.title} | Nuclear Option WIKI" />
  <meta property="og:image" content="/pages/{info.slug}/media/{info.photo}" />
  <meta property="og:description" content="{info.description}" />

  
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content="https://nuclearoption.wiki/w/{info.slug}" />
  <meta property="twitter:title" content="{info.title} | Nuclear Option WIKI" />
  <meta property="twitter:image" content="/pages/{info.slug}/media/{info.photo}" />
  <meta property="twitter:description" content="{info.description}" />

</svelte:head>
