import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Icon } from 'react-native-elements'

let ceshi = () => {};

export default class Add extends React.Component {


  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: '记录',
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
          onPress={params.ceshi}
          title="保存"
          color="skyblue"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ ceshi: this._ceshi });
  }

  _ceshi = () => {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }

  render() {
    return (
      <View style={styles.container}>
         <Button
          title="返回首页"
          color="#841584"
          onPress={() => props.navigation.navigate('Home')}
        />
         <Button
          title="返回首页11111"
          color="#841584"
          onPress={this.ceshi}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});