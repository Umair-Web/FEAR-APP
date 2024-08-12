import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './src/pages/GetStarted';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Membership from './src/pages/Membership';
import Member from './src/pages/Member';
import Member2 from './src/pages/Member2';
import Member3 from './src/pages/Member3';
import Payment from './src/pages/Payment';
import Allpayments from './src/pages/Allpayments';
import Login4 from './src/pages/Login4';
const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login4' screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="Member" component={Member} />
        <Stack.Screen name="Member2" component={Member2} />
        <Stack.Screen name="Member3" component={Member3} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Allpayments" component={Allpayments} />
        <Stack.Screen name="Login4" component={Login4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App