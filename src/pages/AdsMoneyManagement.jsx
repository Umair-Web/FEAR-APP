import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

import { useNavigation } from '@react-navigation/native';


const AdsMoneyManagement = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5 mt-1 h-fit border-b-[1px] border-[#DCDCDC] '>
                <View className='flex-col justify-between items-start p-3 border-[1px] border-[#DCDCDC] rounded-xl'>
                    <Text className='font-medium text-sm text-[#4285F4]'>Money management news</Text>
                    <Text className='font-normal text-sm '>See the latest coverage of the of the Money management.</Text>
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
            <View className='' style={{ height: screenHeight * 0.6 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity  activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("MoneyManagementFull"))} className='w-full px-5  flex-row items-center justify-between'>
                        <Text className='text-[15px] font-normal text-black mt-2'>Top News</Text>
                        <Image className='w-5 h-5 mt-2' source={require("../assets/dots.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("MoneyManagementFull"))}  className='px-5'>
                        <Image className='w-full  h-44 mt-1 rounded-2xl' source={require("../assets/main5.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity  activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("MoneyManagementFull"))}  className='px-5 border-b-[1px]  border-[#DCDCDC] pb-2 '>
                        <Text className="text-base font-semibold text-black">Goals of Effective Money Management:</Text>
                        <Text className="text-[12px] ml-1 font-normal text-[#A6A6A6]">3 hours ago</Text>
                    </TouchableOpacity>

                    <View className='flex-col items-start px-5 mt-2 border-b-[1px]  py-2   border-[#DCDCDC]'>
                        <View className='flex-row items-start gap-x-4'>
                            <View className='flex-row w-2/3 gap-x-1'>

                                <Text className='font-medium text-sm text-[#4285F4]'>1.</Text>
                                <View className='flex-col items-start'>
                                    <Text className='font-medium text-[#374151] text-[14px] '>Money management refers to the process of budgeting, saving, investing, spending, and overseeing the use of an individual's </Text>

                                </View>

                            </View>
                            <View >
                                <Image className='w-[90px] h-[70px] rounded-md' source={require("../assets/atp1.png")} />
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
                                    <Text className='font-medium text-[#374151] text-[14px] '>Financial literacy is the ability to understand and use various financial skills, including personal financial management, budgeting, and investing.</Text>

                                </View>

                            </View>
                            <View >
                                <Image className='w-[90px] h-[70px] rounded-md' source={require("../assets/atp2.png")} />
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
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default AdsMoneyManagement;
