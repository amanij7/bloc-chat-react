import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }
  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) })
   });
 }
   handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newRoomName){
      return newRoomName;}
    const newRoom = { rooms: this.state.newRoomName};
    this.roomsRef.push({rooms: this.state.newRoomName], newRoomName: ''});
    }
  handleChange(e){
    this.setState({newRoomName: e.target.value})
    );
  }
  deleteRoom() {
    const rooms = this.state.rooms.slice();
    const filteredRooms = rooms.filter();
    this.setState({ rooms:filteredRooms })
  }


  render() {
    return (
      <section>
      {this.state.rooms.map((room, index) =>
        <div key={index}>{room.name}</div>
      )}
      <div id="create-room">
         <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text"
           value={this.state.newRoomName}
           onChange= { (e) => this.handleChange(e) } />
          <input type="submit" value="Create"/>
          <button type="button" onClick={() => this.deleteRoom()}>Delete</button>
        </form>
        </div>
       </section>
       );
  }
 }

export default RoomList
