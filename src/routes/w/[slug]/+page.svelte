<script async>
  
  export let data;
  export let info;
  export let indexMD;
  import "./style.css";
  $: indexMD = data.indexMD;
  $: info = data.info;

  export let redirects = {
    "TA-30": "TA-30_Compass",
    "SFB-81": "SFB-81_Darkreach",
    "MMR-S3": "Munitions",
    "IRM-S1": "Munitions",
    "GGM": "Munitions",
    "FS-12": "FS-12_Revoker",
    "cruise-missile": "Munitions",
    "CI-22": "CI-22_Cricket",
    "avoiding-missiles": "How_to_evade_missiles",
    "AGM-68": "Munitions",
    "AGM-48": "Munitions",
    "AAM-29": "Munitions",
    "500kg-bomb": "Munitions",
    "1.5kt-nuke": "Munitions",
    "how-to-custom-sounds": "Nuclear_Option_Wiki"
  }
</script>

<div class="article">
  <a href="https://github.com/woodendoors7/NuclearOptionDocs/tree/main/static/pages/{info.slug}" style="float:right">Edit</a>
  <div>
    The site has moved! The new official wiki is now located on  <b><a class="newlink" href="https://nuclearoption.wiki.gg">nuclearoption.wiki.gg</a></b><br>
      <b>Visit the new <a class="newlink" href="https://nuclearoption.wiki.gg/wiki/{redirects[info.slug]}">{redirects[info.slug].replaceAll("_", " ")}</a> page on wiki.gg</b>
  </div>
  <h1>{info.title}</h1>
  <hr />
  <a href="/pages/{info.slug}/media/lossless/{info.photo.replace(".webp", ".png")}" target="_blank">
    <img class="titleImg" src="/pages/{info.slug}/media/{info.photo}" alt="{info.photoAlt}" />
  </a>
  <svelte:component this={indexMD} />
</div>

<svelte:head>
  <title>{info.title} | Nuclear Option WIKI</title>

  <link rel="canonical" href="https://nuclearoption.wiki.gg/wiki/{redirects[info.slug]}" />

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

<style>
  .newlink{ 
    color: rgb(255, 56, 56);
  }
</style>