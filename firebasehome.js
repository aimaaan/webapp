// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, orderBy, query, limit } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
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
const q = query(newsCollection, orderBy("date", "desc"), limit(2));
getDocs(q)
    .then((querySnapshot) => {
        const newsWrapper = document.createElement("div");
        newsWrapper.className = "news-wrapper";
        const activityWrapper = document.createElement("div");
        activityWrapper.className = "news-wrapper";

        querySnapshot.forEach((doc) => {
            const newsData = doc.data();
            const id = doc.id;
            const title = newsData.title;
            let content = newsData.content;
            const date = newsData.date;
            const image = newsData.image;

            //full news
            const fullContentPageURL = `fullnews.html?id=${id}`;

            // Limit title to the first two words
            const titleWords = title.split(" ");
            const truncatedTitle = titleWords.slice(0, 2).join(" ");

            // Limit content to 25 words
            const words = content.split(" ");
            if (words.length > 25) {
                content = words.slice(0, 15).join(" ") + "...";
            }

            // Create a small box element
            const newsElement = document.createElement("div");
            newsElement.className = "smallbox";
            newsElement.innerHTML = `
                <h6>${truncatedTitle}</h6>
                <img src="${image}" alt="news image" class="smallimg">
                <p>${content}</p>
                <a href="${fullContentPageURL}">Read More</a>
            `;
            const activityElement = document.createElement("div");
            activityElement.className = "smallbox";
            activityElement.innerHTML = `
                <h6>${truncatedTitle}</h6>
                <img src="${image}" alt="news image" class="smallimg">
                <p>${content}</p>
                <a href="${fullContentPageURL}">Read More</a>
            `;

            // Append the small box to the news wrapper
            newsWrapper.appendChild(newsElement);
            activityWrapper.appendChild(activityElement);
        });

        // Append the news wrapper to the news section
        const newsSection = document.getElementById("news");
        newsSection.appendChild(newsWrapper);
        const activitySection = document.getElementById("activitys");
        activitySection.appendChild(activityWrapper);
    })
    .catch((error) => {
        console.log("Error getting news documents: ", error);
    });