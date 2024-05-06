import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SafeView from '../../components/SafeView';
import ViewCommon from '../../components/commonView';
import {Colors, Texts, imgUrl} from '../../constant';
import CommTouchable from '../../components/Touchablecomp';
import Fontf from '../../constant/Fontsf';
import HeaderComp from '../../components/Headercomp';
import CommonText from '../../components/commonText';

const SupportChat = () => {
  const [inputText, setInputText] = useState('');
  const [chatData, setChatData] = useState([]);

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        time:getCurrentTime()
      };
      setChatData([...chatData, newMessage]);
      setInputText('');
    }
  };

  const renderitem = ({item}) => {
    return (
      <View style={styles.chatMessage}>
        <CommonText style={styles.user_name}>Shawn Nguyen</CommonText>
        <Text style={styles.message}>{item.text}</Text>
        <ViewCommon style={{alignSelf:'flex-end'}}><CommonText style={styles.time}>{item.time}</CommonText><Image source={imgUrl.Seen_message}resizeMode='contain' style={styles.seen_img} /></ViewCommon>
      </View>
    );
  };

  return (
    <SafeView>
      <HeaderComp img={imgUrl.Back_icon} txt={Texts.Support_Chat} />
<View style={{height:'83%'}}>
      <FlatList
        data={chatData}
        renderItem={renderitem}
        keyExtractor={item => item.id}
      />
</View>
      <ViewCommon style={styles.inputView}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={text => setInputText(text)}
          placeholder="Type your message"
          placeholderTextColor={Colors.White}
        />
        <CommTouchable
          imagestyle={styles.send_image_style}
          imageSource={imgUrl.addButton}
          children={undefined}
        />
        <CommTouchable
          onPress={handleSend}
          imagestyle={styles.send_image_style}
          imageSource={imgUrl.send_button}
          children={undefined}
        />
      </ViewCommon>
    </SafeView>
  );
};

export default SupportChat;

const styles = StyleSheet.create({
    time:{
        color:Colors.dark_green,fontSize:14,fontFamily:Fontf.Dm_Regular
    },
    seen_img:{
        height:20,width:20,marginLeft:5
    },
  user_name: {
    fontSize: 14,
    fontFamily: Fontf.Dm_Bold,
    color: Colors.Black,marginBottom:12
  },
  message: {fontSize: 14, fontFamily: Fontf.Dm_Regular},
  input: {
    width: '70%',
    fontSize: 16,
    fontFamily: Fontf.Dm_Regular,
    color: Colors.White,
  },
  inputView: {
    backgroundColor: Colors.inputbackground,
    width: '95%',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 100,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  send_image_style: {height: 32, width: 32},
  chatMessage: {
    padding: 10,
    backgroundColor: Colors.Green,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
});
