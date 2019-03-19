import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
export default function Home(props) {

  return (
    <View style={styles.container}>
      <Text>
        home
      </Text>
      <Button
        title="添加笔记"
        onPress={() => props.navigation.navigate('Add')}
      />
      <Button
        title="登录"
        onPress={() => props.navigation.navigate('Login')}
        buttonStyle={{ marginTop: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

Home.navigationOptions = ({ navigation }) => {
  return {
    title: 'home',
    initialRouteName: 'Home',
    headerStyle: {
      backgroundColor: 'pink',
      border: 0,
      borderBottomWidth: 0,
      elevation: 0,
    },
  };
};