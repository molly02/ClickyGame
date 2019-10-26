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

//
// handlePicked = event => {

//   const name = event.target.attributes.getNamedItem("name").value;
//   this.shuffleCharacters()
//   this.checkGuess(name, this.updateTopScore)
// }

// shuffleCharacters = () => {
//   this.setState(this.state.characters = this.shuffleArray(this.state.characters))
// }

// shuffleArray = (a) => {
//   var j, x, i;
//   for (i = a.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     x = a[i];
//     a[i] = a[j];
//     a[j] = x;
//   }
//   return a;
// }

// checkGuess = (name, cb) => {
//   const newState = { ...this.state };
//   if (newState.pickedChars.includes(name)) {
//     newState.alertMessage = `YOU ALREADY PICKED "${name.toUpperCase()}"!`
//     newState.pickedChars = []
//     this.setState(this.state = newState)
//   } else {
//     newState.pickedChars.push(name)
//     newState.alertMessage = `GOOD CHOICE!`
//     this.setState(this.state = newState)
//   }
//   cb(newState, this.alertWinner)
// }

// updateTopScore = (newState, cb) => {
//   if (newState.pickedChars.length > newState.topScore) {
//     newState.topScore++
//     this.setState(this.state = newState)
//   }
//   cb(newState)
// }

// alertWinner = (newState) => {
//   if (newState.pickedChars.length === 12) {
//     newState.alertMessage = "CHAMPION!";
//     newState.pickedChars = [];
//     this.setState(this.state = newState)
//   }
// }
//

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    people,
    clicked: []
  };

  random = image => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const people = this.state.people.sort((a, b) => 0.5 -Math.random());
    // Set this.state.friends equal to the new friends array
    this.setState({ people });
  };

  // rearrange (friends){
  //   return friends.sort(function (a, b) { return (0.5 - Math.random()) })

  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }
  
  // resetIconArray = () => {
    
  //   let newScramble = shuffleImages(people);
  //   this.setState({people: newScramble})
  // }


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
            random ={this.random}
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