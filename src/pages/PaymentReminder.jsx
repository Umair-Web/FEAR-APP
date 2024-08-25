import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const PaymentReminder = () => {
    const [selected, setSelected] = useState('ALL');

    const handleSelect = (value) => {
        setSelected(value);
    };


    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='bg-[#2A2073] flex-row py-7 rounded-2xl'>
                        <View className='flex-col items-center border-r border-gray-400 w-[33%] '>
                            <Text className='font-medium text-base text-white'>UPCOMING</Text>
                            <Text className='font-bold text-3xl text-white'>7</Text>
                        </View>

                        <View className='flex-col items-center border-r border-gray-400  w-[33%]'>
                            <Text className='font-medium text-base text-white'>PAID</Text>
                            <Text className='font-bold text-3xl text-white'>18</Text>
                        </View>

                        <View className='flex-col items-center w-[33%]'>
                            <Text className='font-medium text-base text-white'>OVERDUE</Text>
                            <Text className='font-bold text-3xl text-white'>2</Text>
                        </View>

                    </View>

                    <View className='items-center'>
                        <View className="mt-2 flex-row items-center w-full   bg-[#F2F2F2] p-1 rounded-lg justify-between">
                            <TouchableOpacity
                                onPress={() => handleSelect('ALL')}
                                className={`p-2 rounded-lg  ${selected === 'ALL' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                    }`}
                            >
                                <Text className={`text-sm font-medium text-center  ${selected === 'ALL' ? "text-blue-500" : "text-black"}`} >ALL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSelect('Upcomming')}
                                className={` p-2 rounded-lg   ${selected === 'Upcomming' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                    }`}
                            >
                                <Text className={`text-sm font-medium text-center  ${selected === 'Upcomming' ? "text-blue-500" : "text-black"}`} >Upcomming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSelect('Overdue')}
                                className={`p-2 rounded-lg  ${selected === 'Overdue' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                    }`}
                            >
                                <Text className={`text-sm font-medium text-center  ${selected === 'Overdue' ? "text-blue-500" : "text-black"}`} >Overdue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSelect('Paid')}
                                className={`p-2 rounded-lg  ${selected === 'Paid' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                    }`}
                            >
                                <Text className={`text-sm font-medium text-center  ${selected === 'Paid' ? "text-blue-500" : "text-black"}`} >Paid</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View className='flex-row'>

                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default PaymentReminder;
