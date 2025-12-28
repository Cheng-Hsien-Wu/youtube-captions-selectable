# YouTube Captions Selectable

A Tampermonkey userscript that makes YouTube captions (CC) selectable  
and enables the native browser context menu.

This script focuses on minimal, safe behavior changes without breaking
the YouTube player.

---

## Features

- Make YouTube captions selectable
- Enable native browser right-click menu on captions
- Works with dynamically updated captions (SPA-safe)
- No dependencies, single-file userscript

---

## Installation

1. Install a userscript manager (e.g. Tampermonkey)
2. Create a new userscript
3. Paste the content of `youtube-captions-selectable.user.js`
4. Open any YouTube video with captions enabled

---

## Usage

### Selecting text

- **Single word**: double-click the word
- **Full sentence**:
  - Double-click a word
  - On the second click, keep holding the mouse button
  - Drag to select the full sentence

Due to YouTube’s caption DOM structure, direct drag-to-select without
double-click is limited.

---

### Selecting long passages

For selecting or copying longer text blocks, it is recommended to use
YouTube’s built-in **Transcript** feature located below the video
description. The transcript supports normal drag selection and copying.

---

## Edge / Chromium Mini Menu

Microsoft Edge (and some Chromium-based browsers) may show a **mini menu**
when text is selected. This is a browser-level UI feature and cannot be
disabled via userscripts.

### Disable globally

1. Open `edge://settings/appearance`
2. Find **Context menus**
3. Turn off **Mini menu on text selection**

### Disable for YouTube only (recommended)

1. Select any text on a web page to show the mini menu
2. Click the **⋯** button on the mini menu
3. Choose **Hide menu for this site**
4. Add `youtube.com` to the list

---

## Known Limitations

- Browser mini menus are controlled by the browser, not JavaScript
- Caption position may shift when the YouTube player UI toggles
- Full drag-to-select without double-click is limited by YouTube’s design

These are platform limitations, not script bugs.

---

## Tested Environment

- Microsoft Edge (Chromium-based)
- Tampermonkey
- YouTube desktop site

---

## License

MIT
