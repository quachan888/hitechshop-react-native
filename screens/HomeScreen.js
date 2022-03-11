import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to ProductDetail"
                onPress={() => navigation.navigate('ProductDetail')}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
