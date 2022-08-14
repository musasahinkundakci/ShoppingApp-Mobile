import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';

const Card = ({ uri, title, subtitle, price, onPress, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.8}
            onPress={() => {
                onPress();
            }}
            {...props}
        >
            <View style={{ width: '80%' }}>
                <Image
                    style={styles.image}
                    source={{ uri: uri }}
                    loadingIndicatorSource={{
                        uri: 'https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif',
                    }}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.price}>{price} TL</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    width: '20%',
                    height: '100%',
                    backgroundColor: '#FEB139',
                    paddingVertical: 5,
                    borderBottomRightRadius: 3,
                    borderTopRightRadius: 3,
                    justifyContent: 'space-between',
                    alignContent: 'space-around',
                    alignItems: 'stretch',
                }}
            >
                <Text style={styles.button}>Sepete Ekle</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
const styles = StyleSheet.create({
    cardContainer: {
        width: '49%',
        backgroundColor: '#EEEEEE',
        elevation: 10,
        marginVertical: 10,
        borderRadius: 3,
        flexDirection: 'row',
    },
    image: {
        width: '80%',
        height: 130,
        borderRadius: 3,
        marginVertical: 10,
        alignSelf: 'center',
    },
    title: {},
    subtitle: {},
    price: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#393E46',
        textAlign: 'left',
    },
    button: {
        transform: [{ rotate: '90deg' }, { translateY: 60 }, { translateX: 90 }],
        color: '#FFFFFF',
        marginTop: 50,
        fontSize: 20,
        width: 150,
    },
});
