import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import ViewCommon from '../../components/commonView';
import CommonText from '../../components/commonText';
import CommTouchable from '../../components/Touchablecomp';
import OpacityButton from '../../components/opacityButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontf from '../../constant/Fontsf';
import fontstylee from '../../constant/fstyles';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const PayCheckout = ({navigation}:any) => {
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Checkout} />
      <View style={styles.contanior_view}>
        <ViewCommon style={[styles.view_comman]}>
          <CommonText style={styles.green_txt}>{Texts.Total}</CommonText>
          <CommonText style={styles.green_txt}>{Texts.four_eight_nine}</CommonText>
        </ViewCommon>
        <View style={styles.gift_main_view}>
          <ViewCommon style={[styles.view_comman]}>
            <CommonText style={fontstylee.sixteen_light}>{Texts.Gift_Card}</CommonText>
            <CommTouchable
              textStyles={styles.add}
              text={Texts.Add}
              children={undefined}
            />
          </ViewCommon>
          <ViewCommon style={[styles.view_comman]}>
            <CommonText style={fontstylee.sixteen_light}>{Texts.Promo_Code}</CommonText>
            <CommTouchable
              textStyles={styles.add}
              text={Texts.Add}
              children={undefined}
            />
          </ViewCommon>
        </View>
        <ViewCommon style={styles.view_comman}>
          <CommonText style={fontstylee.eighteen_px_txt}>{Texts.Payment_Info}</CommonText>
          <ViewCommon style={styles.payment_info_view}>
            <CommonText  style={fontstylee.eighteen_px_txt}>{Texts.three_four_nine_zero}</CommonText>
            <Image
              source={imgUrl.Mastercard}
              resizeMode="contain"
              style={styles.mastarcard_style}
            />
          </ViewCommon>
        </ViewCommon>
        <TouchableOpacity style={styles.add_card_style_button} >
            <Image source={imgUrl.Plus_icon} resizeMode='contain' style={styles.plus_img}  />
            <CommonText style={styles.buttn_txt}>{Texts.Add_another_card}</CommonText>
        </TouchableOpacity>
        
          <OpacityButton name={Texts.Pay} 
            pressButton={()=>{navigation.navigate(ROUTE_NAMES.PaymentInfo)}}
            buttongradient={styles.button}
          />
          
       
      </View>
    </SafeView>
  );
};

export default PayCheckout;

const styles = StyleSheet.create({
  contanior_view: {
    backgroundColor: Colors.darkgrey,
    height: '90%',
    width: '96%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  view_comman: {justifyContent: 'space-between',alignItems:'center',marginVertical:3},
  gift_main_view: {
    paddingVertical: 35,
    borderBottomWidth: 2,
    borderColor: '#FFFFFF0D',
    marginBottom:27
  },
  add: {color: Colors.Green,fontSize:14,fontFamily:Fontf.Dm_Bold},
  buttonstyle: {bottom: 10, position: 'absolute', alignSelf: 'center'},
  mastarcard_style: {width: 36, height: 27, marginLeft: 10},
  plus_img:{height:12,width:12},
  add_card_style_button:{flexDirection:'row',alignItems:'center',alignSelf:'center',marginVertical:20},
  buttn_txt:{fontSize:16,color:Colors.Green,fontFamily:Fontf.Dm_Bold,marginLeft:9},
  payment_info_view:{alignItems:'center'},
  green_txt: {fontSize: 24, color: Colors.Green, fontFamily: Fontf.Dm_Bold},
  button: {position: 'absolute', bottom: 0},

});
