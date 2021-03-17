import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

const Book = props => {
   return (
       <View>

       <TouchableOpacity onPress={props.click}>
           <Text>
              Title: {props.title} - Author: {props.author}
           </Text>
           {props.children}
           </TouchableOpacity>
       </View>
   );
}

export default Book;
