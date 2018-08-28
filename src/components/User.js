import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
    });
  }

signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
}

signOut() {
  this.props.firebase.auth().signOut();
}

handleChange(user) {
   const login = user;
   if (signIn == true) {
     this.signOut();
   } else if (signIn == false){
     this.signIn();
   }
 }

render() {
  return (
    <section>
        <button onClick={this.signIn.bind(this)} onChange={(user) => this.handleChange(user)}>Sign In</button>
        <button onClick={this.signOut.bind(this)}>Sign Out</button>
        }
    </section>
    );
  }
}

export default User;
