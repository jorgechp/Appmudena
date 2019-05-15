import { getApiKeys } from './apiKeysModule.mjs';

export function loadFromDb(mapCallBack, listCallBack) {
    let restaurants = new Map();

    firebase.initializeApp({
        projectId: getApiKeys()['FIREBASE_PROJECT']
    });

    let db = firebase.firestore();
    let transaction = db.collection(getApiKeys()['FIREBASE_COLLECTION']).get();
    transaction.then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            restaurants.set(doc.data()["name"], doc.data());
        });
    });

    transaction.finally(function () {
            mapCallBack(restaurants);
            listCallBack(restaurants);
        }
    );
}
