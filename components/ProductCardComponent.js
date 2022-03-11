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
                <Text style={styles.price}>${item.price}</Text>
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
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
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
        color: '#DB3022',
        paddingVertical: 4,
        fontSize: 16
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
