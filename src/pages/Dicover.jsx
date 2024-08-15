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

                <Text className='text-[17px] font-medium text-black px-5 mb-2 mt-2'>Trading</Text>
                <View className='flex-row items-center justify-center px-5 gap-x-2 py-2 border-t-[1px] border-b-[1px] border-black'>
                    <Text className='text-[17px] font-medium text-black '>What is Spot Trading in Stocks?</Text>
                    <Image className='h-10 w-10' source={require("../assets/Group237612.png")}/>
                </View>
            </View>




            <MenuBar />
        </SafeAreaView>

    );
};

export default Discover;
