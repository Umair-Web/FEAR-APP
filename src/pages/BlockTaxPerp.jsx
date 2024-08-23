import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const BlockTaxPrep = () => {
    const financialTools = [
        { id: 1, title: 'Retirement Calculator' },
        { id: 2, title: 'Retirement Goals' },
        { id: 3, title: 'Portfolio Management' },
        { id: 4, title: 'Diversification Analysis' },
        { id: 5, title: 'Liquidate Analysis' },
        { id: 6, title: 'David Walker' },
        { id: 7, title: 'Investments' },
        { id: 8, title: 'Retirement Income Planning' },
        { id: 9, title: 'Social Security Estimator' },
        { id: 10, title: 'Budget Planner' },
        { id: 11, title: 'Roth Calculator' },
        { id: 12, title: 'Tax Efficient Withdrawal Strategies' },
        { id: 13, title: 'Expense Tracking' },
        { id: 14, title: 'Account Type Management' },
    ];
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {financialTools.map((tool) => (
                        <View key={tool.id} className='bg-[#003655] my-1 h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                            <Text className='font-medium text-base text-white w-11/12'>{tool.title}</Text>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    ))}
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default BlockTaxPrep;
