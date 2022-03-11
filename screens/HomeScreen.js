import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import React from 'react';
import ProductsListComponent from '../components/ProductsListComponent';
import { categogies } from '../services/categories';
import { products } from '../services/products';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from 'react-native-image-slider-box';

const slideImages = [
    'https://source.unsplash.com/lpGm415q9JA',
    'https://source.unsplash.com/ZmgJiztRHXE',
    'https://source.unsplash.com/xrVDYZRGdw4',
    'https://source.unsplash.com/Nv4QHkTVEaI'
];

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Ads slideshow */}
                <SliderBox
                    images={slideImages}
                    autoplay
                    circleLoop
                    sliderBoxHeight={250}
                />

                {/* List 6 top rating products */}
                <ProductsListComponent
                    products={products.filter((product) => product.rating.rate >= 4.5)}
                    title="Best Seller"
                    navigation={navigation}
                />

                {/* List all product from each category */}
                {categogies.map((category) => (
                    <ProductsListComponent
                        products={products.filter((e) => e.category === category)}
                        title={category}
                        key={category}
                        navigation={navigation}
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
