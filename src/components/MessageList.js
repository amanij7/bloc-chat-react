import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:"" ,
      username:"" ,
      sentAt: "" ,
      roomId: ""
    };
      this.messagesRef = this.props.firebase.database().ref('messages');
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) })
   });
}
handleChange(e) {
  e.preventDefault();
  this.setState({
    username: this.state.username,
    content: this.state.content,
    sentAt: this.state.firebase.darabase.ServerValue.TIMESTAMP,
    roomId: this.state.roomId
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.setState ({
    username: this.state.username,
    content: this.state.content,
    sentAt: this.state.firebase.database.ServerValue.TIMESTAMP,
    roomId: this.state.roomId
  });
  this.setState({usermane:'', content: '', sentAt: '', roomId: ''});
}
  deleteMessage(message) {
    this.messageRef.child(message.key).remove();
  }
render() {
  return (
  <div>
  <ul>
    {this.state.messages.map(message => {
      <li> {message.content} </li>
    }
    )}
  </ul>
    <form onSubmit={ (e) => this.handleSubmit(e) } >
      <input type="text" value= {this.state.newMessage}
      onChange= {(e) => {this.handleChange(e)}} />
      <input type="submit" />
    </form>
  </div>

);
  }
}

export default MessageList ;
