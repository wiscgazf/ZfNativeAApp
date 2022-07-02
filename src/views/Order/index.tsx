import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

const Order = () => {
  const screenInfo = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ height: screenInfo.height, backgroundColor: '#fff' }}>
        <View>
          <Text>这是订单</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
