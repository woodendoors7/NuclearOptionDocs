

<script>
    export let name;
    export let slug;
    export let alt;
    export let width;
    // Images and videos should always be compressed down to 95% quality .webp, .webm, originals should be in .png, .mp4. Change this property if they're different.
    export let lossless = name.replace(".webp", ".png").replace(".webm", ".mp4")
    export let loading = "lazy";
</script>

<a href="/pages/{slug}/media/lossless/{lossless}" target="_blank">
    <img src="/pages/{slug}/media/{name}" alt="{alt}" width="{width}" loading="{loading}">
</a>

<style>
    img{
      margin-top: 6px;
    }
</style>