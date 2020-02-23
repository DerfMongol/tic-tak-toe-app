import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Table from './components/table/Table'

const App = props => {
  return (
    <View style={styles.setup}>
      <Table />
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
