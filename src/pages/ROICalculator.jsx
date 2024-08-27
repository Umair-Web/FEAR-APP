import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const ROICalculator = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-bold text-lg text-black'>ROI Calculator</Text>
                    <View className='bg-[#D9D9D9] p-4'>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-normal text-[15px] text-black'>Personal expenses</Text>
                            <View className='w-[45%] bg-white h-[28px] border-2 border-[#165BAA] rounded-lg text-black shadow-black shadow-2xl '>
                                <TextInput
                                    className='text-[12px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"

                                />
                            </View>
                        </View>


                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-normal text-[15px] text-black'>Amount Returned</Text>
                            <View className='w-[45%] bg-white h-[28px] border-2 border-[#165BAA] rounded-lg text-black shadow-black shadow-2xl '>
                                <TextInput
                                    className='text-[12px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"

                                />
                            </View>
                        </View>

                        <Text className='font-normal mt-2 text-[15px] text-black'>Investment Time</Text>
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default ROICalculator;
