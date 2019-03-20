import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements'

export default function LoginTab(props) {
  return (
    <View style={styles.inputBox}>
      <Input
        placeholder='用户名'
        inputStyle={{marginTop: 25, fontSize: 16, color: '#25242C'}}
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