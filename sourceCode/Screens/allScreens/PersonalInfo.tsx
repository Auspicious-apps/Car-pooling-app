import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeView from '../../components/SafeView'
import HeaderComp from '../../components/Headercomp'
import { Colors, Texts, imgUrl } from '../../constant'
import CommonText from '../../components/commonText'
import fontstylee from '../../constant/fstyles'
import Fontf from '../../constant/Fontsf'
import ViewCommon from '../../components/commonView'
import { ROUTE_NAMES } from '../../navigation/StackNavigation'

const PersonalInfo = ({navigation}:any) => {
    const arrayData = [
        { id:1,Placeholder:Texts.First_name,Textt:Texts.F_name,},
        { id:2,Placeholder:Texts.Last_name,Textt:Texts.L_name,},
        { id:3,Placeholder:Texts.Date_of_birth,Textt:Texts.D_O_B,},
        { id:4,Placeholder:Texts.Email,Textt:Texts.mail_com,},
        { id:5,Placeholder:Texts.Telephone,Textt:Texts.tele_num,},
    ]
    const renderItem = ({item}: any) => {
        return (
<View style={styles.details_view}>
    <CommonText style={styles.placeholder_txt}>{item.Placeholder}</CommonText>
    <CommonText style={styles.txt}>{item.Textt}</CommonText>
</View>
        )
    }
  return (
    <SafeView>
     
         <HeaderComp img={imgUrl.Back_icon} txt={Texts.Personal_Information} img2={imgUrl.Edit_Icon} img2style={styles.Headerimg} pressimg={()=>{navigation.navigate(ROUTE_NAMES.EditProfile)}}/>
         <View style={styles.profile_view}>
        <Image source={imgUrl.Profile_Pic} style={styles.Profile_Pic_style} />
        <TouchableOpacity>
        <Image resizeMode='contain' source={imgUrl.Camera_Icon} style={styles.Camera_Icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal:7}}>
      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <CommonText style={[styles.placeholder_txt,{marginVertical:10}]}>{Texts.Verification}</CommonText>
      <ViewCommon style={styles.coman_View}><Image style={styles.document_img} resizeMode='contain' source={imgUrl.Document_Icon}/><CommonText style={styles.txt}>{Texts.Drivers_license_check}</CommonText></ViewCommon>
      <ViewCommon style={styles.coman_View}><Image style={styles.document_img} resizeMode='contain' source={imgUrl.Document_Icon}/><CommonText style={styles.txt}>{Texts.Credit_Check}</CommonText></ViewCommon>
      </ScrollView>

    </SafeView>
  )
}

export default PersonalInfo

const styles = StyleSheet.create({
    Headerimg:{height:24,width:24},
    Profile_Pic_style: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginVertical: 15,
      },
      profile_view: {
        marginVertical: 10,
        alignSelf: 'center',
      },
      Camera_Icon:{
        height:40,width:40,position:'absolute',bottom:12,right:3
      },
      details_view:{marginVertical:7,},
      placeholder_txt:{color:Colors.light_gray,fontSize:14,fontFamily:Fontf.Dm_Regular},
      txt:{fontSize:16,fontFamily:Fontf.Dm_Bold,},
      document_img:{height:40,width:40,marginRight:10},
      coman_View:{marginVertical:4}
})