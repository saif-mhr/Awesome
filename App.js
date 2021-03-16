import React, { Component } from "react";

import {
  View,
  Text,
  Button
} from "react-native";

import Book from "./Book";

export default class App extends Component {

  state = {
    books: [
      { title: "Java", author: "Herbert" },
      { title: "React", author: "Facebook" },
      { title: "Oracle", author: "Sun" }
    ],

    otherValue: "other state value"
  };

  onChangeBookNameHandler = newTitle => {
     this.setState({
      books: [
        { title: newTitle, author: "Khan" },
        { title: "React", author: "Facebook" },
        { title: "Oracle", author: "Sun" }
      ]
     });
  };

  render() {
    return (
      <View>
        <Text>My library :</Text>

        <Book
          title={this.state.books[0].title}
          author={this.state.books[0].author}
          click={() => this.onChangeBookNameHandler("jre")}
          >
          <Text>This is a great book</Text>
        </Book>

        <Book
          title={this.state.books[1].title}
          author={this.state.books[1].author}
        />

        <Book
          title={this.state.books[2].title}
          author={this.state.books[2].author}
        />

        <Button title="Click me" onPress={this.onChangeBookNameHandler.bind(this, "Jdk 1.5")} />
      </View>
    );
  }
}

//export default App;
