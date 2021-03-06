import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import './index.css';

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
    constructor(props){
      super(props)
      this.state = {
      activeRoom:{} ,
      userName:''
  }
}
  setActiveRoom(room) {
  console.log(room);
    this.setState({activeRoom: room});
  }
  setUser(user){
    this.setState({ userName: user.displayName });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <RoomList firebase={firebase} activeRoom = {this.state.activeRoom} setActiveRoom = {this.setActiveRoom.bind(this)}/>
        <MessageList firebase={firebase} activeRoom= {this.state.activeRoom} userName={this.state.userName} />
        <User firebase={firebase} userName= {this.state.userName} setUser={this.setUser.bind(this)} />
      </div>
    );
  }
}
export default App;
