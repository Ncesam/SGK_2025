import { useTheme } from "@theme/hooks";
import { StyleSheet, Text, View } from "react-native";



const CoverScreen = () => {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.accent
        },
        mainText: {
            color: colors.block,
            fontFamily: 'Raleway-Bold',
            fontWeight: 700,
            fontSize: 42,
            letterSpacing: 0,
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.mainText} >MATULEᴹᴱ</Text>
        </View>
    );
};

export default CoverScreen;