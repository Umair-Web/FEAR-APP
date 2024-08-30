import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import Header from '../Components/Header';

import { useNavigation } from '@react-navigation/native';

const TradingandInvestingEdu2 = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView className='bg-white flex-1'>

            {/* <View className='px-5'>
                <View className=' mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>
            </View> */}
             
             <Header/>

            <View className='px-5 mt-1 h-fit border-b-[1px] border-[#DCDCDC] '>
                <View className='flex-col justify-between items-start p-3 border-[1px] border-[#DCDCDC] rounded-xl'>
                    <Text className='font-medium text-sm text-[#4285F4]'>Trading and investing education</Text>
                    <Text className='font-normal text-sm '>See the latest coverage trading and investing education</Text>
                </View>
                <View className='mt-3 ml-1 flex-row items-start justify-between mb-1'>


                    <View>
                        <Text className="text-base font-medium text-black">Hex’s brifing</Text>
                        <Text className="text-[14px] font-normal text-[#A6A6A6]">Top 5 stories at the moment</Text>
                    </View>

                    <View className='flex-col items-center gap-y-1'>
                        <View className='w-[40px] h-[38px] bg-[#FBBC04] rounded-full'></View>
                        <Text className="text-sm font-medium text-gray-400">+ 3°C</Text>

                    </View>

                </View>

            </View>
            <ScrollView className='mb-12'>
                <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("TradingandInvestingEdu3"))} className='w-full px-5  flex-row items-center justify-between'>
                    <Text className='text-[15px] font-normal text-black mt-2'>Top News</Text>
                    <Image className='w-5 h-5 mt-2' source={require("../assets/dots.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("TradingandInvestingEdu3"))} className='px-5'>
                    <Image className='w-full  h-44 mt-1 rounded-2xl' source={require("../assets/main2.png")} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("TradingandInvestingEdu3"))} className='px-5 border-b-[1px]  border-[#DCDCDC] pb-2 '>
                    <Text className="text-base font-semibold text-black"> Alternative Investments</Text>
                    <Text className="text-[12px] ml-1 font-normal text-[#A6A6A6]">3 hours ago</Text>
                </TouchableOpacity>

                <View className='flex-col items-start px-5 mt-2 border-b-[1px]  py-2   border-[#DCDCDC]'>
                    <View className='flex-row items-start gap-x-4'>
                        <View className='flex-row w-2/3 gap-x-1'>

                            <Text className='font-medium text-sm text-[#4285F4]'>1.</Text>
                            <View className='flex-col items-start'>
                                <Text className='font-medium text-[#374151] text-[14px] '>Private equity firms raise capital from institutional investors and high-net-worth individuals to acquire, restructure</Text>

                            </View>

                        </View>
                        <View >
                            <Image className='w-[90px] h-[70px] rounded-md' source={require("../assets/coursera-fb2.png")} />
                        </View>

                    </View>
                    <View className='flex-row w-full px-5 justify-between items-center mt-2'>
                        <Text className='font-black text-[10px] text-[#5F6368]'>6 min read </Text>
                        <Text className='font-normal text-[10px] text-[#5F6368]'>2 hours ago</Text>
                        <Image className='w-8 h-4' source={require("../assets/cnn.png")} />
                        <Image source={require("../assets/Group-489.png")} />
                    </View>
                </View>

                <View className='flex-col items-start px-5 mt-2 border-b-[1px]  py-2   border-[#DCDCDC]'>
                    <View className='flex-row items-start gap-x-4'>
                        <View className='flex-row w-2/3 gap-x-1'>

                            <Text className='font-medium text-sm text-[#4285F4]'>2.</Text>
                            <View className='flex-col items-start'>
                                <Text className='font-medium text-[#374151] text-[14px] '>Source investment opportunities through proprietary deal networks, investment banks, business brokers, and industry contacts to identify attractive </Text>

                            </View>

                        </View>
                        <View >
                            <Image className='w-[90px] h-[70px] rounded-md' source={require("../assets/coursera-fb2.png")} />
                        </View>

                    </View>
                    <View className='flex-row w-full px-5 justify-between items-center mt-2'>
                        <Text className='font-black text-[10px] text-[#5F6368]'>6 min read </Text>
                        <Text className='font-normal text-[10px] text-[#5F6368]'>2 hours ago</Text>
                        <Image className='w-8 h-4' source={require("../assets/cnn.png")} />
                        <Image source={require("../assets/Group-489.png")} />
                    </View>
                </View>



            </ScrollView>



            <MenuBar />
        </SafeAreaView>

    );
};

export default TradingandInvestingEdu2;
