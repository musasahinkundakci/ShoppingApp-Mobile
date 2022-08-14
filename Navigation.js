import { View, Text, Image, Button, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/Home.screen';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setDollar, setMinimumWage } from './redux/budget.slice';
import CurrencyText from './components/CurrencyText';
import { goods } from './fakeData/goods';
import { setModal } from './redux/modal.slice';

function LogoTitle() {
    return (
        <>
            <Image style={styles.logo} source={require('./assets/logo.png')} />
            <Text style={styles.logoText}>Paramız Değerli</Text>
        </>
    );
}
function HeaderRight(props) {
    const dispatch = useDispatch();
    const year = useSelector((state) => {
        return state.year.year;
    });
    const budgetSlice = useSelector((state) => state.budget);
    useEffect(() => {
        dispatch(setDollar(goods.filter((good) => good.year === year)[0]?.dollar));
        dispatch(setMinimumWage(goods.filter((good) => good.year === year)[0]?.minimumWage));
        dispatch(setBudget(goods.filter((good) => good.year === year)[0]?.minimumWage));
    }, [year]);

    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#293462',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                }}
            >
                <Text style={{ marginRight: 7, color: '#fff' }}>Kalan</Text>
                <CurrencyText color='#fff' num={budgetSlice.budget} currency='tl' />
            </View>
            <Text style={{ marginHorizontal: 7 }} />
            <Button
                onPress={() => {
                    dispatch(setModal(true));
                }}
                title='Sepet'
                color='#FEB139'
            />
        </>
    );
}
const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar backgroundColor='#FFF80A' style='dark' />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='home'>
                    <Stack.Screen
                        name='Seneden Seneye'
                        component={Home}
                        options={{
                            headerTitle: (props) => <LogoTitle {...props} />,
                            headerRight: () => <HeaderRight />,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    image: {
        opacity: 1,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    logoText: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#0c0c0c',
        fontSize: 16,
    },
});
