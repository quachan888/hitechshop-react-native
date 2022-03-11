import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CartScreen from './screens/CartScreen';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HomeStackScreen from './screens/HomeStackScreen';
import ShopStackScreen from './screens/ShopStackScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
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
