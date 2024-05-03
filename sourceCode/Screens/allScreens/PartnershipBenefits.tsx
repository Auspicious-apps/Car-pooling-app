import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import { Colors, Texts, imgUrl } from '../../constant'
import HeaderComp from '../../components/Headercomp'
import ViewCommon from '../../components/commonView'
import CommonText from '../../components/commonText'
import Fontf from '../../constant/Fontsf'

const PartnershipBenefits = () => {
  return (
   <SafeView>
       <HeaderComp img={imgUrl.Back_icon} txt={Texts.Partnership_Benefits} />
       <View style={styles.main_view}>
        <TouchableOpacity style={styles.touchable_style}>
          <ViewCommon><Image source={imgUrl.Finger_Icon} style={styles.icon_styles}/><CommonText style={styles.txt}>{Texts.Qualify_free_Services}</CommonText></ViewCommon>
          <Image style={styles.arrowwright} source={imgUrl.arrowright}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable_style}>
          <ViewCommon><Image  source={imgUrl.Book_icon} style={styles.icon_styles}/><CommonText style={styles.txt}>{Texts.Information_Partners}</CommonText></ViewCommon>
          <Image style={styles.arrowwright} source={imgUrl.arrowright}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable_style}>
          <ViewCommon><Image  source={imgUrl.Crown_icon} style={styles.icon_styles}/><CommonText style={styles.txt}>{Texts.Referral_programs}</CommonText></ViewCommon>
          <Image style={styles.arrowwright} source={imgUrl.arrowright}/>
        </TouchableOpacity>
       </View>
   </SafeView>
  )
}

export default PartnershipBenefits

const styles = StyleSheet.create({
  main_view:{marginVertical:15},
  touchable_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    marginVertical: 10,

    height: 48,
    alignItems: 'center',
  },
  icon_styles:{height:24,width:24,marginRight:10},
  arrowwright: {tintColor: Colors.White, height: 30, width: 30},
  txt:{fontSize:16,fontFamily:Fontf.Dm_Bold},
})