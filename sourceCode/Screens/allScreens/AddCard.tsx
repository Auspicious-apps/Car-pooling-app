import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import HeaderComp from '../../components/Headercomp'
import { Texts, imgUrl } from '../../constant'
import InputText from '../../components/textInput'
import OpacityButton from '../../components/opacityButton'
import { ROUTE_NAMES } from '../../navigation/StackNavigation'

const AddCard = ({navigation}:any) => {
  return (
  <SafeView>
       <HeaderComp img={imgUrl.Back_icon} txt={Texts.Add_Card} style={styles.header_style}/>
       <InputText placeholder={Texts.Cardholder} txt={Texts.Cardholder} />
       <InputText placeholder={Texts.ZIP_Code} txt={Texts.ZIP_Code} />
       <InputText placeholder={Texts.one_two_three} txt={Texts.Card_Number}  img2={imgUrl.Wallet_Icon} />
       <InputText placeholder={Texts.MM_YYYY} txt={Texts.Expire_Date} />
       <InputText placeholder={Texts.CVV} txt={Texts.CVV} />
       <View style={styles.button_view}>
        <OpacityButton
        name={Texts.Add}
        pressButton={()=>{navigation.navigate(ROUTE_NAMES.Paymentsucces)}}
        // buttongradient={{marginBottom:'5%'}}
        />
       </View>
  </SafeView>
  )
}

export default AddCard

const styles = StyleSheet.create({
  button_view:{bottom:'3%',position:'absolute',alignSelf:'center'},
  header_style:{marginBottom:10}
})