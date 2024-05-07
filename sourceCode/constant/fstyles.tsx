import { StyleSheet } from "react-native";
import { Colors } from ".";
import Fontf from "./Fontsf";

const fontstylee = StyleSheet.create({
    Safearea:{alignItems:'center'},
    carnamee:{color:Colors.Green,fontFamily:Fontf.Dm_Bold,fontSize:18},
    cardimge:{height:16,width:16,marginRight:5},
    cardtxt:{fontSize:14,fontFamily:Fontf.Dm_Regular},
    icon_with_txt_view:{marginVertical:5},
    cardStyle:{backgroundColor:Colors.darkgrey,width:'100%',alignSelf:'center',marginVertical:10,padding:20 ,borderRadius:14,},
    carddata:{marginVertical:13,justifyContent:'space-between'},
    medium_Bold_wieght:{fontFamily:Fontf.Dm_Bold,fontSize:16,color:Colors.White},
    big_bold_wieght:{fontSize: 24, textAlign: 'center', marginBottom: 10,fontFamily:Fontf.Dm_Bold},
    eighteen_px_txt:{
        fontSize:18,fontFamily:Fontf.Dm_Bold
    },
    sixteen_Bold:{fontSize: 16, fontFamily: Fontf.Dm_Bold},
    sixteen_light:{fontSize: 16, fontFamily: Fontf.Dm_Regular},


    
})
export default fontstylee