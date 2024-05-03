

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import HeaderComp from '../../components/Headercomp'
import { Texts, imgUrl } from '../../constant'
import CommonText from '../../components/commonText'
import fontstylee from '../../constant/fstyles'

const RateUsScreen = () => {
  return (
    <SafeView>
   <HeaderComp img={imgUrl.Back_icon} txt={Texts.Terms_of_use} />
<ScrollView style={styles.containor}>
  <CommonText style={[fontstylee.sixteen_Bold,{marginVertical:10}]}>
    {Texts.Dummy_Text}
  </CommonText>
  <CommonText style={[fontstylee.sixteen_Bold,{marginVertical:10}]}>
    {Texts.Dummy_Text}
  </CommonText>
  <CommonText style={[fontstylee.sixteen_Bold,{marginVertical:10}]}>
    {Texts.Dummy_Text}
  </CommonText>
  <CommonText style={[fontstylee.sixteen_Bold,{marginVertical:10}]}>
    {Texts.Dummy_Text}
  </CommonText>
  <CommonText style={[fontstylee.sixteen_Bold,{marginVertical:10}]}>
    {Texts.Dummy_Text}
  </CommonText>
</ScrollView>
  </SafeView>
  )
}

export default RateUsScreen

const styles = StyleSheet.create({
  containor:{marginVertical:15,paddingHorizontal:15}
})