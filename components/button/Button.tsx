import colors from "@/assets/colors";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";


type Props = {
    label: string;
    route?: RelativePathString;
    onPress?: () => void,
    icon?: string;
};

export default function Button({ label, route, onPress, icon }: Props) {
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
                {icon && (
                    <Ionicons name={icon as any} size={24} color="#fff" style={styles.icon} />
                )}
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
        //paddingHorizontal: 60,
        //borderRadius: 30,
        marginBottom: 20,
        //width: '100%',
        //maxWidth: 400,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

       
        
        paddingHorizontal: 32,
        borderRadius: 12,
        marginVertical: 10,
        width: '80%',
       
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    }
});