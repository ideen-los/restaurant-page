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
  container.classList.add(
    "w-full",
    "max-w-6xl",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNk9BQTZPLFlBQVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0VpQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDRDQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEbUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFFBQVE7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pMN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDWTtBQUNOO0FBQ1U7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixnREFBYTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFLO0FBQzNCLHNCQUFzQixrREFBSztBQUMzQjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzQwZjciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4hIHRhaWx3aW5kY3NzIHYzLjQuMSB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cbiovLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNy4gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0cyBvbiBpT1NcbiovXG5cbmh0bWwsXG46aG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcbiAgfVxufVxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnNldC0wIHtcbiAgaW5zZXQ6IDBweDtcbn1cbi4tdG9wLTgge1xuICB0b3A6IC0ycmVtO1xufVxuLmJvdHRvbS0wIHtcbiAgYm90dG9tOiAwcHg7XG59XG4uei0xMCB7XG4gIHotaW5kZXg6IDEwO1xufVxuLi1teC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0yLjVyZW07XG59XG4ubXgtMyB7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4ubWItNSB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4ubWItNiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLm10LTcge1xuICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xufVxuLm10LTgge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1heC13LTZ4bCB7XG4gIG1heC13aWR0aDogNzJyZW07XG59XG4ubWF4LXctc2NyZWVuLXNtIHtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLm92ZXJmbG93LXktc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmJvcmRlci1iIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xufVxuLmJvcmRlci1ncmF5LTgwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItdHJhbnNwYXJlbnQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJnLWdyYXktODAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEgNDEgNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucC0xMCB7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cbi5wLTYge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4ucC04IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5weC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG59XG4ucGItMTAge1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuLnBiLTMge1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbn1cbi5wdC00IHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWxpZ24tYmFzZWxpbmUge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4uYWxpZ24tYm90dG9tIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi5mb250LXNhbnMge1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC0zeGwge1xuICBmb250LXNpemU6IDEuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbn1cbi50ZXh0LTV4bCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4udGV4dC1cXFxcWzE4cHhcXFxcXSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmxlYWRpbmctbm9uZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmxlYWRpbmctdGlnaHQge1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi50cmFja2luZy1ub3JtYWwge1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xufVxuLnRleHQtYW1iZXItMTAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjU0IDI0MyAxOTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LWZ1Y2hzaWEtMzAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjQwIDE3MSAyNTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LWZ1Y2hzaWEtNDAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjMyIDEyMSAyNDkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LWdyYXktNjAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoNzUgODUgOTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5hbnRpYWxpYXNlZCB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuLnNoYWRvdy14bCB7XG4gIC0tdHctc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYigwIDAgMCAvIDAuMSksIDAgOHB4IDEwcHggLTZweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDIwcHggMjVweCAtNXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgOHB4IDEwcHggLTZweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuLnJpbmcge1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygzcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwICMwMDAwKTtcbn1cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuaHRtbCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuaGVhZGVyIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODEsIDQ3LCAxMDUpO1xufVxuaGVhZGVyIHN2ZyB7XG4gIGZpbGw6IHJnYigxODEsIDQ3LCAxMDUpO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4uYWN0aXZlIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzEgNDEgNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubWFwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4jdHJhbnNpdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm90dG9tOiA2MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTY0dmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxODEsIDQ3LCAxMDUpIDY1JSwgdHJhbnNwYXJlbnQgNjUlKTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgI3RyYW5zaXRpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxODEsIDQ3LCAxMDUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNzBweCkge1xuICAjdHJhbnNpdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE4MSwgNDcsIDEwNSkgODAlLCB0cmFuc3BhcmVudCA4MCUpO1xuICAgIGJvdHRvbTogNzAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTk5cHgpIHtcbiAgI3RyYW5zaXRpb24ge1xuICAgIGJvdHRvbTogODAlO1xuICB9XG59XG4jdHJhbnNpdGlvbiAuYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCA0NywgMTA1KTtcbiAgaGVpZ2h0OiA3MCU7XG59XG4jdHJhbnNpdGlvbiAuc2F1Y2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbiN0cmFuc2l0aW9uIC5zYXVjZSBzdmcge1xuICBmaWxsOiByZ2IoMTgxLCA0NywgMTA1KTtcbn1cbiN0cmFuc2l0aW9uLmlzLXRyYW5zaXRpb25pbmcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA2NiUpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OXB4KSB7XG4gICN0cmFuc2l0aW9uLmlzLXRyYW5zaXRpb25pbmcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwJSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjdHJhbnNpdGlvbi5pcy10cmFuc2l0aW9uaW5nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3NSUpO1xuICB9XG59XG4jdHJhbnNpdGlvbi5pcy10cmFuc2l0aW9uaW5nIC5zYXVjZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLm1kXFxcXDpjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLm1kXFxcXDpjb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XG5cbiAgICAubWRcXFxcOmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDE1MzZweDtcbiAgICB9XG4gIH1cbn1cbi5ob3ZlclxcXFw6dGV4dC1ncmF5LTgwMDpob3ZlciB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuc21cXFxcOm14LTYge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6cmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tZFxcXFw6bXgtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm1kXFxcXDptYi0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAubWRcXFxcOm1sLTIwIHtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6bWwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAubWRcXFxcOm10LTAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIC5tZFxcXFw6bXQtMTAge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6bXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gIH1cblxuICAubWRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubWRcXFxcOnctMVxcXFwvMiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6cHgtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIH1cblxuICAubWRcXFxcOnB5LTI0IHtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTd4bCB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAubGdcXFxcOnctMVxcXFwvMyB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cblxuICAubGdcXFxcOnB0LTYge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIH1cblxuICAubGdcXFxcOnRleHQtXFxcXFsyMHB4XFxcXF0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC5kYXJrXFxcXDp0ZXh0LWdyYXktMzAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9iYXNlLmNzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL2NvbXBvbmVudHMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdXRpbGl0aWVzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQUEsQ0FBQTs7O0NBQUE7O0FBQUE7OztFQUFBLHNCQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsbUJBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0VBQUEsZ0JBQUE7QUFBQTs7QUFBQTs7Ozs7Ozs7Q0FBQTs7QUFBQTs7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSw4QkFBQSxFQUFBLE1BQUE7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBO0tBQUEsV0FBQSxFQUFBLE1BQUE7RUFBQSwrSEFBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSwrQkFBQSxFQUFBLE1BQUE7RUFBQSx3Q0FBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7O0NBQUE7O0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7RUFBQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTtFQUFBLGNBQUE7RUFBQSx3QkFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLG1CQUFBO0FBQUE7O0FBQUE7Ozs7O0NBQUE7O0FBQUE7Ozs7RUFBQSwrR0FBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSwrQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsY0FBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBOztBQUFBO0VBQUEsZUFBQTtBQUFBOztBQUFBO0VBQUEsV0FBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtFQUFBLHlCQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsOEJBQUEsRUFBQSxNQUFBO0VBQUEsZ0NBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTs7RUFBQSxvQkFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTs7OztFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLHNCQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsYUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsZ0JBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTtFQUFBLHdCQUFBO0FBQUE7O0FBQUE7O0NBQUE7O0FBQUE7O0VBQUEsWUFBQTtBQUFBOztBQUFBOzs7Q0FBQTs7QUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsd0JBQUE7QUFBQTs7QUFBQTs7O0NBQUE7O0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsa0JBQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTs7Ozs7Ozs7Ozs7OztFQUFBLFNBQUE7QUFBQTs7QUFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7O0FBQUE7RUFBQSxVQUFBO0FBQUE7O0FBQUE7OztFQUFBLGdCQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTs7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsVUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBO0VBQUEsZ0JBQUE7QUFBQTs7QUFBQTs7O0NBQUE7O0FBQUE7RUFBQSxVQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7O0FBQUE7O0VBQUEsVUFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtBQUFBOztBQUFBOztDQUFBOztBQUFBOztFQUFBLGVBQUE7QUFBQTs7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZUFBQTtBQUFBOztBQUFBOzs7O0NBQUE7O0FBQUE7Ozs7Ozs7O0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxzQkFBQSxFQUFBLE1BQUE7QUFBQTs7QUFBQTs7Q0FBQTs7QUFBQTs7RUFBQSxlQUFBO0VBQUEsWUFBQTtBQUFBOztBQUFBLHdFQUFBO0FBQUE7RUFBQSxhQUFBO0FBQUE7O0FBQUE7RUFBQSx3QkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsY0FBQTtFQUFBLGVBQUE7RUFBQSxlQUFBO0VBQUEsYUFBQTtFQUFBLGFBQUE7RUFBQSxrQkFBQTtFQUFBLHNDQUFBO0VBQUEsOEJBQUE7RUFBQSw2QkFBQTtFQUFBLDRCQUFBO0VBQUEsZUFBQTtFQUFBLG9CQUFBO0VBQUEsc0JBQUE7RUFBQSx1QkFBQTtFQUFBLHdCQUFBO0VBQUEsa0JBQUE7RUFBQSwyQkFBQTtFQUFBLDRCQUFBO0VBQUEsc0NBQUE7RUFBQSxrQ0FBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFBQSw4QkFBQTtFQUFBLFlBQUE7RUFBQSxrQkFBQTtFQUFBLGdCQUFBO0VBQUEsaUJBQUE7RUFBQSxrQkFBQTtFQUFBLGNBQUE7RUFBQSxnQkFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLHFCQUFBO0VBQUEsMkJBQUE7RUFBQSx5QkFBQTtFQUFBLDBCQUFBO0VBQUEsMkJBQUE7RUFBQSx1QkFBQTtFQUFBLHdCQUFBO0VBQUEseUJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsd0JBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxjQUFBO0VBQUEsY0FBQTtFQUFBLGNBQUE7RUFBQSxlQUFBO0VBQUEsZUFBQTtFQUFBLGFBQUE7RUFBQSxhQUFBO0VBQUEsa0JBQUE7RUFBQSxzQ0FBQTtFQUFBLDhCQUFBO0VBQUEsNkJBQUE7RUFBQSw0QkFBQTtFQUFBLGVBQUE7RUFBQSxvQkFBQTtFQUFBLHNCQUFBO0VBQUEsdUJBQUE7RUFBQSx3QkFBQTtFQUFBLGtCQUFBO0VBQUEsMkJBQUE7RUFBQSw0QkFBQTtFQUFBLHNDQUFBO0VBQUEsa0NBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQUEsOEJBQUE7RUFBQSxZQUFBO0VBQUEsa0JBQUE7RUFBQSxnQkFBQTtFQUFBLGlCQUFBO0VBQUEsa0JBQUE7RUFBQSxjQUFBO0VBQUEsZ0JBQUE7RUFBQSxhQUFBO0VBQUEsbUJBQUE7RUFBQSxxQkFBQTtFQUFBLDJCQUFBO0VBQUEseUJBQUE7RUFBQSwwQkFBQTtFQUFBLDJCQUFBO0VBQUEsdUJBQUE7RUFBQSx3QkFBQTtFQUFBLHlCQUFBO0VBQUE7QUFBQTtBQ0FBO0VBQUE7QUFBQTtBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7QUFBQTs7RUFBQTtJQUFBO0VBQUE7QUFBQTtBQUFBOztFQUFBO0lBQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUE7SUFBQTtFQUFBO0FBQUE7QUNBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxpQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLHNCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGlCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsbUJBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsbUNBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxnRkFBQTtFQUFBLG9HQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsMkdBQUE7RUFBQSx5R0FBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUE7QUFBQTtBQ01BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBTUU7RUFDRSxtQ0FUUztBQU1iO0FBTUU7RUFDRSx1QkFiUztFQWNULGdCQUFBO0FBSko7O0FBU0U7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsU0FBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBTEY7QUFPRTtFQWJGO0lBY0ksOEVBQUE7RUFKRjtBQUNGO0FBS0U7RUFoQkY7SUFpQkksOEVBQUE7SUFDQSxXQUFBO0VBRkY7QUFDRjtBQUdFO0VBcEJGO0lBcUJJLFdBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxtQ0EzRFM7RUE0RFQsV0FBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBREo7QUFHSTtFQUNFLHVCQXBFTztBQW1FYjtBQUtFO0VBQ0UsNEJBQUE7QUFISjtBQUtJO0VBSEY7SUFJSSw0QkFBQTtFQUZKO0FBQ0Y7QUFHSTtFQU5GO0lBT0ksNEJBQUE7RUFBSjtBQUNGO0FBRUk7RUFDRSxvQkFBQTtBQUFOO0FIdkZBOztFQUFBO0lBQUE7RUd1RkM7O0VIdkZEOztJQUFBO01BQUE7SUd1RkM7RUFBQTs7RUh2RkQ7O0lBQUE7TUFBQTtJR3VGQztFQUFBOztFSHZGRDs7SUFBQTtNQUFBO0lHdUZDO0VBQUE7O0VIdkZEOztJQUFBO01BQUE7SUd1RkM7RUFBQTs7RUh2RkQ7O0lBQUE7TUFBQTtJR3VGQztFQUFBO0FBQUE7QUh2RkQ7RUFBQSxvQkd1RkM7RUh2RkQ7QUd1RkM7QUh2RkQ7O0VBQUE7SUFBQSxtQkd1RkM7SUh2RkQ7RUd1RkM7QUFBQTtBSHZGRDs7RUFBQTtJQUFBO0VHdUZDOztFSHZGRDtJQUFBLGlCR3VGQztJSHZGRDtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQSxvQkd1RkM7SUh2RkQ7RUd1RkM7O0VIdkZEO0lBQUEscUJHdUZDO0lIdkZEO0VHdUZDOztFSHZGRDtJQUFBLGlCR3VGQztJSHZGRDtFR3VGQzs7RUh2RkQ7SUFBQSxpQkd1RkM7SUh2RkQ7RUd1RkM7O0VIdkZEO0lBQUEsaUJHdUZDO0lIdkZEO0VHdUZDO0FBQUE7QUh2RkQ7O0VBQUE7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQzs7RUh2RkQ7SUFBQTtFR3VGQztBQUFBO0FIdkZEOztFQUFBO0lBQUEsb0JHdUZDO0lIdkZEO0VHdUZDO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuXCIsXCJAdGFpbHdpbmQgY29tcG9uZW50cztcXG5cIixcIkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCIsXCJAaW1wb3J0IFxcXCJ0YWlsd2luZGNzcy9iYXNlXFxcIjtcXG5AaW1wb3J0IFxcXCJ0YWlsd2luZGNzcy9jb21wb25lbnRzXFxcIjtcXG5AaW1wb3J0IFxcXCJ0YWlsd2luZGNzcy91dGlsaXRpZXNcXFwiO1xcblxcbiRtZW51LWNvbG9yOiByZ2IoMTgxLCA0NywgMTA1KTtcXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1jb2xvcjtcXG4gIH1cXG5cXG4gIHN2ZyB7XFxuICAgIGZpbGw6ICRtZW51LWNvbG9yO1xcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgfVxcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIEBhcHBseSB0ZXh0LWdyYXktODAwO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFwIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbmlmcmFtZSB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiN0cmFuc2l0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm90dG9tOiA2MCU7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDE2NHZoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtZW51LWNvbG9yIDY1JSwgdHJhbnNwYXJlbnQgNjUlKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtZW51LWNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlKTtcXG4gIH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzcwcHgpIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1lbnUtY29sb3IgODAlLCB0cmFuc3BhcmVudCA4MCUpO1xcbiAgICBib3R0b206IDcwJTtcXG4gIH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTlweCkge1xcbiAgICBib3R0b206IDgwJTtcXG4gIH1cXG5cXG4gIC5iZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWNvbG9yO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gIH1cXG5cXG4gIC5zYXVjZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGZpbGw6ICRtZW51LWNvbG9yO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLmlzLXRyYW5zaXRpb25pbmcge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA2NiUpO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTk5cHgpIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MCUpO1xcbiAgICB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDc1JSk7XFxuICAgIH1cXG5cXG4gICAgLnNhdWNlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYWJvdXQoKSB7XG4gIGNvbnN0IGlmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmcmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJzb2x1dGVcIiwgXCJpbnNldC0wXCIsIFwiLXRvcC04XCIpO1xuXG4gIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGlmcmFtZS5zcmMgPVxuICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNzUzNTguOTg2MzYwMDA2ITJkOC42MjUxMDI3NTcwMTcwNyEzZDUzLjgyNTYzOTM0Mzk4ODk5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0N2I0MDNkYTJmZjMzMTQ5JTNBMHg0MjZjZjc3NjMwMDZiMzAhMnNDdXhoYXZlbiE1ZTAhM20yITFzZGUhMnNkZSE0djE3MDc3NzY5NDMyMjYhNW0yITFzZGUhMnNkZVwiO1xuICBpZnJhbWUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gIGlmcmFtZS53aWR0aCA9IFwiMTAwJVwiO1xuICBpZnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJtZDpjb250YWluZXJcIixcbiAgICBcIm1kOnB4LTVcIixcbiAgICBcIm1kOnB5LTI0XCIsXG4gICAgXCJtZDpteC1hdXRvXCIsXG4gICAgXCJtZDpmbGV4XCIsXG4gICAgXCJ3LWZ1bGxcIixcbiAgICBcImgtZnVsbFwiXG4gICk7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFxuICAgIFwibGc6dy0xLzNcIixcbiAgICBcIm1kOnctMS8yXCIsXG4gICAgXCJiZy1ncmF5LTgwMFwiLFxuICAgIFwicC04XCIsXG4gICAgXCJmbGV4XCIsXG4gICAgXCJmbGV4LWNvbFwiLFxuICAgIFwibWQ6bWwtYXV0b1wiLFxuICAgIFwidy1mdWxsXCIsXG4gICAgXCJtdC0xMFwiLFxuICAgIFwibWQ6bXQtMFwiLFxuICAgIFwibWQ6cmVsYXRpdmVcIixcbiAgICBcImFic29sdXRlXCIsXG4gICAgXCJ6LTFcIixcbiAgICBcInNoYWRvdy14bFwiLFxuICAgIFwidGV4dC1mdWNoc2lhLTQwMFwiLFxuICAgIFwibWQ6cmVsYXRpdmVcIixcbiAgICBcImJvdHRvbS0wXCJcbiAgKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiLCBcImZvbnQtYm9sZFwiLCBcInVwcGVyY2FzZVwiLCBcIm1iLTZcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJHcmFiIHlvdXIgYnVyZ2VyXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImZvbnQtYm9sZFwiKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkJpZyBCdXJnZXIgTWFkbmVzc1wiO1xuICBhYm91dC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYTEuY2xhc3NMaXN0LmFkZChcImZvbnQtYm9sZFwiLCBcIm1iLTZcIik7XG4gIHBhcmExLmlubmVySFRNTCA9IFwiQW0gU3RyYW5kIDFBPC9icj41MTE4NyBDdXhoYXZlblwiO1xuICBhYm91dC5hcHBlbmRDaGlsZChwYXJhMSk7XG5cbiAgY29uc3QgdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbC50ZXh0Q29udGVudCA9IFwiKzQ5IDQ3MjEgMjI5OThcIjtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQodGVsKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwic2VsZi1zdGFydFwiLCBcImJvcmRlci1iXCIsIFwiYm9yZGVyLWdyYXktODAwXCIpO1xuICBlbWFpbC5ocmVmID0gXCJtYWlsdG86aGVsbG9AYmlnYnVyZ2VybWFkbmVzcy5jb21cIjtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBcImhlbGxvQGJpZ2J1cmdlcm1hZG5lc3MuY29tXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICByZXR1cm4ge1xuICAgIGlmcmFtZUNvbnRhaW5lcixcbiAgICBhYm91dENvbnRhaW5lcixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCJpbXBvcnQgYnVyZ2VyIGZyb20gXCIuL2ltZy9idXJnZXIucG5nXCI7XG5cbmZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcInctZnVsbFwiLFxuICAgIFwiZmxleFwiLFxuICAgIFwiZmxleC1jb2xcIixcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgIFwibWF4LXctNnhsXCIsXG4gICAgXCJteC1hdXRvXCIsXG4gICAgXCJtZDptdC0xMlwiLFxuICAgIFwicC02XCJcbiAgKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkJpZyBCdXJnZXIgTWFkbmVzc1wiO1xuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiYmxvY2tcIixcbiAgICBcImZvbnQtc2Fuc1wiLFxuICAgIFwidGV4dC01eGxcIixcbiAgICBcIm1kOnRleHQtN3hsXCIsXG4gICAgXCJmb250LWJvbGRcIixcbiAgICBcImxlYWRpbmctdGlnaHRcIixcbiAgICBcInRyYWNraW5nLW5vcm1hbFwiLFxuICAgIFwiYW50aWFsaWFzZWRcIixcbiAgICBcInRleHQtZnVjaHNpYS0zMDBcIixcbiAgICBcInRleHQtY2VudGVyXCJcbiAgKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIkdldCByZWFkeSBmb3IgYSBqdWljeSwgbWVzc3ksIG1pbmQtYmxvd2luZyBleHBlcmllbmNlIVwiO1xuICBwYXJhLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJmb250LXNhbnNcIixcbiAgICBcInRleHQteGxcIixcbiAgICBcIm1kOnRleHQtMnhsXCIsXG4gICAgXCJmb250LXNlbWlib2xkXCIsXG4gICAgXCJ0ZXh0LWZ1Y2hzaWEtNDAwXCIsXG4gICAgXCJtdC0yXCIsXG4gICAgXCJ0ZXh0LWNlbnRlclwiXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XG4gIGltZzEuc3JjID0gYnVyZ2VyO1xuICBpbWcxLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJtZDptbC0yMFwiLFxuICAgIFwibWQ6bXQtMTBcIixcbiAgICBcIm10LTdcIixcbiAgICBcIm1heC13LXNjcmVlbi1zbVwiLFxuICAgIFwidy1mdWxsXCJcbiAgKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZzEpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcbiIsImltcG9ydCBidXJnZXJJbWcxIGZyb20gXCIuL2ltZy9idXJnZXIxLmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzIgZnJvbSBcIi4vaW1nL2J1cmdlcjIuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1nMyBmcm9tIFwiLi9pbWcvYnVyZ2VyMy5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWc0IGZyb20gXCIuL2ltZy9idXJnZXI0LmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzUgZnJvbSBcIi4vaW1nL2J1cmdlcjUuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1nNiBmcm9tIFwiLi9pbWcvYnVyZ2VyNi5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWc4IGZyb20gXCIuL2ltZy9idXJnZXI4LmpwZ1wiO1xuaW1wb3J0IGJ1cmdlckltZzkgZnJvbSBcIi4vaW1nL2J1cmdlcjkuanBnXCI7XG5cbmNsYXNzIEZvb2RJdGVtIHtcbiAgY29uc3RydWN0b3IoaWQsIGhlYWRsaW5lLCBpbWdVUkwsIGRlc2MsIHByaWNlKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaGVhZGxpbmUgPSBoZWFkbGluZTtcbiAgICB0aGlzLmltZ1VSTCA9IGltZ1VSTDtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2RJdGVtSFRNTChmb29kSXRlbXMpIHtcbiAgLy8gQ29udGFpbmVyIGZvciBhbGwgZm9vZCBpdGVtc1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcInctZnVsbFwiLFxuICAgIFwibWF4LXctNnhsXCIsXG4gICAgXCJwYi0xMFwiLFxuICAgIFwicHgtMTBcIixcbiAgICBcIm14LWF1dG9cIixcbiAgICBcInJlbGF0aXZlXCJcbiAgKTtcblxuICBmb29kSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vIENvbnRhaW5lciBmb3IgYSBzaW5nbGUgZm9vZCBpdGVtXG4gICAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb29kLWl0ZW1cIiwgYGlkLSR7aXRlbS5pZH1gLCBcInAtMTBcIik7XG5cbiAgICAvLyBJbm5lciBjb250YWluZXIgZm9yIGEgc2luZ2xlIGZvb2QgaXRlbVxuICAgIGNvbnN0IGl0ZW1FbGVtZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1FbGVtZW50SW5uZXIuY2xhc3NMaXN0LmFkZChcIm1kOmZsZXhcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCItbXgtMTBcIik7XG4gICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnRJbm5lcik7XG5cbiAgICAvLyBMZWZ0IHBhcnQgb2YgYSBzaW5nbGUgZm9vZCBpdGVtXG4gICAgY29uc3QgaXRlbUVsZW1lbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRWxlbWVudExlZnQuY2xhc3NMaXN0LmFkZChcInctZnVsbFwiLCBcIm1kOnctMS8yXCIsIFwibWItMTBcIiwgXCJtZDptYi0wXCIpO1xuICAgIGl0ZW1FbGVtZW50SW5uZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnRMZWZ0KTtcblxuICAgIC8vIEZvb2QgaXRlbSBpbWFnZVxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwic2hhZG93LXhsXCIpO1xuICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtLmltZ1VSTDtcbiAgICBpdGVtRWxlbWVudExlZnQuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcblxuICAgIC8vIFJpZ2h0IHBhcnQgb2YgYSBzaW5nbGUgZm9vZCBpdGVtXG4gICAgY29uc3QgaXRlbUVsZW1lbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUVsZW1lbnRSaWdodC5jbGFzc0xpc3QuYWRkKFwidy1mdWxsXCIsIFwibWQ6dy0xLzJcIiwgXCJtZDpweC0xMFwiKTtcbiAgICBpdGVtRWxlbWVudElubmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50UmlnaHQpO1xuXG4gICAgLy8gRm9vZCBpdGVtIHRpdGxlXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZm9udC1ib2xkXCIsXG4gICAgICBcInVwcGVyY2FzZVwiLFxuICAgICAgXCJ0ZXh0LTN4bFwiLFxuICAgICAgXCJtYi01XCIsXG4gICAgICBcInRleHQtZnVjaHNpYS0zMDBcIlxuICAgICk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLmhlYWRsaW5lO1xuICAgIGl0ZW1FbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgLy8gRm9vZCBpdGVtIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWxnXCIsIFwidGV4dC1mdWNoc2lhLTQwMFwiKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgaXRlbUVsZW1lbnRSaWdodC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgLy8gRm9vZCBpdGVtIHByaWNlIGNvbnRhaW5lclxuICAgIGNvbnN0IGl0ZW1QcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVByaWNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImJsb2NrXCIsXG4gICAgICBcImFsaWduLWJvdHRvbVwiLFxuICAgICAgXCJtdC04XCIsXG4gICAgICBcInRleHQtZnVjaHNpYS0zMDBcIixcbiAgICAgIFwiZm9udC1ib2xkXCJcbiAgICApO1xuICAgIGl0ZW1FbGVtZW50UmlnaHQuYXBwZW5kQ2hpbGQoaXRlbVByaWNlQ29udGFpbmVyKTtcblxuICAgIC8vIEZvb2QgaXRlbSBwcmljZSAoMSlcbiAgICBjb25zdCBpdGVtUHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaXRlbVByaWNlMS5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIiwgXCJsZWFkaW5nLW5vbmVcIiwgXCJhbGlnbi1iYXNlbGluZVwiKTtcbiAgICBpdGVtUHJpY2UxLnRleHRDb250ZW50ID0gXCLigqxcIjtcbiAgICBpdGVtUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlMSk7XG5cbiAgICAvLyBGb29kIGl0ZW0gcHJpY2UgKDIpXG4gICAgY29uc3QgaXRlbVByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGl0ZW1QcmljZTIuY2xhc3NMaXN0LmFkZChcInRleHQtNXhsXCIsIFwibGVhZGluZy1ub25lXCIsIFwiYWxpZ24tYmFzZWxpbmVcIik7XG4gICAgY29uc3QgZ2V0TnVtYmVyUGFydHMgPSBpdGVtLnByaWNlLnNwbGl0KFwiLlwiKTtcbiAgICBpdGVtUHJpY2UyLnRleHRDb250ZW50ID0gZ2V0TnVtYmVyUGFydHNbMF07XG4gICAgaXRlbVByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZTIpO1xuXG4gICAgLy8gRm9vZCBpdGVtIHByaWNlICgzKVxuICAgIGNvbnN0IGl0ZW1QcmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpdGVtUHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImxlYWRpbmctbm9uZVwiLCBcImFsaWduLWJhc2VsaW5lXCIpO1xuICAgIGl0ZW1QcmljZTMudGV4dENvbnRlbnQgPSBgLiR7Z2V0TnVtYmVyUGFydHNbMV19YDtcbiAgICBpdGVtUHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlMyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICB9KTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWdyYXktNjAwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkFsbCBwaG90b3MgdmlhIHVuc3BsYXNoLmNvbVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBmb29kSXRlbXMgPSBbXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjFcIixcbiAgICBcIlRoZSBGbGF2b3IgQm9tYlwiLFxuICAgIGJ1cmdlckltZzEsXG4gICAgXCJTdGFja2VkIHdpdGggY2FyYW1lbGl6ZWQgb25pb25zLCBjcmlzcHkgYmFjb24sIG1lbHR5IHBlcHBlciBqYWNrIGNoZWVzZSwgYW5kIGEgc3BpY3kgc2VjcmV0IHNhdWNlLlwiLFxuICAgIFwiOS45OVwiXG4gICksXG4gIG5ldyBGb29kSXRlbShcbiAgICBcIjJcIixcbiAgICBcIlRoZSBDYXJuaXZvcmUncyBEZWxpZ2h0XCIsXG4gICAgYnVyZ2VySW1nMixcbiAgICBcIkphbGFwZcOxb3MsIGZpZXJ5IHBlcHBlciByZWxpc2gsIG1vbHRlbiBjaGVlc2Ugc2F1Y2UsIGFuZCBhIHNwcmlua2xlIG9mIGNydXNoZWQgdG9ydGlsbGEgY2hpcHMgZm9yIGV4dHJhIGNydW5jaC5cIixcbiAgICBcIjEyLjk5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiM1wiLFxuICAgIFwiSG90IE1lc3MgRXhwcmVzc1wiLFxuICAgIGJ1cmdlckltZzMsXG4gICAgXCJEb3VibGUgYmVlZiBwYXR0eSwgZXh0cmEgYmFjb24sIHB1bGxlZCBwb3JrLCBhbmQgYSBmcmllZCBlZ2cgZm9yIGdvb2QgbWVhc3VyZS4gQSB0cnVlIG1lYXQgbG92ZXIncyBmZWFzdC5cIixcbiAgICBcIjcuOTlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCI0XCIsXG4gICAgXCJUaGUgTWFjIERhZGR5XCIsXG4gICAgYnVyZ2VySW1nNCxcbiAgICBcIkJlZWYgcGF0dHkgbmVzdGxlZCBvbiBhIGJlZCBvZiBjcmVhbXkgbWFjIGFuZCBjaGVlc2UsIHRvcHBlZCB3aXRoIGNyaXNweSBicmVhZGNydW1icy4gRGVjYWRlbmNlIHJlZGVmaW5lZC5cIixcbiAgICBcIjEwLjQ5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiNVwiLFxuICAgIFwiU3dlZXQgJ24nIFNtb2t5IFN0YWNrXCIsXG4gICAgYnVyZ2VySW1nNSxcbiAgICBcIlN3ZWV0IGJhcmJlY3VlIHNhdWNlLCBzbW9rZWQgZ291ZGEsIG1hcGxlLWdsYXplZCBiYWNvbiwgYW5kIGEgdGFuZ3kgb25pb24gcmluZy4gQSBmbGF2b3Igcm9sbGVyY29hc3Rlci5cIixcbiAgICBcIjEwLjk5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiNlwiLFxuICAgIFwiVGhlIEhhbmdvdmVyIEhlbHBlclwiLFxuICAgIGJ1cmdlckltZzYsXG4gICAgXCJDcmlzcHkgaGFzaGJyb3duIHBhdHR5LCBtZWx0eSBjaGVkZGFyLCBhIGZyaWVkIGVnZywgYW5kIGEgZHJpenpsZSBvZiBob2xsYW5kYWlzZSBzYXVjZS4gQnJlYWtmYXN0IG1lZXRzIGJ1cmdlciBwYXJhZGlzZS5cIixcbiAgICBcIjEzLjk5XCJcbiAgKSxcbiAgbmV3IEZvb2RJdGVtKFxuICAgIFwiOFwiLFxuICAgIFwiUEImSiBCbGl0elwiLFxuICAgIGJ1cmdlckltZzgsXG4gICAgXCJBIGRhcmluZyBjb21ibyEgU2F2b3J5IGJlZWYgcGF0dHksIG1lbHRlZCBwZWFudXQgYnV0dGVyLCBzd2VldCBhbmQgc3BpY3kgamFsYXBlbm8gamVsbHksIGFuZCBjcnVuY2h5IGJhY29uLlwiLFxuICAgIFwiMTIuOTlcIlxuICApLFxuICBuZXcgRm9vZEl0ZW0oXG4gICAgXCI5XCIsXG4gICAgXCJUaGUgV2FmZmxlIENyYXplXCIsXG4gICAgYnVyZ2VySW1nOSxcbiAgICBcIkJ1cmdlciBzYW5kd2ljaGVkIGJldHdlZW4gdHdvIGNyaXNwIHdhZmZsZXMsIGEgZHJpenpsZSBvZiBtYXBsZSBzeXJ1cCwgYW5kIGEgc2lkZSBvZiBjcmlzcHkgZnJpZWQgY2hpY2tlbi4gU3dlZXQsIHNhdm9yeSwgYW5kIHV0dGVybHkgbWluZC1ibG93aW5nLlwiLFxuICAgIFwiMTYuNDlcIlxuICApLFxuXTtcblxuY29uc3QgZm9vZEl0ZW1zSFRNTCA9IGdlbmVyYXRlRm9vZEl0ZW1IVE1MKGZvb2RJdGVtcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2RJdGVtc0hUTUw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBmb29kSXRlbXNIVE1MIGZyb20gXCIuL21lbnUuanNcIjtcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHRyYW5zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyYW5zaXRpb25cIik7XG5sZXQgY3VycmVudFBhZ2UgPSBcImhvbWVwYWdlXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoYW5nZSBhIHBhZ2VcbmZ1bmN0aW9uIGNoYW5nZVBhZ2Uoc2hvd1BhZ2UpIHtcbiAgdHJhbnNpdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXMtdHJhbnNpdGlvbmluZ1wiKTtcbiAgdHJhbnNpdGlvbi5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNob3dQYWdlKCk7XG4gICAgdHJhbnNpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdHJhbnNpdGlvbmluZ1wiKTtcbiAgfSk7XG59XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG5hdiBidXR0b25zXG5mdW5jdGlvbiBhY3RpdmF0ZUJ1dHRvbnMoKSB7XG4gIGJ1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT0gXCJob21lcGFnZVwiKSB7XG4gICAgICBjaGFuZ2VQYWdlKHNob3dIb21lcGFnZSk7XG4gICAgICBjdXJyZW50UGFnZSA9IFwiaG9tZXBhZ2VcIjtcbiAgICB9XG4gIH0pO1xuICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRQYWdlICE9IFwibWVudVwiKSB7XG4gICAgICBjaGFuZ2VQYWdlKHNob3dNZW51KTtcbiAgICAgIGN1cnJlbnRQYWdlID0gXCJtZW51XCI7XG4gICAgfVxuICB9KTtcbiAgYnV0dG9uc1syXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50UGFnZSAhPSBcImFib3V0XCIpIHtcbiAgICAgIGNoYW5nZVBhZ2Uoc2hvd0Fib3V0KTtcbiAgICAgIGN1cnJlbnRQYWdlID0gXCJhYm91dFwiO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEFkZCBhY3RpdmUgY2xhc3NcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbn0pO1xuXG4vLyBUaGUgaG9tZXBhZ2VcbmZ1bmN0aW9uIHNob3dIb21lcGFnZSgpIHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZSgpLmNvbnRhaW5lcik7XG59XG5cbi8vIFRoZSBtZW51IHBhZ2VcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2RJdGVtc0hUTUwpO1xufVxuXG4vLyBUaGUgYWJvdXQgcGFnZVxuZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KCkuaWZyYW1lQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCgpLmFib3V0Q29udGFpbmVyKTtcbn1cblxuLy8gU2hvdyB0aGUgaG9tZXBhZ2Ugd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWRcbnNob3dIb21lcGFnZSgpO1xuYWN0aXZhdGVCdXR0b25zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=