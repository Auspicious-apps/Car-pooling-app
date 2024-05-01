import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../constant';
import CommonText from './commonText';

const InputText = (props:any) => {
    const { txt, placeholder, img2, } = props;
    const [secure, setSecure] = useState(false);
    const handlePress = () => {
        setSecure(!secure);
    };

    return (
        <View style={{height:85,justifyContent:'space-between',marginVertical:5}}>
            <CommonText>{props?.txt}</CommonText>
            <View style={[styles.inputView, props?.style]}>
             <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={props?.placeholderTextColor ? props?.placeholderTextColor : '#6B7280'}
                    maxLength={props?.length}
                    keyboardType={props?.keyboardType}
                    onChangeText={props?.onChangeText}
                    value={props?.value}
                    autoCapitalize={props?.autoCapitalize}
                    secureTextEntry={secure}
                    style={[styles.input, img2 ? styles.inputWithImage : null]}
                    editable={true}
                    multiline={props?.multiline}
                    
onFocus={props?.onFocus}
numberOfLines={props?.numberOfLines}
                />
                {img2 && (
                <TouchableOpacity onPress={handlePress}>
                    <Image source={props.img2} style={[styles.image, props.imagestyle]} resizeMode='contain'/>
                </TouchableOpacity>
                )}
                </View>
                </View>
    )
}
const styles = StyleSheet.create({
    inputView:{backgroundColor:Colors.inputbackground,height:56,borderRadius:12,width:'100%',alignSelf:'center',paddingHorizontal:10,justifyContent:'center',flexDirection:'row',alignItems:'center'},
    input:{color:Colors.White,fontSize:15,width:'100%'},
    inputWithImage:{color:Colors.White,fontSize:15,width:'90%'},
    image:{height:25,width:25}
})
export default InputText