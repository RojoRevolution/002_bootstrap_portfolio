
# 002_bootstrap_portfolio

[Live Deploy](https://react-bs-portfolio.herokuapp.com/)

### Note: 
This project was created for a Full-Stack Coding Bootcamp, with the latest requirments being to convert the project into a React.js app. This project is not however, my actual portfolio. For my comlpete portfolio please visit [rojorevoution.com](https://rojorevolution.com)


![Screenshot](/public/images/002_bootstrap_screenshot.png)

This project is a responsive website layout created with the Bootstrap framework, as part of the UT-Austin Full Stack Web Dev Bootcamp. It is eventually meant to house a portfolio website but for now the content is empty. View below for information on the individual files.

## Universal Elements

The following elements are shared on every page.
• Top side, position fixed, centered navigation with some additional CSS effects. 
    - Navigation Links include Home, Portfolio, About and Contact(which is part of the about page)
• Footer Area  with the same navigation links as well as a smaller copyright section at the very bottom of the page

## Index Page

• Direclty below the nav, an intro(hero) area is included comprised of an h1 tag and a background-image
• Below the hero area, I included a small section with cards meant to be more of a preview of some of the projects(but not allof them) that will be included in the portfolio. The cards include an image preview area, a sub header, small info teaser paragraph and a "view more" button.
• Below the Project cards, I incldued a button which links to the actual portfolio page (same as the link in the header). This is only placeholder for now depending on how the content develops

## Portfolio Page

The portfolio page is really straight forward. Similar to the section on the homepage, there is a total of 2 rows with 3 cards each meant to house some of the projects on the portfolio page. These were designed and built to easily be duplicated as more projects are added.

## About Page

The about page includes two main sections.
 - The profile area
 - A contact form

 The profile area includes an image and a short informational parahraph. 
 
 The contact form is in a section directly below, which includes a ID so that it may still be accessed through the main navigation through the main navigation. Ex: /about.html#contact

 ## CSS

 The grand majority of CSS is coming directly from Bootstrap.

 I includes three CSS files for a few adjustsments
  - reset.css: I included a standard reset file
  - main.css: This is primarily Universal rules (body, h1, a etc.) plus some custom spacing rules for maring and padding, and other small fine tuned adjustments suchs as border-radius.
  - mediaqueries.css: this file only contains three rules pertaining to spacing at smaller screen sizes