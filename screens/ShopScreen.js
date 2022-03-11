import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const ShopScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Shop screen</Text>
            <Button
                title="Go to ProductDetail"
                onPress={() => navigation.navigate('ProductDetail')}
            />
        </View>
    );
};

export default ShopScreen;

const styles = StyleSheet.create({});
