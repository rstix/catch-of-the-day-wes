import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCuHaRNIh2Ov_GWmdaSiMlPeF4ISuRBmAc',
  authDomain: 'catch-of-the-day-stix.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-stix.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
