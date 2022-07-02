import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

const Me = () => {
  const screenInfo = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ height: screenInfo.height, backgroundColor: '#fff' }}>
        <View>
          <Text>这是我的</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Me;
