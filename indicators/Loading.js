import { View, StyleSheet, Animated, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';

const Loading = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);
    return (
        <View style={styles.outerContainer}>
            <Animated.View
                style={{
                    opacity: fadeAnim,
                    transform: [{ rotate: fadeAnim._value + 'deg' }],
                }}
            >
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 250, height: 250, borderRadius: 20 }}
                />
            </Animated.View>
        </View>
    );
};

export default Loading;
const styles = StyleSheet.create({
    outerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        top: 0,
    },
    icon: {
        color: '#0096FF',
    },
});
