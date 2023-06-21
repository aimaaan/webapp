// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
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

// Get the news ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const newsId = urlParams.get("id");

// Fetch the news document with the given ID
const getNewsDocument = async () => {
  try {
    const newsDocRef = doc(db, "news", newsId);
    const docSnapshot = await getDoc(newsDocRef);

    if (docSnapshot.exists()) {
      const newsData = docSnapshot.data();
      const title = newsData.title;
      const content = newsData.content;
      const date = newsData.date.toDate().toLocaleDateString();
      const image = newsData.image;

      // Display the full content on the page
      const fullNewsContentElement = document.getElementById("full-news-content");
      fullNewsContentElement.innerHTML = `
      <img src="${image}" alt="News Image class="newsimg">
      <h2>${title}</h2><p class="ndate">${date}</p>  
      <p>${content}</p>
      `;
    } else {
      console.log("News document not found");
    }
  } catch (error) {
    console.log("Error getting news document:", error);
  }
};

getNewsDocument();