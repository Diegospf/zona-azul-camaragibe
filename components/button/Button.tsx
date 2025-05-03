import colors from "@/assets/colors";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArvoText from "../arvoText/ArvoText";

type Props = {
    label: string;
    route?: RelativePathString;
    onPress?: () => void;
    icon?: string;
    variant?: "primary" | "secondary";
};

export default function Button({ label, route, onPress, icon, variant = "primary" }: Props) {
    const router = useRouter();
    const handlePress = () => {
        if (route) {
            router.push(route);
        } else if (onPress) {
            onPress();
        } else {
            alert("No action defined.");
        }
    };

    const isPrimary = variant === "primary";

    return (
        <View style={styles.container}>
            <Pressable
                style={[
                    styles.button,
                    isPrimary ? styles.primaryButton : styles.secondaryButton,
                ]}
                onPress={handlePress}
            >
                {icon && (
                    <Ionicons
                        name={icon as any}
                        size={24}
                        color={isPrimary ? "#fff" : "#000"}
                        
                    />
                )}
                <ArvoText
                    style={[
                        styles.buttonLabel,
                        { color: isPrimary ? "#fff" : "#000" },
                    ]}
                >
                    {label}
                </ArvoText>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginVertical: 10,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginVertical: 10,
        width: "80%",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    primaryButton: {
        backgroundColor: colors.secondary,
    },
    secondaryButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    buttonLabel: {
        fontSize: 20,
        //fontWeight: 500,
        textAlign: "center",
        fontFamily: "Arvo-Bold",
    },
});
