import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SafeView from '../../../components/SafeView';
import ViewCommon from '../../../components/commonView';
import CommonText from '../../../components/commonText';
import fontstylee from '../../../constant/fstyles';
import {Colors, Texts, imgUrl} from '../../../constant';
import Fontf from '../../../constant/Fontsf';
import CommTouchable from '../../../components/Touchablecomp';
import OpacityButton from '../../../components/opacityButton';
import { ROUTE_NAMES } from '../../../navigation/StackNavigation';

const AvailiableCars = ({navigation}:any) => {
  const data = [
    {
      id: 1,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: Texts.Gas,
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
    {
      id: 2,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: Texts.Gas,
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
    {
      id: 3,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: Texts.Gas,
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
    {
      id: 4,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: Texts.Gas,
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
  ];

  const renderItem = ({item}) => (
    <View style={fontstylee.cardStyle}>
       
      <CommonText style={fontstylee.carnamee}>{item.carname}</CommonText>
      <ViewCommon style={fontstylee.carddata}>
        <View>
          <Image source={item.Mercedesimg} />
        </View>
        <View>
            <ViewCommon style={fontstylee.icon_with_txt_view}><Image style={fontstylee.cardimge} source={item.imgcar}/><CommonText style={fontstylee.cardtxt}>{item.seating}</CommonText></ViewCommon>
            <ViewCommon style={fontstylee.icon_with_txt_view}><Image  style={fontstylee.cardimge} source={item.imgsilver}/><CommonText style={fontstylee.cardtxt}>{item.silvertxt}</CommonText></ViewCommon>
            <ViewCommon style={fontstylee.icon_with_txt_view}><Image style={fontstylee.cardimge} source={item.gasImg}/><CommonText style={fontstylee.cardtxt}>{item.Gastxt}</CommonText></ViewCommon>
            <ViewCommon style={fontstylee.icon_with_txt_view}><Image style={fontstylee.cardimge} source={item.starimg}/><CommonText style={fontstylee.cardtxt}>{item.txtstar}</CommonText></ViewCommon>
        </View>
      </ViewCommon>
      <OpacityButton
       name={Texts.View}
       button={styles.continuebutton}
       btnTextStyle={styles.buttontxt}
       pressButton={()=>{navigation.navigate(ROUTE_NAMES.DetailScreen)}}
      />
    </View>
  );
  return (
    <SafeView style={fontstylee.Safearea}>
      <ViewCommon style={styles.headerview}>
        <CommonText style={fontstylee.big_bold_wieght}>
          {Texts.car_availible}
        </CommonText>
        <ViewCommon>
          <CommTouchable
            style={styles.filterimage}
            imageSource={imgUrl.filterimg} 
            children={undefined}          
          />
          <CommonText style={fontstylee.medium_Bold_wieght}>
            {Texts.Filters}
          </CommonText>
        </ViewCommon>
      </ViewCommon>
      <View style={{width: '100%', height: '95%',padding:10}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeView>
  );
};

export default AvailiableCars;

const styles = StyleSheet.create({
  headerview: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    padding:10
  },
  filterimage: {marginRight: 5},
  buttontxt: {color: Colors.Green},
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.Green,
    borderWidth: 1,
  },
});
