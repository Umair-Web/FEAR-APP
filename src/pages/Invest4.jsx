import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { BarChart } from 'react-native-gifted-charts';
const { height: screenHeight } = Dimensions.get("window");
const { width: ScreenWidth } = Dimensions.get("window");

const Invest4 = () => {
    const barData = [
        {
            value: 450,
            label: 'Mon',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',

        },
        { value: 250, frontColor: '#00325F' },
        {
            value: 350,
            label: 'Tue',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',
        },
        { value: 150, frontColor: '#00325F' },
        {
            value: 300,
            label: 'Wed',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',
        },
        { value: 205, frontColor: '#00325F' },
        {
            value: 350,
            label: 'Thu',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',
        },
        { value: 200, frontColor: '#00325F' },
        {
            value: 400,
            label: 'Fri',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',
        },
        { value: 490, frontColor: '#00325F' },
        {
            value: 65,
            label: 'Sat',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',
        },
        { value: 30, frontColor: '#00325F' },
        {
            value: 65,
            label: 'Sun',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#718EBF', fontSize: 10, textAlign: "start" },
            frontColor: '#1814F3',
        },
        { value: 30, frontColor: '#00325F' },
    ];


    const paymentSchedule = [
        { quarter: 'Q1', amount: '1k', rate: '4.50%' },
        { quarter: 'Q2', amount: '20k', rate: '5.50%' },
        { quarter: 'Q3', amount: '4k', rate: '4.50%' },
        { quarter: 'Q1', amount: '6m', rate: '2.50%' },
        { quarter: 'Q2', amount: '1k', rate: '4.50%' }
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-[#003655] font-bold text-base'>liquidate Analysis</Text>
                    <View className='mt-4'  >

                        <View
                            style={{
                                marginTop: 10,
                                marginRight: 3,


                            }}>
                            <BarChart
                                data={barData}
                                barWidth={7}
                                spacing={20}
                                isAnimated={true}
                                roundedTop
                                labelsDistanceFromXaxis={4}
                                roundedBottom
                                xAxisThickness={1}
                                yAxisThickness={0}
                                yAxisTextStyle={{ color: '#718EBF', fontSize: 13 }}
                                noOfSections={5}
                                maxValue={500}
                                rulesColor={"#718EBF"}
                                width={ScreenWidth * 0.70}

                            />
                        </View>

                        <View className='flex-col items-start px-3 mt-2'>
                            <View className='flex-row items-center gap-x-3'>
                                <View className='w-3 h-3 rounded-full bg-[#1814F3]'></View>
                                <Text className='font-normal text-[#718EBF] text-xs'>Days to liquidate profile(waterfall)</Text>


                            </View>

                            <View className='flex-row items-center gap-x-3'>
                                <View className='w-3 h-3 rounded-full bg-[#00325F]'></View>
                                <Text className='font-normal text-[#718EBF] text-xs'>Days to liquidate profile(proportion)</Text>


                            </View>

                        </View>

                    </View>

                    <Text className='text-[#003655] font-bold text-base mt-2'>Tax implifications and optimizations</Text>
                    <Text className='font-semibold text-black text-2xl'>$62</Text>

                    <Text className='text-[#003655] font-light text-[15px]'>Q1 estimated </Text>

                    <Text className='text-[#003655] font-light text-[15px]'>Due by Apr 18</Text>

                    <View className='bg-[#004B90]/20 mt-4'>
                        <View className='flex-row justify-between p-2 border-b-2 border-black/20'>
                            <View>
                                <Text className='font-bold  text-sm text-black'>Schedule </Text>
                            </View>
                            <View className='flex-row items-center gap-x-7'>
                                <Text className='font-bold  text-sm text-black'>Payment </Text>
                                <Text className='font-bold  text-sm text-black'>Paid </Text>
                            </View>

                        </View>

                        <View >
                            {paymentSchedule.map((item, index) => (
                                <View
                                    key={index}
                                    className='flex-row justify-between p-2 border-b-2 border-white'
                                >
                                    <View>
                                        <Text className='font-medium text-base text-black'>
                                            {item.quarter}
                                        </Text>
                                    </View>
                                    <View className='flex-row items-center gap-x-10'>
                                        <Text className='font-medium text-base text-black'>
                                            {item.amount}
                                        </Text>
                                        <Text className='font-medium text-base text-[#3629B7]'>
                                            {item.rate}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>




                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Invest4;
