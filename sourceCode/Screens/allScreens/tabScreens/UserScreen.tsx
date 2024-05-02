import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeView from '../../../components/SafeView';
import ViewCommon from '../../../components/commonView';
import CommonText from '../../../components/commonText';
import {Colors, Texts, imgUrl} from '../../../constant';
import CommTouchable from '../../../components/Touchablecomp';
import fontstylee from '../../../constant/fstyles';
import Fontf from '../../../constant/Fontsf';
import { ROUTE_NAMES } from '../../../navigation/StackNavigation';

const UserScreen = ({navigation}:any) => {
  const arrayData = [
    {
      id: 1,
      Txt: Texts.Personal_Information,
      img: imgUrl.User_Icon,
    },
    {
      id: 2,
      Txt: Texts.Subscription,
      img: imgUrl.Trophy_Icon,
    },
    {
      id: 3,
      Txt: Texts.Payment_Info,
      img: imgUrl.Wallet_Icon,
    },
    {
      id: 4,
      Txt: Texts.Change_Password,
      img: imgUrl.Lock_icon,
    },
  ];

  const renderItem = ({item}: any) => {
    let screenName;
    switch (item.id) {
      case 1:
        screenName = ROUTE_NAMES.PersonalInfo;
        break;
      case 2:
        screenName = ROUTE_NAMES.Subscription;
        break;
      case 3:
        screenName = ROUTE_NAMES.Subscription;
        break;
      case 4:
        screenName = ROUTE_NAMES.ChangePassword;
        break;
    }
  
    return (
      //  {/* Subscription */}
      <TouchableOpacity style={styles.card_style} onPress={() => {navigation.navigate(screenName)}} >
        <ViewCommon>
          <Image
            source={item.img}
            resizeMode="contain"
            style={styles.Icon_style}
          />
          <CommonText style={styles.card_txt}>{item.Txt}</CommonText>
        </ViewCommon>
      </TouchableOpacity>
    );
  };
  return (
    <SafeView>
      <ViewCommon style={styles.row}>
        <CommonText style={styles.text}>{Texts.My_Profile}</CommonText>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.signouticon_imgStyle}
            source={imgUrl.signouticon}
          />
        </TouchableOpacity>
      </ViewCommon>
      <View style={styles.profile_view}>
        <Image source={imgUrl.Profile_Pic} style={styles.Profile_Pic_style} />
        <CommonText style={fontstylee.big_bold_wieght}>
          {Texts.User_name}
        </CommonText>
      </View>
      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeView>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
  signouticon_imgStyle: {
    height: 30,
    width: 30,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    color: Colors.White,
    fontSize: 24,
    fontFamily: Fontf.Dm_Bold,
  },
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
  Icon_style: {height: 24, width: 24, marginRight: 10},
  card_style: {marginVertical: 12},
  card_txt: {fontFamily: Fontf.Dm_Regular, fontSize: 16, color: Colors.White},
});
