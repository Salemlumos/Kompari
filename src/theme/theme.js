import { MD3LightTheme as DefaultTheme} from "react-native-paper";


const primary ='#17a3bf'
  const primaryCont ='#094e5c'
const secondary ='#0a0773'
  const secondaryCont ='#3743cc'
const tertiary ='red'
  const tertiaryCont ='#4377ab'

export const theme = {
    ...DefaultTheme,
    fonts: {
      ...DefaultTheme.fonts,
      // NOTE : If u remove the medium font from here the date/time pickers will not work
      medium: 'Ubuntu Bold',
    },
    roundness: 2,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: primary,
        primaryContainer:primaryCont,
      secondary: secondary,
        secondaryContainer:secondaryCont,
      tertiary: tertiary,
        tertiaryContainer:tertiaryCont,
      background:DefaultTheme.colors.elevation.level1,
      surface:DefaultTheme.colors.elevation.level1,
      // onSurface:'red',
      onBackground:'blue',
      // onSurfaceVariant:'blue',
      // inversePrimary:'red',
      // inverseSurface: 'green',
      // inverseOnSurface:'yellow',
      // onPrimary: 'red'
      
      
    },
  };