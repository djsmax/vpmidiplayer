# vpmidiplayer
VPMIDIPlayer is a UserJS script, launched in Tampermonkey, which adds the function of playing MIDI files to the site [virtualpiano.net](https://virtualpiano.net).

### How to install
1. First, install the Tampermonkey extension in your browser. For Chrome, you can find it in the [Chrome extensions store](https://chrome.google.com/webstore/category/extensions), for Opera (15+) on the [extension site for Opera](https://addons.opera.com/ru/extensions/).
2. After successfully installing Tampermonkey, download the VirtualPiano MIDIPlayer.user.js file.
By the way, it's enough to open it in the browser: [the link will appear later]
3. At Tampermonkey's request to install the script, allow installation
4. Restart (if you opened) or open a new tab with the site virtualpiano.net


Along with the Just play and Menu buttons, a new Play MIDI button should appear. Have you seen? So everything works as it should!

### Usage

To play a MIDI file on the virtual piano, press the Play MIDI button. You will see the file download interface. Select the appropriate MIDI file and confirm the selection. The file will start playing automatically.
* If there is more than one track in the MIDI file, a list with the numbers and names of all tracks of the file will be pre-displayed. Select the desired track from the drop-down list, and the piano will start playing it.
* To pause the playback, press the pause button (the orange one). Pausing playback, click on it again to continue.
* To finish playback, and perhaps select another file - click the "Retry" button with a rounded arrow.


### Bugs

* A small problem with CSS-layout: if the field for selecting a file is displayed on the screen, the entire area slides down, it looks ugly
* Sometimes, when you click the "Retry" button, the interface changes, but the music continues to play. This is due to the problems of assynchronism. I know perfectly well about this, but I can not offer anything yet.
By the way, any questions are welcome!

### Third-Party packages
* The library [midi-parser-js](https://github.com/colxi/midi-parser-js) is used for parsing MIDI files directly in the browser. Thanks colxi, only thanks to this library there is this script.