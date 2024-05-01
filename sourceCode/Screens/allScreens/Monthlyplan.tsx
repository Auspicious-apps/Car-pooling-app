import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import SafeView from '../../components/SafeView';
import HeaderComp from '../../components/Headercomp';
import {Colors, imgUrl} from '../../constant';
import {Texts} from '../../constant/Texts';
import CommonText from '../../components/commonText';
import Fontf from '../../constant/Fontsf';
import fontstylee from '../../constant/fstyles';
import ViewCommon from '../../components/commonView';
import OpacityButton from '../../components/opacityButton';

const Monthlyplan = () => {
    const [showImage, setShowImage] = useState(false);
    const [data, setData] = useState([

    {
      id: 1,
      miles: Texts.Pay_you,
      money: Texts.two_nine_four,
      month: Texts.month,
      Overage: Texts.Auto_renews,
      showImage: false,
    },
    {
      id: 2,
      miles: Texts.five_hundred_Miles,
      money: Texts.four_six_nine,
      month: Texts.month,
      Overage: Texts.four_five_Overage,
      imggg:imgUrl.Most_Popular_sticker,
      showImage: false, 
    },
    {
      id: 3,
      miles: Texts.eight_five_zero,
      money: Texts.five_six_nine,
      month: Texts.month,
      Overage: Texts.three_five_Overage,
      showImage: false,
    },
    {
      id: 4,
      miles: Texts.one_two_zero,
      money: Texts.six_six_nine,
      month: Texts.month,
      Overage: Texts.two_five_Overage,
      showImage: false,
    },
]);

const toggleImageVisibility = (index) => {
    const newData = data.map((item, idx) => {
      if (idx === index) {
        return { ...item, showImage: !item.showImage }; 
      } else {
        return { ...item, showImage: false }; 
      }
    });
    setData(newData);
  };

  const renderItem = ({item,index}) => (
    <View>
        <View style={[styles.card, { borderColor: item.showImage ? Colors.Green : Colors.light_green }]}>

      <View style={styles.main_card_view}>
        <ViewCommon>
          <TouchableOpacity style={styles.selecticon}
          onPress={() => toggleImageVisibility(index)}
          >
                        {item.showImage && <Image source={imgUrl.Ellipse} style={styles.selectedimg} />}
 
          </TouchableOpacity>
          <CommonText style={[fontstylee.eighteen_px_txt,{marginLeft:10}]}>{item.miles}</CommonText>
        </ViewCommon>
        <ViewCommon>
          <CommonText style={fontstylee.eighteen_px_txt}>{item.money}</CommonText>
          <CommonText>{item.month}</CommonText>
        </ViewCommon>
      </View>
      <CommonText style={styles.Overage}>{item.Overage}</CommonText>
    </View>
    <Image source={item.imggg} style={styles.sticker}/>
    </View>
  );
  return (
    <SafeView style={{padding:0}}>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Monthly_plan} />
      <ScrollView style={styles.scrollview_style}>
        <View style={styles.texts}>
        <CommonText style={[fontstylee.eighteen_px_txt]}>
          {Texts.Select_monthly_plan}
        </CommonText>
        <CommonText style={{marginTop:7}}>{Texts.Insurance_included}</CommonText></View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <OpacityButton
        buttongradient={styles.buttonn}
        name={Texts.Continue_to_schedule}
        />
      </ScrollView>
    </SafeView>
  );
};

export default Monthlyplan;

const styles = StyleSheet.create({
  scrollview_style: {marginTop: 15},
  card: {
    height: 100,
    borderWidth: 1,
    marginVertical: 10,
    borderColor:Colors.light_green,
    borderRadius: 12,
    padding: 20,
    width:'93%',alignSelf:'center'
  },
  selectedimg:{
    height:10,width:10
  },
  selecticon: {
    borderColor: Colors.light_green,
    borderWidth: 1,
    height: 16,
    width: 16,
    borderRadius: 20,justifyContent:'center',alignItems:'center'
  },
  main_card_view: {justifyContent: 'space-between', flexDirection: 'row',},
  Overage:{textAlign:'right',marginTop:10,fontSize:14,fontFamily:Fontf.Dm_Regular},
  sticker:{height:58,width:58,position:'absolute',bottom:0,left:-3},
  texts:{paddingHorizontal:16,marginVertical:10,marginBottom:15},
  buttonn:{width:'90%',}
});
