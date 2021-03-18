import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const Book = props => {
   return (
       <View style={styles.container}>

       <TouchableOpacity onPress={props.click} style={{backgroundColor:'silver'}}>
           <Text style={[{fontWeight: 'bold', color:'green'} , styles.otherText]}>
              Title: {props.title} - Author: {props.author}
           </Text>
           {props.children}
           </TouchableOpacity>
       </View>
   );
}

const styles = StyleSheet.create({
   container:{
    alignSelf:'center',
     alignContent:'center',
     flexDirection:'column',
     borderStyle:'solid'
   },

   otherText:{
     fontSize:22
   }
});
export default Book;
