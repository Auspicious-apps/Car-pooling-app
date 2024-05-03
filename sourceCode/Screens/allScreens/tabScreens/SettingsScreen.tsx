import React from "react"
import { View,Image, StyleSheet, TouchableOpacity } from "react-native"
import SafeView from "../../../components/SafeView"
import CommonText from "../../../components/commonText"
import ViewCommon from "../../../components/commonView"
import { Texts, imgUrl } from "../../../constant"
import fontstylee from "../../../constant/fstyles"
import { ROUTE_NAMES } from "../../../navigation/StackNavigation"


const SettingsScreen=({navigation}:any)=>{
    return(
       <SafeView>
        <CommonText style={[fontstylee.big_bold_wieght,{textAlign:'left',marginVertical:20}]}>Settings</CommonText>
        <TouchableOpacity style={styles.optionview} onPress={()=>{navigation.navigate(ROUTE_NAMES.GeneralScreen)}}><Image source={imgUrl.Genralicon} style={styles.imagee}/><CommonText style={fontstylee.cardtxt}>{Texts.General}</CommonText></TouchableOpacity>
        <TouchableOpacity style={styles.optionview} onPress={()=>{navigation.navigate(ROUTE_NAMES.PartnershipBenefits)}}><Image source={imgUrl.PartnershipIcon} style={styles.imagee}/><CommonText  style={fontstylee.cardtxt}>{Texts.Partnership_Benefits}</CommonText></TouchableOpacity>
        <TouchableOpacity style={styles.optionview} onPress={()=>{navigation.navigate(ROUTE_NAMES.SupportAssistance)}}><Image source={imgUrl.Headseticon} style={styles.imagee}/><CommonText  style={fontstylee.cardtxt}>{Texts.Support_Assistance}</CommonText></TouchableOpacity>
        <TouchableOpacity style={styles.optionview} onPress={()=>{navigation.navigate(ROUTE_NAMES.AboutSwift)}}><Image source={imgUrl.Hearticon} style={styles.imagee}/><CommonText  style={fontstylee.cardtxt}>{Texts.About_SwiftRide}</CommonText></TouchableOpacity>

       </SafeView>
    )
}

export default SettingsScreen
const styles = StyleSheet.create({
    imagee:{height:24,width:24,marginRight:10},
    optionview:{flexDirection:'row',marginVertical:10,alignItems:'center',},
    Settingstxt:{marginVertical:10}
})