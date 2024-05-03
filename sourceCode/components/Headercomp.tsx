import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constant'
import ViewCommon from './commonView'
import CommTouchable from './Touchablecomp'
import CommonText from './commonText'
import Fontf from '../constant/Fontsf'
import { useNavigation } from '@react-navigation/native'

const HeaderComp = (props: any) => {
    const navigation = useNavigation()
    return (
        <ViewCommon style={[styles.container, props?.style]}>
            <TouchableOpacity 
            onPress={()=>{navigation.goBack()}}
            >
                <Image source={props.img} style={styles.backarrow} />
            </TouchableOpacity>
            <CommonText style={styles.Txtstyl}>{props?.txt} </CommonText>
            <TouchableOpacity style={props.img2styl} onPress={props?.pressimg}>
                <Image source={props.img2}  style={[styles.backarrow,props.img2style]}/>
            </TouchableOpacity>
        </ViewCommon>
    )//tintColor:'grey'
}

export default HeaderComp

const styles = StyleSheet.create({
    container: {justifyContent: 'space-between', height: '6%', marginTop: 10, paddingHorizontal: 3,alignItems:'center', },
    Txtstyl: { fontFamily:Fontf.Dm_Bold, fontSize: 18 },
    backarrow: { height: 30, width: 30, }
})