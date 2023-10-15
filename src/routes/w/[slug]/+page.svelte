<script>
  export let data;
  export let indexMD;
  $: indexMD = data.indexMD;
  console.log(data);
  import SvelteMarkdown from "svelte-markdown";
  import "./style.css";

</script>

<div class="article">
  <a href="https://google.com" style="float:right">Edit</a>
  <h1>{data.info.title}</h1>
  <hr />
  <table />
  <img class="titleImg" src="/pages/{data.slug}/{data.info.photo}" alt="{data.info.photoAlt}" />
  <SvelteMarkdown source={indexMD} />
</div>

<svelte:head>
  <title>{data.info.title} | Nuclear Option WIKI</title>
</svelte:head>
