(function() {
  "use strict";

  angular.module('app.core')
    .service('FirebaseRef', FirebaseRefService);

      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCILggs-Y9mxjqbhpKVyAZKd6dxa7Ezm78",
    authDomain: "fireside-33afd.firebaseapp.com",
    databaseURL: "https://fireside-33afd.firebaseio.com",
    projectId: "fireside-33afd",
    storageBucket: "fireside-33afd.appspot.com",
    messagingSenderId: "403672810931"
  };
  firebase.initializeApp(config);

  /**
   * Create Firebase references
   * @return database referance and storage referance
   */
  function FirebaseRefService() {
    return {
      db: firebase.database().ref(),
      storage: firebase.storage().ref()
    };
  }

}());
