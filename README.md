# FusionAuth xkit

This project is a simple example Node.js application that illustrates how to integrate with FusionAuth's OAuth system using the Authorization Code grant and to integrate with xkit.

## To run

This assumes you already have a running FusionAuth instance, user and application running locally. If you don't, please see the [5-Minute Setup Guide](https://fusionauth.io/docs/v1/tech/5-minute-setup-guide) to do so.

* update your FusionAuth application to allow a redirect of `http://localhost:3000/oauth-redirect`
* set up xkit as documented: https://docs.xkit.co/docs/custom-token-issuer Make sure to add some apps.
* `npm install`
* update `routes/index.js` and `views/index.pug` with the client id of your FusionAuth application.
* update `routes/index.js` with your client secret.
* `npm start`

Go to http://localhost:3000/ and login with the previously created user. You should be able to install your applications.

