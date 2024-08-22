import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const ExpenseTracking2 = () => {
    const profileCompletion = 78; // Profile completion percentage

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.82 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='bg-[#003655]/40 rounded-xl px-3 py-4'>
                        <Text className='font-bold text-[#003655] text-lg'>TAX FILLING</Text>
                        <View className='flex-row gap-x-6 mt-2'>
                            <View className='flex-col items-center gap-y-2'>
                                <Image className='w-[85px] h-[85px] rounded-full' source={require("../assets/download.jpeg")} />
                                <Text className='font-medium text-[#003655] text-[10px]'>Login as</Text>
                            </View>
                            <View className='flex-col items-start gap-y-2'>
                                <Text className='font-medium text-[#003655] text-[13px]'>xxxxxxxxx2914</Text>
                                <Text className='font-medium text-[#003655] text-[13px]'>+91 309291900</Text>
                                <Text className='font-medium text-[#003655] text-[13px]'>davidwalker@gmail.com</Text>
                            </View>
                        </View>

                        <View className='flex-col items-start gap-y-2 mt-4'>
                            <Text className='font-bold text-[#003655] text-[12px]'>Profile: {`${profileCompletion}%`} Completed.</Text>

                            {/* Progress Bar */}
                            <View className='w-full h-3 bg-gray-300 rounded-full mt-2'>
                                <View
                                    className='h-full bg-[#003655] rounded-full'
                                    style={{ width: `${profileCompletion}%` }}
                                />
                            </View>
                        </View>

                        <View className='flex-col items-start gap-y-4 mt-3'>
                            <View className='flex-row items-center gap-x-7'>
                                <Text className='font-medium text-[#343434]
                                text-[13px]  w-[30%]'>Contact details</Text>

                                <Text className='font-medium text-[#003655]
                                text-[13px] underline  w-[30%]'>Updated</Text>
                            </View>

                            <View className='flex-row items-center gap-x-7'>
                                <Text className='font-medium text-[#343434]
                                text-[13px]  w-[30%]'>Bank account</Text>

                                <Text className='font-medium text-[#003655]
                                text-[13px] underline  w-[30%]'>Updated</Text>
                            </View>


                            <View className='flex-row items-center gap-x-7'>
                                <Text className='font-medium text-[#343434]
                                text-[13px] w-[30%]'>your account is not secure</Text>

                                <Text className='font-medium text-[#003655]
                                text-[13px] underline  w-[30%]'>secure account</Text>
                            </View>


                        </View>
                    </View>
                    <View className='bg-[#003655]/40 rounded-xl p-3 mt-3'>
                        <View className='flex-row justify-around'>
                            <Text className='font-bold text-[#003655]
                                text-[13px]'>Total Outstanding demands</Text>
                            <Text className='font-normal text-[#003655]
                                text-[13px]'>NIL</Text>
                        </View>
                    </View>
                    <View className='bg-[#003655]/40 rounded-xl p-3 mt-3'>
                        <View className='flex-col items-start gap-y-2'>
                            <Text className='font-bold text-[#003655]
                                text-[13px]'>File your return for the year ended on 21 March 2001</Text>
                            <TouchableOpacity className='bg-[#003655] px-3 py-2 rounded-md'>
                                <Text className='font-extrabold text-sm text-white'>File now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-sm mt-2'>
                        <Text className='font-medium text-base text-white  w-11/12'>Tax deposit</Text>
                        <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />


                    </View>

                    <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-sm mt-2'>
                        <Text className='font-medium text-base text-white  w-11/12'>Recent file returns</Text>
                        <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />


                    </View>

                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default ExpenseTracking2;
