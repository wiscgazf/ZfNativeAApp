import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Button,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import LinearGradinet from 'react-native-linear-gradient';

interface ITravelItem {
  name: string;
  url: Object;
  colors: string[];
}

const Home = ({ navigation }: any) => {
  const screenInfo = useWindowDimensions();
  const travels: ITravelItem[] = [
    {
      name: 'Train',
      url: require('../../assets/images/icon/train.png'),
      colors: ['#F97442', '#FB5147'],
    },
    {
      name: 'Hotel',
      url: require('../../assets/images/icon/hotel.png'),
      colors: ['#45E0A6', '#25CDB9'],
    },
    {
      name: 'Cruise',
      url: require('../../assets/images/icon/cruise.png'),
      colors: ['#64BEFE', '#4E79FB'],
    },
    {
      name: 'Flight',
      url: require('../../assets/images/icon/flight.png'),
      colors: ['#34E2CF', '#1EC0D0'],
    },
  ];

  const linkTo = () => {
    navigation.navigate('Test');
  };

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'none'}
        style={{ ...styles.homeWrap, height: screenInfo.height }}>
        <View style={styles.travelPanelWrap}>
          <Text style={styles.travelTitle}>Start travel</Text>
          <View style={styles.travelPanel}>
            {travels.map(({ name, url, colors }: ITravelItem) => {
              return (
                <TouchableOpacity
                  style={styles.travelProject}
                  activeOpacity={0.6}
                  onPress={() => linkTo()}
                  key={name}>
                  <>
                    <LinearGradinet
                      style={styles.travelIconBg}
                      colors={colors}
                      useAngle={true}
                      angle={220}>
                      <Image source={url} resizeMode={'contain'} />
                    </LinearGradinet>
                    <Text style={styles.travelLabel}>{name}</Text>
                  </>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeWrap: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  travelPanelWrap: {
    paddingTop: 30,
  },
  travelPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  travelTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    color: '#444',
  },
  travelProject: {
    width: '20%',
    textAlign: 'center',
  },
  travelIconBg: {
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelLabel: {
    color: '#444',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Home;
