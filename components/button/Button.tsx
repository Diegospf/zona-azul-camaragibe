import colors from "@/assets/colors";
import { RelativePathString, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";


type Props = {
    label: string;
    route?: RelativePathString;
    onPress?: () => void
};

export default function Button({ label, route, onPress }: Props) {
    const router = useRouter();
    const handlePress = () => {
        if (route) {
            router.push(route);
        } else if(onPress){
            onPress();
        } else {
            alert('No action defined.')
        }
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: colors.secondary,
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});