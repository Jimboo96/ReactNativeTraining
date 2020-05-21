import React, { useState } from 'react';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer'; 

const getFonts = () => Font.loadAsync({
    'shadows-into-regular': require('./assets/fonts/ShadowsIntoLight-Regular.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}