<!-- svelte-ignore a11y-media-has-caption -->

<script>
    export let name;
    export let slug;
    export let width;
    export let thumb;
    export let controls = false

    export let autoplay = true
    export let loop = true
    export let muted = true

    // Images and videos should always be compressed down to 95% quality .webp, .webm, originals should be in .png, .mp4. Change this property if they're different.=
    export let lossless = name.replace(".webp", ".png").replace(".webm", ".mp4")

    export let global = false;
    let firstPath = "";
    if(global){
      firstPath = `/media`
    } else {
      firstPath = `/pages/${slug}/media`
    }
</script>


<a href="{firstPath}/lossless/{lossless}" target="_blank">
  <video width="{width}" poster="{firstPath}/{thumb}" style="margin-left: 0px !important;" controls={controls} autoplay={autoplay} loop={loop} muted={muted}>
    <source src="{firstPath}/{name}" type="video/webm" />
    <source src="{firstPath}/lossless/{lossless}" type="video/quicktime" />
    Your browser does not support the video tag.
  </video>
</a>

