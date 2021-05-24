import firebase from 'firebase/app';

import firebaseConfig from './firebaseConfig';

require('firebase/auth');

firebase.initializeApp(firebaseConfig);

export default firebase;