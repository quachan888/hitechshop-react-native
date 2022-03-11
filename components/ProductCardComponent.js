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
                {item.rating.count > 400 && (
                    <View style={styles.floatBadge}>
                        <Text style={styles.floatText}>HOT</Text>
                    </View>
                )}

                <Image source={{ uri: item.image }} style={styles.image} />
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
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                ) : (
                    <View style={styles.discountPriceContainer}>
                        <Text style={styles.priceOld}>${item.price.toFixed(2)}</Text>
                        <Text style={styles.priceNew}>
                            ${(item.price * 0.8).toFixed(2)}
                        </Text>
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
        borderRadius: 10,
        paddingHorizontal: 10,
        position: 'relative'
    },
    image: {
        resizeMode: 'contain',
        height: 180
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
    },
    floatBadge: {
        backgroundColor: '#DB3022',
        borderRadius: 20,
        position: 'absolute',
        textAlign: 'center',
        zIndex: 50,
        top: 5,
        left: 10
    },
    floatText: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
});
