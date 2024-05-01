import { ReactNode } from "react";
import { StyleSheet, Text, TextProps, View, ViewProps } from "react-native";



interface CommonViewProps extends ViewProps {
    children : ReactNode
}

const ViewCommon: React.FC<CommonViewProps> = ({ style, children, ...props }) => {
    return (
        <View style={[styles.vieww, style]} {...props}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    vieww: {
       flexDirection:'row',
       alignItems:'center'
    },
});

export default ViewCommon;