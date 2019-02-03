import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDZR9z2v3_nTtjIb3GmN2EvCHkwn2k-Gu4',
  authDomain: 'gif-your-feeling.firebaseapp.com',
  databaseURL: 'https://gif-your-feeling.firebaseio.com',
  projectId: 'gif-your-feeling',
  storageBucket: 'gif-your-feeling.appspot.com',
  messagingSenderId: '626771467492'
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

const fireDb = firebase.firestore()
const firestore = firebase.firestore

export { fireDb, firestore }
