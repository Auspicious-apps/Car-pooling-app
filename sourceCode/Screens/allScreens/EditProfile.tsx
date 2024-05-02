import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import InputText from '../../components/textInput';
import CommonText from '../../components/commonText';
import ViewCommon from '../../components/commonView';
import Fontf from '../../constant/Fontsf';

const EditProfile = () => {
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Edit} />
      <ScrollView style={{marginVertical: 10}}>
        <InputText txt={Texts.First_name} placeholder={Texts.F_name} />
        <InputText txt={Texts.Last_name} placeholder={Texts.L_name} />
        <InputText
          txt={Texts.Date_of_birth}
          placeholder={Texts.D_O_B}
          img2={imgUrl.W_calendar}
        />
        <InputText txt={Texts.Email} placeholder={Texts.mail_com} />
        <InputText txt={Texts.Telephone} placeholder={Texts.tele_num} />
        <CommonText style={styles.Document_txt}>{Texts.Documents}</CommonText>
        <View>
          <ViewCommon style={styles.comman_View}>
            <View style={styles.Flex_Row}>
              <Image source={imgUrl.Document_Icon} style={styles.image_style} />
              <View>
                <CommonText style={styles.txt}>{Texts.Driver_License}</CommonText>
                <CommonText style={styles.m_b_txt}>{Texts.one_MB}</CommonText>
              </View>
            </View>
            <View style={styles.Flex_Row}>
                <TouchableOpacity style={styles.image_style}>
              <Image
                source={imgUrl.Edit_Icon}
                style={styles.edit_img}
              />
              </TouchableOpacity>
              <TouchableOpacity style={styles.image_style}>
              <Image source={imgUrl.Delete_Icon} style={styles.image_style} />
              </TouchableOpacity>
            </View>
          </ViewCommon>
        </View>
        <View>
          <ViewCommon style={styles.comman_View}>
            <View style={styles.Flex_Row}>
              <Image source={imgUrl.Document_Icon} style={styles.image_style} />
              <View>
                <CommonText style={styles.txt}>{Texts.Uber_Proof}</CommonText>
                <CommonText style={styles.m_b_txt}>{Texts.one_MB}</CommonText>
              </View>
            </View>
            <View style={styles.Flex_Row}>
                <TouchableOpacity style={styles.image_style}>
              <Image
                source={imgUrl.Edit_Icon}
                style={styles.edit_img}
              />
              </TouchableOpacity>
              <TouchableOpacity style={styles.image_style}>
              <Image source={imgUrl.Delete_Icon} style={styles.image_style} />
              </TouchableOpacity>
            </View>
          </ViewCommon>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  comman_View: {justifyContent: 'space-between',marginVertical:10},
  Flex_Row: {flexDirection: 'row',alignItems:'center',},
  image_style: {height: 40, width: 40,justifyContent:'center',alignItems:'center'},
  edit_img:{height: 20, width: 20,tintColor:Colors.Green},
  txt:{fontSize:16,fontFamily:Fontf.Dm_Bold,marginLeft:10},
  m_b_txt:{fontSize:12,color:'#F9FAFB',marginLeft:10,fontFamily:Fontf.Dm_Regular},
  Document_txt:{fontSize:15,fontFamily:Fontf.Dm_Medium,marginVertical:15}
});
