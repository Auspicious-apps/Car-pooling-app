import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Easing,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import ViewCommon from '../../components/commonView';
import CommonText from '../../components/commonText';
import Fontf from '../../constant/Fontsf';
import SlideButton from 'rn-slide-button';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const ConnectedCar = ({navigation}:any) => {
  const [engineActivated, setEngineActivated] = useState(false);

  const toggleEngineActivation = () => {
    setEngineActivated(!engineActivated);
  };
  const arrayData = [
    {id: 1, imgg: imgUrl.map_location, txt: Texts.Location},
    {id: 2, imgg: imgUrl.Security_shild, txt: Texts.Security},
    {id: 3, imgg: imgUrl.Proximity_icon, txt: Texts.Proximity},
  ];

  const renderItem = ({item}: any) => {
    let screenName;
    switch (item.id) {
        case 1:
          screenName = ROUTE_NAMES.LocationScreen;
          break;
        case 2:
          screenName = ROUTE_NAMES.SecurityScreen;
          break;
        case 3:
          screenName = ROUTE_NAMES.ConnectingScreen;
          break;
      }
    return (
      <TouchableOpacity style={styles.location_option_view} onPress={()=>{navigation.navigate(screenName)}} >
        <Image
          source={item.imgg}
          resizeMode="contain"
          style={styles.location_img_style}
        />
        <CommonText>{item.txt}</CommonText>
      </TouchableOpacity>
    );
  };

  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.key} />
      <ViewCommon style={styles.comman_view}>
        <View style={styles.car_name_view}>
          <CommonText style={styles.car_name}>
            {Texts.Mercedes + ', ' + Texts.Silver}
          </CommonText>
          <ViewCommon>
            <Image
              source={imgUrl.onedot}
              resizeMode="contain"
              style={{height: 8, width: 8, marginRight: 5}}
            />
            <CommonText style={styles.connected_txt}>
              {Texts.Connected}
            </CommonText>
          </ViewCommon>
        </View>
        <Image
          source={imgUrl.greyCar}
          resizeMode="contain"
          style={styles.car_style}
        />
      </ViewCommon>
      {/* <SlideButton title="Slide to unlock >>>" style={styles.slider} titleStyle={styles.title_styel}/> */}

      <View >
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Animated.View style={[styles.slider_view]}>
            <View style={styles.lock_View}>
              <Image
                source={imgUrl.Lock_icon}
                style={[styles.lock_icon_img, {tintColor: '#FFFFFF'}]}
              />
            </View>

            <View style={styles.unlock_View}>
              <Image
                source={imgUrl.Unloack_icon}
                resizeMode="contain"
                style={[styles.unlock_icon_img]}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.active_button_view}>
        {engineActivated ? (
          <CommonText style={styles.Engine_txt_style}>
            Engine is activated!
          </CommonText>
        ) : null}
        <TouchableOpacity onPress={toggleEngineActivation}>
          <Image
            source={
              engineActivated ? imgUrl.Deactivate_icon : imgUrl.Activate_engine
            }
            resizeMode="contain"
            style={styles.Activate_engine_img}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={{justifyContent:'space-between',paddingHorizontal: 5,alignSelf:'center',}}
      />
     
    </SafeView>
  );
};

export default ConnectedCar;

const styles = StyleSheet.create({
  Engine_txt_style: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fontf.Dm_Bold,
    color: Colors.Green,
  },
  active_button_view: {height: '58%', justifyContent: 'center'},
  location_img_style: {height: 40, width: 40, marginBottom: 10},
  location_option_view: {
    // height: 85,
    width: 99,
    padding:12,
    backgroundColor: Colors.darkgrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 7,
  },
  Activate_engine_img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  slider_view: {
    // borderWidth:1,borderColor:'red',
    paddingHorizontal:5,
    height: 60,
    width: '100%',
    backgroundColor: '#1D2125',
    justifyContent: 'space-between',
    borderRadius: 30,
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
  },
  unlock_View: {
    height: 56,
    width: 70,
    backgroundColor: Colors.dark_green,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lock_View: {
    height: 56,
    width: 70,
    backgroundColor: Colors.Green,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unlock_icon_img: {height: 24, width: 24, tintColor: Colors.Green},
  lock_icon_img: {height: 24, width: 24, tintColor: Colors.Black},
  comman_view: {
    width: '100%',
    borderColor: 'white',
    // borderWidth: 1,
    height: 77,
    marginTop: '5%',
  },
  car_name_view: {
    width: '63.4%',
    borderColor: 'white',
    height: 77,
  },
  dot: {height: 8, width: 8, color: Colors.Green},
  car_style: {width: 128, height: 68},
  car_name: {fontSize: 18, fontWeight: '500'},
  connected_txt: {color: Colors.Green, fontSize: 14, fontWeight: '400'},
  //   title_styel:{fontSize:14,fontFamily:Fontf.Dm_Bold}
});
