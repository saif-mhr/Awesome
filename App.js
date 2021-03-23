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
      { title: "Oracle", author: "Sun" },
      { title: ".NET", author: "Microsoft" }
    ],

    isVisible: false
  };

  // onChangeBookNameHandler = newTitle => {
  //    this.setState({
  //     books: [
  //       { title: newTitle, author: "Khan" },
  //       { title: "React", author: "Facebook" },
  //       { title: "Oracle", author: "Sun" }
  //     ]
  //    });
  // };

  changeTextHandler = text => {
    this.setState({
      books: [
        { title: "Java", author: "Herbert" },
        { title: text, author: "Facebook" },
        { title: "Oracle", author: "Sun" }
      ]
    });
  }

  toggleBookHandler = () => {
    const isVisible = this.state.isVisible;
    this.setState({ isVisible: !isVisible });
  }

  deleteBookHandler = bookIndex => {
    const books = this.state.books;
    books.splice(bookIndex, 1);
    this.setState({ books: books });

  };

  render() {
    let books = null;

    if (this.state.isVisible) {
      books = (
        <View>
          {
            this.state.books.map((book, index) => {
              return <Book
                title={book.title}
                author={book.author}
                click={this.deleteBookHandler.bind(this, index)}
              />
            })
          }
          {/* <Book
            title={this.state.books[0].title}
            author={this.state.books[0].author}
          //click={() => this.onChangeBookNameHandler("jre")}
          >
            <Text>This is a great book</Text>
          </Book>

          <Book
            title={this.state.books[1].title}
            author={this.state.books[1].author}
            onChangeBookNameHandler={this.changeTextHandler}
          />

          <Book
            title={this.state.books[2].title}
            author={this.state.books[2].author}
          /> */}
        </View>
      );
    }

    return (
      <View>
        <Text>My Book library :</Text>

        <Button
          title="Toggle book detail"
          onPress={this.toggleBookHandler}
        />

        {books}
        {/* <Button title="Click me" onPress={this.onChangeBookNameHandler.bind(this, "Jdk 1.5")} /> */}

        {/* <TextInput
           placeholder="Add your name"
           onChangeText={text => this.setState({ nameValue: text })}
           value={nameValue}
        /> */}

        {/* <Button
           onPress={() => alert(`Name: ${nameValue}`) }
           title="Press me" 
        /> */}
      </View>
    );
  }
}

//export default App;


// const App = () => {

//   const[initialBooks, updatedBooks] = useState(
//    [
//       { title: "Java", author: "Herbert" },
//       { title: "React", author: "Facebook" },
//       { title: "Oracle", author: "Sun" }
//    ]
//   );

//   const onChangeBookNameHandler = newTitle => {
//     updatedBooks(
//       [
//         { title: newTitle, author: "Herbert" },
//         { title: "React", author: "Facebook" },
//         { title: "Oracle", author: "Sun" }
//      ]
//     );
//   };
//   return (
//     <View>
//       <Text>My library :</Text>

//       <Book
//         title={initialBooks[0].title}
//         author={initialBooks[0].author}
//         click={() => onChangeBookNameHandler("jre")}
//       >
//         <Text>This is a great book</Text>
//       </Book>

//       <Book
//         title={initialBooks[1].title}
//         author={initialBooks[1].author}
//       />

//       <Book
//         title={initialBooks[2].title}
//         author={initialBooks[2].author}
//       />

//       <Button title="Click me" onPress={onChangeBookNameHandler.bind(this, "Jdk 1.5")} />
//     </View>
//   );
// }

// export default App;


