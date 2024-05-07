import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import ViewCommon from '../../components/commonView';
import Fontf from '../../constant/Fontsf';
import OpacityButton from '../../components/opacityButton';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import CalendarPicker from 'react-native-calendar-picker';

const PickupScreen = ({navigation}: any) => {
  const arrayData = [
    {
      id: 1,
      placeholder: Texts.Date,
      Textt: Texts.Tue_Oct,
      img: imgUrl.calendar_Icon,
      change: Texts.Change,
    },
    {
      id: 2,
      placeholder: Texts.Time,
      Textt: Texts.pm_two_time,
      img: imgUrl.clock_Icon,
      change: Texts.Change,
    },
    {
      id: 3,
      placeholder: Texts.Address,
      Textt: Texts.San_Mateo,
      img: imgUrl.map_marker,
      change: Texts.Change,
    },
  ];

  const timerdata = [
    {id: 1, num:"11:00",txt:"12:00"},
    {id: 2, num: "12:00",txt:"13:00"},
    {id: 3, num:"13:00",txt:"14:00"},
   
  ];

  const [opensheet, setopensheet] = useState(false);
  const [openTimersheet, setopenTimersheet] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['60%', '90%'], []);
  const snapPointstime = useMemo(() => ['50%', '90%'], []);

  const handleSheetChange = useCallback(index => {
    setopensheet(index > 0);
  }, []);

  const handleButtonPress = () => {
    setopensheet(!opensheet);
    sheetRef.current?.expand();
  };

  const handlechangeTimer = () => {
    setopenTimersheet(!openTimersheet);
  };

  const renderItem = ({item}: any) => {
    let screenName;
    let onPressFunction;
    switch (item.id) {
      case 1:
        onPressFunction = handleButtonPress;
        break;
      case 2:
        onPressFunction = handlechangeTimer;
        break;
      case 3:
        screenName = ROUTE_NAMES.ChooseAddress;
        onPressFunction = () => navigation.navigate(screenName);
        break;
    }
    return (
      <ViewCommon style={styles.comman_view_style}>
        <View style={styles.flex_row}>
          <Image source={item.img} resizeMode="contain" style={styles.imge} />
          <View>
            <CommonText style={styles.placeholder_style}>
              {item.placeholder}
            </CommonText>
            <CommonText style={styles.txt_styl}>{item.Textt}</CommonText>
          </View>
        </View>
        <TouchableOpacity onPress={onPressFunction}>
          <CommonText style={styles.change_txt}>{item.change}</CommonText>
        </TouchableOpacity>
      </ViewCommon>
    );
  };

  const timerrenderItem = ({item}: any) => {
    const cardStyle = [styles.timer_card];
    const numStyle = [styles.card_time_num];
    const txtStyle = [styles.card_time_num];
    const dashStyle = []
    
    
    // Conditionally update styles based on item's ID
    if (item.id === 2) {
      cardStyle.push({ backgroundColor: Colors.Green });
      numStyle.push({ color: Colors.Black });
      txtStyle.push({ color: Colors.Black});
      dashStyle.push({color:Colors.Black})
    } else {
      cardStyle.push({ backgroundColor: Colors.Black });
      numStyle.push({ color: 'white' });
      txtStyle.push({ color: 'white' });
      dashStyle.push({color:Colors.Black})
    }
    return (
      <ViewCommon style={cardStyle}>
        <CommonText style={numStyle}>{item.num}</CommonText>
        <CommonText style={dashStyle}>-</CommonText>
        <CommonText style={txtStyle}>{item.txt}</CommonText>
      </ViewCommon>
    );
  };

  // CheckoutScreen
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Pick_Up} />
      <View style={styles.text_style_view}>
        <CommonText style={styles.choose_date_style}>
          {Texts.Choose_date_pick}
        </CommonText>
        <CommonText style={styles.get_car_txt}>
          {Texts.You_will_have_get_car}
        </CommonText>
      </View>
      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <OpacityButton
        name={Texts.Checkout}
        pressButton={() => {
          navigation.navigate(ROUTE_NAMES.CheckoutScreen);
        }}
      />

      {openTimersheet ? (
        <BottomSheet
        backgroundStyle={{ backgroundColor:Colors.Black }} 
          ref={sheetRef}
          snapPoints={snapPointstime}
          onChange={handleSheetChange}
          index={opensheet ? 1 : 0}>
          <BottomSheetView style={styles.bottom_sheet_view}>
            <View>
              <CommonText style={styles.filtertxt}>
                {Texts.Choose_date}
              </CommonText>
              <CommonText style={styles.date}>Thu, Jan 17</CommonText>
            
                <FlatList
                  data={timerdata}
                  renderItem={timerrenderItem}
                  keyExtractor={item => item.id.toString()}
                />
             <OpacityButton
             name={Texts.Next}
             pressButton={handlechangeTimer}
             />
            </View>
          </BottomSheetView>
        </BottomSheet>
      ) : null}

      {opensheet ? (
        <BottomSheet
        backgroundStyle={{ backgroundColor:Colors.Black }} 
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          index={opensheet ? 1 : 0}>
          <BottomSheetView style={styles.bottom_sheet_view}>
            <CommonText style={styles.filtertxt}>
              {Texts.Choose_date}
            </CommonText>
            <CalendarPicker
              selectedDayColor={Colors.Green}
              textStyle={{color: Colors.White}}
            />
            <OpacityButton name={Texts.Next} pressButton={handleButtonPress} />
          </BottomSheetView>
        </BottomSheet>
      ) : null}
    </SafeView>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({
  card_time_num:{fontSize:14,fontFamily:Fontf.Dm_Bold},
  date:{fontSize:16,fontFamily:Fontf.Dm_Bold,alignSelf:'center',marginVertical:10},
  timer_card:{height:60,borderRadius:62,paddingVertical:16,paddingHorizontal:32,backgroundColor:Colors.Green,justifyContent:'space-between'},
  bottom_sheet_view: {
    backgroundColor: Colors.Black,
    paddingHorizontal: 15,
    flex: 1,
    
  },
  text_style_view: {
    marginVertical: 22,
  },
  comman_view_style: {
    justifyContent: 'space-between',
    height: 75,
    backgroundColor: Colors.darkgrey,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
  },
  flex_row: {flexDirection: 'row', alignItems: 'center'},
  imge: {height: 24, width: 24, marginRight: 7},
  placeholder_style: {fontSize: 14, color: Colors.light_gray},
  txt_styl: {fontSize: 16, fontFamily: Fontf.Dm_Bold},
  change_txt: {color: Colors.Green},
  choose_date_style: {fontSize: 18, fontFamily: Fontf.Dm_Bold},
  get_car_txt: {fontSize: 16, fontFamily: Fontf.Dm_Regular, marginVertical: 4},
  filtertxt: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Fontf.Dm_Bold,
    marginVertical: 10,
  },
});
