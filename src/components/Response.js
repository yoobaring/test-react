ำผ 
import React, { Component } from "react";

export default class DataLoader extends Component {
  state = { data: [] };

  componentDidMount() {
    fetch("http://ok-myhome.herokuapp.com/search/myhome")
      .then(response => response.json())
      .then(data =>
        this.setState(() => {
          return { data };
        })
      );
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li key={el.name}>{el.province}</li>
          ))}
        </ul>
      </div>
    );
  }
}

