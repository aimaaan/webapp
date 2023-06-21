// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, orderBy, query } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc_dyW4hEQYJ6VnfjY5vgz28aFft2WZmU",
    authDomain: "muslim4u-aada7.firebaseapp.com",
    projectId: "muslim4u-aada7",
    storageBucket: "muslim4u-aada7.appspot.com",
    messagingSenderId: "377065153534",
    appId: "1:377065153534:web:76b9f043a49e2773ee56af",
    measurementId: "G-682V54WTEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the Firestore database
const db = getFirestore();

// Fetch the news collection
const newsCollection = collection(db, "news");
const q = query(newsCollection, orderBy("date", "desc"));
getDocs(q)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const newsData = doc.data();
            const id = doc.id;
            const title = newsData.title;
            let content = newsData.content;
            const date = newsData.date;
            const image = newsData.image;

            //full news
            const fullContentPageURL = `/html/fullnews.html?id=${id}`;

            // Limit content to 25 words
            const words = content.split(' ');
            if (words.length > 25) {
                content = words.slice(0, 25).join(' ') + '...';
            }

            // Display the data on your webpage
            const newsElement = document.createElement("div");
            newsElement.innerHTML = `
            <div class="bigbox">
            <h4>${title}</h4>
            <div class="newsbox">
                <div class="content-wrapper">
                    <div class="image-container">
                        <img src="${image}" alt="placeholder">
                    </div>
                    <div class="text-container">
                        <p class="cut-content">${content}</p>
                        <a href="${fullContentPageURL}">Read More</a>
                    </div>
                </div>
            </div>
            </div>
            `;
            document.getElementById("content").appendChild(newsElement);
        });
    })
    .catch((error) => {
        console.log("Error getting news documents: ", error);
    });