#Created Using the MERN stack and Bootstrap.

Hosted on Heroku at https://madlibwarehouse.herokuapp.com/

To clone this project, you will need to setup a Firebase project to enable sign-in authentication. Replace the config files for your own Firebase project. You also need to place your own serviceAccount JSON converted to a string in .env to allow the express server to authenticate the users log in. Firebase Config should be located in app.js in top directory. Under Authentication in the Firebase Console, you need to approve Google sign-in. 

You will also need to change the MongoDB connection to your own Atlas cluster, the filepath is found in Router/index.js.
