Have you ever wanted custom sounds in Nuclear Option, like the F-14 missile warning sound to play when a SARH is flying at you, instead of the default annoying beep? You're in the right place. 

## Part 1: Download all needed parts
---

You will need these programs: 

- **Unity 2022.3.12f1** [Download it here](https://unity.com/releases/editor/whats-new/2022.3.12)
  - You'll need unity to create your own resource files, which you can then use to replace the current sounds in your unity game.
- **UABEAvalonia** [Download it here](https://github.com/nesrak1/UABEA/releases/)
  -  You'll need UABEA to edit asset files of nuclear option, or any other unity game. This will allow you to link a given asset to a different resource.

**To install Unity,** follow the download link, then simply press "Unity Editor Windows", or whatever operating system you are using. After downloading, unity will install Unity Hub, which will require you to create an account, and then download the actual unity editor. After all this is done, Unity is installed.

**To install UABEA,** follow the download link, scroll a bit down, and click on a file that says *uabea-windows.zip* or anything similar. You will need a program like 7-zip or WinRAR to extract this zip. Make a new folder on your desktop, name it however you want, and then drag all the files from inside the zip into the folder.

## Part 2: Scope out your files using UABEA
--- 

  ### Open Nuclear Option's game files
  Open Steam. Click "Library" on the topbar, and then search for nuclear option (or any other unit game) on the left panel. Right click it, and press "Browse Local Files". When a file explorer window opens, open the folder 📂*NuclearOption_data*. Then, right click the address bar at the top of file explorer, and click "Copy address as text".

  <img src="/pages/how-to-custom-sounds/tutorialHowToOpenLocalFiles.png" style="width: 300px;" class="respImg">

  ### Start UABEA and open the asset file
   1. Go into the folder with extracted UABEA files from the previous part. Double-click the file named UABEAvalonia.exe, which should have a white and pink icon.
   1. Click on "File", and open. Now, click on the empty part of the address bar, and paste in the path which you copied in the previous step, then press enter.
   1. Search for a 📁*resources.assets* file. Double click it. 
   1. A new window should be opened, which lists all the resources in the game. 

  <img src="/pages/how-to-custom-sounds/tutorialHowToOpenAssetFile.png" style="width: 400px;" class="respImg">

  ### Look for files of interest.
   1. Click on the "Type" column, which will sort all the files by type. This will help you distinguish between file types such as *AudioClip* for audio files, or *Texture2D* for images. 
   1. Now, find them by names! You need to do some guessing, for example missile warning is of course gonna be called missileWarning, but some names might be less intuitive. If you wanna quickly preview the assets, you can use [AssetRipper](https://github.com/AssetRipper/AssetRipper/releases/), which allows you to view them live, and it's easier for extracting, but it cannot modify files.
   1. Check if they're the files you're intending to replace, and note their names. 

## Part 3: Make your replacement assets in Unity
---
  1. Open Unity Hub. Go into Projects and press "New Project". Make sure to select **3D (Core)**. Name it whatever, and select a unity cloud organization. Feel free to uncheck *Connect to Unity Cloud* so your game isn't backed up to the cloud.

  <img src="/pages/how-to-custom-sounds/tutorialHowToCreateProject.png" style="width:450px;" class="respImg">


Once your editor opens, you might see several panels. There should be a Project/Assets panel at the bottom.

  2. Drag your audio, or texture files into the bottom file panel. Make sure to name them exactly as they are named in the asset files, so you can overwrite them. 
  3. From the bottom panel, drag the files to your scene.

  <img src="/pages/how-to-custom-sounds/tutorialHowToDragAudioFiles.png" style="width:400px;">

  4. After this is done, save and compile your game. Go into File > Build Settings, Select Windows as the target platform, and press "Build". A folder picker window will open, create a new folder and name it anything you want, like *builds*, and select that folder. The game and its assets will now build into that folder.

## Part 4: Create dumps 
---

Look in the folder you just created. There should be a gameName_data folder. Open it. Your files of interest are 📂*sharedassets0.assets*, and 📂*shareassets0.resource*. The .assets file stores the references to resources, the .resource file stores the actual resources (audio files, image files). 

1. Using UABEA, open the sharedassets0.assets file. Find the resources you want to export, and on the right side, press "Export Dump". You can choose whether to export the dump as .json or as .txt.

  <img src="/pages/how-to-custom-sounds/tutorialHowToExportDumps.png" style="width:600px;">

1. Since there is already a sharedassets0.resource file in Nuclear Option's data, rename it to anything you want, like ResourcePack.resource or just like mash your keyboard.
1. Open the dumps in a text editor. You will need to edit the m_Source field to have the name of your .resource file which you just renamed in the last step.

  <img src="/pages/how-to-custom-sounds/tutorialHowToRenameFileName.png" style="width:400px;">



## Part 5: Modify Nuclear Option's asset files. 
---
Now you'll need to modify nuclear option's *resources.assets* file, so the resources point to your custom resources, in your custom .resource file.

1. Drag your custom .resource file into NuclearOption_data. 
1. Create a backup of your resources.assets file. Copy and paste it to make a copy, in case you mess stuff up (you will). 

  <img src="/pages/how-to-custom-sounds/tutorialHowToCopyAndCreateBackup.png" style="width:450px;">

1. Open the *resources.assets* file in UABEA again. Find the assets you need to replace. Press on it, press "Import Dump", choose whether you are importing .json or .txt, and import. 

Make sure you have edited the asset names and asset source before importing them into UABEA, as using "Edit Data" in the program likes to mess up the assets. 

  4. Save the assets file by doing File > Save. 


<br><br>

### And there you have it! A custom sound inside of Nuclear Option!

<video width="750" height="450"  loop controls class="respImg">
  <source src="/pages/how-to-custom-sounds/f14CustomSoundNuclearOption.mp4" type="video/webm" />
  <source src="/pages/FS-12/lossless/revokertakingoff.mov" type="video/quicktime" />
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
}
}


  </style>