import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, Alert } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements'
import { request } from  '../../../utils';

export default function LoginTab(props) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  submit = () => {
    setLoading(true)
    request('/api/user/login', 'POST', {
      account,
      password
    }).then(res => {

      setLoading(false)
      if (res.status === 400) {
        Alert.alert(
          '登录失败了😯',
          res.msg,
          [
            {text: '好的', onPress: () => console.log('OK Pressed')},
          ],
        )
      }
      if (res.status === 200) {
        props.navigation.navigate('Home')
      }
    })
  }
  return (
    <View style={styles.inputBox}>
      <Input
        placeholder='账号'
        inputStyle={{marginTop: 25, fontSize: 16, color: '#25242C'}}
        textContentType="username"
        onChangeText={(text) => setAccount(text)}
        leftIcon={
          <Icon
            name='person'
            size={24}
            color='#35343D'
            shake={true}
            iconStyle={{marginTop: 18, marginRight: 8}}
          />
        }
      />
      <Input
        placeholder='密码'
        inputStyle={{marginTop: 15, fontSize: 16, color: '#25242C'}}
        textContentType="password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='#35343D'
            iconStyle={{marginTop: 10, marginRight: 8}}
          />
        }
      />
      <Button
        title="登录"
        buttonStyle={{marginTop: 40, width: Dimensions.get('window').width - 50, borderRadius: 20, backgroundColor: '#00CA9D' }}
        titleStyle={{fontSize: 16}}
        loading={loading}
        onPress={submit}
        disabled={!account || !password}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    alignItems: 'center'
  }
});