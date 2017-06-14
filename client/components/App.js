import React, { Component } from 'react';
import { Route, Redirect} from 'react-router';
import axios from 'axios';
import Signup from './Signup';
import './../styles.css';

class App extends Component {
  constructor (){
    super ();
    this.state = {
      
      user: {
        username: "",
        password: ""
      }
    }
    this.getAccountCreated = this.getAccountCreated.bind(this);
    this.processAccountCreated = this.processAccountCreated.bind(this);
  }

getAccountCreated (event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    
    this.setState({
      user 
    });
}

 processAccountCreated(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    let obj = {};
    obj.username = this.state.user.username;
    obj.password = this.state.user.password;
    let that = this;
    axios.post('/', obj).then(function (response) {
      that.setState({redirect: true});
    }).catch(function (error) {
      console.log("errorhsdghgf",error);
    });
 }

  render() {
    if (this.state.redirect) {
    return <Redirect push to="/Userpage" />;
  }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the World of Secrets</h2>
          <h3>ifHackers => May the odds be in your favor</h3>
        </div>
        <div>
          <Signup username={this.state.user.username} password={this.state.user.password} getAccountCreated={this.getAccountCreated} processAccountCreated={this.processAccountCreated}/>
          {/*<Login />*/}
        </div>
      </div>
    );
  }
}

export default App;