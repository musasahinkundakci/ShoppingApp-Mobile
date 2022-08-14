import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native';
import Loading from '../indicators/Loading';
import { setLoader } from '../redux/loader.slice';
import { useDispatch } from 'react-redux';

const DropdownItem = ({ value, onClick, setIsOpen }) => {
    return (
        <View style={styles.dropdownItemOuter}>
            <Pressable
                onPress={() => {
                    onClick(value);
                    setTimeout(() => {
                        setIsOpen(false);
                    }, 500);
                }}
                android_ripple={{ color: '#ccc' }}
                style={styles.dropdownItemInner}
            >
                <Text style={styles.dropdownItemText}>{value}</Text>
            </Pressable>
        </View>
    );
};
const DropdownInput = ({ options, value, onClick }) => {
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setSelected(value);
    }, [value]);
    return (
        <>
            <View style={styles.outerContainer}>
                <Pressable
                    onPress={() => setIsOpen(!isOpen)}
                    android_ripple={{ color: '#ccc' }}
                    style={styles.innerContainer}
                >
                    <Text style={styles.buttonText}>{selected}</Text>
                    <Text>
                        <FontAwesomeIcon color='#fff' icon={faAngleDown} />
                    </Text>
                </Pressable>
                {isOpen && (
                    <View style={styles.dropdownContainer}>
                        <ScrollView>
                            {options?.map((item, index) => (
                                <DropdownItem
                                    key={index}
                                    value={item}
                                    onClick={() => {
                                        onClick(item);
                                        dispatch(setLoader(true));
                                        setTimeout(() => {
                                            dispatch(setLoader(false));
                                        }, 1500);
                                    }}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>
        </>
    );
};

export default DropdownInput;
const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    innerContainer: {
        backgroundColor: '#FEB139',
        borderRadius: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        width: '80%',
    },
    dropdownContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        maxHeight: 75,
        backgroundColor: '#EEEEEE',
        paddingVertical: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    dropdownItemOuter: {
        marginHorizontal: 5,
        marginVertical: 2,
        borderRadius: 15,
        overflow: 'hidden',
    },
    dropdownItemInner: {
        paddingVertical: 3,
        paddingHorizontal: 10,
    },
    dropdownItemText: {},
});
