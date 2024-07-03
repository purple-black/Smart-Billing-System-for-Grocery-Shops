import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
//import {firebase};

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"  // Optional, only if using Firebase Analytics
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
//const database = firebase.getDatabase();
const database = getDatabase();
const analytics = getAnalytics(app);
//const ref = ref();

const itemsRef = ref(database, "/items");

onValue(itemsRef, (snapshot) => {
    const itemList = document.getElementById('item-list');
    //itemList.innerHTML = ''; // Clearing previous items

    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        const li = document.createElement('li');
        li.textContent = `${item.name} - Quantity: ${item.quantity} - Price: ${item.price}`;
        console.log(item.name);
        console.log(item.quantity);
        console.log(item.price);
        itemList.appendChild(li);
    });
});


/*

itemsRef.on('child_added', (snapshot, prevChildKey) => {
    const newPost = snapshot.val();
    console.log('Product: ' + newPost.name);
    console.log('Quantity: ' + newPost.quantity);
    console.log('Price: ' + newPost.price);
    console.log('Previous Post ID: ' + prevChildKey);

  });

itemsRef.on('value', (snapshot) => {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; // Clearing previous items

    snapshot.forEach(function(childSnapshot) {
        const item = childSnapshot.val();
        const li = document.createElement('li');
        li.textContent = `${item.name} - Quantity: ${item.quantity} - Price: ${item.price}`;
        itemList.appendChild(li);
    });
});
*/




