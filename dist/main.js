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
.pb-3 {
  padding-bottom: 0.75rem;
}
.pt-6 {
  padding-top: 1.5rem;
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
}

header nav {
  background-color: rgb(181, 47, 105);
}
header svg {
  fill: rgb(181, 47, 105);
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
@media (max-width: 500px) {
  #transition {
    background: linear-gradient(to bottom, rgb(181, 47, 105) 75%, transparent 75%);
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

  .lg\\:text-\\[20px\\] {
    font-size: 20px;
  }
}
@media (prefers-color-scheme: dark) {

  .dark\\:text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/base.css","webpack://./node_modules/tailwindcss/components.css","webpack://./node_modules/tailwindcss/utilities.css","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n","@tailwind components;\n","@tailwind utilities;\n","@import \"tailwindcss/base\";\n@import \"tailwindcss/components\";\n@import \"tailwindcss/utilities\";\n\n$menu-color: rgb(181, 47, 105);\n\nhtml {\n  height: 100vh;\n}\n\nheader {\n  nav {\n    background-color: $menu-color;\n  }\n\n  svg {\n    fill: $menu-color;\n  }\n}\n\n.active {\n  @apply text-gray-800;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.map {\n  max-width: 600px;\n}\n\niframe {\n  border: 0;\n}\n\n#transition {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  bottom: 60%;\n  left: 0;\n  transform: translate(0, 0);\n  width: 100vw;\n  height: 164vh;\n  transition: all 0.6s ease;\n  background: linear-gradient(to bottom, $menu-color 65%, transparent 65%);\n  z-index: 1;\n\n  @media (max-width: 1600px) {\n    background: linear-gradient(to bottom, $menu-color 75%, transparent 75%);\n  }\n  @media (max-width: 1370px) {\n    background: linear-gradient(to bottom, $menu-color 80%, transparent 80%);\n    bottom: 70%;\n  }\n  @media (max-width: 999px) {\n    bottom: 80%;\n  }\n  @media (max-width: 500px) {\n    background: linear-gradient(to bottom, $menu-color 75%, transparent 75%);\n  }\n\n  .bg {\n    background-color: $menu-color;\n    height: 70%;\n  }\n\n  .sauce {\n    transform: scaleY(0.15);\n    transition: all 0.6s ease;\n\n    svg {\n      fill: $menu-color;\n    }\n  }\n\n  &.is-transitioning {\n    transform: translate(0, 66%);\n\n    @media (max-width: 999px) {\n      transform: translate(0, 70%);\n    }\n    @media (max-width: 500px) {\n      transform: translate(0, 75%);\n    }\n\n    .sauce {\n      transform: scaleY(1);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  title.classList.add("text-xl", "font-bold", "uppercase", "mb-6");
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
  container.classList.add("w-full", "max-w-6xl", "p-10", "mx-auto", "relative");

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
  buttons[0].addEventListener("click", function () {
    if (currentPage != "homepage") {
      changePage(showHomepage);
      currentPage = "homepage";
    }
  });
  buttons[1].addEventListener("click", function () {
    if (currentPage != "menu") {
      changePage(showMenu);
      currentPage = "menu";
    }
  });
  buttons[2].addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNk9BQTZPLFlBQVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFX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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0VpQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDRDQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEbUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFROztBQUV6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxSzdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1k7QUFDTjtBQUNVOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFRO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQWE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixrREFBSztBQUMzQixzQkFBc0Isa0RBQUs7QUFDM0I7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz80MGY3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My40LjEgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XG4gIH1cbn1cbi5wb2ludGVyLWV2ZW50cy1ub25lIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5zZXQtMCB7XG4gIGluc2V0OiAwcHg7XG59XG4uLXRvcC04IHtcbiAgdG9wOiAtMnJlbTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLnotMTAge1xuICB6LWluZGV4OiAxMDtcbn1cbi4tbXgtMTAge1xuICBtYXJnaW4tbGVmdDogLTIuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMi41cmVtO1xufVxuLm14LTMge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xufVxuLm14LWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLm1iLTUge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLm1iLTYge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5tdC03IHtcbiAgbWFyZ2luLXRvcDogMS43NXJlbTtcbn1cbi5tdC04IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXgtdy02eGwge1xuICBtYXgtd2lkdGg6IDcycmVtO1xufVxuLm1heC13LXNjcmVlbi1zbSB7XG4gIG1heC13aWR0aDogNjQwcHg7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5vdmVyZmxvdy15LXNjcm9sbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5ib3JkZXItYiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbn1cbi5ib3JkZXItZ3JheS04MDAge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLXRyYW5zcGFyZW50IHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5iZy1ncmF5LTgwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnAtMTAge1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG4ucC02IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLnAtOCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucGItMyB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xufVxuLnB0LTYge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsaWduLWJhc2VsaW5lIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLmFsaWduLWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uZm9udC1zYW5zIHtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtM3hsIHtcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG59XG4udGV4dC01eGwge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtXFxcXFsxOHB4XFxcXF0ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5sZWFkaW5nLW5vbmUge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5sZWFkaW5nLXRpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4udHJhY2tpbmctbm9ybWFsIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbn1cbi50ZXh0LWFtYmVyLTEwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI1NCAyNDMgMTk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1mdWNoc2lhLTMwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI0MCAxNzEgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1mdWNoc2lhLTQwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDIzMiAxMjEgMjQ5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1ncmF5LTYwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYW50aWFsaWFzZWQge1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi5zaGFkb3cteGwge1xuICAtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDhweCAxMHB4IC02cHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAyMHB4IDI1cHggLTVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDhweCAxMHB4IC02cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cbi5yaW5nIHtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoM3B4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XG59XG4udHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cbmh0bWwge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIgbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgNDcsIDEwNSk7XG59XG5oZWFkZXIgc3ZnIHtcbiAgZmlsbDogcmdiKDE4MSwgNDcsIDEwNSk7XG59XG5cbi5hY3RpdmUge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5tYXAge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG5pZnJhbWUge1xuICBib3JkZXI6IDA7XG59XG5cbiN0cmFuc2l0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3R0b206IDYwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxNjR2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE4MSwgNDcsIDEwNSkgNjUlLCB0cmFuc3BhcmVudCA2NSUpO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAjdHJhbnNpdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE4MSwgNDcsIDEwNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM3MHB4KSB7XG4gICN0cmFuc2l0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMTgxLCA0NywgMTA1KSA4MCUsIHRyYW5zcGFyZW50IDgwJSk7XG4gICAgYm90dG9tOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTlweCkge1xuICAjdHJhbnNpdGlvbiB7XG4gICAgYm90dG9tOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjdHJhbnNpdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE4MSwgNDcsIDEwNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUpO1xuICB9XG59XG4jdHJhbnNpdGlvbiAuYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCA0NywgMTA1KTtcbiAgaGVpZ2h0OiA3MCU7XG59XG4jdHJhbnNpdGlvbiAuc2F1Y2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbiN0cmFuc2l0aW9uIC5zYXVjZSBzdmcge1xuICBmaWxsOiByZ2IoMTgxLCA0NywgMTA1KTtcbn1cbiN0cmFuc2l0aW9uLmlzLXRyYW5zaXRpb25pbmcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA2NiUpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OXB4KSB7XG4gICN0cmFuc2l0aW9uLmlzLXRyYW5zaXRpb25pbmcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwJSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjdHJhbnNpdGlvbi5pcy10cmFuc2l0aW9uaW5nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3NSUpO1xuICB9XG59XG4jdHJhbnNpdGlvbi5pcy10cmFuc2l0aW9uaW5nIC5zYXVjZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLm1kXFxcXDpjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLm1kXFxcXDpjb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDE1MzZweDtcbiAgICB9XG4gIH1cbn1cbi5ob3ZlclxcXFw6dGV4dC1ncmF5LTgwMDpob3ZlciB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuc21cXFxcOm14LTYge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6cmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tZFxcXFw6bXgtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm1kXFxcXDptYi0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAubWRcXFxcOm1sLTIwIHtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6bWwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAubWRcXFxcOm10LTAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIC5tZFxcXFw6bXQtMTAge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6bXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gIH1cblxuICAubWRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubWRcXFxcOnctMVxcXFwvMiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnB5LTI0IHtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTd4bCB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAubGdcXFxcOnctMVxcXFwvMyB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cblxuICAubGdcXFxcOnRleHQtXFxcXFsyMHB4XFxcXF0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC5kYXJrXFxcXDp0ZXh0LWdyYXktMzAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9iYXNlLmNzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2NvbXBvbmVudHMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdXRpbGl0aWVzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQUEsQ0FBQTs7O0NBQUE7O0FBQUE7OztFQUFBLHNCQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsbUJBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0VBQUEsZ0JBQUE7QUFBQTs7QUFBQTs7Ozs7Ozs7Q0FBQTs7QUFBQTs7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSw4QkFBQSxFQUFBLE1BQUE7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBO0tBQUEsV0FBQSxFQUFBLE1BQUE7RUFBQSwrSEFBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSwrQkFBQSxFQUFBLE1BQUE7RUFBQSx3Q0FBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7O0NBQUE7O0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTtFQUFBLGNBQUE7RUFBQSx3QkFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLG1CQUFBO0FBQUE7O0FBQUE7Ozs7O0NBQUE7O0FBQUE7Ozs7RUFBQSwrR0FBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSwrQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsY0FBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBOztBQUFBO0VBQUEsZUFBQTtBQUFBOztBQUFBO0VBQUEsV0FBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtFQUFBLHlCQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsOEJBQUEsRUFBQSxNQUFBO0VBQUEsZ0NBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTs7RUFBQSxvQkFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTs7OztFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLHNCQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsYUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsZ0JBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTtFQUFBLHdCQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7O0VBQUEsWUFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsd0JBQUE7QUFBQTs7QUFBQTs7O0NBQUE7O0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVB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QTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLHNCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsZUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG1DQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsZ0ZBQUE7RUFBQSxvR0FBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLDJHQUFBO0VBQUEseUdBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxnS0FBQTtFQUFBLHdKQUFBO0VBQUEsaUxBQUE7RUFBQSx3REFBQTtFQUFBO0FBQUE7QUNNQTtFQUNFLGFBQUE7QUFGRjs7QUFNRTtFQUNFLG1DQVJTO0FBS2I7QUFNRTtFQUNFLHVCQVpTO0FBUWI7O0FBU0U7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsU0FBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBTEY7QUFPRTtFQWJGO0lBY0ksOEVBQUE7RUFKRjtBQUNGO0FBS0U7RUFoQkY7SUFpQkksOEVBQUE7SUFDQSxXQUFBO0VBRkY7QUFDRjtBQUdFO0VBcEJGO0lBcUJJLFdBQUE7RUFBRjtBQUNGO0FBQ0U7RUF2QkY7SUF3QkksOEVBQUE7RUFFRjtBQUNGO0FBQUU7RUFDRSxtQ0E1RFM7RUE2RFQsV0FBQTtBQUVKO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNFLHVCQXJFTztBQXNFYjtBQUdFO0VBQ0UsNEJBQUE7QUFESjtBQUdJO0VBSEY7SUFJSSw0QkFBQTtFQUFKO0FBQ0Y7QUFDSTtFQU5GO0lBT0ksNEJBQUE7RUFFSjtBQUNGO0FBQUk7RUFDRSxvQkFBQTtBQUVOO0FIMUZBOztFQUFBO0lBQUE7RUcwRkM7O0VIMUZEOztJQUFBO01BQUE7SUcwRkM7RUFBQTs7RUgxRkQ7O0lBQUE7TUFBQTtJRzBGQztFQUFBOztFSDFGRDs7SUFBQTtNQUFBO0lHMEZDO0VBQUE7O0VIMUZEOztJQUFBO01BQUE7SUcwRkM7RUFBQTs7RUgxRkQ7O0lBQUE7TUFBQTtJRzBGQztFQUFBO0FBQUE7QUgxRkQ7RUFBQSxvQkcwRkM7RUgxRkQ7QUcwRkM7QUgxRkQ7O0VBQUE7SUFBQSxtQkcwRkM7SUgxRkQ7RUcwRkM7QUFBQTtBSDFGRDs7RUFBQTtJQUFBO0VHMEZDOztFSDFGRDtJQUFBLGlCRzBGQztJSDFGRDtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQSxvQkcwRkM7SUgxRkQ7RUcwRkM7O0VIMUZEO0lBQUEscUJHMEZDO0lIMUZEO0VHMEZDOztFSDFGRDtJQUFBLGlCRzBGQztJSDFGRDtFRzBGQzs7RUgxRkQ7SUFBQSxpQkcwRkM7SUgxRkQ7RUcwRkM7O0VIMUZEO0lBQUEsaUJHMEZDO0lIMUZEO0VHMEZDO0FBQUE7QUgxRkQ7O0VBQUE7SUFBQTtFRzBGQzs7RUgxRkQ7SUFBQTtFRzBGQztBQUFBO0FIMUZEOztFQUFBO0lBQUEsb0JHMEZDO0lIMUZEO0VHMEZDO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuXCIsXCJAdGFpbHdpbmQgY29tcG9uZW50cztcXG5cIixcIkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCIsXCJAaW1wb3J0IFxcXCJ0YWlsd2luZGNzcy9iYXNlXFxcIjtcXG5AaW1wb3J0IFxcXCJ0YWlsd2luZGNzcy9jb21wb25lbnRzXFxcIjtcXG5AaW1wb3J0IFxcXCJ0YWlsd2luZGNzcy91dGlsaXRpZXNcXFwiO1xcblxcbiRtZW51LWNvbG9yOiByZ2IoMTgxLCA0NywgMTA1KTtcXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1jb2xvcjtcXG4gIH1cXG5cXG4gIHN2ZyB7XFxuICAgIGZpbGw6ICRtZW51LWNvbG9yO1xcbiAgfVxcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIEBhcHBseSB0ZXh0LWdyYXktODAwO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFwIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbmlmcmFtZSB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiN0cmFuc2l0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm90dG9tOiA2MCU7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDE2NHZoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtZW51LWNvbG9yIDY1JSwgdHJhbnNwYXJlbnQgNjUlKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtZW51LWNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlKTtcXG4gIH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzcwcHgpIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1lbnUtY29sb3IgODAlLCB0cmFuc3BhcmVudCA4MCUpO1xcbiAgICBib3R0b206IDcwJTtcXG4gIH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTlweCkge1xcbiAgICBib3R0b206IDgwJTtcXG4gIH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWVudS1jb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSk7XFxuICB9XFxuXFxuICAuYmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1jb2xvcjtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICB9XFxuXFxuICAuc2F1Y2Uge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjE1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcXG5cXG4gICAgc3ZnIHtcXG4gICAgICBmaWxsOiAkbWVudS1jb2xvcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi5pcy10cmFuc2l0aW9uaW5nIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNjYlKTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5OXB4KSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzAlKTtcXG4gICAgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3NSUpO1xcbiAgICB9XFxuXFxuICAgIC5zYXVjZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFib3V0KCkge1xuICBjb25zdCBpZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFic29sdXRlXCIsIFwiaW5zZXQtMFwiLCBcIi10b3AtOFwiKTtcblxuICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICBpZnJhbWUuc3JjID1cbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDc1MzU4Ljk4NjM2MDAwNiEyZDguNjI1MTAyNzU3MDE3MDchM2Q1My44MjU2MzkzNDM5ODg5OSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDdiNDAzZGEyZmYzMzE0OSUzQTB4NDI2Y2Y3NzYzMDA2YjMwITJzQ3V4aGF2ZW4hNWUwITNtMiExc2RlITJzZGUhNHYxNzA3Nzc2OTQzMjI2ITVtMiExc2RlITJzZGVcIjtcbiAgaWZyYW1lLmhlaWdodCA9IFwiMTAwJVwiO1xuICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcbiAgaWZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgIFwibWQ6Y29udGFpbmVyXCIsXG4gICAgXCJtZDpweC01XCIsXG4gICAgXCJtZDpweS0yNFwiLFxuICAgIFwibWQ6bXgtYXV0b1wiLFxuICAgIFwibWQ6ZmxleFwiLFxuICAgIFwidy1mdWxsXCIsXG4gICAgXCJoLWZ1bGxcIlxuICApO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcbiAgICBcImxnOnctMS8zXCIsXG4gICAgXCJtZDp3LTEvMlwiLFxuICAgIFwiYmctZ3JheS04MDBcIixcbiAgICBcInAtOFwiLFxuICAgIFwiZmxleFwiLFxuICAgIFwiZmxleC1jb2xcIixcbiAgICBcIm1kOm1sLWF1dG9cIixcbiAgICBcInctZnVsbFwiLFxuICAgIFwibXQtMTBcIixcbiAgICBcIm1kOm10LTBcIixcbiAgICBcIm1kOnJlbGF0aXZlXCIsXG4gICAgXCJhYnNvbHV0ZVwiLFxuICAgIFwiei0xXCIsXG4gICAgXCJzaGFkb3cteGxcIixcbiAgICBcInRleHQtZnVjaHNpYS00MDBcIixcbiAgICBcIm1kOnJlbGF0aXZlXCIsXG4gICAgXCJib3R0b20tMFwiXG4gICk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIiwgXCJmb250LWJvbGRcIiwgXCJ1cHBlcmNhc2VcIiwgXCJtYi02XCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiR3JhYiB5b3VyIGJ1cmdlclwiO1xuICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJmb250LWJvbGRcIik7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJCaWcgQnVyZ2VyIE1hZG5lc3NcIjtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmExLmNsYXNzTGlzdC5hZGQoXCJmb250LWJvbGRcIiwgXCJtYi02XCIpO1xuICBwYXJhMS5pbm5lckhUTUwgPSBcIkFtIFN0cmFuZCAxQTwvYnI+NTExODcgQ3V4aGF2ZW5cIjtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQocGFyYTEpO1xuXG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZWwudGV4dENvbnRlbnQgPSBcIis0OSA0NzIxIDIyOTk4XCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKHRlbCk7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZW1haWwuY2xhc3NMaXN0LmFkZChcInNlbGYtc3RhcnRcIiwgXCJib3JkZXItYlwiLCBcImJvcmRlci1ncmF5LTgwMFwiKTtcbiAgZW1haWwuaHJlZiA9IFwibWFpbHRvOmhlbGxvQGJpZ2J1cmdlcm1hZG5lc3MuY29tXCI7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gXCJoZWxsb0BiaWdidXJnZXJtYWRuZXNzLmNvbVwiO1xuICBhYm91dC5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpZnJhbWVDb250YWluZXIsXG4gICAgYWJvdXRDb250YWluZXIsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiaW1wb3J0IGJ1cmdlciBmcm9tIFwiLi9pbWcvYnVyZ2VyLnBuZ1wiO1xuXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJ3LWZ1bGxcIixcbiAgICBcImZsZXhcIixcbiAgICBcImZsZXgtY29sXCIsXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICBcIm1heC13LTZ4bFwiLFxuICAgIFwibXgtYXV0b1wiLFxuICAgIFwibWQ6bXQtMTJcIixcbiAgICBcInAtNlwiXG4gICk7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJCaWcgQnVyZ2VyIE1hZG5lc3NcIjtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcbiAgICBcImJsb2NrXCIsXG4gICAgXCJmb250LXNhbnNcIixcbiAgICBcInRleHQtNXhsXCIsXG4gICAgXCJtZDp0ZXh0LTd4bFwiLFxuICAgIFwiZm9udC1ib2xkXCIsXG4gICAgXCJsZWFkaW5nLXRpZ2h0XCIsXG4gICAgXCJ0cmFja2luZy1ub3JtYWxcIixcbiAgICBcImFudGlhbGlhc2VkXCIsXG4gICAgXCJ0ZXh0LWZ1Y2hzaWEtMzAwXCIsXG4gICAgXCJ0ZXh0LWNlbnRlclwiXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID0gXCJHZXQgcmVhZHkgZm9yIGEganVpY3ksIG1lc3N5LCBtaW5kLWJsb3dpbmcgZXhwZXJpZW5jZSFcIjtcbiAgcGFyYS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiZm9udC1zYW5zXCIsXG4gICAgXCJ0ZXh0LXhsXCIsXG4gICAgXCJtZDp0ZXh0LTJ4bFwiLFxuICAgIFwiZm9udC1zZW1pYm9sZFwiLFxuICAgIFwidGV4dC1mdWNoc2lhLTQwMFwiLFxuICAgIFwibXQtMlwiLFxuICAgIFwidGV4dC1jZW50ZXJcIlxuICApO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgY29uc3QgaW1nMSA9IG5ldyBJbWFnZSgpO1xuICBpbWcxLnNyYyA9IGJ1cmdlcjtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKFxuICAgIFwibWQ6bWwtMjBcIixcbiAgICBcIm1kOm10LTEwXCIsXG4gICAgXCJtdC03XCIsXG4gICAgXCJtYXgtdy1zY3JlZW4tc21cIixcbiAgICBcInctZnVsbFwiXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcxKTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2U7XG4iLCJpbXBvcnQgYnVyZ2VySW1nMSBmcm9tIFwiLi9pbWcvYnVyZ2VyMS5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWcyIGZyb20gXCIuL2ltZy9idXJnZXIyLmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzMgZnJvbSBcIi4vaW1nL2J1cmdlcjMuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1nNCBmcm9tIFwiLi9pbWcvYnVyZ2VyNC5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWc1IGZyb20gXCIuL2ltZy9idXJnZXI1LmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzYgZnJvbSBcIi4vaW1nL2J1cmdlcjYuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1nOCBmcm9tIFwiLi9pbWcvYnVyZ2VyOC5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWc5IGZyb20gXCIuL2ltZy9idXJnZXI5LmpwZ1wiO1xuXG5jbGFzcyBGb29kSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGlkLCBoZWFkbGluZSwgaW1nVVJMLCBkZXNjLCBwcmljZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmhlYWRsaW5lID0gaGVhZGxpbmU7XG4gICAgdGhpcy5pbWdVUkwgPSBpbWdVUkw7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGb29kSXRlbUhUTUwoZm9vZEl0ZW1zKSB7XG4gIC8vIENvbnRhaW5lciBmb3IgYWxsIGZvb2QgaXRlbXNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3LWZ1bGxcIiwgXCJtYXgtdy02eGxcIiwgXCJwLTEwXCIsIFwibXgtYXV0b1wiLCBcInJlbGF0aXZlXCIpO1xuXG4gIGZvb2RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgLy8gQ29udGFpbmVyIGZvciBhIHNpbmdsZSBmb29kIGl0ZW1cbiAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvb2QtaXRlbVwiLCBgaWQtJHtpdGVtLmlkfWAsIFwicC0xMFwiKTtcblxuICAgIC8vIElubmVyIGNvbnRhaW5lciBmb3IgYSBzaW5nbGUgZm9vZCBpdGVtXG4gICAgY29uc3QgaXRlbUVsZW1lbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUVsZW1lbnRJbm5lci5jbGFzc0xpc3QuYWRkKFwibWQ6ZmxleFwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIi1teC0xMFwiKTtcbiAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtRWxlbWVudElubmVyKTtcblxuICAgIC8vIExlZnQgcGFydCBvZiBhIHNpbmdsZSBmb29kIGl0ZW1cbiAgICBjb25zdCBpdGVtRWxlbWVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1FbGVtZW50TGVmdC5jbGFzc0xpc3QuYWRkKFwidy1mdWxsXCIsIFwibWQ6dy0xLzJcIiwgXCJtYi0xMFwiLCBcIm1kOm1iLTBcIik7XG4gICAgaXRlbUVsZW1lbnRJbm5lci5hcHBlbmRDaGlsZChpdGVtRWxlbWVudExlZnQpO1xuXG4gICAgLy8gRm9vZCBpdGVtIGltYWdlXG4gICAgY29uc3QgaXRlbUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaGFkb3cteGxcIik7XG4gICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1nVVJMO1xuICAgIGl0ZW1FbGVtZW50TGVmdC5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuXG4gICAgLy8gUmlnaHQgcGFydCBvZiBhIHNpbmdsZSBmb29kIGl0ZW1cbiAgICBjb25zdCBpdGVtRWxlbWVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRWxlbWVudFJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ3LWZ1bGxcIiwgXCJtZDp3LTEvMlwiLCBcIm1kOnB4LTEwXCIpO1xuICAgIGl0ZW1FbGVtZW50SW5uZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnRSaWdodCk7XG5cbiAgICAvLyBGb29kIGl0ZW0gdGl0bGVcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJmb250LWJvbGRcIixcbiAgICAgIFwidXBwZXJjYXNlXCIsXG4gICAgICBcInRleHQtM3hsXCIsXG4gICAgICBcIm1iLTVcIixcbiAgICAgIFwidGV4dC1mdWNoc2lhLTMwMFwiXG4gICAgKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0uaGVhZGxpbmU7XG4gICAgaXRlbUVsZW1lbnRSaWdodC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICAvLyBGb29kIGl0ZW0gZGVzY3JpcHRpb25cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRleHQtbGdcIiwgXCJ0ZXh0LWZ1Y2hzaWEtNDAwXCIpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcbiAgICBpdGVtRWxlbWVudFJpZ2h0LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICAvLyBGb29kIGl0ZW0gcHJpY2UgY29udGFpbmVyXG4gICAgY29uc3QgaXRlbVByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtUHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiYmxvY2tcIixcbiAgICAgIFwiYWxpZ24tYm90dG9tXCIsXG4gICAgICBcIm10LThcIixcbiAgICAgIFwidGV4dC1mdWNoc2lhLTMwMFwiLFxuICAgICAgXCJmb250LWJvbGRcIlxuICAgICk7XG4gICAgaXRlbUVsZW1lbnRSaWdodC5hcHBlbmRDaGlsZChpdGVtUHJpY2VDb250YWluZXIpO1xuXG4gICAgLy8gRm9vZCBpdGVtIHByaWNlICgxKVxuICAgIGNvbnN0IGl0ZW1QcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpdGVtUHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImxlYWRpbmctbm9uZVwiLCBcImFsaWduLWJhc2VsaW5lXCIpO1xuICAgIGl0ZW1QcmljZTEudGV4dENvbnRlbnQgPSBcIuKCrFwiO1xuICAgIGl0ZW1QcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UxKTtcblxuICAgIC8vIEZvb2QgaXRlbSBwcmljZSAoMilcbiAgICBjb25zdCBpdGVtUHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaXRlbVByaWNlMi5jbGFzc0xpc3QuYWRkKFwidGV4dC01eGxcIiwgXCJsZWFkaW5nLW5vbmVcIiwgXCJhbGlnbi1iYXNlbGluZVwiKTtcbiAgICBjb25zdCBnZXROdW1iZXJQYXJ0cyA9IGl0ZW0ucHJpY2Uuc3BsaXQoXCIuXCIpO1xuICAgIGl0ZW1QcmljZTIudGV4dENvbnRlbnQgPSBnZXROdW1iZXJQYXJ0c1swXTtcbiAgICBpdGVtUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlMik7XG5cbiAgICAvLyBGb29kIGl0ZW0gcHJpY2UgKDMpXG4gICAgY29uc3QgaXRlbVByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGl0ZW1QcmljZTMuY2xhc3NMaXN0LmFkZChcInRleHQtMnhsXCIsIFwibGVhZGluZy1ub25lXCIsIFwiYWxpZ24tYmFzZWxpbmVcIik7XG4gICAgaXRlbVByaWNlMy50ZXh0Q29udGVudCA9IGAuJHtnZXROdW1iZXJQYXJ0c1sxXX1gO1xuICAgIGl0ZW1QcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UzKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZChcInRleHQtZ3JheS02MDBcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQWxsIHBob3RvcyB2aWEgdW5zcGxhc2guY29tXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IGZvb2RJdGVtcyA9IFtcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiMVwiLFxuICAgIFwiVGhlIEZsYXZvciBCb21iXCIsXG4gICAgYnVyZ2VySW1nMSxcbiAgICBcIlN0YWNrZWQgd2l0aCBjYXJhbWVsaXplZCBvbmlvbnMsIGNyaXNweSBiYWNvbiwgbWVsdHkgcGVwcGVyIGphY2sgY2hlZXNlLCBhbmQgYSBzcGljeSBzZWNyZXQgc2F1Y2UuXCIsXG4gICAgXCI5Ljk5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiMlwiLFxuICAgIFwiVGhlIENhcm5pdm9yZSdzIERlbGlnaHRcIixcbiAgICBidXJnZXJJbWcyLFxuICAgIFwiSmFsYXBlw7FvcywgZmllcnkgcGVwcGVyIHJlbGlzaCwgbW9sdGVuIGNoZWVzZSBzYXVjZSwgYW5kIGEgc3ByaW5rbGUgb2YgY3J1c2hlZCB0b3J0aWxsYSBjaGlwcyBmb3IgZXh0cmEgY3J1bmNoLlwiLFxuICAgIFwiMTIuOTlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCIzXCIsXG4gICAgXCJIb3QgTWVzcyBFeHByZXNzXCIsXG4gICAgYnVyZ2VySW1nMyxcbiAgICBcIkRvdWJsZSBiZWVmIHBhdHR5LCBleHRyYSBiYWNvbiwgcHVsbGVkIHBvcmssIGFuZCBhIGZyaWVkIGVnZyBmb3IgZ29vZCBtZWFzdXJlLiBBIHRydWUgbWVhdCBsb3ZlcidzIGZlYXN0LlwiLFxuICAgIFwiNy45OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjRcIixcbiAgICBcIlRoZSBNYWMgRGFkZHlcIixcbiAgICBidXJnZXJJbWc0LFxuICAgIFwiQmVlZiBwYXR0eSBuZXN0bGVkIG9uIGEgYmVkIG9mIGNyZWFteSBtYWMgYW5kIGNoZWVzZSwgdG9wcGVkIHdpdGggY3Jpc3B5IGJyZWFkY3J1bWJzLiBEZWNhZGVuY2UgcmVkZWZpbmVkLlwiLFxuICAgIFwiMTAuNDlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCI1XCIsXG4gICAgXCJTd2VldCAnbicgU21va3kgU3RhY2tcIixcbiAgICBidXJnZXJJbWc1LFxuICAgIFwiU3dlZXQgYmFyYmVjdWUgc2F1Y2UsIHNtb2tlZCBnb3VkYSwgbWFwbGUtZ2xhemVkIGJhY29uLCBhbmQgYSB0YW5neSBvbmlvbiByaW5nLiBBIGZsYXZvciByb2xsZXJjb2FzdGVyLlwiLFxuICAgIFwiMTAuOTlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCI2XCIsXG4gICAgXCJUaGUgSGFuZ292ZXIgSGVscGVyXCIsXG4gICAgYnVyZ2VySW1nNixcbiAgICBcIkNyaXNweSBoYXNoYnJvd24gcGF0dHksIG1lbHR5IGNoZWRkYXIsIGEgZnJpZWQgZWdnLCBhbmQgYSBkcml6emxlIG9mIGhvbGxhbmRhaXNlIHNhdWNlLiBCcmVha2Zhc3QgbWVldHMgYnVyZ2VyIHBhcmFkaXNlLlwiLFxuICAgIFwiMTMuOTlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCI4XCIsXG4gICAgXCJQQiZKIEJsaXR6XCIsXG4gICAgYnVyZ2VySW1nOCxcbiAgICBcIkEgZGFyaW5nIGNvbWJvISBTYXZvcnkgYmVlZiBwYXR0eSwgbWVsdGVkIHBlYW51dCBidXR0ZXIsIHN3ZWV0IGFuZCBzcGljeSBqYWxhcGVubyBqZWxseSwgYW5kIGNydW5jaHkgYmFjb24uXCIsXG4gICAgXCIxMi45OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjlcIixcbiAgICBcIlRoZSBXYWZmbGUgQ3JhemVcIixcbiAgICBidXJnZXJJbWc5LFxuICAgIFwiQnVyZ2VyIHNhbmR3aWNoZWQgYmV0d2VlbiB0d28gY3Jpc3Agd2FmZmxlcywgYSBkcml6emxlIG9mIG1hcGxlIHN5cnVwLCBhbmQgYSBzaWRlIG9mIGNyaXNweSBmcmllZCBjaGlja2VuLiBTd2VldCwgc2F2b3J5LCBhbmQgdXR0ZXJseSBtaW5kLWJsb3dpbmcuXCIsXG4gICAgXCIxNi40OVwiXG4gICksXG5dO1xuXG5jb25zdCBmb29kSXRlbXNIVE1MID0gZ2VuZXJhdGVGb29kSXRlbUhUTUwoZm9vZEl0ZW1zKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vZEl0ZW1zSFRNTDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGZvb2RJdGVtc0hUTUwgZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgdHJhbnNpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJhbnNpdGlvblwiKTtcbmxldCBjdXJyZW50UGFnZSA9IFwiaG9tZXBhZ2VcIjtcblxuLy8gRnVuY3Rpb24gdG8gY2hhbmdlIGEgcGFnZVxuZnVuY3Rpb24gY2hhbmdlUGFnZShzaG93UGFnZSkge1xuICB0cmFuc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJpcy10cmFuc2l0aW9uaW5nXCIpO1xuICB0cmFuc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgc2hvd1BhZ2UoKTtcbiAgICB0cmFuc2l0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy10cmFuc2l0aW9uaW5nXCIpO1xuICB9KTtcbn1cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgbmF2IGJ1dHRvbnNcbmZ1bmN0aW9uIGFjdGl2YXRlQnV0dG9ucygpIHtcbiAgYnV0dG9uc1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50UGFnZSAhPSBcImhvbWVwYWdlXCIpIHtcbiAgICAgIGNoYW5nZVBhZ2Uoc2hvd0hvbWVwYWdlKTtcbiAgICAgIGN1cnJlbnRQYWdlID0gXCJob21lcGFnZVwiO1xuICAgIH1cbiAgfSk7XG4gIGJ1dHRvbnNbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT0gXCJtZW51XCIpIHtcbiAgICAgIGNoYW5nZVBhZ2Uoc2hvd01lbnUpO1xuICAgICAgY3VycmVudFBhZ2UgPSBcIm1lbnVcIjtcbiAgICB9XG4gIH0pO1xuICBidXR0b25zWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRQYWdlICE9IFwiYWJvdXRcIikge1xuICAgICAgY2hhbmdlUGFnZShzaG93QWJvdXQpO1xuICAgICAgY3VycmVudFBhZ2UgPSBcImFib3V0XCI7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQWRkIGFjdGl2ZSBjbGFzc1xuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xufSk7XG5cbi8vIFRoZSBob21lcGFnZVxuZnVuY3Rpb24gc2hvd0hvbWVwYWdlKCkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVwYWdlKCkuY29udGFpbmVyKTtcbn1cblxuLy8gVGhlIG1lbnUgcGFnZVxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1zSFRNTCk7XG59XG5cbi8vIFRoZSBhYm91dCBwYWdlXG5mdW5jdGlvbiBzaG93QWJvdXQoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKS5pZnJhbWVDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KCkuYWJvdXRDb250YWluZXIpO1xufVxuXG4vLyBTaG93IHRoZSBob21lcGFnZSB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZFxuc2hvd0hvbWVwYWdlKCk7XG5hY3RpdmF0ZUJ1dHRvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==