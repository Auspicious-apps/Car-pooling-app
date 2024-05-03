import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from './sourceCode/constant'
import { RootNavigator } from './sourceCode/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.containor}>
      <StatusBar backgroundColor={Colors.Black} barStyle={'light-content'} />
        <RootNavigator/>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({
  containor: { flex: 1, backgroundColor: Colors.Black, },
})


