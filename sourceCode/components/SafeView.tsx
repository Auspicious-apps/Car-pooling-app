import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, Text, TextProps, View, ViewProps, } from "react-native";
import { Colors } from "../constant";

interface CommonSafeViewProps extends ViewProps {
    children : ReactNode
}

const SafeView: React.FC<CommonSafeViewProps> = ({ style, children, ...props }) => {
    return (
        <SafeAreaView style={[styles.vieww, style]} {...props}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    vieww: {
      flex:1,
      backgroundColor:Colors.Black,
      padding:10
    },
});

export default SafeView;