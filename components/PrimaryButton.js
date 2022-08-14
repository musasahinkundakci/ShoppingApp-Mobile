import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const PrimaryButton = ({ text, onClick }) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={styles.innerContainer}
                onPress={onClick}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
const styles = StyleSheet.create({
    outerContainer: {
        marginTop: 10,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        flex: 1,
        width: '50%',
    },
    innerContainer: {
        backgroundColor: '#00ADB5',
        borderRadius: 15,
        paddingVertical: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
    },
});
