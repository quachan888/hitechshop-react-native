import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { products } from '../services/products';
import ProductCardComponent from '../components/ProductCardComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen = ({ navigation }) => {
    const favoritesProducts = products.filter((e) => e.rating.count >= 300);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={favoritesProducts}
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
        </SafeAreaView>
    );
};

export default FavoritesScreen;

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
