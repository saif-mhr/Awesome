import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";
import Book from "./Book";
import Hello from "./Hello";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>My library:</Text>
        <Book 
           title = "Java" 
           author="Herbert">
           {/* <Text>This is a great book</Text> */}
           <Hello/>
        </Book>

        <Book 
           title = "React" 
           author="Facebook"
        />

        <Book 
          title = "Oracle" 
          author="Sun M."
       />
      </View>
    );
  }
}

//export default App;
