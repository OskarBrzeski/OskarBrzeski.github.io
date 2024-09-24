# Portfolio

Portfolio website showing various projects I have created or contributed to.

Also includes various information on different coding websites such as CodeWars, Project Euler and Advent of Code.

This website is made using Vite, React, Typescript and SASS and hosted via GitHub Pages.

## How to run it

Clone this repository. I recommend naming the directory (e.g. Portfolio):
```bash
git clone https://github.com/OskarBrzeski/OskarBrzeski.github.io.git Portfolio
```

Install the dependencies:
```bash
cd Portfolio
npm install
```

Start the dev server:
``` bash
npm run dev
```

The dev server will usually serve the web page at `localhost:5173`

# Development

If you wish to make changes to the CSS, first ensure that SASS is watching for file changes:
```bash
npx sass --watch src/sass:src/css
```
This way, all changes to SASS files will be compiled to CSS automatically.