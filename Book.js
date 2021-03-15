import React from "react";
import {
  View,
  Text
} from "react-native";

const Book = props => {
   return (
       <View>
           <Text>
              Title: {props.title} - Author: {props.author}
           </Text>
           {props.children}
       </View>
   );
}

export default Book;
