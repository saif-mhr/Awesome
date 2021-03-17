import React, { useState } from "react";

import {
  View,
  Text,
  Button
} from "react-native";

import Book from "./Book";

const App = () => {

  const[initialBooks, updatedBooks] = useState(
   [
      { title: "Java", author: "Herbert" },
      { title: "React", author: "Facebook" },
      { title: "Oracle", author: "Sun" }
   ]
  );
  
  const onChangeBookNameHandler = newTitle => {
    updatedBooks(
      [
        { title: newTitle, author: "Herbert" },
        { title: "React", author: "Facebook" },
        { title: "Oracle", author: "Sun" }
     ]
    );
  };
  return (
    <View>
      <Text>My library :</Text>

      <Book
        title={initialBooks[0].title}
        author={initialBooks[0].author}
        click={() => onChangeBookNameHandler("jre")}
      >
        <Text>This is a great book</Text>
      </Book>

      <Book
        title={initialBooks[1].title}
        author={initialBooks[1].author}
      />

      <Book
        title={initialBooks[2].title}
        author={initialBooks[2].author}
      />

      <Button title="Click me" onPress={onChangeBookNameHandler.bind(this, "Jdk 1.5")} />
    </View>
  );
}

export default App;

// export default class App extends Component {

//   state = {
//     books: [
//       { title: "Java", author: "Herbert" },
//       { title: "React", author: "Facebook" },
//       { title: "Oracle", author: "Sun" }
//     ],

//     otherValue: "other state value"
//   };

//   onChangeBookNameHandler = newTitle => {
//      this.setState({
//       books: [
//         { title: newTitle, author: "Khan" },
//         { title: "React", author: "Facebook" },
//         { title: "Oracle", author: "Sun" }
//       ]
//      });
//   };

//   render() {
//     return (
//       <View>
//         <Text>My library :</Text>

//         <Book
//           title={this.state.books[0].title}
//           author={this.state.books[0].author}
//           click={() => this.onChangeBookNameHandler("jre")}
//           >
//           <Text>This is a great book</Text>
//         </Book>

//         <Book
//           title={this.state.books[1].title}
//           author={this.state.books[1].author}
//         />

//         <Book
//           title={this.state.books[2].title}
//           author={this.state.books[2].author}
//         />

//         <Button title="Click me" onPress={this.onChangeBookNameHandler.bind(this, "Jdk 1.5")} />
//       </View>
//     );
//   }
// }

//export default App;
