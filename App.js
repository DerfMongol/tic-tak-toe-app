import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = props => {
  return (
    <View style={styles.setup}>
      <Text style={styles.setupText}>Tic Tak Toe Bitch</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  setup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  setupText: {
    color: 'red'
  }
})

export default App
