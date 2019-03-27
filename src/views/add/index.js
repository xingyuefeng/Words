import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements'


export default class Add extends React.Component {


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
          iconStyle={{ marginLeft: 10  }}
          underlayColor='transparent'
        />
      ),
      headerRight: (
        <Button
          // onPress={params.ceshi}
          type="clear"
          title="保存"
          color="skyblue"
        />
      ),
    };
  };

  state = {
    inputData: [],
    loading: false,
    contents: [],
  }

  componentDidMount() {
    // this.props.navigation.setParams({ ceshi: this._ceshi });

    // props.navigation.navigate('Home')
    const inputData = []
    for(let i = 0; i < 100; i++ ) {
      inputData.push({
        key: i + '',
        el: <View style={styles.inputItem} >
          {/* key={`${i}-left`} */}
          <Input onChangeText={(text) => this.handleChange(text, i, 'content')} containerStyle={styles.input} placeholder='输入单词' />
          <Input onChangeText={(text) => this.handleChange(text, i, 'remark')} containerStyle={styles.input} placeholder='输入词义' />
        </View>
      })
    }
    this.setState({inputData})
  }
  handleChange = (text, idx, type) => {
    const contents = this.state.contents.concat();
    console.log('contents[idx]=====>', contents[idx])
    if (contents[idx]) {
      console.log(123)
      contents[idx][type] = text
    } else {
      contents[idx] = {[type]: text}
      // contents[idx][type] = text
    }
    // contents[idx][type] = text;
    this.setState({contents})
    console.log(contents);
  }

  render() {
    const { inputData, loading } = this.state;
    // console.log(this.state.contents);
    return (
      <View style={styles.container}>
        {
          loading &&
          <Button
            style={styles.btnLoding}
            type="clear"
            loading={ loading }
          />
        }
        <FlatList
          data={inputData}
          renderItem={({item}) => item.el}
          keyExtractor={item => item.key}
        />
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
    
  }
});