import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDON6g1OC4BvxXTFt1X-GwqcC-wx4E0z8M',
  authDomain: 'hapnn-74cff.firebaseapp.com',
  databaseURL: 'https://hapnn-74cff.firebaseio.com',
  projectId: 'hapnn-74cff',
  storageBucket: 'hapnn-74cff.appspot.com',
  messagingSenderId: '672154500160'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
