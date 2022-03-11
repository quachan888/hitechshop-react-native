import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShopScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Shop screen</Text>
            <Button
                title="Go to ProductDetail"
                onPress={() => navigation.navigate('ProductDetail')}
            />
        </SafeAreaView>
    );
};

export default ShopScreen;

const styles = StyleSheet.create({});
