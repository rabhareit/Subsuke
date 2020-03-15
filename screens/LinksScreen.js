import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Appearance } from 'react-native-appearance';

export default function LinksScreen() {
  return (     
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <ExpoLinksView />
      </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Appearance.getColorScheme()==='dark'?'rgb(65,65,65)':'#fff',
  },
});
