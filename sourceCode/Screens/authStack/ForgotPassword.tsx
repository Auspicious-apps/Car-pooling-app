import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommonText from '../../components/commonText'
import { Colors, Texts } from '../../constant'
import Fontf from '../../constant/Fontsf'
import InputText from '../../components/textInput'
import OpacityButton from '../../components/opacityButton'
import ViewCommon from '../../components/commonView'
import { MyNavigation } from '../../utils/helper'
import { ROUTE_NAMES } from '../../navigation/StackNavigation'

const ForgotPassword = () => {
  const [navigate]=MyNavigation()
  return (
    <View style={styles.containor}>
      <CommonText style={styles.signin}>{Texts.ForgotPassword}</CommonText>
      <CommonText>{Texts.Forgot_pass_intructions}</CommonText>
      <CommonText>{Texts.How_to_reset}</CommonText>
      <InputText
        placeholder={Texts.Enter_Email} txt={Texts.Email}
      />
      <OpacityButton
        name="Submit"
        button={styles.buttonn}
        pressButton={()=>{navigate(ROUTE_NAMES.ResendEmail)}}
      />
      <ViewCommon >
        <CommonText style={styles.signintxt}>{Texts.Back_to}</CommonText>
        <TouchableOpacity>
          <CommonText style={[styles.signintxt, { color: Colors.Green }]}>{Texts.Sign_IN}</CommonText>
        </TouchableOpacity>
      </ViewCommon>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  containor: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Black,
    padding: 15
  },
  signin: { fontSize: 24, textAlign: 'center', marginBottom: 10, fontFamily: Fontf.Dm_Bold },
  buttonn: { marginVertical: 20 },
  signintxt: { fontSize: 16 }
})