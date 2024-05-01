import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import CommonText from '../../components/commonText';
import { Colors, Texts, imgUrl } from '../../constant';
import OpacityButton from '../../components/opacityButton';
import Fontf from '../../constant/Fontsf';
import fontstylee from '../../constant/fstyles';

const ResendEmail = () => {
  return (
    <View style={styles.containor}>
      <CommonText style={fontstylee.big_bold_wieght}>{Texts.Link_sent}</CommonText>
      <CommonText>{Texts.A_Link_Has_BEen_sent}</CommonText>
      <CommonText>{Texts.To_Yur_emal}</CommonText>
      <Image source={imgUrl.resendemail}
        style={styles.imgaee}
        resizeMode='contain'
      />
      <OpacityButton
        name={Texts.Resend_email_link}
        button={styles.continuebutton}
        btnTextStyle={styles.buttontxt}
      />
    </View>
  );
};

export default ResendEmail;

const styles = StyleSheet.create({
  containor: { justifyContent: 'center', alignItems: 'center', padding: 10, flex: 1, backgroundColor: Colors.Black },
  imgaee: {
    height: 190, width: 217, marginVertical: 17
  },
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: { color: Colors.White },
  // signin: {fontSize: 24, textAlign: 'center', marginBottom: 10,fontFamily:Fontf.Dm_Bold},

});
