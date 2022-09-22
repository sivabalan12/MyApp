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
import {StatusBar, View} from 'react-native';
import ProductPageScreen from './src/screens/ProductPageScreen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
//<AppFont fontType='H2_HEADLINE' title='STEP 1' />

import {AppFont} from './src/theme/fonts/fonts';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import Test from './src/screens/Test';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* <ProductPageScreen /> */}
      <ProductDetailScreen/>
    </SafeAreaProvider>
  );
};

export default App;
