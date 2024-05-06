import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import ViewCommon from '../../components/commonView';
import CommonText from '../../components/commonText';
import ToggleSwitch from 'toggle-switch-react-native';
import fontstylee from '../../constant/fstyles';
import Fontf from '../../constant/Fontsf';
import Slider from '@react-native-community/slider';

const SecurityScreen = () => {
  const [sliderValue, setSliderValue] = useState(10);
  const handleValueChange = value => {
    setSliderValue(value);
  };
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Security} />
      <ViewCommon style={[styles.cmman_view_style, {marginTop: 30}]}>
        <CommonText style={fontstylee.sixteen_Bold}>
          {Texts.Auto_Lock}
        </CommonText>
        <ToggleSwitch
          isOn={true}
          onColor={Colors.Green}
          offColor={Colors.light_green}
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </ViewCommon>
      <CommonText style={styles.extra_lines}>
        {Texts.Security_three_lines}
      </CommonText>
      <ViewCommon style={styles.cmman_view_style}>
        <CommonText style={fontstylee.sixteen_Bold}>
          {Texts.Auto_Engine_Deactivate}
        </CommonText>
        <ToggleSwitch
          isOn={false}
          onColor={Colors.Green}
          offColor={Colors.light_green}
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </ViewCommon>
      <CommonText style={styles.extra_lines}>
        {Texts.Security_three_lines_Two}
      </CommonText>
      <CommonText style={styles.extra_lines}>
        {Texts.Security_three_lines_three}
      </CommonText>
      <Slider
        style={{width: 320, height: 30}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="green"
        maximumTrackTintColor="#6B7280"
        thumbTintColor="green"
        minimumValue={10}
        maximumValue={60}
        value={sliderValue}
        onValueChange={handleValueChange}></Slider>
      <CommonText style={styles.SECONDS_txts}>
        {Math.floor(sliderValue)} SECONDS
      </CommonText>
    <CommonText style={[styles.extra_lines,{color:Colors.Green}]}>{Texts.Note} <CommonText>{Texts.Note_lines}</CommonText></CommonText>
    </SafeView>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({
  SECONDS_txts: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    fontFamily: Fontf.Dm_Bold,marginBottom:20
  },
  cmman_view_style: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  extra_lines: {fontSize: 14, fontFamily: Fontf.Dm_Regular, marginBottom: 15},
});
