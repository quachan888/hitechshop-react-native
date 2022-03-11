import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './ProductDetailScreen';
import ShopScreen from './ShopScreen';

const ShopStack = createNativeStackNavigator();

const ShopStackScreen = () => {
    return (
        <ShopStack.Navigator>
            <ShopStack.Screen
                name="ShopScreen"
                component={ShopScreen}
                options={{ headerShown: false }}
            />
            <ShopStack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </ShopStack.Navigator>
    );
};

export default ShopStackScreen;

const styles = StyleSheet.create({});
