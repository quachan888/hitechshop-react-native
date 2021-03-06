import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ProductCardComponent from './ProductCardComponent';

const ProductsListComponent = ({ products, title, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Category', {
                            category: title,
                            name: title.charAt(0).toUpperCase() + title.slice(1)
                        })
                    }
                >
                    <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductCardComponent item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default ProductsListComponent;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'capitalize'
    },
    titleContainer: {
        marginTop: 16,
        marginBottom: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 16
    },
    viewAll: {
        color: '#222222',
        fontSize: 14
    }
});
