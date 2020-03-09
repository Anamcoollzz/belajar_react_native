// In App.js in a new project

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MasukScreen from './Masuk'
import WelcomeScreen from './Welcome'
import Icon from 'react-native-vector-icons/FontAwesome';

// Product
import ProductScreen from './src/products/ProductScreen'
import ProductAddScreen from './src/products/ProductAddScreen'
import ProductEditScreen from './src/products/ProductEditScreen'
import ProductDetailsScreen from './src/products/ProductDetailsScreen'

// Mahasiswa
import Mahasiswa from './src/Mahasiswa/Index'
import MahasiswaTambah from './src/Mahasiswa/Tambah'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Masuk"
                    component={MasukScreen}
                    options={{
                    headerShown: false
                }}/>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                    title: 'Welcome'
                }}/>
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={({navigation, route}) => ({
                    title: 'Produk',
                    headerRight: () => (<Icon size={20} style={{
                      marginRight: 10
                    }}
                        onPress={() => {
                        navigation.navigate('ProductAdd')
                    }}
                        name="plus"/>)
                })}/>
                <Stack.Screen
                    name="ProductAdd"
                    component={ProductAddScreen}
                    options={{
                    title: 'Add Product'
                }}/>
                <Stack.Screen
                    name="ProductEdit"
                    component={ProductEditScreen}
                    options={{
                    title: 'Edit Product'
                }}/>
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetailsScreen}
                    options={{
                    title: 'Product Details'
                }}/>

                {/* Mahasiswa */}
                <Stack.Screen name="Mahasiswa" component={Mahasiswa} />
                <Stack.Screen name="MahasiswaTambah" component={MahasiswaTambah} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;