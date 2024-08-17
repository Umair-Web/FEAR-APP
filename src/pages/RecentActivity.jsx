import React,{useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Slider from '@react-native-community/slider';
const RecentActivity = () => {
   
 
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

               </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default RecentActivity;
