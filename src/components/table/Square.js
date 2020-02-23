import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Square = props => {
  const [xO, setxO] = useState(' ');

  const squarePressHandler = () => {
    console.log(props.clicks % 2);
    console.log(xO);
    props.onClick();
    if (props.clicks % 2 === 0) {
      setxO('O');
    } else {
      setxO('X');
    }
  };
  return (
    <View style={styles.square}>
      <TouchableOpacity style={styles.button} onPress={squarePressHandler}>
        <Text style={styles.xo}>{xO}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    width: 100
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  xo: {
    fontSize: 20,
  },
});

export default Square;
