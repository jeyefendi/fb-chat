import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyD3sdRGvwaoV-NJGBFZMkIVNowoyI5NSdE",
  authDomain: "fb-chat-5ede1.firebaseapp.com",
  projectId: "fb-chat-5ede1",
  storageBucket: "fb-chat-5ede1.appspot.com",
  messagingSenderId: "346945689834",
  appId: "1:346945689834:web:3317d7f01dd16edeff9f93",
  measurementId: "G-HYL45RYP1W",
});

export const Context = createContext()

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>
);
