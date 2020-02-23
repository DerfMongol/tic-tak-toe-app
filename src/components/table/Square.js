import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Square = props => {
  const [xO, setxO] = useState(' ');
  const [xOColor, setxOColor] = useState('');
  const [oneClick, setOneClick] = useState(true);
  const [border, setBorder] = useState();

  useEffect(() => {
    if (props.clicks === 0) {
      setxO(' ');
      setOneClick(true);
    }
    console.log(props.index);
    if ([0, 1, 3, 4].includes(props.index)) {
      setBorder({
        borderRightWidth: 2,
        borderBottomWidth: 2,
      });
    }
    if ([2, 5].includes(props.index)) {
      setBorder({
        borderBottomWidth: 2,
      });
    }
    if ([6, 7].includes(props.index)) {
      setBorder({
        borderRightWidth: 2,
      });
    }
  }, [props.index, props.clicks]);

  const squarePressHandler = () => {
    props.onClick();
    if (oneClick) {
      setOneClick(false);
    }
    if (props.clicks % 2 === 0) {
      setxO('O');
      setxOColor('red');
    } else {
      setxO('X');
      setxOColor('green');
    }
  };

  let TouchCmp = oneClick ? TouchableOpacity : View;

  return (
    <View style={[styles.square, border]}>
      <TouchCmp style={styles.button} onPress={squarePressHandler}>
        <Text style={[styles.xo, {color: xOColor}]}>{xO}</Text>
      </TouchCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    width: '30%',
  },
  button: {
    padding: 20,
    alignItems: 'center'
  },
  xo: {
    fontSize: 30,
  },
});

export default Square;
