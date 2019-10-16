This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### How it works

1- There is a public area in the app root path "/"<br />
2- A login at the top of the page<br />
3- The login offers sign in/up with user and password + Google IdP<br />
4- When logged in, the root path shows more information<br />
5- The "/profile" path shows the information retrieved from the Auth0 profile transferred in via token, including custom claims<br />
6- The "/checkout" path controls the e-mail verification state. If the e-mail is not yet verified on Auth0, it will not allow the user to checkout<br />
7- The "/googlepeople" path shows the total connections the user has if he/she has signed in with Google IdP<br />
8- The "/protectedapi" path shows how to implement a request to an API that is protected with Auth0 OAuth2.0<br />
