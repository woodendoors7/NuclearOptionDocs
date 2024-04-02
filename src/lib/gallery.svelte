
<div>
    <input type="checkbox" class="openGallery" id="openGallery" style="display:none;" />
    <label for="openGallery" class="galleryToggle" id="firstCollapseGallery">▼ <h3 class="sumTitle">Photos</h3></label>
    <label for="openGallery" class="galleryToggle" id="secondCollapseGallery">▶ <h3 class="sumTitle">Photos</h3></label>
    <hr>
    <div class="galleryContents">
        <slot />
    </div>
</div>

<style>
    .sumTitle{
        display: inline-block;
    }

    .galleryToggle{
        cursor: pointer;
        user-select: none;
    }

    #openGallery:checked ~ .galleryContents {
        display: none !important;
    }

    #openGallery ~ .galleryContents {
        display: block;
    }

    #openGallery:checked ~ #firstCollapseGallery {
        display: none;
    }

    #openGallery ~ #firstCollapseGallery {
        display: block;
    }

    #openGallery:checked ~ #secondCollapseGallery {
        display: block;
    }

    #openGallery ~ #secondCollapseGallery {
        display: none;
    }

    @media screen and (max-width: 800px) {
        #openGallery:checked ~ .galleryContents {
            display: block !important;
        }

        #openGallery ~ .galleryContents {
            display: none !important;
        }
    }
</style>
