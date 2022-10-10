# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Capture%20web_10-10-2022_141725_127.0.0.1.jpeg)


### Links

- Solution URL: [My FEM Profile](https://www.frontendmentor.io/solutions/advice-generator-app-wapi-html-css-js-5FqBYMNjwu)
- Live Site URL: [Github Pages](https://ltossian.github.io/advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Vanilla JS
- Advice Slip API

### What I learned


Thanks to this project I was able to practice API GET requests with fetch() and async/await functions.


```js
/**
 * 
 * @returns the advice (STRING) property of the slip object
 */
const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');

        if (response.ok) {
            const jsonResponse = await response.json();

            const advice_req = jsonResponse.slip.advice;
            
            return advice_req;
        }
        throw new Error ('Advice Request Failed');
    } catch (error) {
        console.log(error);
    }
}
```


### Continued development

This project was low difficulty and pretty comfortable as a API Request practice. I hope to use a bigger API that'= is more complex to handle in an other challenge. 


## Author

- Frontend Mentor - [@ltossian](https://www.frontendmentor.io/profile/ltossian)
- Twitter - [@louisantch](https://www.twitter.com/louisantch)
