import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, processColor, TouchableOpacity, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';


const Markets2 = () => {
    const [selected, setSelected] = useState('1h');

    const handleSelect = (value) => {
        setSelected(value);
    };


    return (
        <SafeAreaView className='bg-white flex-1'>
            <View>
                {/* Header */}
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
                <Text className='text-[44px] font-medium text-black text-center mt-3'>$2,432.32</Text>
                <View className='items-center'>
                    <View className='items-center flex-row gap-x-1'>
                        <Text className='text-[12px] font-normal text-red-700'>-13.35% (24h)</Text>
                        <Image className='w-3 h-3' source={require("../assets/down.png")} />
                        <Image />
                    </View>
                </View>
                <View className='items-center px-8'>
                    <View className="mt-2 flex-row items-center  bg-[#F2F2F2] p-2 rounded-lg">
                        <TouchableOpacity
                            onPress={() => handleSelect('1h')}
                            className={`px-4 py-2 rounded-lg w-1/3 ${selected === '1h' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === '1h' ? "text-blue-500" : "text-black"}`} >1h</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelect('24h')}
                            className={`ml-2 px-4 py-2 rounded-lg w-1/3  ${selected === '24h' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === '24h' ? "text-blue-500" : "text-black"}`} >24h</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelect('1w')}
                            className={`ml-2 px-4 py-2 rounded-lg w-1/3  ${selected === '1w' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === '1w' ? "text-blue-500" : "text-black"}`} >1w</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View className='px-6'>
                 {/* here */}
                </View>

                <View className='px-5 mt-2'>
                    <View className='flex-row items-center justify-between py-3 border-t-[1px]  border-b-[1px] border-[#F2F2F2] '>
                        <Text className='font-medium text-[#83878C] text-[12px]'>Open</Text>
                        <View className='flex-row items-center gap-x-2'>
                        <Text className='font-medium text-[#27292C] text-[14px]'>35632.12</Text>
                        <Text className='font-medium text-[#83878C] text-[12px]'>High</Text>
                        </View>
                        <Text className='font-medium text-[#27292C] text-[14px]'>35621.90</Text>
                    </View>
                    

                    <View className='flex-row items-center justify-between py-3 border-t-[1px]  border-b-[1px] border-[#F2F2F2] '>
                        <Text className='font-medium text-[#83878C] text-[12px]'>Close</Text>
                        <View className='flex-row items-center gap-x-2'>
                        <Text className='font-medium text-[#27292C] text-[14px]'>33432.42</Text>
                        <Text className='font-medium text-[#83878C] text-[12px]'>Low</Text>
                        </View>
                        <Text className='font-medium text-[#27292C] text-[14px]'>33421.30</Text>
                    </View>
                    

                    <View className='flex-row items-center justify-between py-3 border-t-[1px]  border-b-[1px] border-[#F2F2F2] '>
                        <Text className='font-medium text-[#83878C] text-[12px]'>Daily Vol</Text>
                        <View className='flex-row items-center gap-x-2'>
                        <Text className='font-medium text-[#27292C] text-[14px]'>35632.12</Text>
                        <Text className='font-medium text-[#83878C] text-[12px]'>Market Cap</Text>
                        </View>
                        <Text className='font-medium text-[#27292C] text-[14px]'>1.324M</Text>
                    </View>
                    
                </View>
            </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default Markets2;
