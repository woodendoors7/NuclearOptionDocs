<script>
  export let data;
  export let indexMD;
  $: indexMD = data.indexMD;
  console.log(data);
  import SvelteMarkdown from "svelte-markdown";
</script>

<div class="article">
  <a href="https://google.com" style="float:right">Edit</a>
  <h1>{data.info.title}</h1>
  <hr />
  <table />
  <img class="titleImg" src="/pages/{data.slug}/{data.info.photo}" alt="" />
  <SvelteMarkdown source={indexMD} />
</div>

<style>
  .titleImg {
    max-width: 200px;
    float: right;
    margin: 20px;
    margin-top: 0px;
    margin-right: 0px;
  }

  .article {
    margin: 0 auto 3em;
    max-width: 70rem;
    padding: 2rem;
  }

  :global(hr) {
    margin-top: 1px !important;
  }

  :global(table) {
    background-color: #333338;
    color: #202122;
    margin: 1em 0;
    border: 1px solid #a2a9b1;
    border-collapse: collapse;
    text-align: left;
    color: rgb(226, 226, 226);
  }

  :global(table *) {
    text-align: left !important;
    border: 1px solid #52565a;
  }

  :global(th) {
    padding: 0.2em 0.4em;
    background-color: #212229;
  }

  :global(td:nth-child(1)) {
    padding: 0.2em 0.4em;
    background-color: #212229;
    font-weight: 600;
  }

  :global(td) {
    padding: 0.2em 0.4em;
  }

  :global(blockquote) {
    border-left: darkgray solid;
    padding-left: 10px;
    margin-left: 30px;
  }

  :global(p) {
    margin-top: 8px;
    margin-bottom: 8px;
    color: #d1d1d1;
    font-size: 17px;
    padding-left: 10px;
  }
</style>
