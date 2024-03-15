import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CalcButtonProps = {
    text: string;
}
export default function CalcButton(props: CalcButtonProps) {

    return (
        <View>
        <Text>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        margin: 1,
    },
    text: {
        fontSize: 30,
    },
});

//do props
