
Have you ever wanted custom sounds in Nuclear Option, like the F-14 missile warning sound to play when a SARH is flying at you, instead of the default annoying beep? Let me show you how.

## Part 1: Download all needed parts
---

You will need these programs: 

- **Unity 2022.3.12f1** [Download it here](https://unity.com/releases/editor/whats-new/2022.3.12)
  - You'll need unity to create your own resource files, which you can then use to replace the current sounds in your unity game.
- **UABEAvalonia** [Download it here](https://github.com/nesrak1/UABEA/releases/)
  -  You'll need UABEA to edit asset files of nuclear option, or any other unity game. This allows you to link a given asset to a different resource.

**To install Unity,** follow the download link, then simply press “Unity Editor Windows”, or whatever operating system you are using. After downloading, unity will install Unity Hub, which will require you to create an account, and then download the actual unity editor. After all this is done, Unity is installed.

**To install UABEA,** follow the download link, scroll a bit down, and click on a file that says *uabea-windows.zip* or anything similar. You will need a program like 7-zip or WinRAR to extract this zip. Make a new folder on your desktop, name it however you want, and then drag all the files from inside the zip into the folder.

## Part 2: Scope out your files using UABEA
--- 

  ### Open Nuclear Option's game files
  Open Steam. Click “Library” on the toolbar, and then search for nuclear option (or any other unity game) on the left panel. Right click it, and press “Browse Local Files”. When a file explorer window opens, open the folder 📂*NuclearOption_data*. Then, right-click the address bar at the top of file explorer, and click “Copy address as text”.

  <ol><img loading="lazy" alt="tutorial pic showing how to open local game files in Steam" src="/pages/how-to-custom-sounds/tutorialHowToOpenLocalFiles.webp" style="width: 300px;" class="respImg"></ol>

  ### Start UABEA and open the asset file
   1. Go into the folder with the extracted UABEA files from the previous part. Double-click the file named UABEAvalonia.exe, which should have a white and pink icon.
   1. Click on “File”, and open. Now, click on the empty part of the address bar, and paste in the path which you copied in the previous step, then press enter.<br>
    <img loading="lazy" alt="tutorial showing how to export dumps of assets in UABEA" src="/pages/how-to-custom-sounds/tutorialHowToExportDumps.webp" style="width:600px;" class="respImg">
   1. Search for a 📁*resources.assets* file. Double click it. 

A new window should be opened, which lists all the resources in the game. 

  <ol><img loading="lazy" alt="tutorial showing how to open an assets file in UABEA" src="/pages/how-to-custom-sounds/tutorialHowToOpenAssetFile.webp" style="width: 400px;" class="respImg"></ol>

  ### Look for files of interest.
   1. Click on the “Type” column, which will sort all the files by type. This will help you find <i>AudioClip</i>s;
   1. Now, find them by names! You need to do some guessing, for example, missile warning is of course going to be called missileWarning, but some names might be less intuitive.
    <span class="infoText">If you wanna quickly preview the assets, you can use <a href="https://github.com/AssetRipper/AssetRipper/releases/">AssetRipper</a>, which allows you to view them live and export them. (you can only view, not modify assets with AssetRipper)</span>
   1. Check if they're the files you're intending to replace, and note their names. 


## Part 3: Make your replacement assets in Unity
---


  1. Open Unity Hub. Go into Projects and press “New Project”. Make sure to select <b>3D (Core)</b>. Name it whatever, and select a unity cloud organization. Feel free to uncheck <i>Connect to Unity Cloud</i>, so your game isn't backed up to the cloud.<br>
    <img loading="lazy" alt="tutorial showing how to create a new project in Unity" src="/pages/how-to-custom-sounds/tutorialHowToCreateProject.webp" style="width:450px;" class="respImg">
    <span class="infoText">Once your editor opens, you will see several panels. Take note of the Project/Assets panel at the bottom.</span>
  1. Drag your audio files into the bottom file panel. Make sure to name them exactly as they are named in the asset files, so you can overwrite them.
  1. From the bottom panel, drag the files to your scene.<br>
    <img loading="lazy" alt="tutorial showing how to import audio files into unity and drag them onto the scene" src="/pages/how-to-custom-sounds/tutorialHowToDragAudioFiles.webp" style="width:400px;" class="respImg">
  1. After this is done, save and compile your game. Go into <b>File > Build Settings, Select Windows as the target platform, and press “Build”</b>. A folder picker window will open, create a new folder and name it anything you want, like <i>builds</i>, and select that folder.

The game and its assets will now build into that folder.

## Part 4: Create dumps 
---

Look in the folder you just created, and compiled into. There should be a gameName_data folder. Open it. Your files of interest are 📂*sharedassets0.assets*, and 📂*shareassets0.resource*. The .assets file stores the references to resources, the .resource file stores the actual resources (audio files). 


  1. Using UABEA, open the 📂<i>sharedassets0.assets</i> file. Find the resources you want to export, and on the right side, press “Export Dump”. You can choose whether to export the dump as .json or as .txt<br>
    <img loading="lazy" alt="tutorial showing how to export dumps of assets in UABEA" src="/pages/how-to-custom-sounds/tutorialHowToExportDumps.webp" style="width:600px;" class="respImg">
  1. Since there is already a sharedassets0.resource file in Nuclear Option's data, rename it to anything you want, like ResourcePack.resource or just like mash your keyboard.
  1. Open the dumps in a text editor. You will need to edit the m_Source field to have the name of your .resource file, which you just renamed in the last step.<br>
    <img loading="lazy" alt="tutorial showing how to modify an exported UABEA dump to point to the correct resource file" src="/pages/how-to-custom-sounds/tutorialHowToRenameFileName.webp" style="width:400px;" class="respImg">
</ol>


## Part 5: Modify Nuclear Option's asset files. 
---
Now you'll need to modify Nuclear Option's 📂<i>resources.assets</i> file, so the resources point to your custom resources, in your custom .resource file.

  1. Drag your custom .resource file into 📂<i>NuclearOption_data</i>
  1. Create a backup of your resources.assets file. Copy and paste it to make a copy, in case you mess stuff up (you will).
    <img loading="lazy" alt="tutorial showing how to copy my custom resource file and how to create a backup of the asset file" src="/pages/how-to-custom-sounds/tutorialHowToCopyAndCreateBackup.webp" style="width:450px;" class="respImg">
  1. Open the 📂<i>resources.assets</i> file in UABEA again. Find the assets you need to replace. Press on it, press “Import Dump”, choose whether you are importing .json or .txt, and import.
    <span class="infoText">Make sure you have edited the asset names and asset source before importing them into UABEA, as using “Edit Data” in the program likes to mess up the assets.</span>
  1. Save the assets file by doing <b>File > Save.</b>

</ol>

<br><br>

### And there you have it! A custom sound inside of Nuclear Option!

<video width="750" poster="/pages/how-to-custom-sounds/customsoundthumbnail.webp" style="margin-left: 0px !important;"  loop controls class="respImg">
  <source src="/pages/how-to-custom-sounds/f14CustomSoundNuclearOption.webm" type="video/webm" />
  <source src="/pages/how-to-custom-sounds/lossless/f14CustomSoundNuclearOption.mp4" type="video/quicktime" />
  Your browser does not support the video tag.
</video>


<style>
    li{
      margin-bottom: 13px;
    }
  
    p{
      color: white;
    }
  
    @media screen and (max-width: 800px) {
      .respImg{
        width: 300px !important;
        margin-left:-40px !important;
      }
    }

    .infoText{
      margin-left: -30px;
      margin-bottom: 9px;
      margin-top: 9px;
      padding: 9px;
      color: #FFFFFF;
      font-style: italic;
      font-size: 16px;
      background-color: #111111;
      display: inline-block;
    }
    
    img{
      margin-top: 6px;
    }
  </style>
