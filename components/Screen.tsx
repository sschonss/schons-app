import React from 'react';
import { View, Text } from 'react-native';
import Cars from './Cars';


export default function Screen() {

    const cars = [
        {name: 'Civic', brand: 'Honda', hp: 200},
        {name: 'Corolla', brand: 'Toyota', hp: 150},
        { name: 'Golf', brand: 'Volkswagen', hp: 180 },
        { name: 'Focus', brand: 'Ford', hp: 190 },
        { name: 'Clio', brand: 'Renault', hp: 120 },
        { name: 'Megane', brand: 'Renault', hp: 130 },
        { name: 'Astra', brand: 'Opel', hp: 140 },
        { name: 'Insignia', brand: 'Opel', hp: 160 },
    ];
    return (
        <View>
            {cars.map((car, index) => {
                return <Cars key={index} name={car.name} brand={car.brand} hp={car.hp} />
            })}
        </View>
    );
}