import React from "react";
import {
   View,
   Text,
   TouchableOpacity,
   TextInput
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

         <TextInput
            placeholder="Add your name"
            onChangeText={props.onChangeBookNameHandler}
            value={props.title}
         />

      </View>
   );
}

export default Book;
