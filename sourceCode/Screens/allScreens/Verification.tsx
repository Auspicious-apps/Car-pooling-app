import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Texts, imgUrl } from '../../constant'
import CommonText from '../../components/commonText'
import Fontf from '../../constant/Fontsf'
import OpacityButton from '../../components/opacityButton'

const Verification = () => {
  return (
    <SafeAreaView style={styles.contanior}>
  <CommonText style={styles.signin}>{Texts.Verification}</CommonText>
  <CommonText style={styles.txtdriver}>{Texts.Add_Driver_license}</CommonText>
  <CommonText>{Texts.Add_Proof_uber}</CommonText>
  <OpacityButton
   img1={imgUrl.caricon}
   name={Texts.Driver_License}
   button={styles.continuebutton}
   btnTextStyle={styles.buttontxt}
   img1style={{marginRight:5}}
  />
  <OpacityButton
   img1={imgUrl.uber_proof}
   name={Texts.Uber_Proof}
   button={styles.continuebutton}
   btnTextStyle={styles.buttontxt}
   img1style={{marginRight:5}}
   />
   <OpacityButton
   button={styles.NextButton}
   name={Texts.Next} 
       img2={imgUrl.arrowright}
   />
    </SafeAreaView>
  )
}

export default Verification

const styles = StyleSheet.create({
  contanior:{backgroundColor:Colors.Black,flex:1,paddingTop:'8%',paddingHorizontal:10,},
  signin: {fontSize: 24, textAlign: 'center', marginBottom:'7%',fontFamily:Fontf.Dm_Bold},
  txtdriver:{fontSize:20,fontFamily:Fontf.Dm_Bold},
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: {color: Colors.White},
  NextButton:{bottom:'4%',position:'absolute'}
})