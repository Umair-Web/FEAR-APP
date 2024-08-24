import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const RetirementGoals = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <Text className='text-center font-medium text-[20px] text-black'>Retirement Goals</Text>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 20s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Start saving and investing early</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Pay off high-interest debt</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 30s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Increase your retirement contributions</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Set up a solid savings plan</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Consider professional financial advice</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 40s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Maximize your retirement savings</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Pay off significant debts</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Ensure you have a diversified portfolio</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 50s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Aim to have multiple income streams</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Review and adjust your retirement plan</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Consider long-term care insurance</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 60s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Evaluate your retirement income needs</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Pay off high-interest debt</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Increase your retirement contributions</Text>

                        </View>
                    </View>



                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 70s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Ensure you have a sustainable withdrawal plan</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Consider part-time work if needed</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Focus on maintaining your health</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                    <Text className='font-semibold text-xs text-[#00325F] my-1'>Setting Goals and objectives</Text>
                    </View>





                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default RetirementGoals;
