import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

import { useNavigation } from '@react-navigation/native';


const { height: screenHeight } = Dimensions.get("window");

const TaxEducationLinks = () => {

    const navigation = useNavigation();


    const financialTools = [

        { id: 20, title: 'Property listing', Link: "RealState" },
        { id: 21, title: 'Home finance', Link: "" },
        { id: 22, title: 'Property index', Link: "MarketAnalysis" },
        { id: 23, title: 'Property market trends', Link: "PropertyPriceIndes" },
        { id: 24, title: 'ROi calculator', Link: "ROICalculator" },
        { id: 25, title: 'Compare mortgage rates', Link: "MortageRates" },
        { id: 26, title: 'Tax deduction guide', Link: "TaxDeductionGuide" },

    ];
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
                <TouchableOpacity onPress={() => (navigation.navigate("Dashboard"))}
                    className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image className="h-[16px] w-[18px]" source={require("../assets/back2.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Notifications"))}><Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Help"))}><Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Settings"))}><Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} /></TouchableOpacity>
            </View>
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {financialTools.map((tool) => (
                        <TouchableOpacity delayPressIn={1} onPress={() => (navigation.navigate(tool.Link))} key={tool.id} className='bg-[#003655] my-1 h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                            <Text className='font-medium text-base text-white w-11/12'>{tool.title}</Text>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default TaxEducationLinks;
