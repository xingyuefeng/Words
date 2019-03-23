import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

export default function Home(props) {

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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
    title: '首页',
    initialRouteName: 'Home',
    headerStyle: {
      backgroundColor: 'pink',
      border: 0,
      borderBottomWidth: 0,
      elevation: 0,
    },
  };
};