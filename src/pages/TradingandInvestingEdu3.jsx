import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';


const TradingandInvestingEdu3 = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            <View className=' mt-3 px-5 flex-row items-center justify-between border-b-2 border-gray-100 pb-3'>
                <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
            </View>
            <ScrollView className='mb-12 px-5'>

                <View className='mt-2 mb-2 flex-row justify-between items-start'>
                    <View>
                        <Text className="text-base font-semibold text-black"> Alternative Investments</Text>
                        <Text className="text-[12px] ml-1 font-normal text-[#A6A6A6]">3 hours ago</Text>
                    </View>
                    <Text className="text-[10px] mt-2 font-normal text-[#3f3f3f]">6 min read  </Text>

                </View>

                <View>
                    <Image className='w-full  h-44 mt-1 rounded-2xl mb-2' source={require("../assets/main2.png")} />
                </View>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Alternative investments encompass a diverse range of investment strategies and asset classes beyond traditional stocks, bonds, and cash. In this chapter, we explore four key categories of alternative investments: private equity, venture capital, hedge funds due diligence, and infrastructure and renewable energy investing. Drawing insights from seasoned alternative investment professionals and industry experts, we'll delve into the intricacies of each category and discuss their applications in building diversified investment portfolios.</Text>
                <Text className='text-black font-semibold text-[15px] my-2 px-1'>Private Equity:</Text>
                <Text className='text-[15px] font-medium text-[#374151] px-1'>Alternative investments encompass a diverse range of investment strategies and asset classes beyond traditional stocks, bonds, and cash. In this chapter, we explore four key categories of alternative investments: private equity, venture capital, hedge funds due diligence, and infrastructure and renewable energy investing. Drawing insights from seasoned alternative investment professionals and industry experts, we'll delve into the intricacies of each category and discuss their applications in building diversified investment portfolios.</Text>



            </ScrollView>



            <MenuBar />
        </SafeAreaView>

    );
};

export default TradingandInvestingEdu3;
