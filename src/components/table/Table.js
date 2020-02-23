import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import Square from './Square';

const Table = props => {
  const [clicks, setClicks] = useState(0);

  const increment = () => {
    setClicks(prevCount => prevCount + 1);
  };

  const pressRestartHandler = () => {
    setClicks(0);
  };

  return (
    <View>
      <View style={styles.row}>
        <Square onClick={increment} clicks={clicks} />
        <Square onClick={increment} clicks={clicks} />
        <Square onClick={increment} clicks={clicks} />
      </View>
      <View style={styles.row}>
        <Square onClick={increment} clicks={clicks} />
        <Square onClick={increment} clicks={clicks} />
        <Square onClick={increment} clicks={clicks} />
      </View>
      <View style={styles.row}>
        <Square onClick={increment} clicks={clicks} />
        <Square onClick={increment} clicks={clicks} />
        <Square onClick={increment} clicks={clicks} />
      </View>
      <View style={styles.restart}>
        <Button
          title="Restart"
          onPress={pressRestartHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  restart: {
    marginVertical: 50,
  },
});

export default Table;
