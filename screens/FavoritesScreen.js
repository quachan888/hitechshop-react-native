import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AirbnbRating } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen = () => {
    return (
        <SafeAreaView>
            <AirbnbRating
                isDisabled={true}
                count={5}
                defaultRating={2}
                size={20}
                showRating={false}
            />
            <AirbnbRating
                count={11}
                reviews={[
                    'Terrible',
                    'Bad',
                    'Meh',
                    'OK',
                    'Good',
                    'Hmm...',
                    'Very Good',
                    'Wow',
                    'Amazing',
                    'Unbelievable',
                    'Jesus'
                ]}
                defaultRating={11}
                size={20}
            />
        </SafeAreaView>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
