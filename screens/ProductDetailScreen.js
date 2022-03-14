import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import React, { useContext } from 'react';
import { ProductContext } from '../context/products-context';
import { Rating } from 'react-native-ratings';
import { SliderBox } from 'react-native-image-slider-box';

const ProductDetailScreen = ({ route, navigation }) => {
    const { products } = useContext(ProductContext);
    const id = route.params.id;
    const item = products.filter((e) => e.id === id)[0];

    const slideImages = [item.image, item.image, item.image, item.image, item.image];

    return (
        <ScrollView style={styles.mainScroll}>
            <SliderBox
                images={slideImages}
                autoplay
                circleLoop
                sliderBoxHeight={300}
                resizeMode={'contain'}
            />
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
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
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

    title: {
        fontWeight: 'bold',
        marginTop: 12,
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
