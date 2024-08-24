import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { PieChart } from "react-native-gifted-charts";
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const SpendingCategory = () => {
    const [search, setSearch] = useState("")

    const pieData = [
        { value: 15, color: '#1DDD8D', text: '54%' },
        { value: 15, color: '#F765A3', text: '30%' },
        { value: 15, color: '#003655', text: '26%' },
        { value: 15, color: '#2CDC00', text: '54%' },
        { value: 15, color: '#A155B9', text: '30%' },
        { value: 15, color: '#16BFD6', text: '26%' },
    ];

    const data = [
        { id: '01.', category: 'Home', amount: '$520', change: '+5%' },
        { id: '02.', category: 'Food', amount: '$480', change: '+10%' },
        { id: '03.', category: 'Travel', amount: '$350', change: '-3%' },
        { id: '04.', category: 'Health', amount: '$940', change: '+2%' },
        { id: '05.', category: 'Shopping', amount: '$670', change: '-12%' },
    ];
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.85 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-[#003655] font-bold text-lg mt-2'>Account Type Management Spending by category</Text>
                    <Text className='text-black font-normal text-[13px] mt-1'>From August 2001 to April 2002</Text>
                    <View className='flex-row mt-3 px-2 justify-between bg-[#004B90]/10 rounded-3xl items-center mb-2'>
                        <View className='w-[80%] '>
                            <View className='flex-row items-center px-2 gap-x-2 '>
                                <Image className='w-4 h-4' source={require("../assets/search.png")} />
                                <TextInput
                                    className=' h-11 text-base text-black font-normal'
                                    placeholder="Search"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                    value={search}
                                    onChangeText={setSearch}
                                />
                            </View>
                        </View>


                    </View>

                    <View className='mt-4 flex-row  gap-x-6 items-center'>
                        <View className='items-start'>
                            <PieChart
                                showText
                                textColor="black"
                                radius={screenWidth * 0.25}
                                textSize={10}
                                showTextBackground
                                textBackgroundRadius={14}
                                data={pieData}
                            />
                        </View>
                        <View className='flex-col gap-y-3 items-start'>
                            <View className='flex-row gap-x-1 items-center'>
                                <View className='w-4 h-3 bg-[#1DDD8D]'>

                                </View>
                                <Text className='font-normal text-xs text-[#003655]'>HOME</Text>
                            </View>


                            <View className='flex-row gap-x-1 items-center'>
                                <View className='w-4 h-3 bg-[#F765A3]'>

                                </View>
                                <Text className='font-normal text-xs text-[#003655]'>FOOD</Text>
                            </View>


                            <View className='flex-row gap-x-1 items-center'>
                                <View className='w-4 h-3 bg-[#003655]'>

                                </View>
                                <Text className='font-normal text-xs text-[#003655]'>TRAVEL</Text>
                            </View>


                            <View className='flex-row gap-x-1 items-center'>
                                <View className='w-4 h-3 bg-[#2CDC00]'>

                                </View>
                                <Text className='font-normal text-xs text-[#003655]'>HEALTH</Text>
                            </View>


                            <View className='flex-row gap-x-1 items-center'>
                                <View className='w-4 h-3 bg-[#A155B9]'>

                                </View>
                                <Text className='font-normal text-xs text-[#003655]'>CHARGES</Text>
                            </View>


                            <View className='flex-row gap-x-1 items-center'>
                                <View className='w-4 h-3 bg-[#16BFD6]'>

                                </View>
                                <Text className='font-normal text-xs text-[#003655]'>SHOPPING</Text>
                            </View>
                        </View>

                    </View>

                    <Text className='text-[#003655] font-bold text-lg mt-2'>Your Spending</Text>

                    <View className='bg-[#003655] rounded-2xl px-4 mt-2'>
                        <View className={` flex-row justify-between border-b border-white py-2`}>
                            <Text className='font-medium text-xs text-white'>SL No.</Text>

                            <Text className='font-medium text-xs text-white'>Name</Text>

                            <Text className='font-medium text-xs text-white'>Spending</Text>

                            <Text className='font-medium text-xs text-white'>Return</Text>
                        </View>

                        <View>
                            {data.map((item) => (
                                <View key={item.id} className="flex-row justify-between py-2">
                                    <Text className="font-normal text-xs text-white">{item.id}</Text>
                                    <Text className="font-normal text-xs text-white">{item.category}</Text>
                                    <Text className="font-normal text-xs text-white">{item.amount}</Text>
                                    <Text
                                        className={`font-normal text-xs ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                                            }`}
                                    >
                                        {item.change}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default SpendingCategory;
