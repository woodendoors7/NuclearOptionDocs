
<div class="article">
    <h1>Nuclear Option Community WIKI</h1>
    <main><p>Nuclear Option is a combat flight game set on a dynamic and realistic battlefield of the near future. Use an array of advanced weapons to change the course of battles as you intercept bombers, duel fighters, fly under the radar, or unleash the fury of nuclear weapons on enemy formations.
       Each aircraft comes with an immersive cockpit featuring a situational awareness HUD, identifying nearby targets and threats. Aircraft can be flown with various controllers or with a mouse-controlled "virtual joystick", requiring no special hardware.</p></main>
    
       <p>For this page, I am using <a href="https://kit.svelte.dev/SvelteKit">SvelteKit</a> as the development/deployment/SSG tool. The individual wiki pages are stored as markdown files in a <a href="https://github.com/woodendoors7/NuclearOptionDocs">Github Repo</a>, and I am deploying and hosting everything statically on <a href="https://pages.cloudflare.com">Cloudflare Pages</a>.
       Unless I'll to do otherwise, I am pre-rendering all pages to static HTML, and not sending any Javascript that would affect the page's functionality to the frontend, therefore all usable parts of the pages should be fully static client-side (including the sidebar toggle)</p>
   
       <p><b>Completely WIP for now.</b> This project is still very new, so everything is coming soon. If you'd like to contribute, hmu on Discord (woodendoors7) or make a pull request.</p>

       <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" style="display:none;" />
       <label for="openSidebarMenu" style="background-color: lightblue; color: black; padding: 10px; font-size: 20px; font-weight: bold; cursor: pointer; user-select: none;">Browse WIKIS</label>

    <h3><a href="https://store.steampowered.com/app/2168680/Nuclear_Option/" target="_blank">Buy on Steam</a></h3>
    <h3><a href="https://discord.gg/nuclear-option-909034158205059082/" target="_blank">Join Discord</a></h3>

    <div class="inlineChildren">
        <iframe id="theFrame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/1vEf2TagnXc?si=PhAlk6GlZGia2rtt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/x6TBkOjTsek?si=x2h2bj7t31mUfnq2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>

<style>

    .inlineChildren > iframe {
    vertical-align: top;
    display: inline-block;
    margin: 5px;
    }

    #theFrame{ 
        max-width: 100%;
    }

    .article {
        margin: 0 auto 3em;
        max-width: 50rem;
        padding: 2rem;
        margin-top: 60px;
    }
</style>

<svelte:head>
    <title>Nuclear Option WIKI</title>

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nuclearoption.wiki/" />
    <meta property="og:title" content="Nuclear Option WIKI" />
    <meta property="twitter:image" content="/header.jpg" />
    <meta property="og:description" content="Nuclear Option is a combat flight game set on a dynamic and realistic battlefield of the near future." />
  
    
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://nuclearoption.wiki/" />
    <meta property="twitter:title" content="Nuclear Option WIKI" />
    <meta property="twitter:image" content="/header.jpg" />
    <meta property="twitter:description" content="Nuclear Option is a combat flight game set on a dynamic and realistic battlefield of the near future." />
</svelte:head>