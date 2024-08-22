import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const AiAssistant = () => {
    const [search, setSearch] = useState("");

    const chatData = [
        {
            sender: 'ai',
            message: 'Hello, How can I help?',
            time: 'Sent 10:00 AM'
        },
        {
            sender: 'user',
            message: 'Can you show me my latest transactions?',
            time: 'Read 10:01 AM'
        },
        {
            sender: 'ai',
            message: 'Sure, give me a moment.',
            time: 'Sent 10:02 AM'
        },
        {
            sender: 'ai',
            message: 'Here are your latest transactions:',
            time: 'Sent 10:03 AM'
        },
        {
            sender: 'user',
            message: 'Thanks, I need to check the balance as well.',
            time: 'Read 10:04 AM'
        },
        {
            sender: 'ai',
            message: 'Your current balance is $1,250. Would you like to do anything else?',
            time: 'Sent 10:05 AM'
        },
        {
            sender: 'user',
            message: 'Can you help me set up a savings goal?',
            time: 'Read 10:06 AM'
        },
        {
            sender: 'ai',
            message: 'Of course! What is your savings goal?',
            time: 'Sent 10:07 AM'
        },
        {
            sender: 'user',
            message: 'I want to save $5,000 for a vacation.',
            time: 'Read 10:08 AM'
        },
        {
            sender: 'ai',
            message: 'Got it. When would you like to reach this goal?',
            time: 'Sent 10:09 AM'
        },
        {
            sender: 'user',
            message: 'In 12 months.',
            time: 'Read 10:10 AM'
        },
        {
            sender: 'ai',
            message: 'To reach your goal in 12 months, you should save approximately $417 per month. Would you like to set up automatic transfers?',
            time: 'Sent 10:11 AM'
        },
        {
            sender: 'user',
            message: 'Yes, please set it up.',
            time: 'Read 10:12 AM'
        },
        {
            sender: 'ai',
            message: 'Automatic transfers of $417 per month have been scheduled. Anything else you need?',
            time: 'Sent 10:13 AM'
        },
        {
            sender: 'user',
            message: 'No, that’s all for now. Thank you!',
            time: 'Read 10:14 AM'
        },
        {
            sender: 'ai',
            message: 'You’re welcome! Have a great day!',
            time: 'Sent 10:15 AM'
        }
    ];


    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between pb-3'>
                <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>

                <Text className="text-[18px] font-normal text-black mr-5">Ai Assistant</Text>
                <Image className='w-[12px] h-[12px]' source={require("../assets/close.png")} />
            </View>

            <Text className="text-[12px] text-center mt-2 font-normal text-black">Sat, Apr 2, 9:41 PM</Text>

            <View className='px-5 mt-4' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {chatData.map((chat, index) => (
                        <View key={index} className={`items-${chat.sender === 'ai' ? 'start' : 'end'} my-2`}>
                            <View className={`flex-col items-${chat.sender === 'ai' ? 'start' : 'end'}`}>
                                <View className={`${chat.sender === 'ai' ? 'bg-[#D9D9D9]' : 'bg-black'} rounded-2xl p-2 max-w-sm`}>
                                    <Text className={`font-normal text-base ${chat.sender === 'ai' ? 'text-black' : 'text-white'}`}>
                                        {chat.message}
                                    </Text>
                                </View>
                                <Text className='font-normal text-xs text-black ml-1'>{chat.time}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <BgImage />

            <View className='absolute bottom-2 w-full h-[50px] p-3'>
                <View className='bg-black rounded-2xl w-full h-[40px] flex-row items-center justify-between px-2'>
                    <TextInput
                        className=' h-11 text-base text-white font-normal'
                        placeholder="Message...."
                        placeholderTextColor="#fff"
                        autoCapitalize="none"
                        value={search}
                        onChangeText={setSearch}
                    />
                    <View className='flex-row items-center gap-x-3'>
                    <Image className='w-4 h-4' source={require("../assets/send.png")} />
                        <Image className='w-4 h-4' source={require("../assets/microphone-white.png")} />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default AiAssistant;
