import { useRouter } from 'expo-router';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';
import Button from '@/components/button/Button';
import { StyleSheet, View } from 'react-native';
import colors from '@/assets/colors';

export default function MyVehicleScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <OptionSelectionScreen
                options={[
                    { label: 'BRA2E19', onPress: () => { } },
                    { label: 'ABC1234', onPress: () => { } },
                ]} />

            <Button label='CADASTRAR VEÍCULO' route={'/myVehicleScreen/registerVehicleScreen' as any}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.primary, 
        padding: 20,
        justifyContent: 'center',
    },
});