import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import { BarChart } from 'react-native-gifted-charts';
const { height: screenHeight } = Dimensions.get("window");
const { width: ScreenWidth } = Dimensions.get("window");

import { ProgressChart } from 'react-native-chart-kit';
import Header from '../Components/Header';

const { width } = Dimensions.get('window');

const TaxAudit = () => {
    const [selected, setSelected] = useState('Daily');

    const screenWidth = width

    const handleSelect = (value) => {
        setSelected(value);
    };

    const options = [
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Yearly', value: 'Yearly' },
    ];

    const barData = [
        {
            value: 10,
            label: 'Mon',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',

        },
        { value: 40, frontColor: '#1658a4' },
        {
            value: 50,
            label: 'Tue',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',
        },
        { value: 40, frontColor: '#1658a4' },
        {
            value: 75,
            label: 'Wed',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',
        },
        { value: 25, frontColor: '#1658a4' },
        {
            value: 30,
            label: 'Thu',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',
        },
        { value: 20, frontColor: '#1658a4' },
        {
            value: 60,
            label: 'Fri',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',
        },
        { value: 40, frontColor: '#1658a4' },
        {
            value: 65,
            label: 'Sat',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',
        },
        { value: 30, frontColor: '#1658a4' },
        {
            value: 65,
            label: 'Sun',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: '#0E3E3E', fontSize: 10, textAlign: "start" },
            frontColor: '#00d09e',
        },
        { value: 30, frontColor: '#1658a4' },
    ];

    const renderTitle = () => {

        return (
            <View style={{ marginVertical: 0 }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    Chart title goes here
                </Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 24,
                        backgroundColor: 'yellow',
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#177AD5',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                width: 60,
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Point 01
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#ED6665',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                width: 60,
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Point 02
                        </Text>
                    </View>
                </View>
            </View>
        )
    }


    const chartConfig1 = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 0.0,
        color: (opacity = 1) => `rgba(22, 91, 170, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.32,
        useShadowColorFromDataset: false // optional
    };

    const chartConfig2 = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(31, 220, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };



    return (
        <SafeAreaView className='bg-white flex-1'>

            {/* <View className='mt-3 px-5 flex-row items-center justify-between pb-3'>
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
            <View className='px-5' style={{ height: screenHeight * 0.80 }}>
                <ScrollView className='' showsVerticalScrollIndicator={false}>
                    <View className='flex-row justify-center'>
                        <View className='flex-col items-start border-r-2 border-gray-200 py-2 px-5'>
                            <View className='flex-row items-center gap-x-1'>
                                <Image className='w-5 h-5' source={require("../assets/circle-arrows.png")} />
                                <Text className='font-normal text-xs text-[#093030]'>Total Balance</Text>
                            </View>
                            <Text className='font-bold text-2xl text-[#004B90]/20'>$7,783.00</Text>
                        </View>

                        <View className='flex-col items-start py-2 px-5'>
                            <View className='flex-row items-center gap-x-1'>
                                <Image className='w-5 h-5' source={require("../assets/bottom-right.png")} />
                                <Text className='font-normal text-xs text-[#093030]'>Total Expense</Text>
                            </View>
                            <Text className='font-bold text-2xl text-[#004B90]'>-$1.187.40</Text>
                        </View>

                    </View>


                    <View className='h-[27px] w-full mt-3 bg-[#052224] rounded-2xl flex-row'>
                        <View className='w-[20%]'>
                            <Text className='font-normal text-xs text-white text-center py-1'>30%</Text>
                        </View>
                        <View className='w-[80%] bg-[#F1FFF3] rounded-2xl items-end'>
                            <Text className='font-medium text-[13px] italic px-2 text-[#093030] py-1'>$20,000.00%</Text>
                        </View>
                    </View>

                    <Text className='font-normal text-[15px] mt-2 text-[#052224] text-center'>30% of your expenses, looks good.</Text>

                    <View className='px-10 mt-5'>

                        <View className='items-center'>
                            <View className=" flex-row items-center bg-[#DFF7E2] p-1 rounded-2xl">
                                {options.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleSelect(option.value)}
                                        className={`px-2 py-2 rounded-2xl w-1/3 ${selected === option.value ? 'bg-[#00D09E]' : 'bg-[#DFF7E2]'}`}
                                    >
                                        <Text className={`text-[14px] font-normal text-center ${selected === option.value ? 'text-green-900' : 'text-black'}`}>
                                            {option.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>


                    <View className='rounded-3xl p-4 w-full h-[350px] mt-4 bg-[#DFF7E2]/60'>

                        <View className='flex-row justify-between items-center'>
                            <Text className='font-medium text-[15px] text-[#052224] '>Tax Audits</Text>
                            <View className='flex-row gap-x-2'>
                                <View className='bg-[#00D09E] rounded-xl p-2'>
                                    <Image className='w-4 h-4' source={require("../assets/search.png")} />
                                </View>

                                <View className='bg-[#00D09E] rounded-xl p-2'>
                                    <Image className='w-4 h-4' source={require("../assets/calendar.png")} />
                                </View>


                            </View>
                        </View>

                        <View className='mt-4'  >

                            <View
                                style={{
                                    marginTop: 10,
                                    marginRight: 3,

                                }}>
                                <BarChart
                                    data={barData}
                                    barWidth={4}
                                    spacing={22}
                                    roundedTop
                                    labelsDistanceFromXaxis={4}
                                    roundedBottom
                                    xAxisThickness={1}
                                    yAxisThickness={0}
                                    yAxisTextStyle={{ color: '#89c6f7',fontSize:13 }}
                                    noOfSections={3}
                                    maxValue={75}
                                    rulesColor={"#89c6f7"}
                                    width={ScreenWidth * 0.65}
        
                                />
                            </View>

                        </View>

                    </View>

                    <View className='flex-row justify-around mt-4 '>
                        <View className='flex-col items-center py-2 px-5'>
                            <View className='border-2 pt-2 px-2 rounded-full border-[#00D09E]'>
                                <Image className='w-[15px] h-[15px] mb-2' source={require("../assets/up-right.png")} />
                            </View>

                            <Text className='font-medium text-[15px] text-[#093030]'>Income</Text>
                            <Text className='font-semibold text-[20px] text-[#093030]'>$4,120.00</Text>
                        </View>

                        <View className='flex-col items-center  py-2 px-5'>
                            <View className='border-2 pt-2 px-2 rounded-full border-[#165BAA]'>
                                <Image className='w-[15px] h-[15px] mb-2' source={require("../assets/down-right-arrow.png")} />
                            </View>
                            <Text className='font-medium text-[15px] text-[#093030]'>Expense</Text>
                            <Text className='font-semibold text-[20px] text-[#165BAA]'>$1.187.40</Text>
                        </View>

                    </View>

                    <View>
                        <Text className='font-medium text-[15px] text-[#093030]'>My Targets</Text>

                        <View className='flex-row justify-around'>

                            <View className='items-center mt-2 flex-row'>
                                <View className=' bg-[#6DB6FE] w-36 h-44 rounded-3xl items-center relative'>
                                    <View className='relative'>
                                        <ProgressChart
                                            data={{
                                                data: [0.30], // Pass an array, even if it's a single value
                                            }}
                                            width={184}
                                            height={150}
                                            strokeWidth={8}
                                            radius={60}
                                            hideLegend={true}
                                            chartConfig={chartConfig1}
                                        />
                                        <Text className='font-semibold text-[20px] text-white absolute left-[50%] top-[40%]'>30%</Text>
                                        <Text className='font-medium text-[15px] text-white absolute left-[45%] top-[95%]'>Travel</Text>
                                    </View>

                                </View>
                            </View>
                            

                            <View className='items-center mt-2 flex-row'>
                                <View className=' bg-[#6DB6FE] w-36 h-44 rounded-3xl items-center relative'>
                                    <View className='relative'>
                                        <ProgressChart
                                            data={{
                                                data: [0.30], // Pass an array, even if it's a single value
                                            }}
                                            width={184}
                                            height={150}
                                            strokeWidth={8}
                                            radius={60}
                                            hideLegend={true}
                                            chartConfig={chartConfig1}
                                        />
                                        <Text className='font-semibold text-[20px] text-white absolute left-[50%] top-[40%]'>30%</Text>
                                        <Text className='font-medium text-[15px] text-white absolute left-[58%] top-[95%]'>Car</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>



                </ScrollView>

            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default TaxAudit;
