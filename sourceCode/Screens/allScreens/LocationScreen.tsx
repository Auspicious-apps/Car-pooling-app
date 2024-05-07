import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import {Texts, imgUrl} from '../../constant';
import HeaderComp from '../../components/Headercomp';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CommonText from '../../components/commonText';
import OpacityButton from '../../components/opacityButton';

const LocationScreen = () => {
  
  return (
   <>
       <HeaderComp img={imgUrl.Back_icon} txt={Texts.Location} />
   
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}/>
       <View style={styles.button_view}>
      <OpacityButton
      name="Navigate me"
      />
      </View>
          {/* </MapView> */}
    
    </>
  );
};

export default LocationScreen;
const styles = StyleSheet.create({
  button_view:{ position: 'absolute', bottom: 20,paddingHorizontal:14 ,alignSelf:'center'},
  container: {
flex:1,
overflow:"scroll"
  },
  map: {
    height: '100%',
    width: '100%',
   
  },
  buttonContainer: {
      position: 'absolute',
      bottom: 200,
      alignSelf: 'center',
      backgroundColor:'red',
      height:300,
      width:300
    },
});
