import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import CommonText from '../../components/commonText';
import Fontf from '../../constant/Fontsf';
import ViewCommon from '../../components/commonView';
import fontstylee from '../../constant/fstyles';
import OpacityButton from '../../components/opacityButton';
import { ROUTE_NAMES } from '../../navigation/StackNavigation';

const DetailsScreen = ({navigation}:any) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
      Features:Texts.car_Features,
      car__Description:Texts.car_Description
    },
    {
      id: 2,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: 'hello',
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
      silvertxt: 'hiii',
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
      Gastxt: 'hiii',
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
    {
      id: 5,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: Texts.Gas,
      starimg: imgUrl.Star,
      txtstar: 'hiii',
    },
    {
      id: 6,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: 'hiii',
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
    {
      id: 7,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: 'hiii',
      starimg: imgUrl.Star,
      txtstar: Texts.Rating,
    },
    {
      id: 8,
      carname: Texts.Mercedes,
      Mercedesimg: imgUrl.Mercedes,
      imgcar: imgUrl.caricon,
      seating: Texts.Seats,
      imgsilver: imgUrl.Silver,
      silvertxt: Texts.Silver,
      gasImg: imgUrl.Gas,
      Gastxt: Texts.Gas,
      starimg: imgUrl.Star,
      txtstar: 'hiii',
    },
    {
      id: 9,
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
      id: 10,
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

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <CommonText numberOfLines={1} style={styles.txt}>
          {item.carname}
        </CommonText>
        <Image source={item.Mercedesimg} style={styles.image} />
      </View>
    );
  };

  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Details} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.swiperContainer}>
          <SwiperFlatList
            ref={swiperRef}
            data={data}
            horizontal
            paginationActiveColor="green"
            paginationDefaultColor="white"
            showPagination
            pagingEnabled
            index={currentIndex}
            onChangeIndex={({index}) => setCurrentIndex(index)}
            renderItem={renderItem}
            style={styles.swiper}
          />
        </View>
        <CommonText style={styles.Car_Basics}>Car Basics</CommonText>
        {currentIndex >= 0 && (
          <View>
            <ViewCommon style={fontstylee.icon_with_txt_view}>
              <Image
                source={data[currentIndex].imgcar}
                style={fontstylee.cardimge}
              />
              <CommonText style={styles.additinol_text}>
                {data[currentIndex].seating}
              </CommonText>
            </ViewCommon>
            <ViewCommon style={fontstylee.icon_with_txt_view}>
              <Image
                source={data[currentIndex].imgsilver}
                style={fontstylee.cardimge}
              />
              <CommonText style={styles.additinol_text}>
                {data[currentIndex].silvertxt}
              </CommonText>
            </ViewCommon>
            <ViewCommon style={fontstylee.icon_with_txt_view}>
              <Image
                source={data[currentIndex].gasImg}
                style={fontstylee.cardimge}
              />
              <CommonText style={styles.additinol_text}>
                {data[currentIndex].Gastxt}
              </CommonText>
            </ViewCommon>
            <ViewCommon style={fontstylee.icon_with_txt_view}>
              <Image
                source={data[currentIndex].starimg}
                style={fontstylee.cardimge}
              />
              <CommonText style={styles.additinol_text}>
                {data[currentIndex].txtstar}
              </CommonText>
            </ViewCommon>
            <CommonText  style={styles.Car_Basics}>{Texts.Features}</CommonText>
            <CommonText style={fontstylee.medium_size_font}>
            {data[currentIndex].Features}
            </CommonText>
            <CommonText  style={styles.Car_Basics}>{Texts.Description}</CommonText>
            <CommonText style={fontstylee.medium_size_font}>
            {data[currentIndex].car__Description}
            </CommonText>
            
          </View>
        )}
        <OpacityButton
        name={Texts.Choose}
        pressButton={()=>{navigation.navigate(ROUTE_NAMES.Monthlyplan)}}
        />
      </ScrollView>
    </SafeView>
  );
};

const {width} = Dimensions.get('window');

export default DetailsScreen;

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 0.31,
    marginTop: 10,
  },
  swiper: {
    flexGrow: 0,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  
    width: width - 19,
    paddingVertical: 16,
  },
  image: {
    width: 265,
    height: 134,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 24,
    color: Colors.Green,
    fontFamily: Fontf.Dm_Bold,
    marginBottom: 10,
  },
  additinol_text: {marginLeft: 5},
  Car_Basics: {marginVertical: 15, fontSize: 16, fontFamily: Fontf.Dm_Bold},
});
