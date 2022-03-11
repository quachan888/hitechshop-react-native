import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../services/products';
import { Rating } from 'react-native-ratings';

const ProductDetailScreen = ({ route, navigation }) => {
    const id = route.params.id;
    const item = products.filter((e) => e.id === id)[0];

    return (
        <ScrollView style={styles.mainScroll}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.productDetails}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {item.title}
                </Text>
                <View style={styles.midContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.category}>{item.category}</Text>
                        <View style={styles.ratingContainer}>
                            <Rating
                                ratingCount={5}
                                imageSize={16}
                                startingValue={item.rating.rate}
                                readonly
                                containerStyle={{ width: 200 }}
                            />
                            <Text style={styles.rating}>({item.rating.count})</Text>
                        </View>
                    </View>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                <Text style={styles.description}>
                    {item.description.charAt(0).toUpperCase() + item.description.slice(1)}
                </Text>
            </View>
        </ScrollView>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    mainScroll: {
        width: '100%',
        backgroundColor: 'white'
    },
    productDetails: {
        padding: 12,
        marginTop: 12
    },
    image: {
        backgroundColor: 'white',
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 12,
        fontSize: 24,
        color: '#222222'
    },
    price: {
        fontWeight: 'bold',
        color: '#222222',
        fontSize: 24
    },
    category: {
        color: '#9B9B9B',
        paddingVertical: 4,
        textTransform: 'capitalize',
        fontSize: 16
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
    midContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 16
    },
    description: {
        color: '#222222',
        fontSize: 14
    }
});
