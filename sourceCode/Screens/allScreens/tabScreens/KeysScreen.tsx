import React from "react"
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Colors, Texts, imgUrl } from "../../../constant"
import ViewCommon from "../../../components/commonView"
import CommonText from "../../../components/commonText"


const KeysScreen = () => {

    const arrayData = [{ id: 1, car: imgUrl.greyCar, text: "Mercedes-Benz-E-Class, 2014, Silver" },
    { id: 2, car: imgUrl.redCar, text: "Audi, 2018, Red" }

    ]

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.card}>
                <ViewCommon style={styles.row}>
                    <Image resizeMode='contain' source={item?.car} style={styles.carImg} />

                    <Image resizeMode='center' source={imgUrl.threedot} style={{ height: 20 }} />
                </ViewCommon>
                <CommonText>{item.text}</CommonText>
                <ViewCommon>
                    <Image source={imgUrl.onedot} resizeMode='contain' style={{ height: 10 }} />
                    <CommonText style={{ color: Colors.Green }}>Connected</CommonText>
                </ViewCommon>
            </View>
        )
    }

    return (
        <View style={styles.containor}>
            <ViewCommon style={styles.row}>
                <CommonText style={styles.text}>{Texts.Keys}</CommonText>
                <TouchableOpacity>
                    <Image resizeMode='contain' style={styles.imgStyle} source={imgUrl.addButton} />
                </TouchableOpacity>
            </ViewCommon>

            <FlatList
                data={arrayData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}

export default KeysScreen

const styles = StyleSheet.create({
    containor: {
        flex: 1,
        backgroundColor: Colors.Black,
        padding: 10
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    text: {
        color: Colors.White,
        fontSize: 20,
        fontWeight: '700'
    },
    imgStyle: {
        height: 35, width: 35
    },
    card: {
        height: 200, width: '100%',
        backgroundColor: Colors.inputbackground,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20
    },
    carImg: {
        height: 100,
        width: 260
    }
})