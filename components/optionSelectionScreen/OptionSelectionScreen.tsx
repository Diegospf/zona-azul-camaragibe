import colors from '@/assets/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';

type OptionSelectionScreenProps = {
    title?: string;
    options: { icon?: string; label: string; onPress: () => void }[];
};

export default function OptionSelectionScreen({ title = '', options }: OptionSelectionScreenProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePress = async (index: number, action: () => void) => {
        setSelectedIndex(index);
        try {
            await action();
        } catch (error) {
            console.error(error);
        } finally {
            setSelectedIndex(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {options.map((option, index) => {
                    const isSelected = selectedIndex === index;

                    return (
                        <Pressable
                            key={index}
                            style={({ pressed }) => [
                                styles.optionButton,
                                pressed && styles.pressedButton,
                            ]}
                            onPress={() => handlePress(index, option.onPress)}
                            disabled={selectedIndex !== null} // Desativa todos os botões enquanto 1 está selecionado
                        >
                            <View style={styles.optionContent}>
                                {option.icon && (
                                    <Ionicons
                                        name={option.icon as any}
                                        size={24}
                                        color={isSelected ? 'white' : '#333'}
                                        style={styles.icon}
                                    />
                                )}
                                {/* Adicione o ícone aqui se necessário */}
                                <Text style={[styles.optionText, isSelected && styles.selectedText]}>
                                    {option.label}
                                </Text>
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingTop: 40,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'serif',
    },
    scrollContent: {
        paddingBottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    optionButton: {
        backgroundColor: colors.bluePurple,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    pressedButton: {
        transform: [{ scale: 0.98 }],
    },
    optionText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
    },
    selectedText: {
        color: 'white',
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
});