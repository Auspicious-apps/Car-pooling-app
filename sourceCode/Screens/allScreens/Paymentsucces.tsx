import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import { Colors, Texts, imgUrl } from '../../constant'
import CommonText from '../../components/commonText'
import Fontf from '../../constant/Fontsf'
import OpacityButton from '../../components/opacityButton'
import { ROUTE_NAMES } from '../../navigation/StackNavigation'

const Paymentsucces = ({navigation}:any) => {
  return (
   <SafeView style={styles.conatinor}>
    <CommonText style={styles.txt}>{Texts.Payment_succesful}</CommonText>
<Image source={imgUrl.big_green_check} resizeMode='contain' style={styles.check_image} />

    <OpacityButton
    name={Texts.Next}
    pressButton={()=>{navigation.navigate(ROUTE_NAMES.CarReserved)}}
    buttongradient={styles.button}
    />

   </SafeView>
  )
}

export default Paymentsucces

const styles = StyleSheet.create({
    conatinor:{justifyContent:'center',alignItems:'center'},
    check_image:{height:120,width:120},
    txt:{fontSize:24,fontFamily:Fontf.Dm_Bold,color:Colors.Green,marginBottom:20},
    button_view:{position:'absolute',bottom:15},
    button: {position: 'absolute', bottom: 0},

})