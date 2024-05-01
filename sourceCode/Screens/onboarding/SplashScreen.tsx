import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constant'
import { ROUTE_NAMES } from '../../navigation/StackNavigation'

const SplashScreen = ({navigation}:any) => {

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate(ROUTE_NAMES.Login)
    },3000)
   
  }, [])

  return (
    <SafeAreaView style={styles.containor}>
      <StatusBar backgroundColor={Colors.Black} barStyle={'light-content'} />
      <Image source={require('../../assets/Images/content.png')}
        style={styles.img} />
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  containor: { flex: 1, backgroundColor: Colors.Black, justifyContent: 'center', alignItems: 'center' },
  img: { width: 361, height: 83 }
})