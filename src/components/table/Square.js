import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Square = props => {
  const [xO, setxO] = useState(' ');
  const [oneClick, setOneClick] = useState(true);

  useEffect(() => {
    if (props.clicks === 0) {
      setxO(' ');
      setOneClick(true);
    }
  })

  const squarePressHandler = () => {
    props.onClick();
    if (oneClick) {
      setOneClick(false);
    }
    if (props.clicks % 2 === 0) {
      setxO('O');
    } else {
      setxO('X');
    }
  };

  let TouchCmp = oneClick ? TouchableOpacity : View;

  return (
    <View style={styles.square}>
      <TouchCmp style={styles.button} onPress={squarePressHandler}>
        <Text style={styles.xo}>{xO}</Text>
      </TouchCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    width: 100,
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
