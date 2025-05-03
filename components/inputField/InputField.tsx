import { View, TextInput, StyleSheet, Pressable, KeyboardTypeOptions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/assets/colors';

type Props = {
    icon: any;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    rightIcon?: string;
    onRightIconPress?: () => void;
    keyboardType?: KeyboardTypeOptions;
};

export default function InputField({
    icon,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    rightIcon,
    onRightIconPress,
    keyboardType = 'default' }: Props) {
    return (
        <View style={styles.inputContainer}>
            <Ionicons name={icon} size={24} color={colors.secondary} style={styles.inputIcon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor= {colors.text}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
            {rightIcon && onRightIconPress && (
                <Pressable onPress={onRightIconPress} style={styles.rightIcon}>
                    <Ionicons name={rightIcon as any} size={24} color={colors.secondary} />
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.secondary,
        marginBottom: 15,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: colors.text,
        fontWeight: 'bold',
        fontFamily: 'Arvo-Regular'
    },
    icon: {
        marginRight: 8,
    },
    rightIcon: {
        marginLeft: 8,
    },
});