import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';


const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Communities2 = () => {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <View>
                    <Text className='font-semibold text-4xl  text-black'>Communities</Text>
                </View>
                <View className='flex-row mt-3 px-2 justify-between bg-black/10 rounded-lg items-center mb-2'>
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
                    <View className='w-[20%] items-end '>
                        <Image className='w-4 h-4' source={require("../assets/microphone.png")} />
                    </View>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View className='mt-5'>
                        <View className='flex-row items-center gap-x-3'>
                            <Image className='w-[40px] h-[40px] rounded-full' source={require("../assets/download.jpeg")} />
                            <Text className="text-[16px] font-bold text-black">David Walker</Text>
                        </View>
                        <View className='mt-2'>
                            <Text className='text-sm font-normal text-black'>Loving this app, the way Rich guides everything, I
                                simply enjoy it </Text>
                        </View>


                        <View className='mt-2 ml-1 flex-row items-center justify-between py-3'>


                            <View>
                                <Text className="text-[14px] font-normal text-[#A4A4A4]">8m ago</Text>

                            </View>

                            <View className='flex-row items-center gap-x-4'>
                                <View className='w-[33px] h-[33px]'>
                                    <Image className='w-[28px] h-[28px]' source={require("../assets/thumb-up.png")} />
                                </View>
                                <TouchableOpacity delayPressIn={1} onPress={()=>(navigation.navigate("ChatRoom2"))} className='w-[33px] h-[33px]'>
                                    <Image className='w-[26px] h-[26px]' source={require("../assets/call.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity delayPressIn={1} onPress={()=>(navigation.navigate("ChatRoom2"))} className='w-[33px] h-[33px]'>
                                    <Image className='w-[28px] h-[28px]' source={require("../assets/chat2.png")} />
                                </TouchableOpacity>
                            </View>



                        </View>

                        <View className='w-full mt-3'>
                            <Image className=' h-[180px] object-contain w-full rounded-lg' source={require("../assets/sample-user.jpg")} />
                        </View>

                    </View>

                    <View className='mt-5'>
                        <View className='flex-row items-center gap-x-3'>
                            <Image className='w-[40px] h-[40px] rounded-full' source={require("../assets/download.jpeg")} />
                            <Text className="text-[16px] font-bold text-black">David Walker</Text>
                        </View>
                        <View className='mt-2'>
                            <Text className='text-sm font-normal text-black'>Loving this app, the way Rich guides everything, I
                                simply enjoy it </Text>
                        </View>


                        <View className='mt-2 ml-1 flex-row items-center justify-between py-3'>


                            <View>
                                <Text className="text-[14px] font-normal text-[#A4A4A4]">8m ago</Text>

                            </View>

                            <View className='flex-row items-center gap-x-4'>
                                <View className='w-[33px] h-[33px]'>
                                    <Image className='w-[28px] h-[28px]' source={require("../assets/thumb-up.png")} />
                                </View>
                                <TouchableOpacity delayPressIn={1} onPress={()=>(navigation.navigate("ChatRoom2"))} className='w-[33px] h-[33px]'>
                                    <Image className='w-[26px] h-[26px]' source={require("../assets/call.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity delayPressIn={1} onPress={()=>(navigation.navigate("ChatRoom2"))} className='w-[33px] h-[33px]'>
                                    <Image className='w-[28px] h-[28px]' source={require("../assets/chat2.png")} />
                                </TouchableOpacity>
                            </View>



                        </View>

                        <View className='w-full mt-3'>
                            <Image className=' h-[180px] object-contain w-full rounded-lg' source={require("../assets/sample-user.jpg")} />
                        </View>

                    </View>


                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Communities2;
