## Form Application

This single page application is used to validate and submit the form.

---

## Getting Started

**Prerequisites**

1. Install [yarn](https://yarnpkg.com/en/).
2. For macOS users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#mac-stable).
3. For Windows users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#windows-stable). There are several ways to install yarn, you can select one option.

If you have problems in installing _yarn_ on your machine, you can also run the application using _npm_. Install [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com). Instead of _yarn_ commands below, use _npm_ commands like, _npm install_.

---

## Build & Run the App

Inside the cloned directory, run the following commands.

1. **yarn install**. This will install all the dependencies.
2. **yarn run build-prod**. This will run webpack in production mode.
3. **yarn run serve**. This will run the application on localhost via _live-server_ & automatically opens a web browser showing the application running.

## App Walkthrough

Now that you have it running, I would like to explain the architecture of the application. I've used ES6 standard to code this application.

**Webpack**

I've used webpack, a module bundler to run babel & also to build the project. After building, webpack outputs a single JS (bundle.js) file containing all the javascript files & a single CSS (styles.css) containing all the styles.

**Directory Structure**

All the JS code live in _/src/_ directory. _app.js_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

**Components**

1. App - This is the main component for the application, where the root component is rendered.
2. Header - The header component of the app.
3. Dashboard - This component decides and displays the correct component on user behaviour.
4. Form - Renders the Redux form
5. FormField - Renders form fields
6. Summary - Shows the submitted form results

**Assumptions**

1. I've used materialize-css to follow grid layout.

**Unit Tests**

Test cases are written in _/src/tests/_.

**Styling**

SCSS is used to style the app. I've used bootstrap to import basic styling. Styles live in '_/src/styles_' directory. Compiled into CSS via webpack loaders & separated to a styles.css using '_mini-css-extract-plugin_'.
