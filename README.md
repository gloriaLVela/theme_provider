
# ThemeProvider

Example from https://blog.bitsrc.io/4-ways-to-override-material-ui-styles-43aee2348ded

ThemeProvider is another component that we can use to style components with styles other than the ones from Material UI. It lets us apply a fixed set of styles called themes so that we can apply them uniformly to multiple components.

We create a theme by using the createMuiTheme function.It returns an object which we assigned to the theme object, which is set as the value of the theme prop of ThemeProvider .

Once we did that, we can use the color palette names in the components nested inside ThemeProvider .

We import the color objects and set them as the values of the properties of the palette property.
Then we use the key name with the color prop for the buttons.
Then we get 2 buttons with purple and green text respectively.

## Pros
ThemeeProvider lets us use themes that are created from Material UI. And, we can add any styles to it and use it.

## Cons
It’s not as flexible as CSS, and if we decide to use something other than Material UI, then we have to recreate all the styles from scratch.
Also, creating themes is harder than using CSS since we have import color objects to apply colors. Creating themes also require lots of code for any nontrivial app.
We can create objects and pass them off as a theme. However, we have to pass on a big object as a theme in that case.

We can also style deep child elements with it by writing more code.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
"# theme_provider" 
