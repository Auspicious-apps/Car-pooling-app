import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, Texts, imgUrl } from '../../constant';
import InputText from '../../components/textInput';
import CommonText from '../../components/commonText';
import OpacityButton from '../../components/opacityButton';
import Fontf from '../../constant/Fontsf';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const Login = ({navigation}:any) => {
    const [secure, setSecure] = useState(false);
    const handlePress = () => {
        setSecure(!secure);
    };
  return (
    <SafeAreaView style={styles.containor}>
      <StatusBar backgroundColor={Colors.Black} barStyle={'light-content'} />
      <ScrollView style={{ padding: 10 }}>
        <View style={{ paddingVertical: '31%' }}>
          <CommonText style={styles.signin}>{Texts.Sign_IN}</CommonText>
          <InputText placeholder={Texts.Enter_Email} txt={Texts.Email} />
          <InputText placeholder={Texts.Enter_Password} txt={Texts.Password}
            img2={imgUrl.eye}
            secureTextEntry={secure}
            imagepress={handlePress}
            />

          <View style={styles.rmfcView}>
            <View style={styles.rmpassword}>
              <TouchableOpacity style={styles.box}></TouchableOpacity>
              <CommonText>{Texts.Rememberme}</CommonText>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate(ROUTE_NAMES.ForgotPassword)}}>
              <CommonText style={styles.Fpass}>{Texts.Forgot_pass}</CommonText>
            </TouchableOpacity>
          </View>
          <OpacityButton name={Texts.Next} button={styles.nextbutton}
            img2={imgUrl.arrowright} 
            pressButton={()=>{navigation.navigate(ROUTE_NAMES.SignUp)}}
            />
          <CommonText style={styles.or}>{Texts.Or}</CommonText>
          <OpacityButton
            img1={imgUrl.uberlogo}
            name={Texts.continue_with_uber}
            button={styles.continuebutton}
            btnTextStyle={styles.buttontxt}
            img1style={{ marginRight: 5 }}
          />
          <OpacityButton
            img1={imgUrl.lyftlogo}
            name={Texts.continue_with_Lyft}
            button={styles.continuebutton}
            btnTextStyle={styles.buttontxt}

            img1style={{ marginRight: 5 }}
          />
          <View style={styles.notaccount}>
            <CommonText style={styles.txtnotaccount}>
              {Texts.not_account}
            </CommonText>
            <TouchableOpacity onPress={()=>{navigation.navigate(ROUTE_NAMES.SignUp)}}>
              <CommonText style={[styles.txtnotaccount, { color: Colors.Green }]}>{Texts.Sign_Up}</CommonText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containor: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.Black,
    justifyContent: 'center',
  },
  signin: { fontSize: 24, textAlign: 'center', marginBottom: 10, fontFamily: Fontf.Dm_Bold },
  rmfcView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
    marginTop: 10,
  },
  rmpassword: { flexDirection: 'row', alignItems: 'center' },
  box: {
    height: 20,
    width: 20,
    borderColor: Colors.White,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 7,
  },
  Fpass: { fontSize: 16, color: Colors.Green },
  or: { fontSize: 16, alignSelf: 'center', marginBottom: 10 },
  nextbutton: { marginVertical: 20 },
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: { color: Colors.White },
  notaccount: { flexDirection: 'row', alignSelf: 'center', marginTop: 15 },
  txtnotaccount: { fontSize: 16 }
});
