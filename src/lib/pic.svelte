

<script>
    export let name;
    export let slug;
    export let alt;
    export let width;
    // Images and videos should always be compressed down to 95% quality .webp, .webm, originals should be in .png, .mp4. Change this property if they're different.
    export let lossless = name.replace(".webp", ".png").replace(".webm", ".mp4")
    export let loading = "lazy";

    export let global = false;
    export let subpath = "media"

    export let responsive = false;

    export let author;


    let pattern = /by\s([^\.]+)/;
    author = name.match(pattern)
    if(!author) author = null;
    else author = author[0]
    

    let classes = ""
    if(responsive){
        classes = "responsive";
    }

    let firstPath = "";
    if(global){
      firstPath = `/${subpath}`
    } else {
      firstPath = `/pages/${slug}/${subpath}`
    }


</script>

<a href="{firstPath}/lossless/{lossless}" target="_blank" tooltip-position={author ? "top" : undefined} tooltip={author ? `${author}` : undefined} >
    <img src="{firstPath}/{name}" alt="{alt}" width="{width}" class="{classes}" loading="{loading}" >
</a>


<style>
    img{
      margin-top: 6px;
    }

    a{
       visibility: collapse;
    }

    a:hover{
        visibility: visible;
    }

    a > img{
        visibility: visible;
    }

    @media screen and (max-width: 500px) {
        .responsive{
            width: 280px;
        }
    }


[tooltip]{

  position:relative;
  display:inline-block;
}
[tooltip]::before {
    content: "";
    position: absolute;
    top:-6px;
    left:50%;
    transform: translateX(-50%);
    border-width: 4px 6px 0 6px;
    border-style: solid;
    border-color: rgba(0,0,0,0.7) transparent transparent     transparent;
    z-index: 99;
    opacity:0;
}

[tooltip-position='left']::before{
  left:0%;
  top:50%;
  margin-left:-12px;
  transform:translatey(-50%) rotate(-90deg) 
}
[tooltip-position='top']::before{
  left:50%;
}
[tooltip-position='buttom']::before{
  top:100%;
  margin-top:8px;
  transform: translateX(-50%) translatey(-100%) rotate(-180deg)
}
[tooltip-position='right']::before{
  left:100%;
  top:50%;
  margin-left:1px;
  transform:translatey(-50%) rotate(90deg)
}

[tooltip]::after {
    content: attr(tooltip);
    position: absolute;
    left:50%;
    top:-6px;
    transform: translateX(-50%)   translateY(-100%);
    background: rgba(0,0,0,0.7);
    text-align: center;
    color: #fff;
    padding:4px 2px;
    font-size: 12px;
    min-width: 80px;
    border-radius: 5px;
    pointer-events: none;
    padding: 4px 4px;
    z-index:99;
    opacity:0;
}

[tooltip-position='left']::after{
  left:0%;
  top:50%;
  margin-left:-8px;
  transform: translateX(-100%)   translateY(-50%);
}
[tooltip-position='top']::after{
  left:50%;
}
[tooltip-position='buttom']::after{
  top:100%;
  margin-top:8px;
  transform: translateX(-50%) translateY(0%);
}
[tooltip-position='right']::after{
  left:100%;
  top:50%;
  margin-left:8px;
  transform: translateX(0%)   translateY(-50%);
}

[tooltip]:hover::after,[tooltip]:hover::before {
   opacity:1
}

</style>

