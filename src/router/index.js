import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, getActiveChildNavigationOptions } from "react-navigation"; 
import { Icon } from 'react-native-elements'
import Home from '../views/home';
import Add from '../views/add';
import Login from '../views/login';
import Center from '../views/center';


// Add: {
//   screen: Add,
//   navigationOptions: {
//     tabBarLabel: '记笔记',
//     tabBarIcon: ({tintColor, focused}) => (
//       <Icon
//           name={focused ? 'add-box' : 'add-box'}
//           size={26}
//           color={focused ? '#00CA9D' : '#35343D'}
//       />
//     ),
//   }
// },


const TabNavigator = createBottomTabNavigator({

  Add,
  Home,
  Center
  // Home: {
  // screen: Home,
  // navigationOptions: {
  //   tabBarLabel: '记笔记',
  //   title: '123',
  //   headerStyle: {
  //     backgroundColor: 'pink',
  //     border: 0,
  //     borderBottomWidth: 0,
  //     elevation: 0,
  //   },
  //   tabBarIcon: ({tintColor, focused}) => (
  //     <Icon
  //         name={focused ? 'add-box' : 'add-box'}
  //         size={26}
  //         color={focused ? '#00CA9D' : '#35343D'}
  //     />
  //   ),}
  // },
  // Add: {
  //   screen: Add,
  //   navigationOptions: {
  //     tabBarLabel: '记笔记',
  //     tabBarIcon: ({tintColor, focused}) => (
  //       <Icon
  //           name={focused ? 'add-box' : 'add-box'}
  //           size={26}
  //           color={focused ? '#00CA9D' : '#35343D'}
  //       />
  //     ),}
  //   },
  // Center: {
  //   screen: Center,
  //   navigationOptions: {
  //     tabBarLabel: '记笔记',
  //     tabBarIcon: ({tintColor, focused}) => (
  //       <Icon
  //           name={focused ? 'add-box' : 'add-box'}
  //           size={26}
  //           color={focused ? '#00CA9D' : '#35343D'}
  //       />
  //     ),}
  //   },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        iconName = `home`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
      } else if (routeName === 'Add') {
        iconName = `add-box`;
      } else if (routeName === 'Center') {
        iconName = `person`;
      }

      // You can return any component that you like here!
      return <Icon name={iconName} size={24} color={focused ? '#00CA9D' : '#35343D'} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#00CA9D',
    inactiveTintColor: '#35343D',
  },
});

// https://github.com/react-navigation/react-navigation/issues/5414
TabNavigator.navigationOptions = ({navigation, screenProps}) => {
  const childOptions = getActiveChildNavigationOptions(navigation, screenProps)
  return {
    // title: childOptions.title,
    headerLeft : childOptions.headerLeft,
    headerRight: childOptions.headerRight,
    headerStyle: {
      // backgroundColor: '#00CA9D',

      border: 0,
      borderBottomWidth: 0,
      elevation: 0,
    },
  }
}

const AppNavigator = createStackNavigator({
  // Home,
  // Add,
    TabNavigator,
    Login,
  }
);


const AppContainer = createAppContainer(AppNavigator);




export default AppContainer
