import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors, Texts, imgUrl } from '../../constant';
import InputText from '../../components/textInput';
import CommonText from '../../components/commonText';
import OpacityButton from '../../components/opacityButton';
import Fontf from '../../constant/Fontsf';
import { MyNavigation } from '../../utils/helper';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const SignUp = () => {
  const [navigate]=MyNavigation()
  return (
    <SafeAreaView style={styles.containor}>
      <StatusBar backgroundColor={Colors.Black} barStyle={'light-content'} />
      <ScrollView style={{ padding: 10, flex: 1, }}
        showsVerticalScrollIndicator={false}>
        <View >
          <CommonText style={styles.signin}>{Texts.Sig_Up}</CommonText>
          <InputText placeholder={Texts.Enter_f_N} txt={Texts.First_name} />
          <InputText placeholder={Texts.Enter_last_name} txt={Texts.Last_name} />
          <InputText placeholder={Texts.Enter_Email} txt={Texts.Email} />
          <InputText
            placeholder={Texts.Enter_Password}
            txt={Texts.Password}
            img2={imgUrl.eye}
          />
          <InputText
            placeholder={Texts.Enter_R_Pass}
            txt={Texts.Repeat_password}
            img2={imgUrl.eye}
          />
          <View style={styles.checkbox_main_view}>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <CommonText >
              {Texts.i_agree}
              <CommonText style={styles.Termss}>{Texts.Terms}</CommonText>
              <CommonText>{Texts.and}</CommonText>
              <CommonText style={styles.Termss}>{Texts.Policy}</CommonText>
            </CommonText>
          </View>
          <OpacityButton name={Texts.Next} button={styles.nextbutton}
            img2={imgUrl.arrowright}
            pressButton={()=>{navigate(ROUTE_NAMES.TabNavigator)}}
          />
          <CommonText style={styles.or}>{Texts.Or}</CommonText>
          <OpacityButton
            img1={imgUrl.uberlogo}
            name={Texts.continue_with_uber}
            button={styles.continuebutton}
            btnTextStyle={styles.buttontxt}
          />
          <OpacityButton
            img1={imgUrl.lyftlogo}
            name={Texts.continue_with_Lyft}
            button={styles.continuebutton}
            btnTextStyle={styles.buttontxt}
          />
          <View style={styles.notaccount}>
            <CommonText style={styles.txtnotaccount}>
              {Texts.Already_Account}
            </CommonText>
            <TouchableOpacity>
              <CommonText style={[styles.txtnotaccount, { color: Colors.Green }]}>{Texts.Login}</CommonText>
            </TouchableOpacity>
          </View>
        </View>
        
        
       


      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containor: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.Black,
    justifyContent: 'center',
  },
  signin: { fontSize: 24, textAlign: 'center', marginBottom: 10, fontFamily: Fontf.Dm_Bold },
  box: {
    height: 20,
    width: 20,
    borderColor: Colors.White,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 12,
  },
  checkbox_main_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: '3%',
  },
  Termss: {
    color: Colors.Green,
    fontSize:14
    
  },
  nextbutton: { marginVertical: 20 },
  or: { fontSize: 16, alignSelf: 'center', marginBottom: 10 },
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: { color: Colors.White },
  notaccount: { flexDirection: 'row', alignSelf: 'center', marginTop: 15,marginBottom:15 },
  txtnotaccount: { fontSize: 16 }
});
