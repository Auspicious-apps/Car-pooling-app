import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import HeaderComp from '../../components/Headercomp'
import { Texts, imgUrl } from '../../constant'
import CommonText from '../../components/commonText'
import fontstylee from '../../constant/fstyles'

const PolicyScreen = () => {
  return (
  <SafeView>
   <HeaderComp img={imgUrl.Back_icon} txt={Texts.Privacy_and_policy} />
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

export default PolicyScreen

const styles = StyleSheet.create({
  containor:{marginVertical:15,paddingHorizontal:15}
})