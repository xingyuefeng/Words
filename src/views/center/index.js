import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements'

export default function Center(props) {
  return (
    <View style={styles.container}>
       <Button
        title="我的"
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


Center.navigationOptions = ({ navigation }) => {
  return {
    title: '我的',
    hideTitle: true,
    initialRouteName: 'Center',
    headerStyle: {
      backgroundColor: 'skyblue',
      border: 0,
      borderBottomWidth: 0,
      elevation: 0,
    },
  };
};