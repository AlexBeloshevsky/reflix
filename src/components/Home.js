import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import '../styles/home.css'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {name:"Alex", color: "blue"},
        {name:"Nili", color: "red"},
        {name:"Danielle", color: "orange"},
        {name:"Bilby", color: "green"}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Who's watching?</h1>
        <div>{this.state.users.map(item => 
        <Link to="/catalog">
        <div style={{backgroundColor:item.color}}  className="userDiv" key={item.name}>
        {item.name}
        </div>
        </Link>
        )}
        </div>
      </div>
    )
  }

}

export default Home;