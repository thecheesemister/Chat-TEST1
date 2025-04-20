// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBQezwyhj4CP5Lw_mCM-WGiwkSZJKG2qUg",
  authDomain: "chatapp-a00e4.firebaseapp.com",
  projectId: "chatapp-a00e4",
  storageBucket: "chatapp-a00e4.firebasestorage.app",
  messagingSenderId: "960986673776",
  appId: "1:960986673776:web:fee8da1f2ec492404ffab5",
  measurementId: "G-7TMTEKQWKK",
  databaseURL: "https://chatapp-a00e4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Elements
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

// Submit message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") return;

  push(ref(db, "messages"), {
    text,
    timestamp: Date.now()
  });

  input.value = "";
});

// Listen for new messages
onChildAdded(ref(db, "messages"), (snapshot) => {
  const data = snapshot.val();
  addMessage(data.text);
});

function addMessage(text) {
  const msg = document.createElement("div");
  msg.className = "chat-message";
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
