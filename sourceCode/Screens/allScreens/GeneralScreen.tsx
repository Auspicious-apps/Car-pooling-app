import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import ViewCommon from '../../components/commonView';
import CommonText from '../../components/commonText';
import ToggleSwitch from 'toggle-switch-react-native';
import Fontf from '../../constant/Fontsf';

const GeneralScreen = () => {
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.General} />
      <TouchableOpacity style={styles.touchable_style}>
        <ViewCommon>
          <Image source={imgUrl.Bell_icon} style={styles.bell_icon} />
          <CommonText style={styles.txt}>{Texts.Notifications}</CommonText>
        </ViewCommon>
        <Image source={imgUrl.arrowright} style={styles.arrowwright} />
      </TouchableOpacity>
      <View style={styles.touchable_style}>
        <ViewCommon>
          <Image source={imgUrl.shield_check} style={styles.bell_icon} />
          <View>
            <CommonText style={styles.txt}>{Texts.Biometric_settings}</CommonText>
            <CommonText style={styles.Enable_biometric}>{Texts.Enable_biometric}</CommonText>
          </View>
        </ViewCommon>
        <ToggleSwitch
          isOn={true}
          onColor={Colors.Green}
          offColor="red"
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
    </SafeView>
  );
};

export default GeneralScreen;

const styles = StyleSheet.create({
  bell_icon: {width: 24, height: 24, marginRight: 10},
  arrowwright: {tintColor: Colors.White, height: 30, width: 30},
  touchable_style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    marginVertical: 10,
    // borderWidth: 1,
    // borderColor: 'white',
    height: 48,
    alignItems: 'center',
  },
  txt:{fontSize:16,fontFamily:Fontf.Dm_Bold},
  Enable_biometric:{fontSize:14,fontFamily:Fontf.Dm_Regular}
});
