import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import HeaderComp from '../../components/Headercomp'
import { Colors, Texts, imgUrl } from '../../constant'
import CommonText from '../../components/commonText'
import fontstylee from '../../constant/fstyles'
import Fontf from '../../constant/Fontsf'
import { ROUTE_NAMES } from '../../navigation/StackNavigation'

const AboutSwift = ({navigation}:any) => {
  return (
   <SafeView>
    <HeaderComp img={imgUrl.Back_icon} txt={Texts.About_Swift_Ride}/>
    <View style={styles.main_View}>

    <View style={styles.version_view_style}>
        <CommonText style={fontstylee.sixteen_Bold}>{Texts.Version}</CommonText>
        <CommonText style={styles.version_num_txt}>{Texts.version_num}</CommonText>
    </View>
    <View style={styles.version_view_style}>
        <CommonText style={fontstylee.sixteen_Bold}>{Texts.Build}</CommonText>
        <CommonText style={styles.version_num_txt}>{Texts.build_num}</CommonText>
    </View>
    <TouchableOpacity style={styles.touchable_style} onPress={()=>{navigation.navigate(ROUTE_NAMES.PolicyScreen)}}>
        <CommonText style={fontstylee.sixteen_Bold}>{Texts.Privacy_and_policy}</CommonText>
        <Image style={styles.arrowwright} source={imgUrl.arrowright} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchable_style} onPress={()=>{navigation.navigate(ROUTE_NAMES.TermsScreen)}}>
        <CommonText style={fontstylee.sixteen_Bold}>{Texts.Terms_of_use}</CommonText>
        <Image style={styles.arrowwright} source={imgUrl.arrowright} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchable_style} onPress={()=>{navigation.navigate(ROUTE_NAMES.RateUsScreen)}}>
        <CommonText style={fontstylee.sixteen_Bold}>{Texts.Rate_Us}</CommonText>
        <Image style={styles.arrowwright} source={imgUrl.arrowright} />
    </TouchableOpacity>
    </View>
   </SafeView>
  )
}

export default AboutSwift

const styles = StyleSheet.create({
    touchable_style:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:48,marginVertical:10
    },
    arrowwright: {tintColor: Colors.White, height: 30, width: 30},
    version_view_style:{height:48,marginVertical:10},
    main_View:{paddingHorizontal:15,marginVertical:15},
    version_num_txt:{fontSize:14,fontFamily:Fontf.Dm_Regular}
})