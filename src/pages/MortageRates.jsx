import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from "react-native-gifted-charts";
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const MortageRates = () => {
    const [selected, setSelected] = useState('Purchase');

    const handleSelect = (value) => {
        setSelected(value);
    };


    const [selected2, setSelected2] = useState('APR');

    const handleSelect2 = (value) => {
        setSelected2(value);
    };



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
    


    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-bold text-base text-black mt-2'>Compare Mortgage Rates for June 21,2024</Text>

                    <View className='bg-[#D9D9D9] rounded-lg py-3 px-2 mt-4'>

                        <View className='flex-row items-center justify-between'>
                            <View className='flex-col items-start w-[33%]'>
                                <Text className='font-bold text-[10px] text-black'>Loan Purpose</Text>
                                <View className=" flex-row mt-2 gap-x-1">
                                    <TouchableOpacity
                                        onPress={() => handleSelect('Purchase')}
                                        className={` border h-6 p-1 ${selected === 'Purchase' ? 'border-2 ' : ''
                                            }`}
                                    >
                                        <Text className={`text-[8px] mt-[2px] font-normal text-center text-black  ${selected === 'Purchase' ? "font-bold mt-[0px] " : ""}`} >Purchase</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleSelect('Refinance')}
                                        className={` border  p-1 h-6 ${selected === 'Refinance' ? 'border-2' : ''
                                            }`}
                                    >
                                        <Text className={`text-[8px] mt-[2px] font-normal text-center text-black  ${selected === 'Refinance' ? "font-bold mt-[0px] " : ""}`} >Refinance</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View className='flex-col items-start w-[32%]'>
                                <Text className='font-bold text-[10px] text-black'>Loan Term</Text>
                                <View className=' w-full  border  h-6 mt-2'>
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-medium'
                                        placeholder="30 Yr Fixed"
                                        placeholderTextColor="#333"

                                    />
                                </View>

                            </View>


                            <View className='flex-col items-start w-[32%]'>
                                <Text className='font-bold text-[10px] text-black'>Zip Code</Text>
                                <View className=' w-full  border  h-6 mt-2'>
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-medium'
                                        placeholder="900001"
                                        placeholderTextColor="#333"

                                    />
                                </View>

                            </View>
                        </View>


                        <View className='flex-row items-center justify-between mt-7'>

                            <View className='flex-col items-start w-[32%]'>
                                <Text className='font-bold text-[10px] text-black'>Purchase Price</Text>
                                <View className=' w-full  border  h-6 mt-2'>
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-medium'
                                        placeholder="$ 80,000"
                                        placeholderTextColor="#333"

                                    />
                                </View>

                            </View>

                            <View className='flex-col items-start w-[32%]'>
                                <Text className='font-bold text-[10px] text-black'>Down Payment</Text>
                                <View className=' w-full  border  h-6 mt-2'>
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-medium'
                                        placeholder="$ 80,000        20%"
                                        placeholderTextColor="#333"

                                    />
                                </View>

                            </View>


                            <View className='flex-col items-start w-[32%]'>
                                <Text className='font-bold text-[10px] text-black'>CreditScore</Text>
                                <View className=' w-full  border  h-6 mt-2'>
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-medium'
                                        placeholder="740-759"
                                        placeholderTextColor="#333"

                                    />
                                </View>

                            </View>


                        </View>

                    </View>

                    <View className='flex-row mt-4 items-center'>
                        <Text className='font-bold text-xs text-black'>SORT BY</Text>

                        <View className=" flex-row gap-x-2 ml-2">
                            <TouchableOpacity
                                onPress={() => handleSelect2('APR')}
                            >
                                <Text className={`text-xs font-medium text-black  ${selected2 === 'APR' ? "font-bold underline " : ""}`} >APR</Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => handleSelect2('Monthly Payment')}
                            >
                                <Text className={`text-xs font-medium text-black  ${selected2 === 'Monthly Payment' ? "font-bold underline " : ""}`} >Monthly Payment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleSelect2('Rate')}
                            >
                                <Text className={`text-xs font-medium text-black  ${selected2 === 'Rate' ? "font-bold underline " : ""}`} >Rate</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleSelect2('Fees')}
                            >
                                <Text className={`text-xs font-medium text-black  ${selected2 === 'Fees' ? "font-bold underline " : ""}`} >Fees</Text>
                            </TouchableOpacity>

                        </View>

                        
                    </View>


                    {stockData.map((stock, index) => (
                        <View key={index} className='flex-row justify-between items-start mt-4 p-3 bg-[#004B90]/10 rounded-xl mb-3'>
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
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default MortageRates;
