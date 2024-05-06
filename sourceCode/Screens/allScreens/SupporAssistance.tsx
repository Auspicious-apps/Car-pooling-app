import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ViewCommon from '../../components/commonView';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import Fontf from '../../constant/Fontsf';
import HeaderComp from '../../components/Headercomp';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const SupporAssistance = ({navigation}: any) => {
  return (
    <SafeView>
        <HeaderComp img={imgUrl.Back_icon} txt={Texts.Support_Assistance} />
      <View style={styles.main_view}>
        <TouchableOpacity style={styles.touchable_style}
        onPress={() => {
          navigation.navigate(ROUTE_NAMES.SupportChat);
        }}
        >
          <ViewCommon>
            <Image source={imgUrl.Message_icon} style={styles.icon_styles} />
            <CommonText style={styles.txt}>
              {Texts.Support_Chat}
            </CommonText>
          </ViewCommon>
          <Image style={styles.arrowwright} source={imgUrl.arrowright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable_style}  onPress={() => {
          navigation.navigate(ROUTE_NAMES.FaqScreen);
        }}>
          <ViewCommon>
            <Image source={imgUrl.Search_alt} style={styles.icon_styles} />
            <CommonText style={styles.txt}>
              {Texts.FAQ}
            </CommonText>
          </ViewCommon>
          <Image style={styles.arrowwright} source={imgUrl.arrowright} />
        </TouchableOpacity>
      </View>
    </SafeView>
  );
};

export default SupporAssistance;

const styles = StyleSheet.create({
  main_view: {marginVertical: 15},
  touchable_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    marginVertical: 10,

    height: 48,
    alignItems: 'center',
  },
  icon_styles: {height: 24, width: 24, marginRight: 10},
  arrowwright: {tintColor: Colors.White, height: 30, width: 30},
  txt: {fontSize: 16, fontFamily: Fontf.Dm_Bold},
});
