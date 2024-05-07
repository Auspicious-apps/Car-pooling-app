import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constant';
import Fontf from '../constant/Fontsf';
import LinearGradient from 'react-native-linear-gradient';

const OpacityButton = (props: any) => {
  return (
    <LinearGradient colors={['#2BDF68',  '#B4F463',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.container,props.buttongradient, { marginTop: 15 }]}>
      <TouchableOpacity
        style={[styles.container,props.button ]}
        onPress={props.pressButton}>
        <Image source={props.img1} style={[props.img1style]} resizeMode='contain' />
        <Text style={[styles.myText, props.btnTextStyle]}>{props.name}</Text>
        <Image source={props.img2} style={[props.img2style]} resizeMode='contain' />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 41,
  },
  container: {
    height: 48,
    width: '100%',
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 41,
    flexDirection: 'row',
    // marginVertical:20


  },
  myText: {
    textAlign: 'center',
    fontFamily: Fontf.Dm_Bold,
    fontSize: 16,
    color: Colors.Black,
  },
  // img1s:{
  //   height:20,width:20,marginRight:5
  // },

});

export default OpacityButton;
