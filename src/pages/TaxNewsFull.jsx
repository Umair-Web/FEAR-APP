import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';


const TaxNewsFull = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            {/* <View className=' mt-3 px-5 flex-row items-center justify-between border-b-2 border-gray-100 pb-3'>
                <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
            </View> */}
            <Header/>
            <ScrollView className='mb-12 px-5'>

                <View className='mt-2 mb-2 flex-row justify-between items-start'>
                    <View>
                        <Text className="text-base font-semibold text-black"> Why Do We Pay Taxes?</Text>
                        <Text className="text-[12px] ml-1 font-normal text-[#A6A6A6]">3 hours ago</Text>
                    </View>
                    <Text className="text-[10px] mt-2 font-normal text-[#3f3f3f]">6 min read  </Text>

                </View>

                <View>
                    <Image className='w-full  h-44 mt-1 rounded-2xl mb-2' source={require("../assets/main4.png")} />
                </View>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Taxes are essential for funding government activities and public services, such as:



                </Text>
                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Social Services: </Text>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Assisting low-income families, the elderly, and disabled individuals.</Text>

                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Infrastructure:</Text>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Building and maintaining roads, bridges, and public transportation.</Text>


                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Healthcare:</Text>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Providing medical services and facilities.</Text>


                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Defense:</Text>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Supporting the military and national security.</Text>


                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Social Services: </Text>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Assisting low-income families, the elderly, and disabled individuals.</Text>

                <Text className='text-[15px] font-medium text-[#374151] px-1 mt-2'>Tax is a mandatory financial charge imposed by a government on individuals and businesses to fund various public expenditures. Taxes are essential for a country's development, as they support infrastructure, education, healthcare, and other public services.</Text>
            </ScrollView>


            <BgImage/>
            <MenuBar />
        </SafeAreaView>

    );
};

export default TaxNewsFull;
