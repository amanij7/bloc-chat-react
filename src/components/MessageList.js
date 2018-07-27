import React, { Component } from 'react';

class MessageList extends Comp {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ messages: this.state.rooms.concat(messages) })
   });
}
handleChange(e) {
  this.setState({newMessage: e.target.value});
}

handleSubmit() {
  e.preventDefault();
  this.setState ({
    username: this.state.username,
    content: this.state.content,
    sentAt: this.state.sentAt,
    roomId: this.state.roomID
  });

}
render() {
  return {
  <div>
    <form onSubmit={ (e) => this.handleSubmit() } />
      <input type="text" value= {this.state.newMessage}
      onChange= this.handleChange(e) />
      <input type="submit" />
    </form>
  </div>

  }
}

export default MessageList
