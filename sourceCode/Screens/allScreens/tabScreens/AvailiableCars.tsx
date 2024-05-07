import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import SafeView from '../../../components/SafeView';
import ViewCommon from '../../../components/commonView';
import CommonText from '../../../components/commonText';
import fontstylee from '../../../constant/fstyles';
import {Colors, Texts, imgUrl} from '../../../constant';
import Fontf from '../../../constant/Fontsf';
import CommTouchable from '../../../components/Touchablecomp';
import OpacityButton from '../../../components/opacityButton';
import {ROUTE_NAMES} from '../../../navigation/StackNavigation';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const AvailiableCars = ({navigation}: any) => {
  const [values, setValues] = useState([10, 20]);
  const [showSlider, setShowSlider] = useState(false);
  const [showbodytype, setBodytype] = useState(false);

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

  const bodyTypes = [
    {id: 1, txt: 'Coupes'},
    {id: 2, txt: 'Sedans'},
    {id: 3, txt: 'Trucks'},
    {id: 4, txt: 'Vans'},
    {id: 5, txt: 'Convertibles'},
    {id: 6, txt: 'SUV'},
  ];

  const renderItem = ({item}) => (
    <View style={fontstylee.cardStyle}>
      <CommonText style={fontstylee.carnamee}>{item.carname}</CommonText>
      <ViewCommon style={fontstylee.carddata}>
        <View>
          <Image source={item.Mercedesimg} />
        </View>
        <View>
          <ViewCommon style={fontstylee.icon_with_txt_view}>
            <Image style={fontstylee.cardimge} source={item.imgcar} />
            <CommonText style={fontstylee.cardtxt}>{item.seating}</CommonText>
          </ViewCommon>
          <ViewCommon style={fontstylee.icon_with_txt_view}>
            <Image style={fontstylee.cardimge} source={item.imgsilver} />
            <CommonText style={fontstylee.cardtxt}>{item.silvertxt}</CommonText>
          </ViewCommon>
          <ViewCommon style={fontstylee.icon_with_txt_view}>
            <Image style={fontstylee.cardimge} source={item.gasImg} />
            <CommonText style={fontstylee.cardtxt}>{item.Gastxt}</CommonText>
          </ViewCommon>
          <ViewCommon style={fontstylee.icon_with_txt_view}>
            <Image style={fontstylee.cardimge} source={item.starimg} />
            <CommonText style={fontstylee.cardtxt}>{item.txtstar}</CommonText>
          </ViewCommon>
        </View>
      </ViewCommon>
      <OpacityButton
        name={Texts.View}
        button={styles.continuebutton}
        btnTextStyle={styles.buttontxt}
        pressButton={() => {
          navigation.navigate(ROUTE_NAMES.DetailScreen);
        }}
      />
    </View>
  );

  const renderItembodytype = ({item}) => {
    return (
      <ViewCommon style={styles.view_comman}>
        <TouchableOpacity style={styles.box}></TouchableOpacity>
        <CommonText style={styles.car_body_type}>{item.txt}</CommonText>
      </ViewCommon>
    );
  };

  const [opensheet, setopensheet] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['35%', '50%', '90%'], []);

  const handleSheetChange = useCallback(index => {
    setopensheet(index > 0);
  }, []);

  const handleButtonPress = () => {
    setopensheet(!opensheet);

    sheetRef.current?.expand();
  };

  // close =  sheetRef.current?.close()

  const sliderValuesChange = newValues => {
    setValues(newValues);
  };

  const handleslider = () => {
    setShowSlider(!showSlider);
  };
  const handlebodytype = () => {
    setBodytype(!showbodytype);
  };

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
            onPress={handleButtonPress}
          />
          <CommonText style={fontstylee.medium_Bold_wieght}>
            {Texts.Filters}
          </CommonText>
        </ViewCommon>
      </ViewCommon>
      {/* <View style={styles.car_flatlist}> */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      {/* </View> */}



      {opensheet ? (
        <BottomSheet
        backgroundStyle={{ backgroundColor:Colors.Black }} 
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          index={opensheet ? 1 : 0}
          
          >
          <BottomSheetView
            style={styles.bottom_sheet_view}>
            <View>
              <CommonText style={styles.filtertxt}>{Texts.Filter}</CommonText>
              <TouchableOpacity
                style={styles.touchable_style}
                onPress={handleslider}>
                <CommonText style={styles.button_txt}>{Texts.Price_range}</CommonText>
                <Image
                  source={imgUrl.dropdown_arrow}
                  style={styles.drop_down_img_style}
                />
              </TouchableOpacity>
              {showSlider && (
                <View style={styles.slider_view}>
                  <Image
                    source={imgUrl.Graph_img}
                    style={styles.Graph_img_style}
                  />
                  <MultiSlider
                    values={values}
                    sliderLength={315}
                    onValuesChange={sliderValuesChange}
                    min={10}
                    max={50}
                    step={0.01}
                    allowOverlap={false}
                    snapped
                    selectedStyle={{
                      backgroundColor: Colors.Green,
                    }}
                    unselectedStyle={{
                      backgroundColor: 'gray',
                    }}
                    markerStyle={{
                      backgroundColor: Colors.Green,
                      borderColor: Colors.Green,
                    }}
                  />
                  <View style={styles.touchable_style}>
                    <CommonText style={styles.minmax}>
                      
                      {Math.round(values[0])}$
                    </CommonText>
                    <CommonText style={styles.minmax}>
                     
                      {Math.round(values[1])}$
                    </CommonText>
                  </View>
                </View>
              )}

              <TouchableOpacity
                style={styles.touchable_style}
                onPress={handlebodytype}>
                <CommonText style={styles.button_txt}>{Texts.Body_Styles}</CommonText>
                <Image
                  source={imgUrl.dropdown_arrow}
                  style={styles.drop_down_img_style}
                />
              </TouchableOpacity>
              {showbodytype && (
                <View>
                  <FlatList
                    data={bodyTypes}
                    renderItem={renderItembodytype}
                    keyExtractor={item => item.id.toString()}
                  />
                </View>
              )}
            </View>
            <OpacityButton
            name="Show results (13)"
            pressButton={handleButtonPress}
            />
          </BottomSheetView>
        </BottomSheet>
      
      ) : null}
    </SafeView>
  );
};

export default AvailiableCars;

const styles = StyleSheet.create({
  car_body_type:{fontSize:16,fontFamily:Fontf.Dm_Medium,marginLeft:10},
  car_flatlist:{width: '100%', height: '95%', padding: 10},
  bottom_sheet_view:{backgroundColor: Colors.Black, paddingHorizontal: 15,flex:1},
  view_comman: {marginVertical: 10},
  box: {
    height: 20,
    width: 20,
    borderColor: Colors.White,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 7,
  },
  minmax: {
    fontSize: 14,
    fontFamily: Fontf.Dm_Regular,
    marginHorizontal: 6,
    marginBottom: 10,
  },
  button_txt: {color: Colors.Green, fontSize: 18, fontFamily: Fontf.Dm_Medium},
  filtertxt: {textAlign: 'center', fontSize: 18, fontFamily: Fontf.Dm_Bold},
  slider_view: {justifyContent: 'center', alignItems: 'center',},
  Graph_img_style: {height: 74, width: 280, alignSelf: 'center',marginTop:15,},
  touchable_style: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerview: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    padding: 10,
  },
  filterimage: {marginRight: 5},
  buttontxt: {color: Colors.Green},
  continuebutton: {
    marginVertical: 1,
    backgroundColor: Colors.Black,
    borderColor: Colors.Green,
    borderWidth: 1,
  },
  drop_down_img_style: {
    height: 25,
    width: 25,
  },
});
