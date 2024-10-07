// import React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return (
//     <View>
//       {/* Wrap all text inside <Text> components */}
//       <Text>This text is properly wrapped inside a Text component.fgjlskdjfglk;sdjfg</Text>
//     </View>
//   );
// };

// export default App;



// App.tsx
// App.js
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenV1 from './src/components/homeScreenV1'; // Adjusted the path and casing
import HomeScreenV2 from './src/components/homeScreenV2'; // Adjusted the path and casing
import HomeScreenV3 from './src/components/homeScreenV3'; // Adjusted the path and casing
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreenV1">
        <Stack.Screen name="HomeScreenV1" component={HomeScreenV1} />
        <Stack.Screen name="HomeScreenV2" component={HomeScreenV2} />
        <Stack.Screen name="HomeScreenV3" component={HomeScreenV3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
