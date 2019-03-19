import React, { useState } from 'react';
import {StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Icon, Text, Input, Button } from 'react-native-elements'


const FirstRoute = () => (
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
);
const SecondRoute = () => (
  <View style={[styles.scene]}>
    <Text>3123123123123123123123123</Text>
  </View>
);


export default function Login(props) {
  const [tabIndex, changeTabIndex] = useState(0)
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
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={(index) => {changeTabIndex(index)}}
        style={styles.tabView}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(barProps) => (
          <TabBar
            {...barProps}
            indicatorStyle={{ backgroundColor: '#00CA9D', color: 'red'  }}
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