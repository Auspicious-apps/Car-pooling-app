import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Texts, imgUrl} from '../../../constant';
import ViewCommon from '../../../components/commonView';
import CommonText from '../../../components/commonText';
import {ROUTE_NAMES} from '../../../navigation/StackNavigation';
import CommTouchable from '../../../components/Touchablecomp';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import OpacityButton from '../../../components/opacityButton';

const KeysScreen = ({navigation}: any) => {
  const arrayData = [
    {id: 1, car: imgUrl.greyCar, text: 'Mercedes-Benz-E-Class, 2014, Silver'},
    {id: 2, car: imgUrl.redCar, text: 'Audi, 2018, Red'},
  ];
  const [opensheet, setopensheet] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '55%'], []);


  const handleSheetChange = useCallback(index => {
    setopensheet(index > 0);
  }, []);
  const handleButtonPress = () => {
    setopensheet(!opensheet);

    sheetRef.current?.expand();
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate(ROUTE_NAMES.ConnectedCar);
        }}>
        <ViewCommon style={styles.row}>
          <Image
            resizeMode="contain"
            source={item?.car}
            style={styles.carImg}
          />
          <CommTouchable
            imageSource={imgUrl.threedot}
            children={undefined}
            imagestyle={{height: 20}}
            onPress={handleButtonPress}
          />
        </ViewCommon>
        <CommonText>{item.text}</CommonText>
        <ViewCommon>
          <Image
            source={imgUrl.onedot}
            resizeMode="contain"
            style={{height: 10}}
          />
          <CommonText style={{color: Colors.Green}}>{Texts.Connected}</CommonText>
        </ViewCommon>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containor}>
      <ViewCommon style={styles.row}>
        <CommonText style={styles.text}>{Texts.Keys}</CommonText>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.imgStyle}
            source={imgUrl.addButton}
          />
        </TouchableOpacity>
      </ViewCommon>

      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {opensheet && (
        <BottomSheet
        
        backgroundStyle={{ backgroundColor:Colors.Black }} 
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          index={opensheet ? 1 : 0}
          
          >
          <BottomSheetView style={styles.bottom_sheet_view}>
            <View>
              <OpacityButton
                pressButton={handleButtonPress}
                name={Texts.Security}
                button={styles.continuebutton}
                btnTextStyle={styles.buttontxt}
              />
              <OpacityButton
                name={Texts.Location}
                button={styles.continuebutton}
                btnTextStyle={styles.buttontxt}
                pressButton={handleButtonPress}
              />
              <OpacityButton
                name={Texts.Delete_Car}
                button={styles.continuebutton}
                btnTextStyle={styles.buttontxt}
                pressButton={handleButtonPress}
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
};

export default KeysScreen;

const styles = StyleSheet.create({
  continuebutton: {
    marginVertical: 10,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: {color: Colors.White,},
  bottom_sheet_view: {
    backgroundColor: Colors.Black,
    paddingHorizontal: 15,
    flex: 1,
  },

  containor: {
    flex: 1,
    backgroundColor: Colors.Black,
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '700',
  },
  imgStyle: {
    height: 35,
    width: 35,
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: Colors.inputbackground,
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
  },
  carImg: {
    height: 100,
    width: 260,
  },
});
