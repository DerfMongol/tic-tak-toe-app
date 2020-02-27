import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Square = props => {
  const [xO, setxO] = useState(' ');
  const [xOColor, setxOColor] = useState('red');
  const [oneClick, setOneClick] = useState(true);
  const [border, setBorder] = useState();

  useEffect(() => {
    if (props.clicks === 0) {
      setxO(' ');
      setOneClick(true);
    }
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
    if (props.finalClick) {
      props.onClick();
      if (oneClick) {
        setOneClick(false);
      }

      let copyGrid = [...props.grid];
      if (props.clicks % 2 === 0) {
        setxO('O');
        copyGrid[props.index] = 'O';
        props.setGrid(copyGrid);
        setxOColor('red');
      } else {
        setxO('X');
        copyGrid[props.index] = 'X';
        props.setGrid(copyGrid);
        setxOColor('green');
      }
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
    width: 100,
    height: 100,
  },
  button: {
    padding: 20,
    alignItems: 'center',
  },
  xo: {
    fontSize: 40,
  },
});

export default Square;
