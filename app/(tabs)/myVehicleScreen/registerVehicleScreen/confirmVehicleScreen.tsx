// app/confirmarPlaca.tsx
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import colors from "@/assets/colors";
import NewCarPlate from "@/components/carPlate/NewCarPlate";

export default function ConfirmarPlaca() {
    const router = useRouter();
    const { placa } = useLocalSearchParams(); // recebe a placa da tela anterior

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Essa é sua placa?</Text>

            <View style={styles.placa}>
                <NewCarPlate />
            </View>

            {/* <View style={styles.placaContainer}>
                <Image
                    source={require("@/assets/images/placa.png")} // sua imagem da placa
                    style={styles.placaImagem}
                    resizeMode="contain"
                />
                <Text style={styles.placaTexto}>22brb</Text>
            </View> */}

            <View style={styles.botoes}>
                <Pressable style={[styles.botao, styles.botaoNao]} onPress={() => router.replace("/")}>
                    <Text style={styles.textoBotao}>NÃO</Text>
                </Pressable>
                <Pressable style={[styles.botao, styles.botaoSim]} onPress={() => router.push("/myVehicleScreen/registerVehicleScreen/registerSuccessScreen")}>
                    <Text style={styles.textoBotao}>SIM</Text>
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
    placaContainer: {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 40,
        width: "80%",
        height: '40%',
    },
    placaImagem: {
        width: '100%',
        //height: 100,
    },
    placaTexto: {
        position: "absolute",
        textAlign: "center",

        fontSize: 28,
        fontWeight: "bold",
        color: "#00205B", // azul escuro, similar à fonte da placa Mercosul
        letterSpacing: 4,
        top: '45%',
        //left: '50%',
        //width: '80%', 
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        gap: 20,
    },
    botao: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    botaoNao: {
        backgroundColor: "#ff5f5f",
    },
    botaoSim: {
        backgroundColor: "#7ed957",
    },
    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    placa: {
        marginVertical: '20%',
        width: '80%',
    }
});
