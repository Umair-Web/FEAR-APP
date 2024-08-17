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
import SecurityQuestion from './src/pages/SecurityQuestion';
import Login5 from './src/pages/Login5';
import Dashboard from './src/pages/Dashboard';
import Settings from './src/pages/Settings';
import Help from './src/pages/Help';
import Notifications from './src/pages/Notifications';
import Book1 from './src/pages/Book1';
import Book2 from './src/pages/Book2'
import Book3 from './src/pages/Book3'
import Hub from './src/pages/Hub';
import TradingandInvesting from './src/pages/TradingandInvesting';
import TradingandInvestingEdu from './src/pages/TradingAndInvestingEdu';
import TradingandInvestingEdu2 from './src/pages/TradingandInvestingEdu2';
import TradingandInvestingEdu3 from './src/pages/TradingandInvestingEdu3';
import Discover from './src/pages/Dicover';
import Markets from './src/pages/Markets';
import Invest from './src/pages/Invest';
import Position from './src/pages/Position';
import Markets2 from './src/pages/Markets2';
import DailyMarketUpdates from './src/pages/DailyMarketUpdates';
const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='DailyMarketUpdates' screenOptions={{
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
        <Stack.Screen name="Login5" component={Login5} />
        <Stack.Screen name="SecurityQuestion" component={SecurityQuestion} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Book1" component={Book1} />
        <Stack.Screen name="Book2" component={Book2} />
        <Stack.Screen name="Book3" component={Book3} />
        <Stack.Screen name="Hub" component={Hub} />
        <Stack.Screen name="TradingandInvesting" component={TradingandInvesting} />
        <Stack.Screen name="TradingandInvestingEdu" component={TradingandInvestingEdu} />
        <Stack.Screen name="TradingandInvestingEdu2" component={TradingandInvestingEdu2} />
        <Stack.Screen name="TradingandInvestingEdu3" component={TradingandInvestingEdu3} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Markets" component={Markets} />
        <Stack.Screen name="Invest" component={Invest} />
        <Stack.Screen name="Position" component={Position} />
        <Stack.Screen name="Markets2" component={Markets2} />
        <Stack.Screen name="DailyMarketUpdates" component={DailyMarketUpdates} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App