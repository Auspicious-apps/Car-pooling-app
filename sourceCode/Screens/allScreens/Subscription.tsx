import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import ViewCommon from '../../components/commonView';
import CommonText from '../../components/commonText';
import {Colors, Texts, imgUrl} from '../../constant';
import OpacityButton from '../../components/opacityButton';
import Fontf from '../../constant/Fontsf';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';

const Subscription = ({navigation}: any) => {
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Subscription} />
      <ViewCommon style={styles.comman_View_style}>
        <View>
          <CommonText style={styles.miles_style}>
            {Texts.five_hundred}
          </CommonText>
          <CommonText style={styles.renew_style}>{Texts.Renew_date}</CommonText>
        </View>
        <ViewCommon>
          <CommonText style={styles.dollar}>{Texts.four_six_nine}</CommonText>
          <CommonText style={styles.renew_style}>{Texts.month}</CommonText>
        </ViewCommon>
      </ViewCommon>
      <OpacityButton
        name={Texts.Manage}
        button={styles.continuebutton}
        btnTextStyle={styles.buttontxt}
        buttongradient={{marginVertical: 2}}
        pressButton={() => {
          navigation.navigate(ROUTE_NAMES.SubMonthlyplan);
        }}
      />
      <OpacityButton
        name={Texts.Upgrade}
        button={styles.continuebutton}
        btnTextStyle={styles.buttontxt}
        buttongradient={{marginVertical: 2}}
      />
    </SafeView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  continuebutton: {
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: {color: Colors.White},
  comman_View_style: {justifyContent: 'space-between', marginVertical: 25},
  miles_style: {fontFamily: Fontf.Dm_Bold, fontSize: 18},
  renew_style: {fontFamily: Fontf.Dm_Medium, fontSize: 14},
  dollar: {fontSize: 24, fontFamily: Fontf.Dm_Bold},
});
