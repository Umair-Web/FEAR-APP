import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const Retirement = () => {
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [lifeExpectancy, setLifeExpectancy] = useState('');
    const [preTaxIncome, setPreTaxIncome] = useState('');
    const [incomeIncrease, setIncomeIncrease] = useState('');
    const [incomeAfterRetirement, setIncomeAfterRetirement] = useState('');
    const [investmentReturn, setInvestmentReturn] = useState('');
    const [inflationRate, setInflationRate] = useState('');
    const [otherIncomeAfterRetirement, setOtherIncomeAfterRetirement] = useState('');
    const [currentRetirementSavings, setCurrentRetirementSavings] = useState('');
    const [futureRetirementSavings, setFutureRetirementSavings] = useState('');

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false} className='bg-black/25 rounded-2xl'>
                    <View>
                        <Text className='text-[#00325F] text-sm text-center font-bold mt-2'>How much do you need to retire?</Text>
                        <View className='p-2'>
                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your current age</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={currentAge}
                                        onChangeText={setCurrentAge}
                                    />
                                </View>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your Planning retirement age.</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={retirementAge}
                                        onChangeText={setRetirementAge}
                                    />
                                </View>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your life expectancy</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={lifeExpectancy}
                                        onChangeText={setLifeExpectancy}
                                    />
                                </View>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your current pre-tax income</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={preTaxIncome}
                                        onChangeText={setPreTaxIncome}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                            </View>
                        </View>

                        <View className='w-full h-9 bg-[#2A5784] p-2 '>
                            <Text className='font-bold text-sm text-white'>Assumptions</Text>
                        </View>

                        <View className='p-2'>
                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your current Income increase</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={incomeIncrease}
                                        onChangeText={setIncomeIncrease}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Income needed after retirement</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={incomeAfterRetirement}
                                        onChangeText={setIncomeAfterRetirement}
                                    />
                                </View>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Average investment return</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={investmentReturn}
                                        onChangeText={setInvestmentReturn}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Inflation rate</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={inflationRate}
                                        onChangeText={setInflationRate}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                            </View>
                        </View>

                        <View className='w-full h-9 bg-[#2A5784] p-2 '>
                            <Text className='font-bold text-sm text-white'>Optional</Text>
                        </View>

                        <View className='p-2'>
                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Other income after retirement</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={otherIncomeAfterRetirement}
                                        onChangeText={setOtherIncomeAfterRetirement}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/month</Text>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your current retirement savings</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={currentRetirementSavings}
                                        onChangeText={setCurrentRetirementSavings}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                            </View>

                            <View className='flex-row items-center my-1'>
                                <Text className='font-medium text-[#003655] text-xs w-[35%]'>Future retirement savings</Text>
                                <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                    <TextInput
                                        className='text-[10px] text-black p-1 font-normal'
                                        placeholder="Type here"
                                        placeholderTextColor="#A5A5A5"
                                        value={futureRetirementSavings}
                                        onChangeText={setFutureRetirementSavings}
                                    />
                                </View>
                                <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                            </View>
                        </View>

                        <View className='flex-row justify-around items-center mb-4 mt-3'>
                            <TouchableOpacity className='bg-[#003655] items-center justify-center  px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Clear</Text>
                            </TouchableOpacity>
                            <View className='border border-[#003655] rounded-lg p-1'>
                                <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View >
            <MenuBar />
            <BgImage />
        </SafeAreaView >
    );
};

export default Retirement;