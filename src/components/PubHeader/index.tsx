import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const batteryBarH = StatusBar.currentHeight;
const PubHeader = () => {
  const [keyword, setKeyword] = useState<string>('');
  const searchRef = useRef<TextInput>(null);

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => obBlur());
    return () => {
      Keyboard.removeListener('keyboardDidHide', () => obBlur());
    };
  }, []);

  // 点击软键盘收起 需要主动处理失去焦点
  const obBlur = () => {
    searchRef.current?.blur();
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#fff"
        translucent={true}></StatusBar>
      <View style={{ ...styles.pubTitleMain, marginTop: batteryBarH }}>
        <View style={styles.headerInputWrap}>
          <Image
            source={require('../../assets/images/icon/search.png')}
            style={styles.inputIcon}
            resizeMode={'contain'}
          />
          <TextInput
            style={styles.headerInput}
            underlineColorAndroid={'transparent'}
            value={keyword}
            ref={searchRef}
            onChangeText={text => setKeyword(text)}></TextInput>
        </View>
        <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
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
  },
  inputIcon: {
    position: 'absolute',
    top: 4,
    left: 12,
    zIndex: 1,
  },
  headerInput: {
    height: 40,
    backgroundColor: '#F3F3F3',
    paddingLeft: 54,
  },
  headerNotify: {
    width: 32,
    marginLeft: 15,
  },
});

export default PubHeader;
