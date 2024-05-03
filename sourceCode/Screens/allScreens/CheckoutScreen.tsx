import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import Fontf from '../../constant/Fontsf';
import ViewCommon from '../../components/commonView';
import fontstylee from '../../constant/fstyles';
import OpacityButton from '../../components/opacityButton';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const CheckoutScreen = ({navigation}: any) => {
  const data = [
    {
      id: 1,
      placeholder: Texts.Date,
      txt: Texts.Tue_Oct,
    },
    {
      id: 2,
      placeholder: Texts.Time,
      txt: Texts.Two_Pm,
    },
    {
      id: 3,
      placeholder: Texts.Address,
      txt: Texts.San_Mateo,
    },
    {
      id: 4,

      placeholder: Texts.Plan,
      txt: Texts.five_hundred_Miles,
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.render_View}>
        <CommonText style={styles.placeholder}>{item.placeholder}</CommonText>
        <CommonText style={fontstylee.sixteen_Bold}>{item.txt}</CommonText>
      </View>
    );
  };
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Checkout} />
      <ScrollView>
        <View style={styles.card}>
          <CommonText style={styles.car_name_txt}>{Texts.Mercedes}</CommonText>
          <Image
            source={imgUrl.Mercedes}
            style={styles.car_img}
            resizeMode="contain"
          />
          <View style={styles.flatlist_view}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
            />
          </View>
          <ViewCommon style={styles.coman_View}>
            <CommonText style={styles.miles_txt}>
              {Texts.five_hundred}
            </CommonText>
            <CommonText style={styles.miles_txt}>
              {Texts.four_six_nine + '.00'}
            </CommonText>
          </ViewCommon>
          <ViewCommon style={styles.coman_View}>
            <CommonText style={styles.trip_fee}>{Texts.Trip_fee}</CommonText>
            <CommonText style={styles.trip_fee}>
              {Texts.trip_fee_dollar}
            </CommonText>
          </ViewCommon>

          <View style={styles.button_View}>
            <ViewCommon style={styles.green_txt_View}>
              <CommonText style={styles.green_txt}>{Texts.Total}</CommonText>
              <CommonText style={styles.green_txt}>
                {Texts.four_eight_nine}
              </CommonText>
            </ViewCommon>
            <OpacityButton name={Texts.Checkout} 
            pressButton={()=>{navigation.navigate(ROUTE_NAMES.PayCheckout)}}
            // PayCheckout
            />
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: Colors.darkgrey,
    borderRadius: 16,
    marginVertical: 15,
  },
  car_name_txt: {
    fontSize: 20,
    fontFamily: Fontf.Dm_Bold,
    marginBottom: 10,
    textAlign: 'center',
  },
  car_img: {
    width: '100%',
    height: 210,
    alignSelf: 'center',
  },
  placeholder: {
    color: Colors.light_gray,
    fontSize: 14,
    fontFamily: Fontf.Dm_Regular,
  },
  render_View: {width: '50%', marginVertical: 8},
  flatlist_view: {
    borderTopWidth: 1,
    borderColor: Colors.light_gray,
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginBottom: 25,
  },
  coman_View: {
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 3,
  },
  trip_fee: {
    fontSize: 18,
    color: Colors.light_gray,
    fontFamily: Fontf.Dm_Regular,
  },
  miles_txt: {fontSize: 18, fontFamily: Fontf.Dm_Bold},
  button_View: {height: 103, marginTop: '19%'},
  green_txt: {fontSize: 24, color: Colors.Green, fontFamily: Fontf.Dm_Bold},
  green_txt_View: {justifyContent: 'space-between'},
});
