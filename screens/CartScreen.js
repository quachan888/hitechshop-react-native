import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductContext } from '../context/products-context';

const CartScreen = () => {
    const { products } = useContext(ProductContext);

    console.log(products);

    return (
        <SafeAreaView>
            {products.map((e) => (
                <Text>{e.title}</Text>
            ))}
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
