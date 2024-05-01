import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from './sourceCode/constant'
import { RootNavigator } from './sourceCode/navigation'


const App = () => {
  return (
    <SafeAreaView style={styles.containor}>
      <StatusBar backgroundColor={Colors.Black} barStyle={'light-content'} />
        <RootNavigator/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  containor: { flex: 1, backgroundColor: Colors.Black, },
})


