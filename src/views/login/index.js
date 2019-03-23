import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Text } from 'react-native-elements'
import LoginTab from './comp/loginTab';
import RegisterTab from './comp/registerTab';

import { request } from  '../../utils';





export default function Login(props) {
  const [tabIndex, changeTabIndex] = useState(0);
  useEffect(() => {
  });

  return (
    <View style={{ flex: 1 }} >
      <Text style={styles.title} h4>欢迎来到背背词😊😊😊</Text>
      <Text style={styles.slideTitle}>希望能帮你更方便记单词的一款app。</Text>
      <TabView
        navigationState={{
          index: tabIndex,
          routes: [
            { key: 'first', title: '登录', },
            { key: 'second', title: '注册' },
          ],
        }}
        // renderScene={SceneMap({
        //   first: LoginTab,
        //   second: RegisterTab,
        // })}
        renderScene={({ route, jumpto }) => {
          switch (route.key) {
            case 'first':
              return <LoginTab navigation={props.navigation} />
            case 'second':
              return <RegisterTab navigation={props.navigation} />
          }
        }}
        onIndexChange={(index) => {changeTabIndex(index)}}
        style={styles.tabView}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(barProps) => (
          <TabBar
            {...barProps}
            style={{ backgroundColor: 'transparent'}}
            inactiveColor="#35343D"
            activeColor="#00CA9D"
            labelStyle={{fontSize: 16}}
            // renderLabel={({ route, focused, color }) => (
            //   <Text style={{ color, margin: 8 }}>
            //     {route.title}
            //   </Text>
            // )}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 70,
    marginLeft: 16,
    color: '#35343D',
  },
  slideTitle: {
    marginTop: 8,
    marginLeft: 16,
    color: '#35343D',
  },
  scene: {
    // flex: 1,
    
  },
  container: {
    // marginTop: StatusBar.currentHeight
  },
  tabView: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    
  },
  inputBox: {
    flex: 1,
    alignItems: 'center'
  }
});

Login.navigationOptions = ({ navigation }) => {
  return {
    title: '',
    initialRouteName: 'Login',
    headerStyle: {
      // backgroundColor: 'pink',
      border: 0,
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerLeft: null
  };
};