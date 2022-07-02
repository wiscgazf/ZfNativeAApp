import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import PubHeader from '../../components/PubHeader';

const Community = () => {
  const screenInfo = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ height: screenInfo.height, backgroundColor: '#fff' }}>
        <PubHeader />
        <View>
          <Text>这是朋友圈</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Community;
