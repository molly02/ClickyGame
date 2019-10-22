import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper.js";
import Title from "./components/Title.js";
// import friends from "./friends.json";
import people from "./people.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    people
  };

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
            id={friend.id}
            name={friend.name}
            image={friend.image}
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