## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot
![Landing](https://github.com/bartutaskin/Bookmark-Landing-Page/assets/110820970/dfa1a9ca-8753-4f13-b40e-0280d1b103ae)

### Links

- Solution URL: https://github.com/bartutaskin/Bookmark-Landing-Page
- Live Site URL: https://bookmark-bartu.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I learned:
- Mobile-first workflow
- Working with ScrollReveal which is a JavaScript library
- How to take the user to the top of the page with the Scroll Up sign when he/she starts scrolling the page.

```html
<a href="#" class="scrollup">
  <i class="fa-solid fa-arrow-up"></i>
</a>

<script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
```

```js
const scrollUp = document.querySelector(".scrollup");
function scroll() {
  this.scrollY >= 300
    ? scrollUp.classList.add("show")
    : scrollUp.classList.remove("show");
}
window.addEventListener("scroll", scroll);

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
});
ScrollReveal().reveal(".nav");
```
