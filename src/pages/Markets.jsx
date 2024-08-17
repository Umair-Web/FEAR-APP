import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import { LineChart } from "react-native-gifted-charts";

const stockData = [
    {
        name: 'Apple',
        price: '$9,978,00',
        change: '+30.58%',
        data: [{ value: 1 }, { value: 10 }, { value: 5 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 43 }],
        color: '#66DC43'
    },
    {
        name: 'Tesla',
        price: '$8,553,00',
        change: '-12.72%',
        data: [{ value: 43 }, { value: 25 }, { value: 30 }, { value: 15 }, { value: 20 }, { value: 5 }, { value: 10 }, { value: 0 }],
        color: '#E52E2E'
    },
    {
        name: 'McDonalds',
        price: '$1,757,00',
        change: '-5.72%',
        data: [{ value: 20 }, { value: 15 }, { value: 30 }, { value: 5 }, { value: 10 }, { value: 4 }, { value: 25 }, { value: 43 }],
        color: '#E52E2E'
    },
    {
        name: 'Amazon',
        price: '$3,786,00',
        change: '+10.58%',
        data: [{ value: 5 }, { value: 10 }, { value: 20 }, { value: 25 }, { value: 30 }, { value: 43 }, { value: 15 }, { value: 4 }],
        color: '#66DC43'
    },
    {
        name: 'Airbnb',
        price: '$1,666,00',
        change: '+12.78%',
        data: [{ value: 3 }, { value: 15 }, { value: 25 }, { value: 30 }, { value: 20 }, { value: 43 }, { value: 10 }, { value: 5 }],
        color: '#66DC43'
    },
    {
        name: 'AliExpress',
        price: '$3,544,00',
        change: '+5.90%',
        data: [{ value: 43 }, { value: 2 }, { value: 10 }, { value: 30 }, { value: 5 }, { value: 20 }, { value: 25 }, { value: 15 }],
        color: '#66DC43'
    },
    {
        name: 'Nike',
        price: '$9,353,00',
        change: '-3.72%',
        data: [{ value: 25 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 5 }, { value: 2 }, { value: 10 }, { value: 43 }],
        color: '#E52E2E'
    }
];

const Markets = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=''>
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

                {/* Search Bar */}
                <View className='px-6'>
                    <View className='mt-3 ml-1 flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-x-3'>
                            <Image className='h-[19px] w-[19px]' source={require("../assets/search.png")} />
                            <View>
                                <Text className="text-[14px] font-normal text-[#A6A6A6]">Search assets</Text>
                            </View>
                        </View>
                        <View className='w-[39px] h-[42px] rounded-lg bg-[#00325F] items-center justify-center'>
                            <Image className='h-[24px] w-[24px]' source={require("../assets/filter.png")} />
                        </View>
                    </View>
                </View>
                <View className='px-5 flex-row justify-between items-center'>

                    <Text className="text-[14px] font-medium text-[#131F3D]">All</Text>
                    <View className='w-16 h-9 items-center justify-center rounded-2xl bg-[#00325F] '><Text className="text-[14px] font-medium text-white">Price</Text></View>
                    {/* <Text className="text-[14px] font-medium text-[#131F3D]">Hot</Text> */}
                    <Text className="text-[14px] font-medium text-[#131F3D]">Hot</Text>
                    <Text className="text-[14px] font-medium text-[#131F3D]">Stock</Text>



                </View>

                {/* Stock Data */}
                <ScrollView className='px-5 mt-2 h-[450px]'>
                    {stockData.map((stock, index) => (
                        <View key={index} className='flex-row justify-between items-start p-3 bg-[#004B90]/10 rounded-xl mb-3'>
                            <View className='flex-row items-center gap-x-5 w-1/2 pl-2'>
                                <View className='rounded-full w-10 h-10 bg-[#D8D8D8]'></View>
                                <Text className='font-medium text-black text-[14px]'>{stock.name}</Text>
                            </View>
                            <View className='w-1/2 flex-row items-center '>
                                <View className='absolute -top-3 -left-9'>
                                    <LineChart
                                        areaChart
                                        curved
                                        isAnimated
                                        data={stock.data}
                                        height={50}
                                        width={120}
                                        spacing={8}
                                        initialSpacing={0}
                                        color1={stock.color}
                                        hideDataPoints
                                        hideAxesAndRules
                                        startFillColor1={stock.color}
                                        startOpacity={0.5}
                                        endOpacity={0.1} />
                                </View>
                                <View className='absolute -top-0 right-1'>
                                    <View className='flex-col items-end'>
                                        <Text className='text-sm font-medium text-[#1C3169]'>
                                            {stock.price}
                                        </Text>
                                        <Text className={`text-sm font-medium ${stock.change.startsWith('+') ? 'text-[#66DC43]' : 'text-[#E52E2E]'}`}>
                                            {stock.change}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </ScrollView>
                <View className='items-center px-8 mt-2'>
                    <View className='w-11/12  h-[45px] flex-row items-center justify-between mt-2'>
                        <View className='flex-row  items-center gap-x-2 w-1/2 justify-center bg-[#40bf6a]  border-white rounded-lg p-3 '>

                            <Text className='text-sm font-bold text-white'>Buy</Text>
                        </View>
                        <View className='flex-row items-center gap-x-2 w-1/2 justify-center bg-[#df2040] rounded-lg p-3'>

                            <Text className='text-sm font-bold text-white'>Sell</Text>

                        </View>
                    </View>
                </View>
            </View>
            <MenuBar />
        </SafeAreaView>
    );
};

export default Markets;
