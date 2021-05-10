import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function Header() {
  
const navigation = useNavigation();

const handleOnPress = () =>{
  navigation.navigate('Home');
}
  
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')}/>
        <Text style={styles.text}> Depósito Dois Irmãos</Text>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 100,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#fff',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold',
  }
});