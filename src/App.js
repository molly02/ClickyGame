import React from 'react';
//import logo from './logo.svg';
import './App.css';
import card from "./components/card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import people from  "./people.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    people
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.people.map(peoples => (
          <card
            //clicked to remeber
            image={peoples.image}
          />
        ))}
      </Wrapper>
    );
  }

export default App;
