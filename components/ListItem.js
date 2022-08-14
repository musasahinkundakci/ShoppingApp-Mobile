import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';

const ListItem = ({ uri, title, subtitle, price, onPress, count, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.8}
            onPress={() => {
                onPress();
            }}
            {...props}
        >
            <View style={{ width: '90%' }}>
                <Image
                    style={styles.image}
                    source={{ uri: uri }}
                    loadingIndicatorSource={{
                        uri: 'https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif',
                    }}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.price}>{parseInt(price * count)} TL</Text>
                    <Text style={styles.title}>{count} birim</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
            <View
                style={{
                    width: '10%',
                    height: '100%',
                    backgroundColor: '#A10035',
                    paddingVertical: 5,
                    borderBottomRightRadius: 3,
                    borderTopRightRadius: 3,
                    justifyContent: 'space-between',
                    alignContent: 'space-around',
                    alignItems: 'stretch',
                }}
            >
                <Text style={styles.button}>Sepetten Sil</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        backgroundColor: '#EEEEEE',
        elevation: 10,
        marginVertical: 10,
        borderRadius: 3,
        flexDirection: 'row',
    },
    image: {
        width: '90%',
        height: 130,
        borderRadius: 3,
        marginVertical: 10,
        alignSelf: 'center',
    },
    title: {},
    subtitle: {},
    price: {
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#393E46',
        textAlign: 'left',
    },
    button: {
        transform: [{ rotate: '90deg' }, { translateY: 55 }, { translateX: 90 }],
        color: '#FFFFFF',
        marginTop: 50,
        fontSize: 20,
        width: 150,
    },
});
