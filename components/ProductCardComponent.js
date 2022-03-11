import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Rating } from 'react-native-ratings';

const ProductCardComponent = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('ProductDetail', { id: item.id, name: item.title })
            }
        >
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: item.image, width: 180, height: 200 }}
                    style={styles.image}
                />
                <View style={styles.ratingContainer}>
                    <Rating
                        ratingCount={5}
                        imageSize={14}
                        startingValue={item.rating.rate}
                        readonly
                    />

                    <Text style={styles.rating}>({item.rating.count})</Text>
                </View>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {item.title}
                </Text>
                {item.price < 100 ? (
                    <Text style={styles.price}>${item.price}</Text>
                ) : (
                    <View style={styles.discountPriceContainer}>
                        <Text style={styles.priceOld}>${item.price}</Text>
                        <Text style={styles.priceNew}>${item.price * 0.8}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default ProductCardComponent;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        margin: 8,
        padding: 8,
        width: 200,
        borderRadius: 10
    },
    image: {
        resizeMode: 'contain'
    },
    title: {
        fontWeight: 'bold',
        paddingVertical: 4,
        fontSize: 16,
        color: '#222222'
    },
    price: {
        fontWeight: 'bold',
        color: '#222222',
        paddingVertical: 4,
        fontSize: 16
    },
    priceOld: {
        fontWeight: 'bold',
        color: '#9B9B9B',
        paddingVertical: 4,
        textDecorationLine: 'line-through',
        fontSize: 16
    },
    priceNew: {
        fontWeight: 'bold',
        color: '#DB3022',
        paddingVertical: 4,
        fontSize: 16,
        marginLeft: 8
    },
    discountPriceContainer: {
        flexDirection: 'row'
    },
    category: {
        color: '#9B9B9B',
        paddingVertical: 4,
        textTransform: 'capitalize'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
    },
    rating: {
        color: '#9B9B9B',
        fontSize: 14,
        marginLeft: 10
    }
});
