import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        {[...Array(9)].map((e, i) => (
          <Square key={i} index={i} onClick={increment} clicks={clicks} />
        ))}
      </View>
      <TouchableOpacity style={styles.restart} onPress={pressRestartHandler}>
        <Text>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  restart: {
    marginVertical: 50,
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
});

export default Table;
