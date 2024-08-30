import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const MoneyManagementFull = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
         <Header/>
            <View className='px-5' style={{height:screenHeight*0.8}} >
                <ScrollView  showsVerticalScrollIndicator={false}>
                <View className='mt-2 mb-2 flex-row justify-between items-start'>
                    <View>
                        <Text className="text-sm font-semibold text-black w-[65%]">Goals of Effective Money Management</Text>
                        <Text className="text-[12px] ml-1 font-normal text-[#A6A6A6]">3 hours ago</Text>
                    </View>
                    <Text className="text-[10px] mt-2 font-normal text-[#3f3f3f]">6 min read</Text>

                </View>

                <View>
                    <Image className='w-full  h-44 mt-1 rounded-2xl mb-2' source={require("../assets/main5.png")} />
                </View>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Understanding the basics of money management is crucial for financial stability

                </Text>
                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Definition and Importance of Money Management:</Text>
                <Text className='text-[15px] font-medium text-[#374151]/80 px-1 leading-6'>Money management refers to the process of budgeting, saving, investing, spending, and overseeing the use of an individual's or group's capital. Effective money management ensures that financial resources are used wisely and efficiently to achieve personal or ersarizatienal financial goals. It's fundamental because it helps in maintaining financial stability, preparing for emergencies, achieving long-term financial objectives, and avoiding excessive debt.</Text>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default MoneyManagementFull;
