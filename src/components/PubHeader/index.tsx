import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const batteryBarH = StatusBar.currentHeight;
const PubHeader = () => {
  const navigation = useNavigation();

  // 跳转搜索页
  const navigateToSearch = () => {
    // @ts-ignore
    navigation.navigate('Search');
  };

  // 跳转通知页面
  const navigateToNotification = () => {
    // @ts-ignore
    navigation.navigate('Notification');
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent={true}></StatusBar>
      <View style={{ ...styles.pubTitleMain, paddingTop: batteryBarH }}>
        <TouchableHighlight
          style={styles.headerInputWrap}
          activeOpacity={0.1}
          underlayColor="#eee"
          onPress={() => navigateToSearch()}>
          <>
            <Image
              source={require('../../assets/images/icon/search.png')}
              style={styles.inputIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.inputTxt}>Search sites</Text>
          </>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => navigateToNotification()}>
          <Image
            source={require('../../assets/images/icon/notifications.png')}
            resizeMode={'contain'}
            style={styles.headerNotify}></Image>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pubTitleMain: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  headerInputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#F3F3F3',
    borderRadius: 2,
  },
  inputIcon: {
    width: 32,
    height: 32,
    marginLeft: 5,
    marginRight: 5,
  },
  inputTxt: {
    fontSize: 14,
    color: '#a3a2a2',
  },
  headerNotify: {
    width: 32,
    marginLeft: 15,
  },
});

export default PubHeader;
