import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, Alert } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'
import { request } from  '../../../utils';

export default function SecondRoute(props) {
  const [username, setUsername ] = useState('');
  const [firstPassword, setFirstPassword ] = useState('');
  const [secPassword, setsecPassword ] = useState('');
  const [loading, setLoading] = useState(false);

  submit = () => {
    setLoading(true)
    if (firstPassword !== secPassword) {
      Alert.alert(
        '两次密码不一样哦😯',
        '',
        [
          {text: '好的', onPress: () => console.log('OK Pressed')},
        ],
      )
      return
    }
    request('/api/user/register', 'POST', {
      account: username,
      password: firstPassword
    }).then(res => {

      setLoading(false)
      if (res.status === 400) {
        Alert.alert(
          '注册失败了😯',
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
        onChangeText={(text) => setUsername(text)}
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
        password={true}
        textContentType="password"
        secureTextEntry
        onChangeText={(text) => setFirstPassword(text)}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='#35343D'
            iconStyle={{marginTop: 10, marginRight: 8}}
          />
        }
      />
      <Input
        placeholder='输入相同密码'
        inputStyle={{marginTop: 15, fontSize: 16, color: '#25242C'}}
        secureTextEntry
        onChangeText={(text) => setsecPassword(text)}
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
        title="注册"
        buttonStyle={{marginTop: 40, width: Dimensions.get('window').width - 50, borderRadius: 20, backgroundColor: '#00CA9D' }}
        titleStyle={{fontSize: 16}}
        disabled={!username || !firstPassword || !secPassword}
        onPress={submit}
        loading={loading}
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