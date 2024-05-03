import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeView from '../../components/SafeView'
import HeaderComp from '../../components/Headercomp'
import { Texts, imgUrl } from '../../constant'
import InputText from '../../components/textInput'
import OpacityButton from '../../components/opacityButton'

const ChangePassword = () => {
    const [secure, setSecure] = useState(false);
    const handlePress = () => {
        setSecure(!secure);
    };
  return (
    <SafeView>
       <HeaderComp img={imgUrl.Back_icon} txt={Texts.Change_Password} />
       <View style={styles.input_view}>
       <InputText placeholder={Texts.Create_a_password} txt={Texts.Enter_Current_Password}
            img2={imgUrl.eye}
            secureTextEntry={secure}
            imagepress={handlePress}
            />
               <InputText placeholder={Texts.Create_a_password} txt={Texts.Create_New_Password}
            img2={imgUrl.eye}
            secureTextEntry={secure}
            imagepress={handlePress}
            />
               <InputText placeholder={Texts.Create_a_password} txt={Texts.Create_New_Password}
            img2={imgUrl.eye}
            secureTextEntry={secure}
            imagepress={handlePress}
            />
           
       </View>
     
                <OpacityButton
                name={Texts.Save}
                buttongradient={styles.button}
                />
            
    </SafeView>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    input_view:{
        marginVertical:25
    },
    button: {position: 'absolute', bottom: 0},

})