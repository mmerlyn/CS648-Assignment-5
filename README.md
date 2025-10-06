# Vecta Corp. Website - Sass Conversion

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

## Installation

```bash
npm install
```

## Usage

Compile Sass once:

```bash
gulp sass
```

Watch for changes and auto-compile:

```bash
gulp watch
```

Then open `index.html` in your browser.
