import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';



const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const AudioRoom = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
                <TouchableOpacity onPress={() => (navigation.navigate("Communities1"))}
                    className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image className="h-[16px] w-[18px]" source={require("../assets/back2.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Notifications"))}><Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Help"))}><Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Settings"))}><Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} /></TouchableOpacity>
            </View>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View className='flex-row gap-x-2'>
                            <Text className='font-normal text-2xl text-[#003655]'>Hi</Text>
                            <Text className='font-bold text-2xl text-[#003655]'>David</Text>
                        </View>
                        <Text className='font-normal text-sm text-[#003655]'>What you want to do today</Text>
                    </View>

                    <View className='flex-row justify-between mt-3 w-full gap-x-1'>
                        <View className='rounded-3xl bg-[#165BAA] w-[32%]  items-center justify-center px-[3px] py-4'>
                            <View className='items-center gap-y-3'>
                                <Image className='h-7 w-7' source={require("../assets/user.png")} />
                                <Text className='font-semibold text-[8px] text-white'>Start a WealthWave Room</Text>
                            </View>
                        </View>
                        <View className='rounded-3xl bg-black  w-[32%] items-center justify-center px-[1px] py-4'>
                            <View className='items-center gap-y-3'>
                                <Image className='h-7 w-7' source={require("../assets/schedule.png")} />
                                <Text className='font-semibold text-[7px] text-white'>Schedule a WealthWave Room</Text>
                            </View>
                        </View>
                        <TouchableOpacity delayPressIn={1} onPress={() => (navigation.navigate("ChatRoom"))} className='rounded-3xl bg-[#165BAA] w-[32%]  items-center justify-center px-[3px] py-4'>
                            <View className='items-center gap-y-3'>
                                <Image className='h-7 w-7' source={require("../assets/team.png")} />
                                <Text className='font-semibold text-[8px] text-white'>Messenger</Text>
                            </View>
                        </TouchableOpacity>





                    </View>
                    <View className='mt-6'>
                        <View className='flex-row gap-x-2'>
                            <Text className='font-normal text-2xl text-black'>Join</Text>
                            <Text className='font-bold text-2xl text-black'>WealthWave</Text>
                        </View>
                        <View className='rounded-3xl bg-black/70 px-2 py-4 mt-3 relative'>
                            <View className='flex-row gap-x-3'>
                                <View className='flex-row mr-1  '>
                                    <Image className='w-[32px] h-[32px] rounded-full -mr-4   ' source={require("../assets/download.jpeg")} />
                                    <View className='w-[33px] h-[33px] rounded-full -mr-4 e -z-10 '>
                                        <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                                    </View>
                                    <View className='w-[33px] h-[33px] rounded-full -mr-1 -z-20 '>
                                        <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                                    </View>
                                </View>
                                <View>
                                    <Text className='font-semibold text-xl text-white'>WealthWave 1</Text>
                                </View>

                            </View>

                            <View className='flex-row mt-3 gap-x-2'>
                                <View className='w-[31%] bg-black rounded-2xl border border-white px-2 py-2'><Text className='font-semibold text-[13px] text-white'>16:00 - 17:30</Text></View>

                                <View className='rounded-2xl bg-[#165BAA] w-[42%]  px-2 py-2'>

                                    <View className='items-center flex-row gap-x-1'>
                                        <Image className='h-3 w-3' source={require("../assets/tag.png")} />
                                        <Text className='font-semibold text-[13px] text-white'>Review</Text>
                                    </View>
                                </View>

                                <View className='w-[20%] bg-black rounded-2xl border border-white px-2 py-2'>

                                    <View className='items-center flex-row gap-x-1'>
                                        <Image className='h-3 w-3' source={require("../assets/tag.png")} />
                                        <Text className='font-semibold text-[13px] text-white'>Imp</Text>
                                    </View>
                                </View>
                            </View>


                            <View className='flex-row gap-x-2 mt-9'>

                                <View className='rounded-2xl bg-[#165BAA] w-[40%] items-center justify-center py-2 '><Text className='font-semibold text-[13px] text-white'>Join WealthWave</Text>

                                </View>


                                <View className='rounded-2xl bg-black border border-white w-[25%] items-center justify-center py-2 '>
                                    <Text className='font-semibold text-[13px] text-white'>Remove</Text>
                                </View>

                            </View>

                            <View className='w-3 h-3 rounded-full bg-[#ff0000] absolute right-3 top-3'>

                            </View>






                        </View>

                        <View className='rounded-3xl bg-black/70 px-2 py-4 mt-3 relative'>
                            <View className='flex-row gap-x-3'>
                                <View className='flex-row mr-1  '>
                                    <Image className='w-[32px] h-[32px] rounded-full -mr-4   ' source={require("../assets/download.jpeg")} />
                                    <View className='w-[33px] h-[33px] rounded-full -mr-4 e -z-10 '>
                                        <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                                    </View>
                                    <View className='w-[33px] h-[33px] rounded-full -mr-1 -z-20 '>
                                        <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                                    </View>
                                </View>
                                <View>
                                    <Text className='font-semibold text-xl text-white'>WealthWave 2</Text>
                                </View>

                            </View>

                            <View className='flex-row mt-3 gap-x-2'>
                                <View className='w-[31%] bg-black rounded-2xl border border-white px-2 py-2'><Text className='font-semibold text-[13px] text-white'>16:00 - 17:30</Text></View>

                                <View className='rounded-2xl bg-[#165BAA] w-[42%]  px-2 py-2'>

                                    <View className='items-center flex-row gap-x-1'>
                                        <Image className='h-3 w-3' source={require("../assets/tag.png")} />
                                        <Text className='font-semibold text-[13px] text-white'>Review</Text>
                                    </View>
                                </View>

                                <View className='w-[20%] bg-black rounded-2xl border border-white px-2 py-2'>

                                    <View className='items-center flex-row gap-x-1'>
                                        <Image className='h-3 w-3' source={require("../assets/tag.png")} />
                                        <Text className='font-semibold text-[13px] text-white'>Imp</Text>
                                    </View>
                                </View>
                            </View>


                            <View className='flex-row gap-x-2 mt-9'>

                                <View className='rounded-2xl bg-[#165BAA] w-[40%] items-center justify-center py-2 '><Text className='font-semibold text-[13px] text-white'>Join WealthWave</Text>

                                </View>


                                <View className='rounded-2xl bg-black border border-white w-[25%] items-center justify-center py-2 '>
                                    <Text className='font-semibold text-[13px] text-white'>Remove</Text>
                                </View>

                            </View>

                            <View className='w-3 h-3 rounded-full bg-[#00ffa3] absolute right-3 top-3'>

                            </View>






                        </View>

                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default AudioRoom;
