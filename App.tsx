import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Text italic preset="headingLarge">
            PicVibes
          </Text>
          <Button loading mb="s20" title="Primary" />
          <Button mb="s20" preset="outline" title="Outline" />
          <Button mb="s20" disabled title="Outline" />
          <Button mb="s20" loading title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
