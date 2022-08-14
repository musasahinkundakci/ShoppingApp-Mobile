import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import CurrencyText from './CurrencyText';

const Budget = () => {
    //Slices
    const budgetSlice = useSelector((state) => state.budget);
    const year = useSelector((state) => state.year.year);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.topTextHeader}> Asgari Ücret </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <CurrencyText num={budgetSlice.minimumWage} currency='TL' />
                    </View>
                    <CurrencyText
                        num={parseInt(budgetSlice.minimumWage / budgetSlice?.dollar)}
                        currency='dollar'
                    />
                </View>
            </View>
        </View>
    );
};

export default Budget;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 2,
        backgroundColor: '#EEEEEE',
        marginHorizontal: 20,
        borderRadius: 5,
        elevation: 5,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        fontFamily: 'sans-serif',
        elevation: 5,
        alignItems: 'center',
    },
    text: {
        fontWeight: '700',
        fontSize: 15,
    },
    topContainer: {
        alignItems: 'flex-start',
    },
    topTextHeader: {
        fontWeight: '500',
        fontSize: 15,
        backgroundColor: '#293462',
        color: '#fff',
        marginRight: 10,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    buttonContainer: {
        alignItems: 'center',
    },
});
