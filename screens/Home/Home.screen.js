import { View, StyleSheet, ScrollView, Modal, Text, Pressable, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import Budget from '../../components/Budget';
import DropdownInput from '../../components/DropdownInput';
import { useSelector, useDispatch } from 'react-redux';
import { years } from '../../fakeData/years';
import { goods } from '../../fakeData/goods';
import { alertWords } from '../../fakeData/alertWords';
import Card from '../../components/Card';
import { setYear } from '../../redux/year.slice';
import {
    decrementBudget,
    increment,
    incrementBudget,
    setBudget,
    setMinimumWage,
} from '../../redux/budget.slice';
import Loading from '../../indicators/Loading';
import { setLoader } from '../../redux/loader.slice';
import {
    addItem,
    removeItem,
    resetItems,
    setShoppingCartYear,
} from '../../redux/shoppingCart.slice';
import { AdMobBanner } from 'expo-ads-admob';
import { setModal } from '../../redux/modal.slice';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../../components/ListItem';
const Home = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    //Slices
    const yearSlice = useSelector((state) => {
        return state.year.year;
    });
    const loading = useSelector((state) => {
        return state.loaderSlice.isLoading;
    });
    const shoppingCart = useSelector((state) => {
        return state.shoppingCart;
    });
    const budget = useSelector((state) => {
        return state.budget.budget;
    });
    const modal = useSelector((state) => state.modal.isVisible);
    console.log(modal);
    //if year change year set the items
    useEffect(() => {
        setItems(goods.filter((goodList) => goodList.year === yearSlice)[0]);
        setShoppingCartYear(yearSlice);
    }, [yearSlice]);
    async function initializeAdds() {
        try {
        } catch (error) {
            console.log(error);
        }
    }
    //trigger Loader indicator
    useEffect(() => {
        initializeAdds();
        dispatch(setLoader(true));
        setTimeout(() => {
            dispatch(setLoader(false));
        }, 1500);
    }, []);

    //Click handlers
    const cardClickHandler = useCallback(
        (item) => {
            if (item.price > budget) {
                alert(alertWords[Math.floor(Math.random() * alertWords.length)]);
                return;
            }
            dispatch(addItem(item));
            dispatch(decrementBudget(parseInt(item.price)));
        },
        [budget]
    );
    const dropdownClickHandler = useCallback((year) => {
        dispatch(setYear(year));
        dispatch(setMinimumWage(goods.filter((good) => good.year === year)[0]?.minimumWage));
        dispatch(setBudget(goods.filter((good) => good.year === year)[0]?.minimumWage));
        dispatch(setShoppingCartYear(year));
        dispatch(resetItems());
    }, []);
    return (
        <>
            {loading && <Loading />}
            <LinearGradient style={styles.rootScreen} colors={['#D61C4E', '#FEB139', '#FFF80A']}>
                <ImageBackground
                    source={{
                        uri: 'https://img.freepik.com/premium-psd/clothes-bags-high-heels-shopping-bags-hats-floated-down-shopping-cart_179321-42.jpg?w=1060',
                    }}
                    resizeMode='cover'
                    style={styles.rootScreen}
                    imageStyle={styles.image}
                >
                    <View style={styles.dropdownContainer}>
                        <DropdownInput
                            options={years}
                            value={`${yearSlice} yılı fiyatlar.Yılı değiştirmek için tıklayın.`}
                            onClick={dropdownClickHandler}
                        />
                    </View>
                    <ScrollView>
                        <Budget />
                        <View style={styles.listContainer}>
                            {items?.goods?.map((item) => {
                                return (
                                    <Card
                                        onPress={() => cardClickHandler(item)}
                                        key={item.price}
                                        uri={item.image}
                                        title={item.title + ' ' + item.subtitle}
                                        price={item.price}
                                    />
                                );
                            })}
                        </View>
                    </ScrollView>
                    <View style={styles.addContainer}>
                        <AdMobBanner bannerSize='banner' adUnitID='' />
                    </View>
                    <Modal visible={modal} animationType='slide'>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalTopBar}>
                                <Text
                                    style={{
                                        marginLeft: 10,
                                        fontWeight: 'bold',
                                        color: '#0c0c0c',
                                        fontSize: 20,
                                    }}
                                >
                                    Sepet
                                </Text>
                                <Pressable onPress={() => dispatch(setModal(false))}>
                                    <FontAwesomeIcon
                                        size={35}
                                        icon={faXmark}
                                        style={{ color: '#00ADB5' }}
                                    />
                                </Pressable>
                            </View>
                            <ScrollView>
                                <View style={styles.modalListContainer}>
                                    {shoppingCart?.items?.map((item) => {
                                        return (
                                            <ListItem
                                                onPress={() => {
                                                    dispatch(removeItem(item));
                                                    dispatch(
                                                        incrementBudget(
                                                            parseInt(item.price * item.count)
                                                        )
                                                    );
                                                }}
                                                key={item.price}
                                                uri={item.image}
                                                title={item.title + ' ' + item.subtitle}
                                                price={item.price}
                                                count={item.count}
                                            />
                                        );
                                    })}
                                </View>
                            </ScrollView>
                            {shoppingCart?.items?.length === 0 && (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            position: 'absolute',
                                            top: 60,
                                            left: 10,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Sepet Boş
                                    </Text>
                                    <Image
                                        source={require('../../assets/emptyShoppingCart.jpg')}
                                        resizeMode='cover'
                                        style={styles.emptyShoppingCart}
                                    />
                                </>
                            )}
                        </View>
                    </Modal>
                </ImageBackground>
            </LinearGradient>
        </>
    );
};

export default Home;
const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    image: {
        opacity: 0.1,
    },
    dropdownContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    listContainer: {
        flex: 6,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 30,
        backgroundColor: '#eee',
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    addContainer: {
        bottom: 0,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    //modal styles
    modalContainer: { backgroundColor: '#fff' },
    modalTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor: '#fff',
        elevation: 10,
    },
    modalListContainer: {
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingBottom: 50,
        elevation: 5,
        minHeight: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    emptyShoppingCart: {
        width: '100%',
        height: '100%',
        opacity: 0.3,
    },
});
