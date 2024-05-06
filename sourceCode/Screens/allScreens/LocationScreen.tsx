import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import {Texts, imgUrl} from '../../constant';
import HeaderComp from '../../components/Headercomp';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CommonText from '../../components/commonText';

const LocationScreen = () => {
  
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Location} />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
            <View style={styles.buttonContainer}>
          {/* <Button title='Navigate Me' onPress={() => console.log('Button pressed')} /> */}
        </View>
          </MapView>
      </View>
    </SafeView>
  );
};

export default LocationScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',

    top: 70,
    left: 13,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
    },
});
