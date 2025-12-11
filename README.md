# Vecta Corp. Website - Sass Conversion

_This project demonstrates Sass/SCSS features including variables, mixins with parameters, nesting, math operations, @for loops, lists, the nth() function, parent selectors, partials with @import, and a responsive media query mixin._

## Overview

This project is a refactored version of the Vecta Corp. website, converted from plain CSS to Sass with a Gulp build workflow. The original HTML structure was maintained while implementing modern Sass features for better maintainability and organization.

## Technologies Used

- Sass/SCSS
- Gulp.js
- Node.js

## What I Implemented

### Gulp Build System

- Configured Gulp to automatically compile Sass to CSS
- Set up file structure with `src` and `dist` folders
- Created `.gitignore` to exclude `node_modules` and other unnecessary files

### Sass Architecture

- **Partials**: Organized styles into multiple partial files
  - `_variables.scss` - Color, font, and path variables
  - `_navigation.scss` - Navigation menu styles
  - `_mixins.scss` - Reusable mixin definitions

### Sass Features Used

- **Variables**: Defined variables for all colors, image paths, and web fonts for consistent theming
- **Mixins**: Created reusable mixins with default parameters for generic boxes (logo, navigation, header, content areas, footer)
- **Nesting**: Implemented nested rules for the navigation menu and child elements
- **Math Operations**: Used Sass math operators for dynamic calculations
- **Media Queries**: Built a responsive breakpoint mixin for handling different screen sizes

---

**Course:** CS 648 - Advanced Topics in Web and Mobile Applications<br>
**University:** San Diego State University (SDSU)<br>
**Author:** Merlyn Mercylona M
