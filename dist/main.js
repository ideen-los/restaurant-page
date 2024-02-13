/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0px;
}
.-top-8 {
  top: -2rem;
}
.bottom-0 {
  bottom: 0px;
}
.z-10 {
  z-index: 10;
}
.-mx-10 {
  margin-left: -2.5rem;
  margin-right: -2.5rem;
}
.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-10 {
  margin-bottom: 2.5rem;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-7 {
  margin-top: 1.75rem;
}
.mt-8 {
  margin-top: 2rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
.max-w-6xl {
  max-width: 72rem;
}
.max-w-screen-sm {
  max-width: 640px;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.self-start {
  align-self: flex-start;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.border-b {
  border-bottom-width: 1px;
}
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.p-10 {
  padding: 2.5rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.pb-10 {
  padding-bottom: 2.5rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pt-4 {
  padding-top: 1rem;
}
.text-center {
  text-align: center;
}
.align-baseline {
  vertical-align: baseline;
}
.align-bottom {
  vertical-align: bottom;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-\\[18px\\] {
  font-size: 18px;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.leading-none {
  line-height: 1;
}
.leading-tight {
  line-height: 1.25;
}
.tracking-normal {
  letter-spacing: 0em;
}
.text-amber-100 {
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
}
.text-fuchsia-300 {
  --tw-text-opacity: 1;
  color: rgb(240 171 252 / var(--tw-text-opacity));
}
.text-fuchsia-400 {
  --tw-text-opacity: 1;
  color: rgb(232 121 249 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
html {
  height: 100vh;
  overflow-x: hidden;
}

header nav {
  background-color: rgb(181, 47, 105);
}
header svg {
  fill: rgb(181, 47, 105);
  margin-top: -1px;
}

.active {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

img {
  max-width: 100%;
}

.map {
  max-width: 600px;
}

iframe {
  border: 0;
}

#transition {
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 60%;
  left: 0;
  transform: translate(0, 0);
  width: 100vw;
  height: 164vh;
  transition: all 0.6s ease;
  background: linear-gradient(to bottom, rgb(181, 47, 105) 65%, transparent 65%);
  z-index: 1;
}
@media (max-width: 1600px) {
  #transition {
    background: linear-gradient(to bottom, rgb(181, 47, 105) 75%, transparent 75%);
  }
}
@media (max-width: 1370px) {
  #transition {
    background: linear-gradient(to bottom, rgb(181, 47, 105) 80%, transparent 80%);
    bottom: 70%;
  }
}
@media (max-width: 999px) {
  #transition {
    bottom: 80%;
  }
}
#transition .bg {
  background-color: rgb(181, 47, 105);
  height: 70%;
}
#transition .sauce {
  transform: scaleY(0.15);
  transition: all 0.6s ease;
}
#transition .sauce svg {
  fill: rgb(181, 47, 105);
}
#transition.is-transitioning {
  transform: translate(0, 66%);
}
@media (max-width: 999px) {
  #transition.is-transitioning {
    transform: translate(0, 70%);
  }
}
@media (max-width: 500px) {
  #transition.is-transitioning {
    transform: translate(0, 75%);
  }
}
#transition.is-transitioning .sauce {
  transform: scaleY(1);
}
@media (min-width: 768px) {

  .md\\:container {
    width: 100%;
  }

  @media (min-width: 640px) {

    .md\\:container {
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {

    .md\\:container {
      max-width: 768px;
    }
  }

  @media (min-width: 1024px) {

    .md\\:container {
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) {

    .md\\:container {
      max-width: 1280px;
    }
  }

  @media (min-width: 1536px) {

    .md\\:container {
      max-width: 1536px;
    }
  }
}
.hover\\:text-gray-800:hover {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
@media (min-width: 640px) {

  .sm\\:mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .sm\\:block {
    display: block;
  }
}
@media (min-width: 768px) {

  .md\\:relative {
    position: relative;
  }

  .md\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:ml-20 {
    margin-left: 5rem;
  }

  .md\\:ml-auto {
    margin-left: auto;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mt-10 {
    margin-top: 2.5rem;
  }

  .md\\:mt-12 {
    margin-top: 3rem;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:w-1\\/2 {
    width: 50%;
  }

  .md\\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .md\\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .md\\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .md\\:pt-16 {
    padding-top: 4rem;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }
}
@media (min-width: 1024px) {

  .lg\\:w-1\\/3 {
    width: 33.333333%;
  }

  .lg\\:pt-6 {
    padding-top: 1.5rem;
  }

  .lg\\:text-\\[20px\\] {
    font-size: 20px;
  }
}
@media (prefers-color-scheme: dark) {

  .dark\\:text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/base.css","webpack://./node_modules/tailwindcss/components.css","webpack://./node_modules/tailwindcss/utilities.css","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n","@tailwind components;\n","@tailwind utilities;\n","@import \"tailwindcss/base\";\n@import \"tailwindcss/components\";\n@import \"tailwindcss/utilities\";\n\n$menu-color: rgb(181, 47, 105);\n\nhtml {\n  height: 100vh;\n  overflow-x: hidden;\n}\n\nheader {\n  nav {\n    background-color: $menu-color;\n  }\n\n  svg {\n    fill: $menu-color;\n    margin-top: -1px;\n  }\n}\n\n.active {\n  @apply text-gray-800;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.map {\n  max-width: 600px;\n}\n\niframe {\n  border: 0;\n}\n\n#transition {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  bottom: 60%;\n  left: 0;\n  transform: translate(0, 0);\n  width: 100vw;\n  height: 164vh;\n  transition: all 0.6s ease;\n  background: linear-gradient(to bottom, $menu-color 65%, transparent 65%);\n  z-index: 1;\n\n  @media (max-width: 1600px) {\n    background: linear-gradient(to bottom, $menu-color 75%, transparent 75%);\n  }\n  @media (max-width: 1370px) {\n    background: linear-gradient(to bottom, $menu-color 80%, transparent 80%);\n    bottom: 70%;\n  }\n  @media (max-width: 999px) {\n    bottom: 80%;\n  }\n\n  .bg {\n    background-color: $menu-color;\n    height: 70%;\n  }\n\n  .sauce {\n    transform: scaleY(0.15);\n    transition: all 0.6s ease;\n\n    svg {\n      fill: $menu-color;\n    }\n  }\n\n  &.is-transitioning {\n    transform: translate(0, 66%);\n\n    @media (max-width: 999px) {\n      transform: translate(0, 70%);\n    }\n    @media (max-width: 500px) {\n      transform: translate(0, 75%);\n    }\n\n    .sauce {\n      transform: scaleY(1);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function about() {
  const iframeContainer = document.createElement("div");
  iframeContainer.classList.add("absolute", "inset-0", "-top-8");

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75358.986360006!2d8.62510275701707!3d53.82563934398899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b403da2ff33149%3A0x426cf7763006b30!2sCuxhaven!5e0!3m2!1sde!2sde!4v1707776943226!5m2!1sde!2sde";
  iframe.height = "100%";
  iframe.width = "100%";
  iframeContainer.appendChild(iframe);

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add(
    "md:container",
    "md:px-5",
    "md:py-24",
    "md:mx-auto",
    "md:flex",
    "w-full",
    "h-full"
  );

  const about = document.createElement("div");
  about.classList.add(
    "lg:w-1/3",
    "md:w-1/2",
    "bg-gray-800",
    "p-8",
    "flex",
    "flex-col",
    "md:ml-auto",
    "w-full",
    "mt-10",
    "md:mt-0",
    "md:relative",
    "absolute",
    "z-1",
    "shadow-xl",
    "text-fuchsia-400",
    "md:relative",
    "bottom-0"
  );
  aboutContainer.appendChild(about);

  const title = document.createElement("h1");
  title.classList.add(
    "text-xl",
    "font-bold",
    "uppercase",
    "mb-6",
    "hidden",
    "sm:block"
  );
  title.textContent = "Grab your burger";
  about.appendChild(title);

  const headline = document.createElement("h2");
  headline.classList.add("font-bold");
  headline.textContent = "Big Burger Madness";
  about.appendChild(headline);

  const para1 = document.createElement("p");
  para1.classList.add("font-bold", "mb-6");
  para1.innerHTML = "Am Strand 1A</br>51187 Cuxhaven";
  about.appendChild(para1);

  const tel = document.createElement("p");
  tel.textContent = "+49 4721 22998";
  about.appendChild(tel);

  const email = document.createElement("a");
  email.classList.add("self-start", "border-b", "border-gray-800");
  email.href = "mailto:hello@bigburgermadness.com";
  email.textContent = "hello@bigburgermadness.com";
  about.appendChild(email);

  return {
    iframeContainer,
    aboutContainer,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/burger.png */ "./src/img/burger.png");


function homepage() {
  const container = document.createElement("div");
  container.classList.add(
    "w-full",
    "flex",
    "flex-col",
    "items-center",
    "max-w-6xl",
    "mx-auto",
    "md:mt-12",
    "p-6"
  );

  const headline = document.createElement("h1");
  headline.textContent = "Big Burger Madness";
  headline.classList.add(
    "block",
    "font-sans",
    "text-5xl",
    "md:text-7xl",
    "font-bold",
    "leading-tight",
    "tracking-normal",
    "antialiased",
    "text-fuchsia-300",
    "text-center"
  );
  container.appendChild(headline);

  const para = document.createElement("p");
  para.textContent = "Get ready for a juicy, messy, mind-blowing experience!";
  para.classList.add(
    "font-sans",
    "text-xl",
    "md:text-2xl",
    "font-semibold",
    "text-fuchsia-400",
    "mt-2",
    "text-center"
  );
  container.appendChild(para);

  const img1 = new Image();
  img1.src = _img_burger_png__WEBPACK_IMPORTED_MODULE_0__;
  img1.classList.add(
    "md:ml-20",
    "md:mt-10",
    "mt-7",
    "max-w-screen-sm",
    "w-full"
  );
  container.appendChild(img1);

  return {
    container,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_burger1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/burger1.jpg */ "./src/img/burger1.jpg");
/* harmony import */ var _img_burger2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/burger2.jpg */ "./src/img/burger2.jpg");
/* harmony import */ var _img_burger3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/burger3.jpg */ "./src/img/burger3.jpg");
/* harmony import */ var _img_burger4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/burger4.jpg */ "./src/img/burger4.jpg");
/* harmony import */ var _img_burger5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/burger5.jpg */ "./src/img/burger5.jpg");
/* harmony import */ var _img_burger6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/burger6.jpg */ "./src/img/burger6.jpg");
/* harmony import */ var _img_burger8_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/burger8.jpg */ "./src/img/burger8.jpg");
/* harmony import */ var _img_burger9_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/burger9.jpg */ "./src/img/burger9.jpg");









class FoodItem {
  constructor(id, headline, imgURL, desc, price) {
    this.id = id;
    this.headline = headline;
    this.imgURL = imgURL;
    this.desc = desc;
    this.price = price;
  }
}

function generateFoodItemHTML(foodItems) {
  // Container for all food items
  const container = document.createElement("div");
  container.classList.add(
    "w-full",
    "max-w-6xl",
    "pt-4",
    "md:pt-16",
    "pb-10",
    "px-10",
    "mx-auto",
    "relative"
  );

  foodItems.forEach((item) => {
    // Container for a single food item
    const itemElement = document.createElement("div");
    itemElement.classList.add("food-item", `id-${item.id}`, "p-10");

    // Inner container for a single food item
    const itemElementInner = document.createElement("div");
    itemElementInner.classList.add("md:flex", "items-center", "-mx-10");
    itemElement.appendChild(itemElementInner);

    // Left part of a single food item
    const itemElementLeft = document.createElement("div");
    itemElementLeft.classList.add("w-full", "md:w-1/2", "mb-10", "md:mb-0");
    itemElementInner.appendChild(itemElementLeft);

    // Food item image
    const itemImage = new Image();
    itemImage.classList.add("shadow-xl");
    itemImage.src = item.imgURL;
    itemElementLeft.appendChild(itemImage);

    // Right part of a single food item
    const itemElementRight = document.createElement("div");
    itemElementRight.classList.add("w-full", "md:w-1/2", "md:px-10");
    itemElementInner.appendChild(itemElementRight);

    // Food item title
    const itemName = document.createElement("h2");
    itemName.classList.add(
      "font-bold",
      "uppercase",
      "text-3xl",
      "mb-5",
      "text-fuchsia-300"
    );
    itemName.textContent = item.headline;
    itemElementRight.appendChild(itemName);

    // Food item description
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("text-lg", "text-fuchsia-400");
    itemDescription.textContent = item.desc;
    itemElementRight.appendChild(itemDescription);

    // Food item price container
    const itemPriceContainer = document.createElement("div");
    itemPriceContainer.classList.add(
      "block",
      "align-bottom",
      "mt-8",
      "text-fuchsia-300",
      "font-bold"
    );
    itemElementRight.appendChild(itemPriceContainer);

    // Food item price (1)
    const itemPrice1 = document.createElement("span");
    itemPrice1.classList.add("text-2xl", "leading-none", "align-baseline");
    itemPrice1.textContent = "€";
    itemPriceContainer.appendChild(itemPrice1);

    // Food item price (2)
    const itemPrice2 = document.createElement("span");
    itemPrice2.classList.add("text-5xl", "leading-none", "align-baseline");
    const getNumberParts = item.price.split(".");
    itemPrice2.textContent = getNumberParts[0];
    itemPriceContainer.appendChild(itemPrice2);

    // Food item price (3)
    const itemPrice3 = document.createElement("span");
    itemPrice3.classList.add("text-2xl", "leading-none", "align-baseline");
    itemPrice3.textContent = `.${getNumberParts[1]}`;
    itemPriceContainer.appendChild(itemPrice3);

    container.appendChild(itemElement);
  });

  const copyright = document.createElement("p");
  copyright.classList.add("text-gray-600");
  copyright.textContent = "All photos via unsplash.com";
  container.appendChild(copyright);

  return container;
}

const foodItems = [
  new FoodItem(
    "1",
    "The Flavor Bomb",
    _img_burger1_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "Stacked with caramelized onions, crispy bacon, melty pepper jack cheese, and a spicy secret sauce.",
    "9.99"
  ),
  new FoodItem(
    "2",
    "The Carnivore's Delight",
    _img_burger2_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "Jalapeños, fiery pepper relish, molten cheese sauce, and a sprinkle of crushed tortilla chips for extra crunch.",
    "12.99"
  ),
  new FoodItem(
    "3",
    "Hot Mess Express",
    _img_burger3_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "Double beef patty, extra bacon, pulled pork, and a fried egg for good measure. A true meat lover's feast.",
    "7.99"
  ),
  new FoodItem(
    "4",
    "The Mac Daddy",
    _img_burger4_jpg__WEBPACK_IMPORTED_MODULE_3__,
    "Beef patty nestled on a bed of creamy mac and cheese, topped with crispy breadcrumbs. Decadence redefined.",
    "10.49"
  ),
  new FoodItem(
    "5",
    "Sweet 'n' Smoky Stack",
    _img_burger5_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "Sweet barbecue sauce, smoked gouda, maple-glazed bacon, and a tangy onion ring. A flavor rollercoaster.",
    "10.99"
  ),
  new FoodItem(
    "6",
    "The Hangover Helper",
    _img_burger6_jpg__WEBPACK_IMPORTED_MODULE_5__,
    "Crispy hashbrown patty, melty cheddar, a fried egg, and a drizzle of hollandaise sauce. Breakfast meets burger paradise.",
    "13.99"
  ),
  new FoodItem(
    "8",
    "PB&J Blitz",
    _img_burger8_jpg__WEBPACK_IMPORTED_MODULE_6__,
    "A daring combo! Savory beef patty, melted peanut butter, sweet and spicy jalapeno jelly, and crunchy bacon.",
    "12.99"
  ),
  new FoodItem(
    "9",
    "The Waffle Craze",
    _img_burger9_jpg__WEBPACK_IMPORTED_MODULE_7__,
    "Burger sandwiched between two crisp waffles, a drizzle of maple syrup, and a side of crispy fried chicken. Sweet, savory, and utterly mind-blowing.",
    "16.49"
  ),
];

const foodItemsHTML = generateFoodItemHTML(foodItems);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodItemsHTML);


/***/ }),

/***/ "./src/img/burger.png":
/*!****************************!*\
  !*** ./src/img/burger.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10be6a0ffbe789b89eb4.png";

/***/ }),

/***/ "./src/img/burger1.jpg":
/*!*****************************!*\
  !*** ./src/img/burger1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5737d2929e322b2aa5a6.jpg";

/***/ }),

/***/ "./src/img/burger2.jpg":
/*!*****************************!*\
  !*** ./src/img/burger2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d4801f3cc467f3d9255.jpg";

/***/ }),

/***/ "./src/img/burger3.jpg":
/*!*****************************!*\
  !*** ./src/img/burger3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7490925b7560ada7effa.jpg";

/***/ }),

/***/ "./src/img/burger4.jpg":
/*!*****************************!*\
  !*** ./src/img/burger4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53fb9ebb432f3f28853d.jpg";

/***/ }),

/***/ "./src/img/burger5.jpg":
/*!*****************************!*\
  !*** ./src/img/burger5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4c1fcc3aa7e84cb14e.jpg";

/***/ }),

/***/ "./src/img/burger6.jpg":
/*!*****************************!*\
  !*** ./src/img/burger6.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3b4cc54c6e4f1d8b36c.jpg";

/***/ }),

/***/ "./src/img/burger8.jpg":
/*!*****************************!*\
  !*** ./src/img/burger8.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66b04a9118d4473820cb.jpg";

/***/ }),

/***/ "./src/img/burger9.jpg":
/*!*****************************!*\
  !*** ./src/img/burger9.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "680c98974ce946824c60.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





const buttons = document.querySelectorAll("a");
const content = document.querySelector("#content");
const transition = document.querySelector("#transition");
let currentPage = "homepage";

// Function to change a page
function changePage(showPage) {
  transition.classList.add("is-transitioning");
  transition.addEventListener("transitionend", () => {
    content.innerHTML = "";
    showPage();
    transition.classList.remove("is-transitioning");
  });
}

// Add event listeners to the nav buttons
function activateButtons() {
  buttons[0].addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage != "homepage") {
      changePage(showHomepage);
      currentPage = "homepage";
    }
  });
  buttons[1].addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage != "menu") {
      changePage(showMenu);
      currentPage = "menu";
    }
  });
  buttons[2].addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage != "about") {
      changePage(showAbout);
      currentPage = "about";
    }
  });
}

// Add active class
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// The homepage
function showHomepage() {
  content.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])().container);
}

// The menu page
function showMenu() {
  content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

// The about page
function showAbout() {
  content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])().iframeContainer);
  content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])().aboutContainer);
}

// Show the homepage when the page is loaded
showHomepage();
activateButtons();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2T0FBNk8sWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxL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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGaUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw0Q0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RG1CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsUUFBUTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkw3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNZO0FBQ047QUFDVTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQixxREFBUTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFhO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQUs7QUFDM0Isc0JBQXNCLGtEQUFLO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NDBmNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTUzNnB4O1xuICB9XG59XG4ucG9pbnRlci1ldmVudHMtbm9uZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluc2V0LTAge1xuICBpbnNldDogMHB4O1xufVxuLi10b3AtOCB7XG4gIHRvcDogLTJyZW07XG59XG4uYm90dG9tLTAge1xuICBib3R0b206IDBweDtcbn1cbi56LTEwIHtcbiAgei1pbmRleDogMTA7XG59XG4uLW14LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IC0yLjVyZW07XG4gIG1hcmdpbi1yaWdodDogLTIuNXJlbTtcbn1cbi5teC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5tYi01IHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5tYi02IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ubXQtNyB7XG4gIG1hcmdpbi10b3A6IDEuNzVyZW07XG59XG4ubXQtOCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXgtdy02eGwge1xuICBtYXgtd2lkdGg6IDcycmVtO1xufVxuLm1heC13LXNjcmVlbi1zbSB7XG4gIG1heC13aWR0aDogNjQwcHg7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5vdmVyZmxvdy15LXNjcm9sbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5ib3JkZXItYiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbn1cbi5ib3JkZXItZ3JheS04MDAge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLXRyYW5zcGFyZW50IHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5iZy1ncmF5LTgwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnAtMTAge1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG4ucC02IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLnAtOCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucHgtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xufVxuLnBiLTEwIHtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn1cbi5wYi0zIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG59XG4ucHQtNCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsaWduLWJhc2VsaW5lIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLmFsaWduLWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uZm9udC1zYW5zIHtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG59XG4udGV4dC01eGwge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtXFxcXFsxOHB4XFxcXF0ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5sZWFkaW5nLW5vbmUge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5sZWFkaW5nLXRpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4udHJhY2tpbmctbm9ybWFsIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbn1cbi50ZXh0LWFtYmVyLTEwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI1NCAyNDMgMTk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1mdWNoc2lhLTMwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI0MCAxNzEgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1mdWNoc2lhLTQwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDIzMiAxMjEgMjQ5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1ncmF5LTYwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYW50aWFsaWFzZWQge1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi5zaGFkb3cteGwge1xuICAtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDhweCAxMHB4IC02cHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAyMHB4IDI1cHggLTVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDhweCAxMHB4IC02cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cbi5yaW5nIHtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoM3B4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XG59XG4udHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cbmh0bWwge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmhlYWRlciBuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCA0NywgMTA1KTtcbn1cbmhlYWRlciBzdmcge1xuICBmaWxsOiByZ2IoMTgxLCA0NywgMTA1KTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLmFjdGl2ZSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm1hcCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbmlmcmFtZSB7XG4gIGJvcmRlcjogMDtcbn1cblxuI3RyYW5zaXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvdHRvbTogNjAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDE2NHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMTgxLCA0NywgMTA1KSA2NSUsIHRyYW5zcGFyZW50IDY1JSk7XG4gIHotaW5kZXg6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICN0cmFuc2l0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMTgxLCA0NywgMTA1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzcwcHgpIHtcbiAgI3RyYW5zaXRpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxODEsIDQ3LCAxMDUpIDgwJSwgdHJhbnNwYXJlbnQgODAlKTtcbiAgICBib3R0b206IDcwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OXB4KSB7XG4gICN0cmFuc2l0aW9uIHtcbiAgICBib3R0b206IDgwJTtcbiAgfVxufVxuI3RyYW5zaXRpb24gLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgNDcsIDEwNSk7XG4gIGhlaWdodDogNzAlO1xufVxuI3RyYW5zaXRpb24gLnNhdWNlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG59XG4jdHJhbnNpdGlvbiAuc2F1Y2Ugc3ZnIHtcbiAgZmlsbDogcmdiKDE4MSwgNDcsIDEwNSk7XG59XG4jdHJhbnNpdGlvbi5pcy10cmFuc2l0aW9uaW5nIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNjYlKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTlweCkge1xuICAjdHJhbnNpdGlvbi5pcy10cmFuc2l0aW9uaW5nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MCUpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI3RyYW5zaXRpb24uaXMtdHJhbnNpdGlvbmluZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzUlKTtcbiAgfVxufVxuI3RyYW5zaXRpb24uaXMtdHJhbnNpdGlvbmluZyAuc2F1Y2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6Y29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gICAgLm1kXFxcXDpjb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5tZFxcXFw6Y29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gICAgLm1kXFxcXDpjb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gICAgLm1kXFxcXDpjb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xuXG4gICAgLm1kXFxcXDpjb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxNTM2cHg7XG4gICAgfVxuICB9XG59XG4uaG92ZXJcXFxcOnRleHQtZ3JheS04MDA6aG92ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLnNtXFxcXDpteC02IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICB9XG5cbiAgLnNtXFxcXDpibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6cmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tZFxcXFw6bXgtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm1kXFxcXDptYi0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAubWRcXFxcOm1sLTIwIHtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6bWwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAubWRcXFxcOm10LTAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIC5tZFxcXFw6bXQtMTAge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6bXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gIH1cblxuICAubWRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubWRcXFxcOnctMVxcXFwvMiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnB5LTI0IHtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6cHQtMTYge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTJ4bCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtN3hsIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gIC5sZ1xcXFw6dy0xXFxcXC8zIHtcbiAgICB3aWR0aDogMzMuMzMzMzMzJTtcbiAgfVxuXG4gIC5sZ1xcXFw6cHQtNiB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgfVxuXG4gIC5sZ1xcXFw6dGV4dC1cXFxcWzIwcHhcXFxcXSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgLmRhcmtcXFxcOnRleHQtZ3JheS0zMDAge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2IoMjA5IDIxMyAyMTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2Jhc2UuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvY29tcG9uZW50cy5jc3NcIixcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy91dGlsaXRpZXMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBQSxDQUFBOzs7Q0FBQTs7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7RUFBQSxnQkFBQTtBQUFBOztBQUFBOzs7Ozs7OztDQUFBOztBQUFBOztFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUE7S0FBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLCtIQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLCtCQUFBLEVBQUEsTUFBQTtFQUFBLHdDQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7Ozs7Q0FBQTs7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTs7Ozs7O0VBQUEsa0JBQUE7RUFBQSxvQkFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsY0FBQTtFQUFBLHdCQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7O0VBQUEsbUJBQUE7QUFBQTs7QUFBQTs7Ozs7Q0FBQTs7QUFBQTs7OztFQUFBLCtHQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLCtCQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSxjQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7O0VBQUEsY0FBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLHdCQUFBO0FBQUE7O0FBQUE7RUFBQSxlQUFBO0FBQUE7O0FBQUE7RUFBQSxXQUFBO0FBQUE7O0FBQUE7Ozs7Q0FBQTs7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7Ozs7Q0FBQTs7QUFBQTs7Ozs7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSw4QkFBQSxFQUFBLE1BQUE7RUFBQSxnQ0FBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxVQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLG9CQUFBO0FBQUE7O0FBQUE7OztDQUFBOztBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSxhQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSxnQkFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsd0JBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTs7RUFBQSxZQUFBO0FBQUE7O0FBQUE7OztDQUFBOztBQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSx3QkFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLGFBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSxrQkFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBOztBQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTs7QUFBQTtFQUFBLFVBQUE7QUFBQTs7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBOztBQUFBOztDQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSxnQkFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTtFQUFBLFVBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7RUFBQSxVQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7O0VBQUEsZUFBQTtBQUFBOztBQUFBOztDQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7O0FBQUE7Ozs7Q0FBQTs7QUFBQTs7Ozs7Ozs7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHNCQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLGVBQUE7RUFBQSxZQUFBO0FBQUE7O0FBQUEsd0VBQUE7QUFBQTtFQUFBLGFBQUE7QUFBQTs7QUFBQTtFQUFBLHdCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUFBLG1CQUFBO0VBQUEsY0FBQTtFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLGVBQUE7RUFBQSxhQUFBO0VBQUEsYUFBQTtFQUFBLGtCQUFBO0VBQUEsc0NBQUE7RUFBQSw4QkFBQTtFQUFBLDZCQUFBO0VBQUEsNEJBQUE7RUFBQSxlQUFBO0VBQUEsb0JBQUE7RUFBQSxzQkFBQTtFQUFBLHVCQUFBO0VBQUEsd0JBQUE7RUFBQSxrQkFBQTtFQUFBLDJCQUFBO0VBQUEsNEJBQUE7RUFBQSxzQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUFBLDhCQUFBO0VBQUEsWUFBQTtFQUFBLGtCQUFBO0VBQUEsZ0JBQUE7RUFBQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUEsY0FBQTtFQUFBLGdCQUFBO0VBQUEsYUFBQTtFQUFBLG1CQUFBO0VBQUEscUJBQUE7RUFBQSwyQkFBQTtFQUFBLHlCQUFBO0VBQUEsMEJBQUE7RUFBQSwyQkFBQTtFQUFBLHVCQUFBO0VBQUEsd0JBQUE7RUFBQSx5QkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSx3QkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsY0FBQTtFQUFBLGVBQUE7RUFBQSxlQUFBO0VBQUEsYUFBQTtFQUFBLGFBQUE7RUFBQSxrQkFBQTtFQUFBLHNDQUFBO0VBQUEsOEJBQUE7RUFBQSw2QkFBQTtFQUFBLDRCQUFBO0VBQUEsZUFBQTtFQUFBLG9CQUFBO0VBQUEsc0JBQUE7RUFBQSx1QkFBQTtFQUFBLHdCQUFBO0VBQUEsa0JBQUE7RUFBQSwyQkFBQTtFQUFBLDRCQUFBO0VBQUEsc0NBQUE7RUFBQSxrQ0FBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFBQSw4QkFBQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBLGdCQUFBO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLGNBQUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLHFCQUFBO0VBQUEsMkJBQUE7RUFBQSx5QkFBQTtFQUFBLDBCQUFBO0VBQUEsMkJBQUE7RUFBQSx1QkFBQTtFQUFBLHdCQUFBO0VBQUEseUJBQUE7RUFBQTtBQUFBO0FDQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQ0FBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFB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R3VGQzs7RUh2RkQ7SUFBQSxxQkd1RkM7SUh2RkQ7RUd1RkM7O0VIdkZEO0lBQUEsaUJHdUZDO0lIdkZEO0VHdUZDOztFSHZGRDtJQUFBO0VHdUZDOztFSHZGRDtJQUFBLGlCR3VGQztJSHZGRDtFR3VGQzs7RUh2RkQ7SUFBQSxpQkd1RkM7SUh2RkQ7RUd1RkM7QUFBQTtBSHZGRDs7RUFBQTtJQUFBO0VHdUZDOztFSHZGRDtJQUFBO0VHdUZDOztFSHZGRDtJQUFBO0VHdUZDO0FBQUE7QUh2RkQ7O0VBQUE7SUFBQSxvQkd1RkM7SUh2RkQ7RUd1RkM7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5cIixcIkB0YWlsd2luZCBjb21wb25lbnRzO1xcblwiLFwiQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIixcIkBpbXBvcnQgXFxcInRhaWx3aW5kY3NzL2Jhc2VcXFwiO1xcbkBpbXBvcnQgXFxcInRhaWx3aW5kY3NzL2NvbXBvbmVudHNcXFwiO1xcbkBpbXBvcnQgXFxcInRhaWx3aW5kY3NzL3V0aWxpdGllc1xcXCI7XFxuXFxuJG1lbnUtY29sb3I6IHJnYigxODEsIDQ3LCAxMDUpO1xcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIG5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWNvbG9yO1xcbiAgfVxcblxcbiAgc3ZnIHtcXG4gICAgZmlsbDogJG1lbnUtY29sb3I7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgQGFwcGx5IHRleHQtZ3JheS04MDA7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYXAge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuaWZyYW1lIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuI3RyYW5zaXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3R0b206IDYwJTtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTY0dmg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1lbnUtY29sb3IgNjUlLCB0cmFuc3BhcmVudCA2NSUpO1xcbiAgei1pbmRleDogMTtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1lbnUtY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUpO1xcbiAgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNzBweCkge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWVudS1jb2xvciA4MCUsIHRyYW5zcGFyZW50IDgwJSk7XFxuICAgIGJvdHRvbTogNzAlO1xcbiAgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5OXB4KSB7XFxuICAgIGJvdHRvbTogODAlO1xcbiAgfVxcblxcbiAgLmJnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtY29sb3I7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgfVxcblxcbiAgLnNhdWNlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4xNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgZmlsbDogJG1lbnUtY29sb3I7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYuaXMtdHJhbnNpdGlvbmluZyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDY2JSk7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTlweCkge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwJSk7XFxuICAgIH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzUlKTtcXG4gICAgfVxcblxcbiAgICAuc2F1Y2Uge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhYm91dCgpIHtcbiAgY29uc3QgaWZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWZyYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYnNvbHV0ZVwiLCBcImluc2V0LTBcIiwgXCItdG9wLThcIik7XG5cbiAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgaWZyYW1lLnNyYyA9XG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3NTM1OC45ODYzNjAwMDYhMmQ4LjYyNTEwMjc1NzAxNzA3ITNkNTMuODI1NjM5MzQzOTg4OTkhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3YjQwM2RhMmZmMzMxNDklM0EweDQyNmNmNzc2MzAwNmIzMCEyc0N1eGhhdmVuITVlMCEzbTIhMXNkZSEyc2RlITR2MTcwNzc3Njk0MzIyNiE1bTIhMXNkZSEyc2RlXCI7XG4gIGlmcmFtZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XG4gIGlmcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcIm1kOmNvbnRhaW5lclwiLFxuICAgIFwibWQ6cHgtNVwiLFxuICAgIFwibWQ6cHktMjRcIixcbiAgICBcIm1kOm14LWF1dG9cIixcbiAgICBcIm1kOmZsZXhcIixcbiAgICBcInctZnVsbFwiLFxuICAgIFwiaC1mdWxsXCJcbiAgKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXG4gICAgXCJsZzp3LTEvM1wiLFxuICAgIFwibWQ6dy0xLzJcIixcbiAgICBcImJnLWdyYXktODAwXCIsXG4gICAgXCJwLThcIixcbiAgICBcImZsZXhcIixcbiAgICBcImZsZXgtY29sXCIsXG4gICAgXCJtZDptbC1hdXRvXCIsXG4gICAgXCJ3LWZ1bGxcIixcbiAgICBcIm10LTEwXCIsXG4gICAgXCJtZDptdC0wXCIsXG4gICAgXCJtZDpyZWxhdGl2ZVwiLFxuICAgIFwiYWJzb2x1dGVcIixcbiAgICBcInotMVwiLFxuICAgIFwic2hhZG93LXhsXCIsXG4gICAgXCJ0ZXh0LWZ1Y2hzaWEtNDAwXCIsXG4gICAgXCJtZDpyZWxhdGl2ZVwiLFxuICAgIFwiYm90dG9tLTBcIlxuICApO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJ0ZXh0LXhsXCIsXG4gICAgXCJmb250LWJvbGRcIixcbiAgICBcInVwcGVyY2FzZVwiLFxuICAgIFwibWItNlwiLFxuICAgIFwiaGlkZGVuXCIsXG4gICAgXCJzbTpibG9ja1wiXG4gICk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJHcmFiIHlvdXIgYnVyZ2VyXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImZvbnQtYm9sZFwiKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkJpZyBCdXJnZXIgTWFkbmVzc1wiO1xuICBhYm91dC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYTEuY2xhc3NMaXN0LmFkZChcImZvbnQtYm9sZFwiLCBcIm1iLTZcIik7XG4gIHBhcmExLmlubmVySFRNTCA9IFwiQW0gU3RyYW5kIDFBPC9icj41MTE4NyBDdXhoYXZlblwiO1xuICBhYm91dC5hcHBlbmRDaGlsZChwYXJhMSk7XG5cbiAgY29uc3QgdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbC50ZXh0Q29udGVudCA9IFwiKzQ5IDQ3MjEgMjI5OThcIjtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQodGVsKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwic2VsZi1zdGFydFwiLCBcImJvcmRlci1iXCIsIFwiYm9yZGVyLWdyYXktODAwXCIpO1xuICBlbWFpbC5ocmVmID0gXCJtYWlsdG86aGVsbG9AYmlnYnVyZ2VybWFkbmVzcy5jb21cIjtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBcImhlbGxvQGJpZ2J1cmdlcm1hZG5lc3MuY29tXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICByZXR1cm4ge1xuICAgIGlmcmFtZUNvbnRhaW5lcixcbiAgICBhYm91dENvbnRhaW5lcixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCJpbXBvcnQgYnVyZ2VyIGZyb20gXCIuL2ltZy9idXJnZXIucG5nXCI7XG5cbmZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcInctZnVsbFwiLFxuICAgIFwiZmxleFwiLFxuICAgIFwiZmxleC1jb2xcIixcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgIFwibWF4LXctNnhsXCIsXG4gICAgXCJteC1hdXRvXCIsXG4gICAgXCJtZDptdC0xMlwiLFxuICAgIFwicC02XCJcbiAgKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkJpZyBCdXJnZXIgTWFkbmVzc1wiO1xuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiYmxvY2tcIixcbiAgICBcImZvbnQtc2Fuc1wiLFxuICAgIFwidGV4dC01eGxcIixcbiAgICBcIm1kOnRleHQtN3hsXCIsXG4gICAgXCJmb250LWJvbGRcIixcbiAgICBcImxlYWRpbmctdGlnaHRcIixcbiAgICBcInRyYWNraW5nLW5vcm1hbFwiLFxuICAgIFwiYW50aWFsaWFzZWRcIixcbiAgICBcInRleHQtZnVjaHNpYS0zMDBcIixcbiAgICBcInRleHQtY2VudGVyXCJcbiAgKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIkdldCByZWFkeSBmb3IgYSBqdWljeSwgbWVzc3ksIG1pbmQtYmxvd2luZyBleHBlcmllbmNlIVwiO1xuICBwYXJhLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJmb250LXNhbnNcIixcbiAgICBcInRleHQteGxcIixcbiAgICBcIm1kOnRleHQtMnhsXCIsXG4gICAgXCJmb250LXNlbWlib2xkXCIsXG4gICAgXCJ0ZXh0LWZ1Y2hzaWEtNDAwXCIsXG4gICAgXCJtdC0yXCIsXG4gICAgXCJ0ZXh0LWNlbnRlclwiXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XG4gIGltZzEuc3JjID0gYnVyZ2VyO1xuICBpbWcxLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJtZDptbC0yMFwiLFxuICAgIFwibWQ6bXQtMTBcIixcbiAgICBcIm10LTdcIixcbiAgICBcIm1heC13LXNjcmVlbi1zbVwiLFxuICAgIFwidy1mdWxsXCJcbiAgKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZzEpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcbiIsImltcG9ydCBidXJnZXJJbWcxIGZyb20gXCIuL2ltZy9idXJnZXIxLmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzIgZnJvbSBcIi4vaW1nL2J1cmdlcjIuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1nMyBmcm9tIFwiLi9pbWcvYnVyZ2VyMy5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWc0IGZyb20gXCIuL2ltZy9idXJnZXI0LmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzUgZnJvbSBcIi4vaW1nL2J1cmdlcjUuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1nNiBmcm9tIFwiLi9pbWcvYnVyZ2VyNi5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWc4IGZyb20gXCIuL2ltZy9idXJnZXI4LmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzkgZnJvbSBcIi4vaW1nL2J1cmdlcjkuanBnXCI7XG5cbmNsYXNzIEZvb2RJdGVtIHtcbiAgY29uc3RydWN0b3IoaWQsIGhlYWRsaW5lLCBpbWdVUkwsIGRlc2MsIHByaWNlKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaGVhZGxpbmUgPSBoZWFkbGluZTtcbiAgICB0aGlzLmltZ1VSTCA9IGltZ1VSTDtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2RJdGVtSFRNTChmb29kSXRlbXMpIHtcbiAgLy8gQ29udGFpbmVyIGZvciBhbGwgZm9vZCBpdGVtc1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcInctZnVsbFwiLFxuICAgIFwibWF4LXctNnhsXCIsXG4gICAgXCJwdC00XCIsXG4gICAgXCJtZDpwdC0xNlwiLFxuICAgIFwicGItMTBcIixcbiAgICBcInB4LTEwXCIsXG4gICAgXCJteC1hdXRvXCIsXG4gICAgXCJyZWxhdGl2ZVwiXG4gICk7XG5cbiAgZm9vZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyBDb250YWluZXIgZm9yIGEgc2luZ2xlIGZvb2QgaXRlbVxuICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pdGVtXCIsIGBpZC0ke2l0ZW0uaWR9YCwgXCJwLTEwXCIpO1xuXG4gICAgLy8gSW5uZXIgY29udGFpbmVyIGZvciBhIHNpbmdsZSBmb29kIGl0ZW1cbiAgICBjb25zdCBpdGVtRWxlbWVudElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRWxlbWVudElubmVyLmNsYXNzTGlzdC5hZGQoXCJtZDpmbGV4XCIsIFwiaXRlbXMtY2VudGVyXCIsIFwiLW14LTEwXCIpO1xuICAgIGl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50SW5uZXIpO1xuXG4gICAgLy8gTGVmdCBwYXJ0IG9mIGEgc2luZ2xlIGZvb2QgaXRlbVxuICAgIGNvbnN0IGl0ZW1FbGVtZW50TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUVsZW1lbnRMZWZ0LmNsYXNzTGlzdC5hZGQoXCJ3LWZ1bGxcIiwgXCJtZDp3LTEvMlwiLCBcIm1iLTEwXCIsIFwibWQ6bWItMFwiKTtcbiAgICBpdGVtRWxlbWVudElubmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50TGVmdCk7XG5cbiAgICAvLyBGb29kIGl0ZW0gaW1hZ2VcbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZChcInNoYWRvdy14bFwiKTtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWdVUkw7XG4gICAgaXRlbUVsZW1lbnRMZWZ0LmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XG5cbiAgICAvLyBSaWdodCBwYXJ0IG9mIGEgc2luZ2xlIGZvb2QgaXRlbVxuICAgIGNvbnN0IGl0ZW1FbGVtZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1FbGVtZW50UmlnaHQuY2xhc3NMaXN0LmFkZChcInctZnVsbFwiLCBcIm1kOnctMS8yXCIsIFwibWQ6cHgtMTBcIik7XG4gICAgaXRlbUVsZW1lbnRJbm5lci5hcHBlbmRDaGlsZChpdGVtRWxlbWVudFJpZ2h0KTtcblxuICAgIC8vIEZvb2QgaXRlbSB0aXRsZVxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZvbnQtYm9sZFwiLFxuICAgICAgXCJ1cHBlcmNhc2VcIixcbiAgICAgIFwidGV4dC0zeGxcIixcbiAgICAgIFwibWItNVwiLFxuICAgICAgXCJ0ZXh0LWZ1Y2hzaWEtMzAwXCJcbiAgICApO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5oZWFkbGluZTtcbiAgICBpdGVtRWxlbWVudFJpZ2h0LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgIC8vIEZvb2QgaXRlbSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGV4dC1sZ1wiLCBcInRleHQtZnVjaHNpYS00MDBcIik7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xuICAgIGl0ZW1FbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICAgIC8vIEZvb2QgaXRlbSBwcmljZSBjb250YWluZXJcbiAgICBjb25zdCBpdGVtUHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1QcmljZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJibG9ja1wiLFxuICAgICAgXCJhbGlnbi1ib3R0b21cIixcbiAgICAgIFwibXQtOFwiLFxuICAgICAgXCJ0ZXh0LWZ1Y2hzaWEtMzAwXCIsXG4gICAgICBcImZvbnQtYm9sZFwiXG4gICAgKTtcbiAgICBpdGVtRWxlbWVudFJpZ2h0LmFwcGVuZENoaWxkKGl0ZW1QcmljZUNvbnRhaW5lcik7XG5cbiAgICAvLyBGb29kIGl0ZW0gcHJpY2UgKDEpXG4gICAgY29uc3QgaXRlbVByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGl0ZW1QcmljZTEuY2xhc3NMaXN0LmFkZChcInRleHQtMnhsXCIsIFwibGVhZGluZy1ub25lXCIsIFwiYWxpZ24tYmFzZWxpbmVcIik7XG4gICAgaXRlbVByaWNlMS50ZXh0Q29udGVudCA9IFwi4oKsXCI7XG4gICAgaXRlbVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZTEpO1xuXG4gICAgLy8gRm9vZCBpdGVtIHByaWNlICgyKVxuICAgIGNvbnN0IGl0ZW1QcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpdGVtUHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTV4bFwiLCBcImxlYWRpbmctbm9uZVwiLCBcImFsaWduLWJhc2VsaW5lXCIpO1xuICAgIGNvbnN0IGdldE51bWJlclBhcnRzID0gaXRlbS5wcmljZS5zcGxpdChcIi5cIik7XG4gICAgaXRlbVByaWNlMi50ZXh0Q29udGVudCA9IGdldE51bWJlclBhcnRzWzBdO1xuICAgIGl0ZW1QcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UyKTtcblxuICAgIC8vIEZvb2QgaXRlbSBwcmljZSAoMylcbiAgICBjb25zdCBpdGVtUHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaXRlbVByaWNlMy5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIiwgXCJsZWFkaW5nLW5vbmVcIiwgXCJhbGlnbi1iYXNlbGluZVwiKTtcbiAgICBpdGVtUHJpY2UzLnRleHRDb250ZW50ID0gYC4ke2dldE51bWJlclBhcnRzWzFdfWA7XG4gICAgaXRlbVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZTMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcbiAgfSk7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTYwMFwiKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gXCJBbGwgcGhvdG9zIHZpYSB1bnNwbGFzaC5jb21cIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgZm9vZEl0ZW1zID0gW1xuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCIxXCIsXG4gICAgXCJUaGUgRmxhdm9yIEJvbWJcIixcbiAgICBidXJnZXJJbWcxLFxuICAgIFwiU3RhY2tlZCB3aXRoIGNhcmFtZWxpemVkIG9uaW9ucywgY3Jpc3B5IGJhY29uLCBtZWx0eSBwZXBwZXIgamFjayBjaGVlc2UsIGFuZCBhIHNwaWN5IHNlY3JldCBzYXVjZS5cIixcbiAgICBcIjkuOTlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCIyXCIsXG4gICAgXCJUaGUgQ2Fybml2b3JlJ3MgRGVsaWdodFwiLFxuICAgIGJ1cmdlckltZzIsXG4gICAgXCJKYWxhcGXDsW9zLCBmaWVyeSBwZXBwZXIgcmVsaXNoLCBtb2x0ZW4gY2hlZXNlIHNhdWNlLCBhbmQgYSBzcHJpbmtsZSBvZiBjcnVzaGVkIHRvcnRpbGxhIGNoaXBzIGZvciBleHRyYSBjcnVuY2guXCIsXG4gICAgXCIxMi45OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjNcIixcbiAgICBcIkhvdCBNZXNzIEV4cHJlc3NcIixcbiAgICBidXJnZXJJbWczLFxuICAgIFwiRG91YmxlIGJlZWYgcGF0dHksIGV4dHJhIGJhY29uLCBwdWxsZWQgcG9yaywgYW5kIGEgZnJpZWQgZWdnIGZvciBnb29kIG1lYXN1cmUuIEEgdHJ1ZSBtZWF0IGxvdmVyJ3MgZmVhc3QuXCIsXG4gICAgXCI3Ljk5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiNFwiLFxuICAgIFwiVGhlIE1hYyBEYWRkeVwiLFxuICAgIGJ1cmdlckltZzQsXG4gICAgXCJCZWVmIHBhdHR5IG5lc3RsZWQgb24gYSBiZWQgb2YgY3JlYW15IG1hYyBhbmQgY2hlZXNlLCB0b3BwZWQgd2l0aCBjcmlzcHkgYnJlYWRjcnVtYnMuIERlY2FkZW5jZSByZWRlZmluZWQuXCIsXG4gICAgXCIxMC40OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjVcIixcbiAgICBcIlN3ZWV0ICduJyBTbW9reSBTdGFja1wiLFxuICAgIGJ1cmdlckltZzUsXG4gICAgXCJTd2VldCBiYXJiZWN1ZSBzYXVjZSwgc21va2VkIGdvdWRhLCBtYXBsZS1nbGF6ZWQgYmFjb24sIGFuZCBhIHRhbmd5IG9uaW9uIHJpbmcuIEEgZmxhdm9yIHJvbGxlcmNvYXN0ZXIuXCIsXG4gICAgXCIxMC45OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjZcIixcbiAgICBcIlRoZSBIYW5nb3ZlciBIZWxwZXJcIixcbiAgICBidXJnZXJJbWc2LFxuICAgIFwiQ3Jpc3B5IGhhc2hicm93biBwYXR0eSwgbWVsdHkgY2hlZGRhciwgYSBmcmllZCBlZ2csIGFuZCBhIGRyaXp6bGUgb2YgaG9sbGFuZGFpc2Ugc2F1Y2UuIEJyZWFrZmFzdCBtZWV0cyBidXJnZXIgcGFyYWRpc2UuXCIsXG4gICAgXCIxMy45OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjhcIixcbiAgICBcIlBCJkogQmxpdHpcIixcbiAgICBidXJnZXJJbWc4LFxuICAgIFwiQSBkYXJpbmcgY29tYm8hIFNhdm9yeSBiZWVmIHBhdHR5LCBtZWx0ZWQgcGVhbnV0IGJ1dHRlciwgc3dlZXQgYW5kIHNwaWN5IGphbGFwZW5vIGplbGx5LCBhbmQgY3J1bmNoeSBiYWNvbi5cIixcbiAgICBcIjEyLjk5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiOVwiLFxuICAgIFwiVGhlIFdhZmZsZSBDcmF6ZVwiLFxuICAgIGJ1cmdlckltZzksXG4gICAgXCJCdXJnZXIgc2FuZHdpY2hlZCBiZXR3ZWVuIHR3byBjcmlzcCB3YWZmbGVzLCBhIGRyaXp6bGUgb2YgbWFwbGUgc3lydXAsIGFuZCBhIHNpZGUgb2YgY3Jpc3B5IGZyaWVkIGNoaWNrZW4uIFN3ZWV0LCBzYXZvcnksIGFuZCB1dHRlcmx5IG1pbmQtYmxvd2luZy5cIixcbiAgICBcIjE2LjQ5XCJcbiAgKSxcbl07XG5cbmNvbnN0IGZvb2RJdGVtc0hUTUwgPSBnZW5lcmF0ZUZvb2RJdGVtSFRNTChmb29kSXRlbXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmb29kSXRlbXNIVE1MO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBob21lcGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgZm9vZEl0ZW1zSFRNTCBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCB0cmFuc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmFuc2l0aW9uXCIpO1xubGV0IGN1cnJlbnRQYWdlID0gXCJob21lcGFnZVwiO1xuXG4vLyBGdW5jdGlvbiB0byBjaGFuZ2UgYSBwYWdlXG5mdW5jdGlvbiBjaGFuZ2VQYWdlKHNob3dQYWdlKSB7XG4gIHRyYW5zaXRpb24uY2xhc3NMaXN0LmFkZChcImlzLXRyYW5zaXRpb25pbmdcIik7XG4gIHRyYW5zaXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzaG93UGFnZSgpO1xuICAgIHRyYW5zaXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImlzLXRyYW5zaXRpb25pbmdcIik7XG4gIH0pO1xufVxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBuYXYgYnV0dG9uc1xuZnVuY3Rpb24gYWN0aXZhdGVCdXR0b25zKCkge1xuICBidXR0b25zWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lcGFnZVwiKSB7XG4gICAgICBjaGFuZ2VQYWdlKHNob3dIb21lcGFnZSk7XG4gICAgICBjdXJyZW50UGFnZSA9IFwiaG9tZXBhZ2VcIjtcbiAgICB9XG4gIH0pO1xuICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICAgIGNoYW5nZVBhZ2Uoc2hvd01lbnUpO1xuICAgICAgY3VycmVudFBhZ2UgPSBcIm1lbnVcIjtcbiAgICB9XG4gIH0pO1xuICBidXR0b25zWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT0gXCJhYm91dFwiKSB7XG4gICAgICBjaGFuZ2VQYWdlKHNob3dBYm91dCk7XG4gICAgICBjdXJyZW50UGFnZSA9IFwiYWJvdXRcIjtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBZGQgYWN0aXZlIGNsYXNzXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG59KTtcblxuLy8gVGhlIGhvbWVwYWdlXG5mdW5jdGlvbiBzaG93SG9tZXBhZ2UoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UoKS5jb250YWluZXIpO1xufVxuXG4vLyBUaGUgbWVudSBwYWdlXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb29kSXRlbXNIVE1MKTtcbn1cblxuLy8gVGhlIGFib3V0IHBhZ2VcbmZ1bmN0aW9uIHNob3dBYm91dCgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpLmlmcmFtZUNvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKS5hYm91dENvbnRhaW5lcik7XG59XG5cbi8vIFNob3cgdGhlIGhvbWVwYWdlIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXG5zaG93SG9tZXBhZ2UoKTtcbmFjdGl2YXRlQnV0dG9ucygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9