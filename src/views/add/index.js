import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements'

export default function Add(props) {
  return (
    <View style={styles.container}>
       <Button
        title="返回首页"
        color="#841584"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});


Add.navigationOptions = ({ navigation }) => {
  return {
    title: 'add',
    initialRouteName: 'Add',
    headerStyle: {
      backgroundColor: 'skyblue',
      border: 0,
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerLeft: (
      <Icon
        onPress={() => navigation.navigate('Home', {  })}
        name='keyboard-arrow-left'
        iconStyle={{ marginLeft: 10  }}
        underlayColor='transparent'
      />
    ),
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Home', {  })}
        title="保存"
        color="#fff"
      />
    ),
  };
};