import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper.js";
import Title from "./components/Title.js";
import people from "./people.json";

class App extends Component {
  state = {
    people,
    clicked: []
  };

  //need to add points and count wins/losses

  random = image => {
    const people = this.state.people.sort((a, b) => 0.5 -Math.random());
    this.setState({ people });
  };

  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }
  
  render() {
    return (
      <Wrapper>
        <Title>Obliviate! Clicky Game</Title>
        {this.state.people.map(friend => (
          <Card
            // id={friend.id}
            image={friend.image}
            random ={this.random}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;
