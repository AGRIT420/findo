import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    oxygen_regular: require('../../assets/fonts/Oxygen-Regular.ttf'),
    oxygen_light: require('../../assets/fonts/Oxygen-Light.ttf'),
    oxygen_bold: require('../../assets/fonts/Oxygen-Bold.ttf'),
  });