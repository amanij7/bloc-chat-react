import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

var config = {
   apiKey: "AIzaSyBaytKNJMLoLiAR0Zwc5qSX8nU9kjy6Lcw",
   authDomain: "bloc-chat-75c68.firebaseapp.com",
   databaseURL: "https://bloc-chat-75c68.firebaseio.com",
   projectId: "bloc-chat-75c68",
   storageBucket: "bloc-chat-75c68.appspot.com",
   messagingSenderId: "743127066646"
 };
 firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
