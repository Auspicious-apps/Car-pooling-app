import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import {Colors, Texts, imgUrl} from '../../constant';
import HeaderComp from '../../components/Headercomp';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CommonText from '../../components/commonText';
import OpacityButton from '../../components/opacityButton';
import ViewCommon from '../../components/commonView';

const ChooseAddress = () => {
  return (
    // <>
    //   <HeaderComp img={imgUrl.Back_icon} txt={Texts.Choose_Address} />

    //     <MapView
    //       provider={PROVIDER_GOOGLE}
    //       style={styles.map}
    //       region={{
    //         latitude: 37.78825,
    //         longitude: -122.4324,
    //         latitudeDelta: 0.015,
    //         longitudeDelta: 0.0121,
    //       }}/>
    //         {/* <View style={styles.buttonContainer}>
    //       <Button title='Navigate Me' onPress={() => console.log('Button pressed')} />
    //     </View> */}
    //             <View style={{ position: 'absolute', bottom: 20,paddingHorizontal:14 ,alignSelf:'center'}}>
    //   <OpacityButton
    //   name="Navigate me"
    //   />
    //   </View>

    // </>
    <>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Choose_Address} />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <ViewCommon
        style={styles.input_view}>
        <Image
          source={imgUrl.fi_search}
          style={styles.serch_img}
        />
        <TextInput
          style={styles.input}
          placeholder="Search by title"
        />
      </ViewCommon>
      <View
        style={styles.button_view}>
        <OpacityButton name="Navigate me" />
      </View>
      {/* </MapView> */}
    </>
  );
};

export default ChooseAddress;
const styles = StyleSheet.create({
  input_view:{
    position: 'absolute',
    top: '8%',
    paddingHorizontal: 14,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    width: '90%',
    borderRadius: 30,
  },
input:{width: '85%', marginLeft: 5},
 button_view:{
  position: 'absolute',
  bottom: 20,
  paddingHorizontal: 14,
  alignSelf: 'center',
},
serch_img:{height: 24, width: 24, },
});
