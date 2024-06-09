import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenList from './ScreenList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}


function Navigation() {  
  return (
    <Stack.Navigator>
      {ScreenList.map((screen, index) => (
        <Stack.Screen key={index} name={screen.name} component={screen.component} options={{headerShown: false}} /> 
      ))}      
    </Stack.Navigator>
  );
}