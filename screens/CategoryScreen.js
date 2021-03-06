import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { ProductContext } from '../context/products-context';
import ProductCardComponent from '../components/ProductCardComponent';

const CategoryScreen = ({ route, navigation }) => {
    const { products } = useContext(ProductContext);
    const category = route.params.category;

    // Prepare fake data
    // If Best seller: list 6 best rating products
    const bestProducts = products.filter((e) => e.rating.rate >= 4.5);
    // otherwise: list all caterogy product
    const productsByCategory = products.filter((e) => e.category === category);

    return (
        <View style={styles.container}>
            <FlatList
                data={category === 'Best Seller' ? bestProducts : productsByCategory}
                renderItem={({ item }) => (
                    <ProductCardComponent
                        item={item}
                        navigation={navigation}
                        style={{ margin: 10 }}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10
    },
    row: {
        flex: 1,
        justifyContent: 'space-around'
    }
});
