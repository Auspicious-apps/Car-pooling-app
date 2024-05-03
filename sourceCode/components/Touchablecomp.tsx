import { ReactNode } from "react";
import {  Image, StyleSheet,  TouchableOpacity, TouchableOpacityProps, } from "react-native";
import { Colors } from "../constant";
import CommonText from "./commonText";

interface CommonTouchableViewProps extends TouchableOpacityProps {
    children: ReactNode;
    text?: string;
    imageSource?: any;
    textStyles?:any;
    imagestyle?:any;
}

const CommTouchable: React.FC<CommonTouchableViewProps> = ({ style, children, text,textStyles,imageSource,imagestyle, ...props }) => {
    return (
        <TouchableOpacity style={[styles.vieww, style]} {...props}>
              {text && <CommonText style={textStyles}>{text}</CommonText>}
            {imageSource && <Image source={imageSource} style={imagestyle} resizeMode='contain'/>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    vieww: {
      padding:1,justifyContent:'center',alignItems:'center'
    },
});

export default CommTouchable;