<h2>josefaidt.dev <a href='https://app.netlify.com/sites/gallant-easley-3de8ba/deploys'><img align="right" src='https://api.netlify.com/api/v1/badges/d58ac795-8767-433a-bf66-31558d459980/deploy-status'/></a>
</h2>

[![code style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
![dependencies](https://img.shields.io/david/josefaidt/josefaidt.github.io.svg?style=flat-square)
![dev dependencies](https://img.shields.io/david/dev/josefaidt/josefaidt.github.io.svg?style=flat-square)
![License](https://img.shields.io/github/license/josefaidt/josefaidt.github.io.svg?style=flat-square)

Website project created for my personal portfolio. Visit it at [josefaidt.dev](https://josefaidt.dev/). Visit the progress over at [trello](https://trello.com/b/GQqL1K11/josefaidtme).

## The Stack

This version of my website is built using the following technologies:

- ESLint & Prettier &mdash; *linting and formatting*
  - Pseudo-Standard.js, see [Prettier#3845](https://github.com/prettier/prettier/issues/3845)
- [Gatsby v2](https://gatsbyjs.org/) &mdash; *static site generator; build*
  - React
    - Hooks
    - [styled-components](https://www.styled-components.com/)
    - animations via [react-pose](https://popmotion.io/pose/) by Popmotion
    - Markdown and MDX
  - SEO via Google Analytics
  - Caching
  - Client-side routing
  - Service Workers for offline support
- [Netlify CMS](https://netlify.com)
  - CI/CD
  - hosting
