import { StatusBar } from 'expo-status-bar';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './src/routes/routes';


const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <PaperProvider theme={theme}>
      <StatusBar auto />
      <NavigationContainer>
        <Stack.Navigator>
          {routes.map((route,idx)=>{
            return(
              <Stack.Screen key={idx} name={route.title} component={route.component} options={route.options} />
            )
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

