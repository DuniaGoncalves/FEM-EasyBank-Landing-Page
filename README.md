# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned/revisited](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

I built a landing page semi pixel perfect since I was going by the design pdf not figma. I decided to use Remix and tailwindCSS. Since I have heard good things and thought it would be great to try something new but not stray to far from thing that I know. Made it responsive based on the directions I have mobile ~760 and desktop ~1440 it might be wonking somewhere in between.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<img src="https://user-images.githubusercontent.com/20430905/231049030-4d84259b-4349-4f27-aa5e-e647c0461f51.png" width="600" height="1000" />
<img src="https://user-images.githubusercontent.com/20430905/231049082-128b6c77-7f3e-4c8e-885d-23c9400c3bbc.png" width="200" height="1600" /><img src="https://user-images.githubusercontent.com/20430905/231049091-6ca22249-12ec-459c-9a1a-5f3afa0790ce.png" width="200" height="400" />


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Identify the requirements: Start by understanding the requirements of the component you are building. This includes defining the purpose, functionality, and performance requirements of the component. You may need to work with other stakeholders to gather these requirements.

Plan the architecture: Once you have a clear understanding of the requirements, plan the architecture of the component. This includes deciding on the design patterns, framework, libraries, and programming language you will use.

Write the code: Begin coding the component, following the architecture and design patterns that you planned. Make sure to write clean, maintainable, and reusable code that adheres to the best practices of your programming language and framework.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive
- [Remix](https://remix.run/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

I love mapping through similar things instead of witing the code multiple time. I do this in multiple parts of the code ie: Info Section and Article Section

```js
{
  social.map((icon) => (
    <Link to={"/"} prefetch="none" key={icon.image}>
      <img className="mr-4 lg:mr-6" src={icon.image} alt={icon.imageAlt} />
    </Link>
  ));
}
```

### Continued development

Test the component: Test the component thoroughly, using automated testing tools and manual testing to ensure that it works as intended. This includes testing for functionality, performance, security, and user experience.

Refactor and optimize: Once you have completed testing, refactor the code to ensure it is efficient, inclusive to all users, and maintainable. Optimize the code for performance and security.

Document the component: Document the component by creating clear and concise documentation, including installation instructions, usage examples, and API references.

Deploy the component: Finally, deploy the component to a production environment, ensuring that it works correctly in the target environment. Make sure to monitor the component's performance and address any issues that arise.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - As reference always!!
  Remix and tailwind docs were great those are linked above.

## Author

- Website - [Coming Soon](https://www.your-site.com) Coming Soon
- Frontend Mentor - [@DuniaGoncalves](https://www.frontendmentor.io/profile/DuniaGoncalves)
- Twitter - [@duniaknowsbest](https://twitter.com/duniaknowsbest)
