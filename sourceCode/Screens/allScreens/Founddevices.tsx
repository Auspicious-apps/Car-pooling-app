import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import CommTouchable from '../../components/Touchablecomp';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import ViewCommon from '../../components/commonView';
import OpacityButton from '../../components/opacityButton';
import fontstylee from '../../constant/fstyles';
import Fontf from '../../constant/Fontsf';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const Founddevices = ({navigation}:any) => {
  const data = [
    {
      id: 1,
      Car_name: Texts.Silver_Mercedes,
      Signal: Texts.Signal,
      good: Texts.Good,
      image: imgUrl.greyCar,
      sticker:imgUrl.tap_to_connect
    },
    {
      id: 2,
      Car_name: Texts.Audi,
      Signal: Texts.Signal,
      good: Texts.Good,
      image: imgUrl.redCar,
    },
    {
      id: 3,
      Car_name: Texts.Toyota,
      Signal: Texts.Signal,
      good: Texts.Poor,
      image: imgUrl.caricon,
    },
    {
      id: 4,
      Car_name: Texts.Kia,
      Signal: Texts.Signal,
      good: Texts.Poor,
      image: imgUrl.caricon,
    },
  ];
  const renderItem = ({item, index}) => (
    <TouchableOpacity style={[styles.card_View,{marginTop: item.id ===1 ? 37 :5}]} onPress={()=>{navigation.navigate(ROUTE_NAMES.ScanagainConnecting)}}>
      <ViewCommon style={{justifyContent: 'space-between'}}>
        <View style={{width: '62%'}}>
          <CommonText style={[fontstylee.sixteen_light, {marginBottom: 6}]}>
            {item.Car_name}
          </CommonText>
          <CommonText style={styles.Signal_txt}>
            {item.Signal}
            <CommonText
              style={[
                styles.poor_txt_style,
                {color: item.good === Texts.Poor ? '#E67157' : Colors.Green},
              ]}>
              {item.good}
            </CommonText>
          </CommonText>
        </View>
        <Image
          source={item.image}
          resizeMode="contain"
          style={[
            styles.image_car,
            item.image === imgUrl.caricon && {width: 45, height: 45},
          ]}
        />
      </ViewCommon>
     
 <Image source={item.sticker} resizeMode='contain' style={styles.sticker}/> 
   
    </TouchableOpacity>
  );
  return (
    <SafeView>
      <ScrollView>
        <View style={{alignSelf: 'flex-end'}}>
          <CommTouchable
            imageSource={imgUrl.cross_Icon}
            children={undefined}
            imagestyle={styles.crossimg}
          />
        </View>
        <CommonText
          style={[
            fontstylee.big_bold_wieght,
            {textAlign: 'left', marginTop: 20},
          ]}>
          {Texts.Found_devices}
        </CommonText>
        <CommonText style={fontstylee.sixteen_Bold}>
          {Texts.Enter_pairing_key}
        </CommonText>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        
        />
      </ScrollView>
      <OpacityButton
        name={Texts.Scan_again}
        button={styles.continuebutton}
        btnTextStyle={styles.buttontxt}
        // pressButton={()=>{navigation.navigate(ROUTE_NAMES.ConnectingScreen)}}
      />
    </SafeView>
  );
};

export default Founddevices;

const styles = StyleSheet.create({
    sticker:{
        height:70,width:70,position:'absolute',right:0,top:-40
    },
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: {color: Colors.White},
  crossimg: {
    height: 34,
    width: 34,
  },
  card_View: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: Colors.darkgrey,
    height: 86,
    marginVertical: 10,
    justifyContent: 'center',
  },
  image_car: {width: 130, height: 70},
  Signal_txt: {fontSize: 14, fontFamily: Fontf.Dm_Bold},
  poor_txt_style: {fontSize: 14, fontFamily: Fontf.Dm_Regular},
});
