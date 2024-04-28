const firebase = require("firebase-admin");

const credentials = require("./service-account-file.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://reclaim-convergent-default-rtdb.firebaseio.com/",
});

module.exports = firebase;