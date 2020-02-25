import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Square from './Square';

const Table = props => {
  const [clicks, setClicks] = useState(0);
  const [grid, setGrid] = useState([...Array(9).keys()]);
  const [result, setResult] = useState(null);
  const [finalClick, setFinalClick] = useState(true)

  useEffect(() => {
    let res = null;
    if (
      (grid[0] === grid[1] && grid[1] === grid[2]) ||
      (grid[0] === grid[3] && grid[3] === grid[6]) ||
      (grid[0] === grid[4] && grid[4] === grid[8])
    ) {
      res = grid[0];
    } else if (
      (grid[3] === grid[4] && grid[4] === grid[5]) ||
      (grid[1] === grid[4] && grid[4] === grid[7]) ||
      (grid[2] === grid[4] && grid[4] === grid[6])
    ) {
      res = grid[4];
    } else if (
      (grid[6] === grid[7] && grid[7] === grid[8]) ||
      (grid[2] === grid[5] && grid[5] === grid[8])
    ) {
      res = grid[8];
    }
    if (res) {
      setResult(res);
      setFinalClick(false)
    }
    if (clicks === 9 && res === null) {
      setResult('No one')
    }

  }, [grid, result]);

  const squareClickHandler = () => {
    setClicks(prevCount => prevCount + 1);
  };

  const restartHandler = () => {
    setClicks(0);
    setGrid([...Array(9).keys()]);
    setResult(null);
    setFinalClick(true)
  };

  return (
    <View style={styles.tableContainer}>
      <Text style={styles.winner}>{result ? `${result} is the winner!` : null}</Text>
      <View style={styles.row}>
        {[...Array(9)].map((e, i) => (
          <Square
            key={i}
            index={i}
            onClick={squareClickHandler}
            clicks={clicks}
            grid={grid}
            setGrid={setGrid}
            finalClick={finalClick}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.restart} onPress={restartHandler}>
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
  winner: {
    height: 50,
    marginVertical: 20,
    fontSize: 30,
    color: 'red'
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
    backgroundColor: '#44E4F7',
    borderRadius: 5,
  },
});

export default Table;
