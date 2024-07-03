import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
//import {firebase};

const firebaseConfig = {
    apiKey: "AIzaSyAgaOAA9jq9KvVpihtAvl__zO3SUkdsQjM",
    authDomain: "smartbillingsystem-474b7.firebaseapp.com",
    projectId: "smartbillingsystem-474b7",
    storageBucket: "smartbillingsystem-474b7.appspot.com",
    messagingSenderId: "891727065908",
    appId: "1:891727065908:web:fde2711a9593c091c0ab61",
    measurementId: "G-C4VL7W1C52"
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




