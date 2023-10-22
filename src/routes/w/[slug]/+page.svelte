<script>
  export let data;
  export let indexMD;
  $: indexMD = data.indexMD;
  console.log(data);
  import SvelteMarkdown from "svelte-markdown";
  import "./style.css";

</script>

<div class="article">
  <a href="https://github.com/woodendoors7/NuclearOptionDocs/tree/main/static/pages/{data.slug}" style="float:right">Edit</a>
  <h1>{data.info.title}</h1>
  <hr />
    <img class="titleImg" src="/pages/{data.slug}/{data.info.photo}" alt="{data.info.photoAlt}" />
  <SvelteMarkdown source={indexMD} />
</div>

<svelte:head>
  <title>{data.info.title} | Nuclear Option WIKI</title>

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nuclearoption.wiki/w/{data.slug}" />
  <meta property="og:title" content="{data.info.title} | Nuclear Option WIKI" />
  <meta property="og:image" content="/pages/{data.slug}/{data.info.photo}" />
  <meta property="og:description" content="{data.info.description}" />

  
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content="https://nuclearoption.wiki/w/{data.slug}" />
  <meta property="twitter:title" content="{data.info.title} | Nuclear Option WIKI" />
  <meta property="twitter:image" content="/pages/{data.slug}/{data.info.photo}" />
  <meta property="twitter:description" content="{data.info.description}" />

</svelte:head>
