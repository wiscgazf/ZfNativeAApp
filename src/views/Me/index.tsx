import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import PubHeader from '../../components/PubHeader';

const Me = () => {
  const screenInfo = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ height: screenInfo.height, backgroundColor: '#fff' }}>
        <PubHeader />
        <View>
          <Text>这是我的</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Me;
