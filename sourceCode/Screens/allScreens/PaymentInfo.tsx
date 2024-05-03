import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import ViewCommon from '../../components/commonView';
import CommonText from '../../components/commonText';
import CommTouchable from '../../components/Touchablecomp';
import fontstylee from '../../constant/fstyles';
import Fontf from '../../constant/Fontsf';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const PaymentInfo = ({navigation}: any) => {
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Payment_Info} />
      <View style={styles.conatinor}>
        <ImageBackground
          resizeMode="cover"
          source={imgUrl.Mastarcard_background}
          style={styles.mastarcard_background}>
          <ViewCommon style={styles.view_comman_style}>
            <ViewCommon>
              <Image
                source={imgUrl.Mastercard}
                resizeMode="contain"
                style={styles.mastarcard_img}
              />
              <CommTouchable
                text={Texts.Default}
                textStyles={styles.defult_txt}
                style={styles.defult_button_view}
                children={undefined}
              />
            </ViewCommon>
            <CommTouchable
              imageSource={imgUrl.Delete_Icon}
              imagestyle={styles.delete_icon}
              children={undefined}
            />
          </ViewCommon>
          <View style={[styles.view_comman_style, {marginBottom: '8%'}]}>
            <CommonText style={[fontstylee.sixteen_Bold, {marginBottom: 3}]}>
              {Texts.Faiz_Anwar}
            </CommonText>
            <CommonText style={fontstylee.sixteen_light}>
              {Texts.num_mastar_card}
            </CommonText>
          </View>
        </ImageBackground>

        <ImageBackground
          resizeMode="cover"
          source={imgUrl.Visa_background}
          style={styles.mastarcard_background}>
          <ViewCommon style={styles.view_comman_style}>
            <Image
              source={imgUrl.Visa_icon}
              resizeMode="contain"
              style={styles.visa_icon}
            />

            <CommTouchable
              imageSource={imgUrl.Delete_Icon}
              imagestyle={styles.delete_icon}
              children={undefined}
            />
          </ViewCommon>
          <View style={[styles.view_comman_style, {marginBottom: '8%'}]}>
            <CommonText style={[fontstylee.sixteen_Bold, {marginBottom: 3}]}>
              {Texts.Zayn_Malik}
            </CommonText>
            <CommonText style={fontstylee.sixteen_light}>
              {Texts.visa_num}
            </CommonText>
          </View>
        </ImageBackground>
        <TouchableOpacity style={styles.add_card_style_button} onPress={()=>{navigation.navigate(ROUTE_NAMES.AddCard)}} >
            <Image source={imgUrl.Plus_icon} resizeMode='contain' style={styles.plus_img}  />
            <CommonText style={styles.buttn_txt}>{Texts.Add_another_card}</CommonText>
        </TouchableOpacity>
      </View>
    </SafeView>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  mastarcard_background: {
    height: 185,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginVertical:10
  },
  conatinor: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  mastarcard_img: {height: 33, width: 44},
  delete_icon: {height: 40, width: 40},
  defult_button_view: {
    backgroundColor: Colors.Green,
    width: 86,
    height: 24,
    borderRadius: 24,
    marginLeft: '10%',
  },
  view_comman_style: {
    justifyContent: 'space-between',
    width: '88%',
    alignSelf: 'center',
    marginVertical: '4%',
  },
  defult_txt: {
    color: Colors.white_black_mix,
    fontFamily: Fontf.Dm_Bold,
    fontSize: 12,
  },
  visa_icon:{height:48,width:48},
  add_card_style_button:{flexDirection:'row',alignItems:'center',alignSelf:'center',marginVertical:20},
  plus_img:{height:12,width:12},
  buttn_txt:{fontSize:16,color:Colors.Green,fontFamily:Fontf.Dm_Bold,marginLeft:9},

});
