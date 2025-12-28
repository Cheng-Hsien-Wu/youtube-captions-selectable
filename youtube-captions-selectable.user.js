// ==UserScript==
// @name         YouTube Captions Selectable (Edge / Chromium)
// @namespace    yt-caption-selectable
// @version      0.1
// @description  Make YouTube subtitles selectable and enable native browser context menu
// @match        https://www.youtube.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const APPLIED_FLAG = 'ytSelectableApplied';

  console.log('[YT captions selectable] script loaded');

  /**
   * Apply selectable behavior to caption containers
   */
  function makeCaptionsSelectable() {
    const containers = document.querySelectorAll(
      '.ytp-caption-window-container, .caption-window'
    );

    containers.forEach((container) => {
      // Prevent duplicate processing
      if (container.dataset[APPLIED_FLAG]) return;
      container.dataset[APPLIED_FLAG] = '1';

      // Allow text selection on caption container
      container.style.userSelect = 'text';
      container.style.webkitUserSelect = 'text';
      container.style.cursor = 'text';
      container.style.pointerEvents = 'auto';

      /**
       * Intercept mouse events early (capture phase)
       * to prevent YouTube player from stealing selection
       */
      container.addEventListener(
        'mousedown',
        (ev) => {
          if (ev.button === 0) {
            ev.stopPropagation();
          }
        },
        { capture: true }
      );

      container.addEventListener(
        'mouseup',
        (ev) => {
          if (ev.button === 0) {
            ev.stopPropagation();
          }
        },
        { capture: true }
      );

      /**
       * Suppress double-click behavior to reduce
       * bottom bar / UI state toggling
       */
      container.addEventListener(
        'dblclick',
        (ev) => {
          ev.stopPropagation();
          ev.preventDefault();
        },
        { capture: true }
      );

      /**
       * Enable native browser context menu
       * (do not call preventDefault)
       */
      container.addEventListener(
        'contextmenu',
        (ev) => {
          ev.stopPropagation();
        },
        { capture: true }
      );

      // Ensure all inner caption elements are selectable
      container.querySelectorAll('*').forEach((el) => {
        el.style.userSelect = 'text';
        el.style.webkitUserSelect = 'text';
        el.style.cursor = 'text';
        el.style.pointerEvents = 'auto';
      });
    });
  }

  // Initial execution
  makeCaptionsSelectable();

  /**
   * Observe DOM changes since YouTube dynamically
   * recreates caption elements
   */
  const observer = new MutationObserver(() => {
    makeCaptionsSelectable();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
