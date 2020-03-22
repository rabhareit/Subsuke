import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Left, Right } from 'native-base';
import {Appearance} from 'react-native-appearance';

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderTopWidth: 1,
    borderTopColor: Appearance.getColorScheme() === 'dark' ? 'rgb(90, 90, 90)' : '#000',
    borderBottomWidth: 1,
    borderBottomColor: Appearance.getColorScheme() === 'dark' ? 'rgb(90, 90, 90)' : '#000',
    flexDirection: 'row'
  },
  text: {
    color: '#333',
    marginLeft: '5%',
  },
  name: {
    marginLeft: '10%',
    fontSize: 20,
  },
  billing: {
    marginRight: '10%',
  },
  txtScheme: {
    color: Appearance.getColorScheme() === 'dark' ? '#fff' : '#000',
  }
});

const SubscItem = props => {
  const item = props;

  return (
    <View style={[styles.container, styles.txtScheme]}>
      <Left>
        <Text style={[styles.name, styles.txtScheme]}>{item.service}</Text>
      </Left>
      <Right>
        <Text style={[styles.billing, styles.txtScheme]}>{'¥ '+item.price}</Text>
      </Right>
    </View>
  );
};

export default SubscItem;
