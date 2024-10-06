import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


interface options {
    label: string
    value: string
}
interface optionProps {
    data: options[]
    selected: string
    onSelect: (value: string) => void
}

const DropdownComponent = ({ data, selected, onSelect }: optionProps) => {

    // console.log('Drapdown data : ', data);

    const optionChange = (value: string) => {
        onSelect(value);
    }

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.itemTextStyle}
            // itemContainerStyle={styles.itemContainerStyle}
            // containerStyle={styles.containerStyle}
            disable={false}
            // activeColor='#52b700'
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select item'}
            value={selected || null}
            onChange={item => {
                optionChange(item.value)
            }}
            renderItem={(item, selected) => (
                <View style={{padding: 10, backgroundColor: selected ? '#52b700' : '#fff'}}>
                    <Text style={{fontSize: 16, color: selected ? '#fff' : '#000'}}>{item.label}</Text>
                </View>
            )}
        />)
}

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 40,
        borderWidth: 1,
        borderColor: '#52b700',
        paddingHorizontal: 8,
        borderRadius: 5,
        marginBottom: 15,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'darkgray'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000',
    },
    itemTextStyle: {
        color: '#000',
        fontSize: 16,
    },
    containerStyle: {
    },
    itemContainerStyle: {
        // paddingVertical: -10,
        // borderBottomWidth: .2,
        // borderColor: '#52b700',
        // margin: -10
    },
});