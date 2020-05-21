import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Food Review'/>,
            }
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#333', height: 60 }
    }
});

export default HomeStack