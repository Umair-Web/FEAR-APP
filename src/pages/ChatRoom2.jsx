import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const ChatRoom2 = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5 mt-4'>
                <View className='flex-row justify-between'>
                    <View className='flex-col items-center gap-y-2 relative'>
                        <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                        <Text className='font-bold text-[#292941] text-xs'>My Story</Text>
                        <View className='absolute w-5 h-5 rounded-full bg-[#437eff] right-0 bottom-6 items-center'>
                            <Text className='text-white font-semibold'>+</Text>
                        </View>
                    </View>

                    <View className='flex-col items-center gap-y-2'>
                        <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                        <Text className='font-bold text-[#292941] text-xs'>Colleen</Text>
                    </View>

                    <View className='flex-col items-center gap-y-2'>
                        <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                        <Text className='font-bold text-[#292941] text-xs'>Soham</Text>
                    </View>

                    <View className='flex-col items-center gap-y-2'>
                        <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                        <Text className='font-bold text-[#292941] text-xs'>Darrell</Text>
                    </View>


                </View>
            </View>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='flex-row justify-between items-center mt-3'>
                        <Text className='text-[#292941] font-black text-[30px]'>Chats</Text>
                        <Text className='text-[#8A8CA9] font-bold text-[15px]'>Manage</Text>
                    </View>
                    <View className='flex-col gap-y-6 px-2 mt-1'>
                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>

                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>


                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>


                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>


                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>

                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>

                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>
                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

                            </View>
                        </View>
                        <View className='flex-row justify-between items-center'>
                            <View className='flex-row items-center gap-x-2'>
                                <Image className='w-[50px] h-[50px] rounded-full' source={require("../assets/download.jpeg")} />
                                <View className='flex-col items-start'>
                                    <Text className='text-[#292941] font-bold text-[15px]'>Manage</Text>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs'>Awesome</Text>

                                </View>
                            </View>
                            <View className='flex-col items-end'>
                                <View className='w-4 h-4 rounded-full bg-[#7ed3b2] items-center justify-center'>
                                    <Text className='font-bold text-white text-[10px]'>2</Text>
                                </View>
                                <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>Today, 12:25</Text>

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

export default ChatRoom2;
