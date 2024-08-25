import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const ExpenseTrackingText = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-xl text-black'>Expense Tracking</Text>

                    <Text className='font-medium text-base my-1 text-black'>
                        Tracking your expenses is crucial for understanding your financial habits and achieving your financial goals. Here's how to effectively track and manage your
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        Expenses:
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        Importance of Expense Tracking
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        • Financial Awareness: Gain insights into where your money goes each month to make informed financial decisions.
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        • Budgeting: Create and maintain a realistic budget based on your spending patterns.
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        Categorizing Expenses
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        • Fixed vs. Variable Expenses: Differentiate between essential fixed expenses (e.g., rent, utilities) and discretionary variable expenses (eg., dining out, entertainment).
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        • Monthly vs. Irregular Expenses: Track both regular monthly expenses and occasional or irregular expenses (e.g., car maintenance, vacations).
                        Setting Financial Goals
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        • Goal Alignment: Align your expense tracking with financial goals such as saving for retirement, paying off debt, or building an emergency fund.
                    </Text>

                    <Text className='font-medium text-base my-1 text-black'>
                        • Tracking Progress: Monitor your progress towards achieving financial goals by reviewing
                        Benefits or expense pacis and adjusting spending as needed.
                    </Text>


                    <Text className='font-medium text-base my-1 text-black'>
                        • Financial Discipline: Develop financial discipline by maintaining regular expense tracking.
                    </Text>

                    <Text className='font-medium text-base my-1 text-black'>
                        • Expense Reduction: Find opportunities to reduce unnecessary expenses and increase savings.
                    </Text>









                </ScrollView>
                <View className=' items-center mt-2'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 10 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity className='w-[200px] h-[40px] flex-row justify-center items-center' >
                            <Text className='text-white text-[17px] font-normal'>Contact Rich</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default ExpenseTrackingText;
