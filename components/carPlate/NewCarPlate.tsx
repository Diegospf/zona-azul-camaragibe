import { Image, StyleSheet, Text, View } from "react-native";


export default function NewCarPlate() {

    return (
        <View style={styles.container}>
            <View style={styles.headerPlaca}>
                <Image
                    source={require("@/assets/images/mercosul.png")}
                    style={styles.imageHeader}
                //resizeMode="contain"
                />
                <Text style={styles.textHeader}>BRASIL</Text>
                <Image
                    source={require("@/assets/images/brasil.svg")}
                    style={styles.imageHeader}
                //resizeMode="contain"
                />
            </View>
            <View style={styles.bodyPlaca}>
                <Text style={styles.textBody}>ABC1235</Text>
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
    headerPlaca: {
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
    bodyPlaca: {
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
