# A step by step guide on how to build your own starter for GatsbyJS

Start a new GatsbyJS project

`gatsby new .`

Add your dependencies

`yarn add bootstrap react-bootstrap react-icons node-sass gatsby-plugin-sass`

Add a styles folder, and a main style sheet to import other styles from.

`mkdir styles`

`touch style.scss`

We import our bootstrap SCSS file here so that it is loaded with all of its styles into our project.

Next we have to import our styles into our `gatsby-browser.js` in order to load the stylesheet.

Now for the time consuming part, configuring our layout.
