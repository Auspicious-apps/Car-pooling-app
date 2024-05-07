import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import SafeView from '../../components/SafeView';
import {Colors, Texts, imgUrl} from '../../constant';
import CommonText from '../../components/commonText';
import ViewCommon from '../../components/commonView';
import fontstylee from '../../constant/fstyles';
import HeaderComp from '../../components/Headercomp';

const FaqScreen = () => {
    const [expandedItem, setExpandedItem] = useState(null);

  const data = [
    {id: 1, Quetion: Texts.Question, txt: Texts.dummy_question , dropdown:imgUrl.dropdown_arrow,dropup:imgUrl.Dropup_arrow},
    {id: 2, Quetion: Texts.Question, txt: Texts.dummy_question , dropdown:imgUrl.dropdown_arrow,dropup:imgUrl.Dropup_arrow},
    {id: 3, Quetion: Texts.Question, txt: Texts.dummy_question , dropdown:imgUrl.dropdown_arrow,dropup:imgUrl.Dropup_arrow},
    {id: 4, Quetion: Texts.Question, txt: Texts.dummy_question , dropdown:imgUrl.dropdown_arrow,dropup:imgUrl.Dropup_arrow},
    {id: 5, Quetion: Texts.Question, txt: Texts.dummy_question  ,dropdown:imgUrl.dropdown_arrow,dropup:imgUrl.Dropup_arrow},
    {id: 6, Quetion: Texts.Question, txt: Texts.dummy_question , dropdown:imgUrl.dropdown_arrow,dropup:imgUrl.Dropup_arrow},
  ];
  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };
  const renderItem = ({item}: any) => {
    const isExpanded = expandedItem === item.id;
    return (
      <TouchableOpacity  style={[styles.card, isExpanded && styles.expandedCard]}
      onPress={() => toggleExpand(item.id)}>
        <ViewCommon style={styles.comman_view}>
          <CommonText style={fontstylee.sixteen_Bold}>
            {item.Quetion}
          </CommonText>
          <Image
            source={isExpanded ? item.dropup : item.dropdown}
            resizeMode="contain"
            style={styles.dropdown_arrow_style}
          />
        </ViewCommon>
        {isExpanded && (
          <CommonText style={[fontstylee.sixteen_light,{ marginTop: 10,}]}>{item.txt}</CommonText>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeView>
        <HeaderComp img={imgUrl.Back_icon} txt={Texts.FAQ} style={{marginVertical:10}}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeView>
  );
};

export default FaqScreen;

const styles = StyleSheet.create({
  dropdown_arrow_style: {height: 30, width: 30},
  comman_view: {justifyContent: 'space-between'},
  card: {
    padding: 16,
    height: 62,
    backgroundColor: Colors.inputbackground,
    marginVertical: 7,
    borderRadius:14
  },
  expandedCard: {
    height: 150,
    
  },

});
