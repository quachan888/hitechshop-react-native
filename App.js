import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CartScreen from './screens/CartScreen';
import { FontAwesome } from '@expo/vector-icons';
import HomeStackScreen from './screens/HomeStackScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductContextProvider from './context/products-context';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <ProductContextProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{ headerShown: false }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeStackScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome
                                        name="shopping-bag"
                                        color={color}
                                        size={size}
                                    />
                                )
                            }}
                        />
                        <Tab.Screen
                            name="Favorites"
                            component={FavoritesScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome name="heart" color={color} size={size} />
                                )
                            }}
                        />

                        <Tab.Screen
                            name="Cart"
                            component={CartScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome
                                        name="shopping-cart"
                                        color={color}
                                        size={size}
                                    />
                                ),
                                tabBarBadge: 2
                            }}
                        />
                        <Tab.Screen
                            name="Profile"
                            component={ProfileScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesome name="user" color={color} size={size} />
                                )
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ProductContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
