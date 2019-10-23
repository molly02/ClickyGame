import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper.js";
import Title from "./components/Title.js";
// import friends from "./friends.json";
import people from "./people.json";

// const shuffleImages = (array) => {
//   let counter = array.length;
//   // While there are elements in the array
//   while (counter > 0) {
//       // Pick a random index
//       let index = Math.floor(Math.random() * counter);
//       // Decrease counter by 1
//       counter--;
//       // And swap the last element with it
//       let temp = array[counter];
//       array[counter] = array[index];
//       array[index] = temp;
//   }
//   return array;
// };

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    people,
    clicked: []
  };

  removeFriend = image => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const people = this.state.people.filter(people => people.image !== image);
    // Set this.state.friends equal to the new friends array
    this.setState({ people });
  };

  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }

  // resetIconArray = () => {
    
  //   let newScramble = shuffleImages(people);
  //   this.setState({people: newScramble})
  // }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Obliviate! Clicky Game</Title>
        {this.state.people.map(friend => (
          <Card
            // id={friend.id}
            // name={friend.name}
            image={friend.image}
            removeFriend={this.removeFriend}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;


// render() {
//   return (
//     <Wrapper>
//       <Title>Clicky Game</Title>
//       {this.state.friends.map(friend => (
//         <Card
//           removeFriend={this.removeFriend}
//           id={friend.id}
//           key={friend.id}
//           name={friend.name}
//           image={friend.image}
//           occupation={friend.occupation}
//           location={friend.location}
//         />
//       ))}
//     </Wrapper>
//   );
// }