// app/confirmarPlaca.tsx
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import colors from "@/assets/colors";
import NewCarPlate from "@/components/carPlate/NewCarPlate";
import ArvoText from "@/components/arvoText/ArvoText";

export default function ConfirmPlateScreen() {
    const router = useRouter();
   // const { placa } = useLocalSearchParams(); // recebe a placa da tela anterior

    return (
        <View style={styles.container}>
            <ArvoText style={styles.title}>Essa é sua placa?</ArvoText>

            <View style={styles.plate}>
                <NewCarPlate />
            </View>
            <View style={styles.buttons}>
                <Pressable style={[styles.button, styles.buttonNo]} onPress={() => router.push("/")}>
                    <ArvoText style={styles.textButton}>NÃO</ArvoText>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonYes]} onPress={() => router.push("/myVehicleScreen/registerVehicleScreen/registerSuccessScreen")}>
                    <ArvoText style={styles.textButton}>SIM</ArvoText>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 30,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        gap: 20,
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonNo: {
        backgroundColor: "#ff5f5f",
    },
    buttonYes: {
        backgroundColor: "#7ed957",
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    plate: {
        marginVertical: '20%',
        width: '80%',
    }
});
