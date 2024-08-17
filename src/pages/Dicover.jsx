import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';


const Discover = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            <View className=''>
                <View className='px-5 mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>

                <Text className='text-[17px] font-medium text-black px-8 mb-2 mt-2'>Trading</Text>
                <View className='flex-row items-center justify-center gap-x-2 py-2 border-t-[1px] border-b-[1px] border-black'>
                    <Text className='text-[17px] font-medium text-black '>What is Spot Trading in Stocks?</Text>
                    <Image className='h-10 w-10' source={require("../assets/Group237612.png")} />
                </View>

                <View className='px-8 mt-2 flex-row items-center gap-x-2 '>
                    <Text className='text-[17px] font-medium text-black mb-2 mt-2'>Hot Spot</Text>
                    <View className='bg-[#165BAA] rounded-xl w-[55px] h-[22px] px-2 items-center justify-center'>
                        <Text className='text-[10px] font-medium text-white '>Pro</Text>
                    </View>

                </View>

                <ScrollView className='px-8 mt-1 gap-x-3' horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View className='w-[169px] h-[88px] border-[1px] border-[#DCDCDC] rounded-xl flex-col items-start px-2 py-1'>
                        <View className="gap-y-3">
                            <Text className='text-[17px] font-medium text-black'>
                                Nasdaq
                            </Text>
                            <View>
                                <Text className='text-[17px] font-semibold text-[#165BAA]'>+4.05%</Text>
                                <Text className='text-[12px] font-normal text-black/40'>$63,393.51</Text>
                            </View>

                        </View>

                    </View>

                    <View className='w-[169px] h-[88px] border-[1px] border-[#DCDCDC] rounded-xl flex-col items-start px-2 py-1'>
                        <View className="gap-y-3">
                            <Text className='text-[17px] font-medium text-black'>
                                Nasdaq
                            </Text>
                            <View>
                                <Text className='text-[17px] font-semibold text-[#165BAA]'>+4.05%</Text>
                                <Text className='text-[12px] font-normal text-black/40'>$63,393.51</Text>
                            </View>

                        </View>

                    </View>

                    <View className='w-[169px] h-[88px] border-[1px] border-[#DCDCDC] rounded-xl flex-col items-start px-2 py-1'>
                        <View className="gap-y-3">
                            <Text className='text-[17px] font-medium text-black'>
                                Nasdaq
                            </Text>
                            <View>
                                <Text className='text-[17px] font-semibold text-[#165BAA]'>+4.05%</Text>
                                <Text className='text-[12px] font-normal text-black/40'>$63,393.51</Text>
                            </View>

                        </View>

                    </View>

                </ScrollView>

                <View className='px-8 mt-2 flex-row items-center gap-x-2 '>
                    <Text className='text-[17px] font-medium text-black mb-2 mt-2'>Top Gainers</Text>
                    <View className='bg-[#165BAA] rounded-xl w-[55px] h-[22px] px-2 items-center justify-center'>
                        <Text className='text-[10px] font-medium text-white '>Pro</Text>
                    </View>

                </View>

                <ScrollView className='px-8 mt-1 gap-x-3' horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View className='w-[169px] h-[88px] border-[1px] border-[#DCDCDC] rounded-xl flex-col items-start px-2 py-1'>
                        <View className="gap-y-3">
                            <Text className='text-[17px] font-medium text-black'>
                                NIKE
                            </Text>
                            <View>
                                <Text className='text-[17px] font-semibold text-[#165BAA]'>+29.35%</Text>
                                <Text className='text-[12px] font-normal text-black/40'>$63,393.51</Text>
                            </View>

                        </View>

                    </View>

                    <View className='w-[169px] h-[88px] border-[1px] border-[#DCDCDC] rounded-xl flex-col items-start px-2 py-1'>
                        <View className="gap-y-3">
                            <Text className='text-[17px] font-medium text-black'>
                                NIKE
                            </Text>
                            <View>
                                <Text className='text-[17px] font-semibold text-[#165BAA]'>+29.35%</Text>
                                <Text className='text-[12px] font-normal text-black/40'>$63,393.51</Text>
                            </View>

                        </View>

                    </View>

                    <View className='w-[169px] h-[88px] border-[1px] border-[#DCDCDC] rounded-xl flex-col items-start px-2 py-1'>
                        <View className="gap-y-3">
                            <Text className='text-[17px] font-medium text-black'>
                                NIKE
                            </Text>
                            <View>
                                <Text className='text-[17px] font-semibold text-[#165BAA]'>+29.35%</Text>
                                <Text className='text-[12px] font-normal text-black/40'>$63,393.51</Text>
                            </View>

                        </View>

                    </View>

                </ScrollView>


                <View className='px-8 mt-2 flex-row items-center  justify-between '>
                    <Text className='text-[17px] font-semibold text-black mb-2 mt-2'>RNDR/USD</Text>
                    <View className='flex-row items-center gap-x-1.5'>
                        <Text className='text-[12px] font-normal text-black/40 mb-2 mt-2'>ROI</Text>
                        <Text className='text-[17px] font-semibold text-[#165BAA]'>+29.35%</Text>
                        <Image className='w-[10px] h-[6px]' source={require("../assets/arrow-up.png")} />
                    </View>


                </View>
        
                <View className="px-8">
                    <View className='flex-row justify-between items-end p-3 border-[1px] border-[#DCDCDC] rounded-xl'>
                        <View className='flex-col items-start justify-between'>
                            <View className='flex-row items-center gap-x-1'>
                                <Text className='text-[12px] font-normal text-black/40'>Min Investment</Text>
                                <Text className='text-[12px] font-semi text-black'>
                                2,517.033 USD
                                </Text>
                            </View>
                            <View className='flex-row items-center gap-x-1'>
                                <Text className='text-[12px] font-normal text-black/40'>Runtime</Text>
                                <Text className='text-[12px] font-semi text-black'>
                                 390d 16h 41m  
                                </Text>
                            </View>
                            <View className='flex-row items-center gap-x-1'>
                                <Text className='text-[12px] font-normal text-black/40'>Copies</Text>
                                <Text className='text-[12px] font-semi text-black'>
                                11 
                                </Text>
                            </View>

                        </View>

                        <View>
                            <TouchableOpacity className='bg-[#165BAA] rounded-xl w-[70px] h-[22px] px-3 items-center justify-center'>
                            <Text className='text-[10px] font-medium text-white '>Create</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                </View>

                <View className='px-8 mt-2 flex-row items-center  justify-between '>
                    <Text className='text-[17px] font-semibold text-black mb-2 mt-2'>RNDR/USD</Text>
                    <View className='flex-row items-center gap-x-1.5'>
                        <Text className='text-[12px] font-normal text-black/40 mb-2 mt-2'>ROI</Text>
                        <Text className='text-[17px] font-semibold text-[#165BAA]'>+29.35%</Text>
                        <Image className='w-[10px] h-[6px]' source={require("../assets/arrow-down.png")} />
                    </View>


                </View>

                <View className='px-8 mt-2 flex-row items-center  justify-between '>
                    <Text className='text-[17px] font-semibold text-black mb-2 mt-2'>RNDR/USD</Text>
                    <View className='flex-row items-center gap-x-1.5'>
                        <Text className='text-[12px] font-normal text-black/40 mb-2 mt-2'>ROI</Text>
                        <Text className='text-[17px] font-semibold text-[#165BAA]'>+29.35%</Text>
                        <Image className='w-[10px] h-[6px]' source={require("../assets/arrow-down.png")} />
                    </View>


                </View>


            </View>




            <MenuBar />
        </SafeAreaView>

    );
};

export default Discover;
