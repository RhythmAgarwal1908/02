import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import AutoSuggest from './AutoSuggestion'

export default class App extends React.Component{
render()
{
  return(
  <View>
  <AutoSuggest/>
  </View>
  );
}
}