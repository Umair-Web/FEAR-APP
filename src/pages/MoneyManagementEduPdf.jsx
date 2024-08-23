import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const MoneyManagementEduPdf = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
         <Header/>
            <View className='px-5' style={{height:screenHeight*0.8}} >
                <ScrollView  showsVerticalScrollIndicator={false}>
                <Text className='text-black font-semibold text-[15px] my-2'>1. Introduction to Money Management</Text>
                <Text >Understanding the basics of money management is crucial for financial stability</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>Definition and Importance of Money Management:</Text>
                <Text className='my-1'>Money management refers to the process of budgeting, saving, investing, spending, and overseeing the use of an individual's or group's capital. Effective money management ensures that financial resources are used wisely and efficiently to achieve personal or ersarizatienal financial goals. It's fundamental because it helps in maintaining financial stability, preparing for emergencies, achieving long-term financial objectives, and avoiding excessive debt.</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>Goals of Effective Money Management:</Text>
                <Text className='my-1'>The primary goals of money management include:</Text>
         

            
                <Text className='my-1'> <Text className='underline'>Financial Security </Text>Ensuring that there is enough money to cover essential living expenses and emergencies.</Text>

        
                <Text className='my-1'> <Text className='underline'>Debt Avoidance </Text>Managing finances to avoid unnecessary debt and high-interest payments.</Text>
               

                <Text className='my-1'> <Text className='underline'>Financial Security </Text>Ensuring that there is enough money to cover essential living expenses and emergencies.</Text>

                <Text className='my-1'> <Text className='underline'>Wealth Building</Text> Saving and investing to grow wealth over time.</Text>

                <Text className='my-1'> <Text className='underline'>Goal Achievement</Text> Using financial resources to meet short-term and long-term goals, such as buying a home, funding education, or retirement.</Text>

                <Text className='text-black font-semibold text-[15px] my-2'>The Role of Financial Literacy:</Text>
                <Text className='my-1'>Financial literacy is the ability to understand and use various financial skills, including personal financial management, budgeting, and investing. It plays a crucial role in effective money management.</Text>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default MoneyManagementEduPdf;
