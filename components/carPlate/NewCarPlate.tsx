import { Image, StyleSheet, Text, View } from "react-native";
import ArvoText from "../arvoText/ArvoText";


export default function NewCarPlate() {

    return (
        <View style={styles.container}>
            <View style={styles.headerPlate}>
                <Image
                    source={require("@/assets/images/mercosul.png")}
                    style={styles.imageHeader}
                //resizeMode="contain"
                />
                <ArvoText style={styles.textHeader}>BRASIL</ArvoText>
                <Image
                    source={require("@/assets/images/brasil.svg")}
                    style={styles.imageHeader}
                //resizeMode="contain"
                />
            </View>
            <View style={styles.bodyPlate}>
                <ArvoText style={styles.textBody}>ABC1235</ArvoText>
            </View >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E3A8A", // azul topo
        borderRadius: 8,
        width: "100%",
        overflow: "hidden",
    },
    headerPlate: {
        backgroundColor: "#1E3A8A",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 5,
        //paddingVertical: 5,
    },
    imageHeader: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },
    textHeader: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    bodyPlate: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        //borderRadius: 8,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        borderColor: "#1E3A8A",
        //borderWidth: 8,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 'auto',
        marginBottom: 8,
        width: "95%",
    },
    textBody: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#1E3A8A",
        letterSpacing: 4,
    },
});
