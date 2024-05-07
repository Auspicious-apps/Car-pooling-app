import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeView from '../../../components/SafeView';
import CommonText from '../../../components/commonText';
import {Colors, Texts, imgUrl} from '../../../constant';
import Fontf from '../../../constant/Fontsf';
import ViewCommon from '../../../components/commonView';
import OpacityButton from '../../../components/opacityButton';
import * as Progress from 'react-native-progress';

const PerformScreen = () => {
  const arrayData = [
    {
      id: 1,
      CommentinfoImg: imgUrl.Commentinfo,
      text: Texts.Change_Machine_Oil,
    },
    {
      id: 2,
      CommentinfoImg: imgUrl.Commentinfo,
      text: Texts.Change_Machine_Oil,
    },
    {
      id: 3,
      CommentinfoImg: imgUrl.Commentinfo,
      text: Texts.Change_Machine_Oil,
    },
    {
      id: 4,
      CommentinfoImg: imgUrl.Commentinfo,
      text: Texts.Change_Machine_Oil,
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <View>
        <ViewCommon>
          <Image
            source={item.CommentinfoImg}
            style={styles.imagestyle}
            resizeMode="contain"
          />
          <CommonText style={styles.Phone_Usage_style}>{item.text}</CommonText>
        </ViewCommon>
        <View style={{marginVertical: 12}}>
          <TouchableOpacity style={[styles.buttoncontainer]}>
            <Image
              source={imgUrl.Check_Icon}
              style={styles.check_icon_img}
              resizeMode="contain"
            />
            <Text style={[styles.myText]}>{Texts.Mark_done}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeView>
      <CommonText style={styles.text}>{Texts.Performance}</CommonText>
      <ScrollView>
        <ViewCommon style={styles.details_main_View}>
          <Image
            source={imgUrl.Profile_Pic}
            style={styles.Profile_img_style}
            resizeMode="contain"
          />
          <View style={styles.user_name_View}>
            <CommonText style={styles.User_name_styl}>
              {Texts.User_name}
            </CommonText>
            <ViewCommon>
              <CommonText style={styles.rate_txt}>{Texts.Rate}</CommonText>
              <CommonText style={styles.num_txt}>{Texts.four_saven}</CommonText>
            </ViewCommon>
            <ViewCommon>
              <CommonText style={styles.rate_txt}>{Texts.Score}</CommonText>
              <CommonText style={styles.num_txt}>
                {Texts.eight_eight}
              </CommonText>
            </ViewCommon>
            <ViewCommon>
              <CommonText style={styles.rate_txt}>{Texts.Miles}</CommonText>
              <CommonText style={styles.num_txt}>
                {Texts.three_four_five}
              </CommonText>
            </ViewCommon>
          </View>
        </ViewCommon>
        <View style={styles.first_Card_View}>
          <CommonText style={styles.Upcoming_return_style}>
            {Texts.Upcoming_return}
          </CommonText>
          <Image
            source={imgUrl.Mercedes_E_Class}
            style={styles.car_img_style}
            resizeMode="contain"
          />
          <CommonText style={styles.car_name}>
            {Texts.Mercedes + ', ' + Texts.Silver}
          </CommonText>
          <ViewCommon style={styles.Date_View}>
            <Image
              source={imgUrl.calendar_Icon}
              style={styles.calendar_Icon_styl}
            />
            <View>
              <CommonText style={styles.date_txt_styl}>{Texts.Date}</CommonText>
              <CommonText style={styles.date_detail_styl}>
                {Texts.Tue_Oct}
              </CommonText>
            </View>
          </ViewCommon>
          <ViewCommon style={styles.Date_View}>
            <Image
              source={imgUrl.clock_Icon}
              style={styles.calendar_Icon_styl}
            />
            <View>
              <CommonText style={styles.date_txt_styl}>{Texts.Time}</CommonText>
              <CommonText style={styles.date_detail_styl}>
                {Texts.Two_Pm}
              </CommonText>
            </View>
          </ViewCommon>
          <ViewCommon style={styles.Date_View}>
            <Image
              source={imgUrl.map_marker}
              style={styles.calendar_Icon_styl}
            />
            <View>
              <CommonText style={styles.date_txt_styl}>
                {Texts.Address}
              </CommonText>
              <CommonText style={styles.date_detail_styl}>
                {Texts.San_Mateo}
              </CommonText>
            </View>
          </ViewCommon>
          <OpacityButton
            name={Texts.Change_return_location_time}
            button={styles.continuebutton}
            btnTextStyle={styles.buttontxt}
          />
          <OpacityButton
            name={Texts.Cancel_return}
            button={styles.continuebutton}
            btnTextStyle={styles.buttontxt}
          />
        </View>
        <View style={styles.Second_Card_View}>
          <CommonText style={styles.Upcoming_return_style}>
            {Texts.Current_Usage}
          </CommonText>
          <View>
            <CommonText style={styles.Miles_Driven_style}>
              {Texts.Miles_Driven}
            </CommonText>
            <CommonText style={styles.five_sevan_miles_style}>
              {Texts.five_sevan_miles}
            </CommonText>
          </View>
          <View style={styles.Miles_Driven_View}>
            <CommonText style={styles.Miles_Driven_style}>
              {Texts.Billing_Cycle}
            </CommonText>
            <CommonText style={styles.five_sevan_miles_style}>
              {Texts.Billing_cycle_detail}
            </CommonText>
          </View>
        </View>

        <View style={styles.Stats_Card}>
          <CommonText style={styles.Upcoming_return_style}>
            {Texts.Stats}
          </CommonText>
          <View>
            <CommonText style={styles.Phone_Usage_style}>
              {Texts.Phone_Usage}
            </CommonText>
            <ViewCommon style={styles.progress_view}>
              <Progress.Bar
                progress={0.9}
                width={245}
                borderColor={Colors.darkgrey}
                color={Colors.Green}
                unfilledColor={Colors.Black}
                height={10}
              />
              <CommonText style={styles.Phone_Usage_style}>
                {Texts.ninty}
              </CommonText>
            </ViewCommon>
          </View>
          <View>
            <CommonText style={styles.Phone_Usage_style}>
              {Texts.Braking}
            </CommonText>
            <ViewCommon style={styles.progress_view}>
              <Progress.Bar
                progress={0.7}
                width={245}
                borderColor={Colors.darkgrey}
                color={Colors.Green}
                unfilledColor={Colors.Black}
                height={10}
              />
              <CommonText style={styles.Phone_Usage_style}>
                {Texts.seventy}
              </CommonText>
            </ViewCommon>
          </View>
          <View>
            <CommonText style={styles.Phone_Usage_style}>
              {Texts.Speeding}
            </CommonText>
            <ViewCommon style={styles.progress_view}>
              <Progress.Bar
                progress={0.6}
                width={245}
                borderColor={Colors.darkgrey}
                color={Colors.Green}
                unfilledColor={Colors.Black}
                height={10}
              />
              <CommonText style={styles.Phone_Usage_style}>
                {Texts.six_eight}
              </CommonText>
            </ViewCommon>
          </View>
          <View>
            <CommonText style={styles.Phone_Usage_style}>
              {Texts.Acceleration}
            </CommonText>
            <ViewCommon style={styles.progress_view}>
              <Progress.Bar
                progress={0.46}
                width={245}
                borderColor={Colors.darkgrey}
                color={Colors.Green}
                unfilledColor={Colors.Black}
                height={10}
              />
              <CommonText style={styles.Phone_Usage_style}>
                {Texts.four_six}
              </CommonText>
            </ViewCommon>
          </View>
        </View>

        <View style={styles.Pending_Tasks_View}>
          <CommonText style={styles.Upcoming_return_style}>
            {Texts.Pending_Tasks}
          </CommonText>
          <FlatList
            data={arrayData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default PerformScreen;
const styles = StyleSheet.create({
  first_Card_View: {
    height: 600,
    width: '100%',
    backgroundColor: Colors.darkgrey,
    marginVertical: 10,
    padding: 24,
    borderRadius: 14,
  },
  Second_Card_View: {
    // height: 225,
    width: '100%',
    padding: 24,
    borderRadius: 14,
    backgroundColor: Colors.darkgrey,
    marginVertical: 20,
  },
  Stats_Card: {
    // height: 350,
    width: '100%',
    padding: 24,
    borderRadius: 14,
    backgroundColor: Colors.darkgrey,
    marginVertical: 10,
  },
  Pending_Tasks_View: {
    // height: 430,
    width: '100%',
    padding: 24,
    borderRadius: 14,
    backgroundColor: Colors.darkgrey,
    marginVertical: 10,
    marginBottom: 20,
  },
  text: {
    color: Colors.White,
    fontSize: 24,
    fontFamily: Fontf.Dm_Bold,
    margin: 10,
  },
  Profile_img_style: {height: 120, width: 120},
  details_main_View: {padding: 10},
  User_name_styl: {fontSize: 20, fontFamily: Fontf.Dm_Bold, marginBottom: '3%'},
  rate_txt: {fontSize: 16, fontFamily: Fontf.Dm_Regular, marginVertical: 2},
  num_txt: {fontFamily: Fontf.Dm_Bold, fontSize: 18, marginLeft: '25%'},
  user_name_View: {marginLeft: '7%'},
  car_img_style: {height: 161, width: 315},
  calendar_Icon_styl: {height: 24, width: 24, marginRight: 10},
  date_txt_styl: {
    color: Colors.light_gray,
    fontSize: 14,
    fontFamily: Fontf.Dm_Regular,
  },
  date_detail_styl: {fontSize: 16, fontFamily: Fontf.Dm_Bold},
  Date_View: {marginVertical: 8},
  car_name: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fontf.Dm_Bold,
    marginBottom: 15,
  },
  Upcoming_return_style: {
    fontSize: 18,
    fontFamily: Fontf.Dm_Bold,
    marginBottom: 30,
  },
  continuebutton: {
    marginVertical: 8,
    backgroundColor: Colors.Black,
    borderColor: Colors.White,
    borderWidth: 1,
  },
  buttontxt: {color: Colors.White},
  Miles_Driven_style: {fontSize: 16, fontFamily: Fontf.Dm_Bold},
  Miles_Driven_View: {marginTop: '10%'},
  five_sevan_miles_style: {
    fontSize: 16,
    fontFamily: Fontf.Dm_Regular,
    marginTop: 5,
  },
  progress_view: {
    marginVertical: '4%',
    justifyContent: 'space-between',
    paddingRight: 7,
  },
  Phone_Usage_style: {fontSize: 16, fontFamily: Fontf.Dm_Bold},
  imagestyle: {height: 16, width: 16, marginRight: 5},
  buttoncontainer: {
    height: 32,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 41,
    flexDirection: 'row',
    borderColor: Colors.White,
    borderWidth: 1,
    marginVertical: 5,
  },
  myText: {
    textAlign: 'center',
    fontFamily: Fontf.Dm_Bold,
    fontSize: 16,
    color: Colors.White,
  },
  check_icon_img: {marginRight: 5, height: 20, width: 20},
});
