import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, TextInput } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'

export default function SecondRoute(props) {
  const [username, setUsername ] = useState('');
  const [firstPassword, setFirstPassword ] = useState('');
  const [secPassword, setsecPassword ] = useState('');

  useEffect(() => {
    
  })

  return (
    <View style={styles.inputBox}>
      <Input
        placeholder='用户名'
        inputStyle={{marginTop: 25, fontSize: 16, color: '#25242C'}}
        textContentType="username"
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
      />
    </View>
  )
}


const styles = StyleSheet.create({
});