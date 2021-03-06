import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ''
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }
  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;  //adding a key properity to the room object and associating it with the key properity of snapshot object
      this.setState({ rooms: this.state.rooms.concat(room) })
   });
 }
  createRoom(name){
    const rooms = this.state.newRoomName
    this.roomsRef.push({name: name});
    }

   handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newRoomName){
      return
    }
      this.createRoom(this.state.newRoomName);
      this.setState({ newRoomName: "" });
    }

   handleChange(e) {
    this.setState({newRoomName: e.target.value});
  }

  render() {
    return (
  <section>
    {this.state.rooms.map((room, index) =>
    <div key={index} onClick={() => this.props.setActiveRoom(room)} > {room.name}
    </div> )}
    <div>
      <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={this.state.newRoomName} onChange= { (e) => this.handleChange(e) } />
          <input type="submit" value="Create Room"/>
      </form>
     </div>
    </section>
       );
  }
}

export default RoomList ;
