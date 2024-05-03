import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../components/SafeView';
import {Colors, Texts, imgUrl} from '../../constant';
import CommTouchable from '../../components/Touchablecomp';
import CommonText from '../../components/commonText';
import ViewCommon from '../../components/commonView';
import Fontf from '../../constant/Fontsf';
import OpacityButton from '../../components/opacityButton';

const CarReserved = () => {
  return (
    <SafeView>
      <ScrollView style={styles.conatinor}>
        <CommTouchable
          imagestyle={styles.cross_img_style}
          imageSource={imgUrl.cross_Icon}
          children={undefined}
        />
        <CommonText style={styles.Car_reserved_txt}>
          {Texts.Car_reserved}
        </CommonText>
        <CommonText style={styles.upload_document_txt}>
          {Texts.Now_documents_your_Uber}
        </CommonText>
        <CommonText style={styles.dummy_txt}>
          {Texts.dummy_txt_second}
        </CommonText>
        <ViewCommon style={styles.view_comman}>
          <ViewCommon>
            <Image
              source={imgUrl.Document_Icon}
              style={styles.document_img_style}
            />
            <View>
              <CommonText>{Texts.Insurance_pdf}</CommonText>
              <CommonText>{Texts.one_MB}</CommonText>
            </View>
          </ViewCommon>
          <CommTouchable
            imagestyle={styles.Download_icon_style}
            imageSource={imgUrl.Download_icon}
            children={undefined}
          />
        </ViewCommon>
        <ViewCommon style={styles.view_comman}>
          <ViewCommon>
            <Image
              source={imgUrl.Document_Icon}
              style={styles.document_img_style}
            />
            <View>
              <CommonText>{Texts.Registration_pdf}</CommonText>
              <CommonText>{Texts.one_MB}</CommonText>
            </View>
          </ViewCommon>
          <CommTouchable
            imagestyle={styles.Download_icon_style}
            imageSource={imgUrl.Download_icon}
            children={undefined}
          />
        </ViewCommon>
        <CommonText style={styles.upload_document_txt} >
          {Texts.Once_confirmation_receive_Uber}
        </CommonText>
        {/* <View style={{marginTop:'55%'}}/> */}
      </ScrollView>
      <OpacityButton name={Texts.Got_it} buttongradient={styles.button} />
    </SafeView>
  );
};

export default CarReserved;

const styles = StyleSheet.create({
  conatinor: {
    backgroundColor: Colors.darkgrey,
    padding: 10,
    borderRadius: 16,
    flex: 1,
  },
  cross_img_style: {height: 48, width: 48, alignSelf: 'flex-end'},
  view_comman: {justifyContent: 'space-between', marginVertical: 7},
  document_img_style: {height: 40, width: 40, marginRight: 10},
  Car_reserved_txt: {
    fontSize: 20,
    fontFamily: Fontf.Dm_Bold,
    marginBottom: '5%',
  },
  upload_document_txt: {
    fontSize: 18,
    fontFamily: Fontf.Dm_Medium,
    marginVertical: '3%',
  },
  dummy_txt: {fontSize: 15, marginBottom: '5%'},
  Download_icon_style: {height: 20, width: 20},
  button: {position: 'absolute', bottom: 0},
});
