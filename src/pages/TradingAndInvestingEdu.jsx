import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import Header from '../Components/Header';



const TradingandInvestingEdu = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            {/* <View className='px-5'>
                <View className=' mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>
            </View> */}

            <Header/>


            <ScrollView className='px-5 mt-1 mb-12'>
                <Text className='text-black font-semibold text-[15px] my-2'>Chapter 16: Alternative Investments</Text>
                <Text >Alternative investments encompass a diverse range of investment strategies and asset classes beyond traditional stocks, bonds, and cash. In this chapter, we explore four key categories of alternative investments: private equity, venture capital, hedge funds due diligence, and infrastructure and renewable energy investing. Drawing insights from seasoned alternative investment professionals and industry experts, we'll delve into the intricacies of each category and discuss their applications in building diversified investment portfolios.</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>Private Equity:</Text>
                <Text>Private equity involves investing in privately-held companies or taking ownership stakes in non-publicly traded businesses.
                Private equity firms raise capital from institutional investors and high-net-worth individuals to acquire, restructure, and grow businesses with the aim of generating superior returns over the long term. As one private equity investor remarked, "Private equity offers the opportunity to unlock value and drive growth in companies through active management and operational improvements" (Buffett). Let's explore private equity:</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>How-to:</Text>
                <Text>Deal Sourcing: Source investment opportunities through proprietary deal networks, investment banks, business brokers, and industry contacts to identify attractive acquisition targets and investment opportunities.
                Due Diligence: Conduct comprehensive due diligence on target companies, including financial analysis, market research, management assessment, and legal and regulatory reviews, to assess investment viability and mitigate risks.</Text>
            </ScrollView>
            <MenuBar />
        </SafeAreaView>

    );
};

export default TradingandInvestingEdu;
