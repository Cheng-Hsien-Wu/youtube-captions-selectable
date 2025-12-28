# YouTube Captions Selectable

A Tampermonkey userscript that makes YouTube captions (CC) selectable  
and enables the native browser context menu.

This script modifies minimal behavior and does not break the YouTube player.

---

## Features

- Make YouTube captions selectable
- Enable native browser right-click menu on captions
- Works with dynamically updated captions
- Single-file userscript, no dependencies

---

## Installation

1. Install Tampermonkey extension
2. Create a new userscript
3. Paste the content of `youtube-captions-selectable.user.js`

---

## Usage

### Selecting text

- **Single word or part of a word**: double-click to select  
  (selecting individual letters by dragging is not supported)
- **Full sentence**:
  - Double-click a word
  - On the second click, keep holding the mouse button
  - Drag to select the full sentence

---

### Selecting long passages

For longer text, use YouTube’s built-in **Transcript** feature below the video description.  
The transcript supports normal drag selection and copying.

---

## Edge Mini Menu

Edge may show a mini menu when text is selected.  
This is a browser feature. To remove it, go to Edge settings or use the mini menu’s hide option for YouTube.

---

## Notes

- Caption position may shift when the YouTube player UI toggles
- Limitations are due to YouTube and browser behavior, not the script
