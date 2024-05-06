import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeView from '../../components/SafeView';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import Fontf from '../../constant/Fontsf';
import CommTouchable from '../../components/Touchablecomp';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const ConnectingScreen = ({navigation}:any) => {
  const [connecting, setConnecting] = useState(true);

useEffect(() => {
    const connectingTimer = setTimeout(() => {
      setConnecting(false);
    }, 5000);

    const navigateTimer = setTimeout(() => {
      navigation.navigate(ROUTE_NAMES.Founddevices); 
    }, 8000); 
    return () => {
      clearTimeout(connectingTimer);
      clearTimeout(navigateTimer);
    };
  }, []);

  return (
    <SafeView>
      <View style={{alignSelf: 'flex-end'}}>
        <CommTouchable
          imageSource={imgUrl.cross_Icon}
          children={undefined}
          imagestyle={styles.crossimg}
        />
      </View>
      <View style={styles.conatinor}>
        <View style={styles.uppar_layar}>
          <View style={styles.second_layer}>
            <View style={styles.third_layer}>
              {connecting ? (
                <>
                  <Image
                    style={styles.key_image}
                    resizeMode="contain"
                    source={imgUrl.key_Icon}
                  />
                  <CommonText style={styles.txt}>{Texts.Connecting}</CommonText>
                </>
              ) : (
                <>
                  <Image
                    style={[styles.key_image, {tintColor: Colors.Green}]}
                    resizeMode="contain"
                    source={imgUrl.Check_Icon}
                  />
                  <CommonText style={styles.txt}>{Texts.Completed}</CommonText>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeView>
  );
};

export default ConnectingScreen;

const styles = StyleSheet.create({
  crossimg: {
    height: 34,
    width: 34,
  },
  txt: {
    fontSize: 18,
    fontFamily: Fontf.Dm_Bold,
    marginTop: 10,
  },
  key_image: {
    height: 80,
    width: 80,
  },
  conatinor: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  uppar_layar: {
    borderWidth: 1,
    borderColor: Colors.Green,
    borderRadius: 300,
    height: 560,
    width: 560,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  second_layer: {
    borderWidth: 1,
    borderColor: Colors.Green,
    padding: 30,
    borderRadius: 300,
    height: 420,
    width: 420,
    alignItems: 'center',
    justifyContent: 'center',
  },
  third_layer: {
    borderWidth: 1,
    borderColor: Colors.Green,
    padding: 30,
    borderRadius: 300,
    height: 305,
    width: 305,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
