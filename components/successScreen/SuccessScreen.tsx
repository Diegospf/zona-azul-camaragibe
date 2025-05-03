import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/assets/colors";
import Button from "../button/Button";
import ArvoText from "../arvoText/ArvoText";

interface SuccessScreenProps {
    message: string;
    primaryButtonLabel: string;
    primaryRoute?: string;
    secondaryButtonLabel?: string;
    secondaryRoute?: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
    message,
    primaryButtonLabel,
    primaryRoute,
    secondaryButtonLabel,
    secondaryRoute,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <View style={styles.iconCircle}>{/* não precisou ser usado, ja existia um icone com checkmark porem o checkmark era vazio, deixando pra possivel modificação*/}
                    <Ionicons name="checkmark-circle" size={160} color="#7ED321" />
                </View>
            </View>
            <ArvoText style={styles.message}>{message}</ArvoText>


            <Button
                label={primaryButtonLabel}
                variant="primary"
                route={primaryRoute as any} />
            {secondaryButtonLabel && secondaryRoute && (
                <Button
                    label={secondaryButtonLabel}
                    variant="secondary"
                    route={secondaryRoute as any} />
                
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3419DB",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    iconWrapper: {
        marginBottom: 24,
    },
    iconCircle: {
        // width: 120,
        // height: 120,
        // borderRadius: 60,
        // backgroundColor: "#7ED321",
        // alignItems: "center",
        // justifyContent: "center",
    },
    message: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 32,
    },
    secondaryButton: {
        backgroundColor: colors.secondary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginBottom: 12,
    },
    secondaryButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    primaryButton: {
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
    },
    primaryButtonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default SuccessScreen;
