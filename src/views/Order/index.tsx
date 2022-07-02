import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import PubHeader from '../../components/PubHeader';

const Order = () => {
  const screenInfo = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ height: screenInfo.height, backgroundColor: '#fff' }}>
        <PubHeader />
        <View>
          <Text>这是订单</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
