const paymentRequestUrl = 'https://paytech.sn/api/payment/request-payment'
const env = 'test'
const IPN_URL = 'http://localhost:4200/'
const SUCCESS_URL =   "http://localhost:4200/"
const PAYTECH_CREDENTIALS = {
    API_KEY: '439ab876dc7524e73bc4451ee0719ee843593ff1bc867806c00220b4cf9e450e',
    SECRET_KEY: '5df7c9a2e7d6bf94c6288320f98c65366a6056b99929b3d09c9280df1350e7ba'
}
const firebase = require('firebase')
const firebaseConfig = {
    apiKey: 'AIzaSyCpC7FjiILozY9z5990DcnIw7IoJdA8E2g',
    authDomain: 'adafri-e5ceb.firebaseapp.com',
    databaseURL: 'https://adafri-e5ceb.firebaseio.com',
    projectId: 'adafri-e5ceb',
    storageBucket: 'gs://adafri-e5ceb.appspot.com/',
    messagingSenderId: '702910555148',
    appId: '1:702910555148:web:0e2506edd3602e5f'
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

module.exports = {paymentRequestUrl, env, IPN_URL, SUCCESS_URL, PAYTECH_CREDENTIALS, db}