import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAsBGdE2xXUaBXbmI5DnBWrcukJ9if87b4',
    authDomain: 'cms-ticket-72fce.firebaseapp.com',
    projectId: 'cms-ticket-72fce',
    storageBucket: 'cms-ticket-72fce.appspot.com',
    messagingSenderId: '1018496603438',
    appId: '1:1018496603438:web:62b8dda1d67ad647b2d6bf',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
