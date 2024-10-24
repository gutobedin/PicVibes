import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Icon} from './src/components/Icon/Icon';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text italic preset="headingLarge">
          PicVibes
        </Text>
        <Box flexDirection="row" gap="s16">
          <Icon name="eyeOff" color="carrotSecondary" size={40} />
          <Icon name="eyeOn" color="error" size={40} />
          <Icon name="chevronRight" size={40} />
          <Icon name="bellOn" size={40} />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
