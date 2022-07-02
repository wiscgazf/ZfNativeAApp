import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Button,
  useWindowDimensions,
} from 'react-native';
import PubHeader from '../../components/PubHeader';

const Home = ({ navigation }) => {
  const screenInfo = useWindowDimensions();

  const linkTo = () => {
    navigation.navigate('Test');
  };

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ height: screenInfo.height, backgroundColor: '#fff' }}>
        <PubHeader />
        <View>
          <Text>这是首页</Text>
          <Button title="跳转测试" onPress={() => linkTo()}></Button>
          <Button title="跳转测试" onPress={() => linkTo()}></Button>
          <Button title="跳转测试" onPress={() => linkTo()}></Button>
          <Button title="跳转测试" onPress={() => linkTo()}></Button>
          <Button title="跳转测试" onPress={() => linkTo()}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
