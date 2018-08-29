import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages:[] ,
      content: "" ,
    };
      this.messagesRef = this.props.firebase.database().ref('messages');
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      console.log(message);
      this.setState({ messages: this.state.messages.concat(message) })
   });
}
handleChange(e) {
  console.log(e.target.value);
  e.preventDefault();
  this.setState({
    content: e.target.value,
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.messagesRef.push ({
    userName: this.props.userName,
    content: this.state.content,
    sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
    roomId: this.props.activeRoom.key
  });
  this.setState({content: ''});
}
formatTime(time) {
  console.log(time);
  var date = new Date(time);
  if( this.hours >12 )
  { this.hours = this.hours - 12; }
  return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + (date.getHours() % 12)+ ":" + date.getMinutes();
}
  deleteMessage(message) {
    this.messageRef.child(message.key).remove();
  }
render() {
  return (
  <div>
  <h3>{this.props.activeRoom.name}</h3>
  <ul>
    {this.state.messages.filter((message) => message.roomId === this.props.activeRoom.key).map((message,index) => (
      <li key={index}> <b>{message.userName}</b> {message.content} {this.formatTime(message.sentAt)}</li>
    )
    )}
  </ul>
    <form onSubmit={ (e) => this.handleSubmit(e) } >
      <input type="text" value= {this.state.content}
      onChange= {(e) => {this.handleChange(e)}} />
      <input type="submit"  value="Submit Message"/>
    </form>
  </div>
);
  }
}

export default MessageList ;
