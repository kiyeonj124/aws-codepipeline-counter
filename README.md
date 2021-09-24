# AWS CodePipeline with React Counter app

This project was a CI/CD Pipeline demo for [the React Counter app](https://codepipeline-counter-demo-kj.s3.ap-northeast-2.amazonaws.com/index.html) with AWS CodePipeline. \
After you create your React app, you can set up AWS CodePipeline to connect source code from github to AWS CodePipeline, build your code, and deploy to AWS S3.\
To enable build and deployment, you must create a `buildspec.yml` with the appropriate phases and artifacts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
