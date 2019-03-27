import React, { useState } from 'react';
import { StyleSheet, View, Alert, FlatList, Dimensions, DeviceEventEmitter } from 'react-native';
import { Icon, Input, Text, Button, Overlay, Rating } from 'react-native-elements'
import { StackActions, NavigationActions, Tab, withNavigationFocus} from 'react-navigation';

import { request } from  '../../utils';

class Add extends React.Component {


  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: '记录',
      hideTitle: true,
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
          iconStyle={{ marginLeft: 10, color:  '#00CA9D'}}
          underlayColor='transparent'
        />
      ),
      headerRight: (
        <Button
          onPress={params.save}
          type="clear"
          title="保存"
          titleStyle={{ color: '#00CA9D' }}
          // buttonStyle={{ color: '#00CA9D' }}
        />
      ),
    };
  };

  state = {
    inputData: [],
    loading: false,
    contents: [],
    isVisible: false,
    title: '',
    value: '',
  }

  componentWillReceiveProps() {
    // console.log(this.props.navigation.state.routeName)
    // this.props.navigation.reset()
  }

  componentDidMount() {
    this.props.navigation.setParams({ save: this.save });
    const inputData = []
    const { value, contents } = this.state;
    for(let i = 0; i < 100; i++ ) {
      inputData.push({
        key: i + '',
        el: <View style={styles.inputItem} >
          <Input onChangeText={(text) => this.handleChange(text, i, 'content')} value={contents[i] && contents[i].content} containerStyle={styles.input} placeholder='输入单词' />
          <Input onChangeText={(text) => this.handleChange(text, i, 'remark')} value={contents[i] && contents[i].remark} containerStyle={styles.input} placeholder='输入词义' />
        </View>
      })
    }
    this.setState({inputData})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      const inputData = []
      const { value, contents } = this.state;
      console.log('contents====>', contents)
      for(let i = 0; i < 100; i++ ) {
        inputData.push({
          key: i + '',
          el: <View style={styles.inputItem} >
            <Input onChangeText={(text) => this.handleChange(text, i, 'content')} value={contents[i] && contents[i].content} containerStyle={styles.input} placeholder='输入单词' />
            <Input onChangeText={(text) => this.handleChange(text, i, 'remark')} value={contents[i] && contents[i].remark} containerStyle={styles.input} placeholder='输入词义' />
          </View>
        })
      }
      this.setState({inputData})
    }
  }

  handleChange = (text, idx, type) => {
    const contents = this.state.contents.concat();
    if (contents[idx]) {
      contents[idx][type] = text
    } else {
      contents[idx] = {[type]: text}
    }
    this.setState({contents})
  }


  save = () => {
    const contents = this.state.contents.filter(( item ) => ( !item.content || item.remark ))
    if (contents.length <= 0) {
      Alert.alert(
        '亲，得填点东西😯',
        '',
        [
          {text: '好的', onPress: () => console.log('OK Pressed')},
        ],
      )
    } else {
      this.setState({isVisible: true})
    }

  }

  add = () => {
    const { title, level } = this.state;
    if (!title) {
      this.setState({titleError: '标题不能为空哦'})
      return
    }
    const contents = this.state.contents.filter(( item ) => ( !item.content || item.remark ))
    this.setState({loading: true})
      request('/api/content/add', 'POST', {
        contents,
        title,
        level: level || 4,
        create_account: 'xyf'
      }).then(res => {
        this.setState({loading: false, isVisible: false, contents: [], title: '' })
        if (res.status === 200) {
          this.props.navigation.navigate('Home')
          // const resetAction = StackActions.reset({
          //   index: 0,
          //   actions: [NavigationActions.navigate({ routeName: 'Home' })],
          //   key: 'Home',
          // });
          // this.props.navigation.dispatch(resetAction);
        }
      })
  }

  render() {
    const { inputData, loading, titleError } = this.state;
    // console.log(this.state.contents);
    return (
      <View style={styles.container}>
        <FlatList
          data={inputData}
          renderItem={({item}) => item.el}
          keyExtractor={item => item.key}
        />
        <Overlay
          height={300}
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View>
            <Input
              placeholder='笔记标题'
              inputStyle={{marginTop: 5, fontSize: 16, color: '#25242C'}}
              onChangeText={(text) => this.setState({title: text})}
              errorMessage={titleError}
            />
            <Text style={styles.level}>笔记📒重要度:</Text>
            <Rating
              style={styles.rate}
              type='heart'
              fractions={1}
              startingValue={4}
              ratingColor="#00CA9D"
              ratingTextColor="#00CA9D"
              onFinishRating={ (e) => { this.setState({level: e}) } }
            />
            <Button
              style={styles.btnLoding}
              buttonStyle={{marginTop: 40, width: Dimensions.get('window').width - 100, borderRadius: 20, backgroundColor: '#00CA9D' }}
              title="提交"
              loading={ loading }
              onPress={this.add}
            />
          </View>
        </Overlay>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
 
  },
  input: {
    flex:1,
    marginBottom: 10,
    // width: 50,
  },
  inputStyle: {
    fontSize: 15,
    color: '#25242C'
  },
  btnLoding: {
    
  },
  level: {
    marginTop: 30,
    paddingLeft: 10,
    fontSize: 14,
  },
  rate: {
    marginTop: 10,
  }
});


export default withNavigationFocus(Add)