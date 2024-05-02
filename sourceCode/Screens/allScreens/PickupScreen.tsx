import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import ViewCommon from '../../components/commonView';
import Fontf from '../../constant/Fontsf';
import OpacityButton from '../../components/opacityButton';

const PickupScreen = () => {
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
  const renderItem = ({item}: any) => {
    return (
      <ViewCommon style={styles.comman_view_style}>
        <View style={styles.flex_row}>
          <Image source={item.img} resizeMode='contain' style={styles.imge} />
          <View>
            <CommonText style={styles.placeholder_style}>{item.placeholder}</CommonText>
            <CommonText style={styles.txt_styl}>{item.Textt}</CommonText>
          </View>
        </View>
        <TouchableOpacity>
          <CommonText style={styles.change_txt}>{item.change}</CommonText>
        </TouchableOpacity>
      </ViewCommon>
    );
  };
  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Pick_Up} />
      <View style={styles.text_style_view}>
        <CommonText style={styles.choose_date_style}>{Texts.Choose_date_pick}</CommonText>
        <CommonText style={styles.get_car_txt}>{Texts.You_will_have_get_car}</CommonText>
      </View>
      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <OpacityButton
      name={Texts.Checkout}
      />
    </SafeView>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({
  text_style_view: {
    marginVertical: 22,
  },
  comman_view_style:{justifyContent:'space-between',height:75,backgroundColor:Colors.darkgrey,borderRadius:12,padding:16,alignItems:'center',marginVertical:8},
  flex_row:{flexDirection:'row',alignItems:'center'},
  imge:{height:24,width:24,marginRight:7},
  placeholder_style:{fontSize:14,color:Colors.light_gray,},
  txt_styl:{fontSize:16,fontFamily:Fontf.Dm_Bold},
  change_txt:{color:Colors.Green},
  choose_date_style:{fontSize:18,fontFamily:Fontf.Dm_Bold},
  get_car_txt:{fontSize:16,fontFamily:Fontf.Dm_Regular,marginVertical:4}
});
