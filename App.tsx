/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, View} from 'react-native';
import Analytics from './segment';

const App = () => {
  const identify = () => {
    Analytics.identify('abc', {
      firstName: 'Martin',
      lastName: 'Wiingaard',
      demo: true,
    });
  };

  const track = () => {
    Analytics.track('Debug Event', {
      type: 'missing_details',
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Identify" onPress={identify} />
      <Button title="Track" onPress={track} />
    </View>
  );
};

export default App;
