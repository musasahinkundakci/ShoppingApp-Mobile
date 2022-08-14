import { StyleSheet, View, Text } from 'react-native';

const CurrencyText = ({ num, currency, color = '#000' }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text, { color }]}>{num}</Text>
            <Text style={[{ color, marginLeft: 5, marginRight: 15, fontSize: 15 }, styles.text]}>
                {currency === 'dollar' ? '💲' : '₺'}
            </Text>
        </View>
    );
};
export default CurrencyText;

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 15,
    },
});
