import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Square from './Square';

const Table = props => {
  const [clicks, setClicks] = useState(0);
  const [grid, setGrid] = useState([...Array(9).keys()]);
  const [result, setResult] = useState(null);
  const [finalClick, setFinalClick] = useState(true);
  const [showSlash, setShowSlash] = useState(new Array(2));

  useEffect(() => {
    let res = null;
    let copySlash = [...showSlash];

    if (grid[0] === grid[1] && grid[1] === grid[2]) {
      res = grid[0];
      copySlash[1] = styles.firstRowWin;
    }
    if (grid[0] === grid[3] && grid[3] === grid[6]) {
      res = grid[0];
      copySlash[1] = styles.firstColumnWin;
    }
    if (grid[0] === grid[4] && grid[4] === grid[8]) {
      res = grid[0];
      copySlash[1] = styles.slashWin;
    }
    if (grid[3] === grid[4] && grid[4] === grid[5]) {
      res = grid[4];
      copySlash[1] = styles.secondRowWin;
    }
    if (grid[1] === grid[4] && grid[4] === grid[7]) {
      res = grid[4];
      copySlash[1] = styles.secondColumnWin;
    }
    if (grid[2] === grid[4] && grid[4] === grid[6]) {
      res = grid[4];
      copySlash[1] = styles.backSlashWin;
    }
    if (grid[6] === grid[7] && grid[7] === grid[8]) {
      res = grid[8];
      copySlash[1] = styles.thirdRowWin;
    }
    if (grid[2] === grid[5] && grid[5] === grid[8]) {
      res = grid[8];
      copySlash[1] = styles.thirdColumnWin;
    }

    if (res) {
      setResult(res);
      setFinalClick(false);
      copySlash[0] = 'flex';
      setShowSlash(copySlash);
    }
    if (clicks === 9 && res === null) {
      setResult('No one');
    }
  }, [grid, result]);

  const squareClickHandler = () => {
    setClicks(prevCount => prevCount + 1);
  };

  const restartHandler = () => {
    let copySlash = [...showSlash];
    copySlash[0] = 'none';
    copySlash[1] = null;
    setShowSlash(copySlash);

    setClicks(0);
    setGrid([...Array(9).keys()]);
    setResult(null);
    setFinalClick(true);
  };

  return (
    <View style={styles.tableContainer}>
      <Text style={styles.winner}>
        {result ? `${result} is the winner!` : null}
      </Text>

      <View style={styles.row}>
        <View style={[showSlash[1], {display: showSlash[0]}]}></View>
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
    color: 'red',
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
  // strike: {
  //   position: 'absolute',
  //   width: 370,
  //   borderBottomColor: 'black',
  //   borderBottomWidth: 2,
  // },
  firstColumnWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '90deg'}],
    top: '50%',
    left: '-27%',
  },
  secondColumnWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '90deg'}],
    top: '50%',
    left: 0,
  },
  thirdColumnWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '90deg'}],
    top: '50%',
    left: '27%',
  },
  firstRowWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '0deg'}],
    top: '17%',
    left: 0,
  },
  secondRowWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '0deg'}],
    top: '50%',
    left: 0,
  },
  thirdRowWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '0deg'}],
    top: '83%',
    left: 0,
  },
  slashWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '45deg'}],
    top: '50%',
    left: 0,
  },
  backSlashWin: {
    position: 'absolute',
    width: 370,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    transform: [{rotate: '315deg'}],
    top: '50%',
    left: 0,
  },
});

export default Table;
