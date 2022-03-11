import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import React from 'react';
import ProductsListComponent from '../components/ProductsListComponent';
import { categogies } from '../services/categories';
import { products } from '../services/products';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* List 6 top rating products */}
                <ProductsListComponent
                    products={products.filter((product) => product.rating.rate >= 4.5)}
                    title="Best Seller"
                />

                {/* List all product from each category */}
                {categogies.map((category) => (
                    <ProductsListComponent
                        products={products.filter((e) => e.category === category)}
                        title={category}
                        key={category}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
