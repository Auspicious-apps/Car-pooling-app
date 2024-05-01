import { ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { Colors } from "../constant";
import Fontf from "../constant/Fontsf";



interface CommonTextProps extends TextProps {
    children: ReactNode;
  
}

const CommonText: React.FC<CommonTextProps> = ({ style, children, ...props }) => {
    return (
        <Text style={[styles.text, style]} {...props}  >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily:Fontf.Dm_Medium,
        fontSize:13,
        color:Colors.White
    },
});

export default CommonText;