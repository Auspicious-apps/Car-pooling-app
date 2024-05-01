import { ReactNode } from "react";
import {  Image, StyleSheet,  TouchableOpacity, TouchableOpacityProps, } from "react-native";
import { Colors } from "../constant";
import CommonText from "./commonText";

interface CommonTouchableViewProps extends TouchableOpacityProps {
    children: ReactNode;
    text?: string;
    imageSource?: any;
}

const CommTouchable: React.FC<CommonTouchableViewProps> = ({ style, children, text, imageSource, ...props }) => {
    return (
        <TouchableOpacity style={[styles.vieww, style]} {...props}>
              {text && <CommonText>{text}</CommonText>}
            {imageSource && <Image source={imageSource} resizeMode='contain'/>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    vieww: {
      padding:1
    },
});

export default CommTouchable;