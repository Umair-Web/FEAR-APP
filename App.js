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
import RecentActivity from './src/pages/RecentActivity';
import CreditPortal from './src/pages/CreditPortal';
import CreditEducation from './src/pages/CreditEducation';
import CreditEducationPdf from './src/pages/CreditEducationPdf';
import AdsCredit from './src/pages/AdsCredit';
import CreditNewsFull from './src/pages/CreditNewsFull';
import ConsumerCredit from './src/pages/ConsumerCredit';
import MoneyManagement1 from './src/pages/MoneyManagement1';
import MoneyManagement2 from './src/pages/MoneyManagement2';
import MoneyManagement3 from './src/pages/MoneyManagement3';
import Taxportal from './src/pages/Taxportal';
import TaxEducation from './src/pages/TaxEducation';
import TaxEducationPdf from './src/pages/TaxEducationPdf';
import AdsTaxPortal from './src/pages/AdsTaxPortal';
import TaxNewsFull from './src/pages/TaxNewsFull';
import MaintainTaxCodes from './src/pages/MaintainTaxCodes';
import TaxAudit from './src/pages/TaxAudit';
import ExpenseTracking from './src/pages/ExpenseTracking';
import FicoScoring from './src/pages/FicoScoring';
import ExpenseTracking2 from './src/pages/ExpenseTracking2';
import Tax1 from './src/pages/Tax1';
import Tax2 from './src/pages/Tax2';
import Communities1 from './src/pages/Communities1';
import Communities2 from './src/pages/Communities2';
import ChatRoom from './src/pages/ChatRoom';
import AudioRoom from './src/pages/AudioRoom';
import ChatRoom2 from './src/pages/ChatRoom2';
import AiAssistant from './src/pages/AiAssistant';
import Money from './src/pages/Money';
import Budget from './src/pages/Budget';
import MoneyManagementEducation1 from './src/pages/MoneyManagementEducation1';
import MoneyManagementEduPdf from './src/pages/MoneyManagementEduPdf';
import AdsMoneyManagement from './src/pages/AdsMoneyManagement';
import MoneyManagementFull from './src/pages/MoneyManagementFull';
import FinancialFreedom from './src/pages/FinancialFreedom';
import FinancialFreedomEdu from './src/pages/FinancialFreedomEdu';
import BlockTaxPrep from './src/pages/BlockTaxPerp';
import Retirement from './src/pages/Retirement';
import Retirement2 from './src/pages/Retirement2';
import ExperimentScreen from './src/pages/ExperimentScreen';
import RetirementGoals from './src/pages/RetirementGoals';
const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='RetirementGoals' screenOptions={{
      headerShown: false,animation:"fade_from_bottom",animationDuration:600
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
        <Stack.Screen name="RecentActivity" component={RecentActivity} />
        <Stack.Screen name="CreditPortal" component={CreditPortal} />
        <Stack.Screen name="CreditEducation" component={CreditEducation} />
        <Stack.Screen name="CreditEducationPdf" component={CreditEducationPdf} />
        <Stack.Screen name="AdsCredit" component={AdsCredit} />
        <Stack.Screen name="CreditNewsFull" component={CreditNewsFull} />
        <Stack.Screen name="ConsumerCredit" component={ConsumerCredit} />
        <Stack.Screen name="MoneyManagement1" component={MoneyManagement1} />
        <Stack.Screen name="MoneyManagement2" component={MoneyManagement2} />
        <Stack.Screen name="MoneyManagement3" component={MoneyManagement3} />
        <Stack.Screen name="Taxportal" component={Taxportal} />
        <Stack.Screen name="TaxEducation" component={TaxEducation} />
        <Stack.Screen name="TaxEducationPdf" component={TaxEducationPdf} />
        <Stack.Screen name="AdsTaxPortal" component={AdsTaxPortal} />
        <Stack.Screen name="TaxNewsFull" component={TaxNewsFull} />
        <Stack.Screen name="MaintainTaxCodes" component={MaintainTaxCodes} />
        <Stack.Screen name="TaxAudit" component={TaxAudit} />
        <Stack.Screen name="ExpenseTracking" component={ExpenseTracking} />
        <Stack.Screen name="FicoScoring" component={FicoScoring} />
        <Stack.Screen name="ExpenseTracking2" component={ExpenseTracking2} />
        <Stack.Screen name="Tax1" component={Tax1} />
        <Stack.Screen name="Tax2" component={Tax2} />
        <Stack.Screen name="Communities1" component={Communities1} />
        <Stack.Screen name="Communities2" component={Communities2} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="AudioRoom" component={AudioRoom} />
        <Stack.Screen name="ChatRoom2" component={ChatRoom2} />
        <Stack.Screen name="AiAssistant" component={AiAssistant} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="Budget" component={Budget} />
        <Stack.Screen name="MoneyManagementEducation1" component={MoneyManagementEducation1} />
        <Stack.Screen name="MoneyManagementEduPdf" component={MoneyManagementEduPdf} />
        <Stack.Screen name="AdsMoneyManagement" component={AdsMoneyManagement} />
        <Stack.Screen name="MoneyManagementFull" component={MoneyManagementFull} />
        <Stack.Screen name="FinancialFreedom" component={FinancialFreedom} />
        <Stack.Screen name="FinancialFreedomEdu" component={FinancialFreedomEdu} />
        <Stack.Screen name="BlockTaxPrep" component={BlockTaxPrep} />
        <Stack.Screen name="Retirement" component={Retirement} />
        <Stack.Screen name="Retirement2" component={Retirement2} />
        <Stack.Screen name="RetirementGoals" component={RetirementGoals} />

        {/*  */}
        <Stack.Screen name="ExperimentScreen" component={ExperimentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App