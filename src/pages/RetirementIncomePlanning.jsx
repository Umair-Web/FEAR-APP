import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const RetirementIncomePlanning = () => {
    const [principal, setPrinciple] = useState('');
    const [annadd, SetAnnAdd] = useState('');
    const [monadd, SetMonAdd] = useState('');
    const [eachperiod, SetEachPeriod] = useState('');
    const [anngrowth, SetAnngrowth] = useState('')
    const [after, SetAfter] = useState('')


    const data = [
        { year: '1', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '2', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '3', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '4', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '5', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '6', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '7', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '8', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
        { year: '9', addition: '$30,000.00', amount: '$1,800.00', change: '$31,800.00' },
      ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-bold text-base text-[#00325F]'>Retirement Income planning</Text>

                    <View className='bg-black/25 rounded-2xl mt-4'>
                        <View>
                            <Text className='text-[#00325F] text-sm text-center font-bold mt-2'>Annuity Calculators</Text>
                            <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Starting principal</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={principal}
                                            onChangeText={setPrinciple}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Annual addition</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={annadd}
                                            onChangeText={SetAnnAdd}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Monthly addition</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={monadd}
                                            onChangeText={SetMonAdd}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Add at each period</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={eachperiod}
                                            onChangeText={SetEachPeriod}
                                        />
                                    </View>

                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Annual growth rate</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={anngrowth}
                                            onChangeText={SetAnngrowth}
                                        />
                                    </View>

                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>After</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={after}
                                            onChangeText={SetAfter}
                                        />
                                    </View>

                                </View>


                                <View className='flex-row justify-center gap-x-3 items-center mb-4 mt-3'>
                                    <TouchableOpacity className='bg-[#003655] items-center justify-center  px-4 py-2 rounded-md'>
                                        <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                        <Text className='font-bold text-white text-[13px]'>Clear</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>



                            {/* <View className='w-full h-9 bg-[#2A5784] p-2 '>
                                <Text className='font-bold text-sm text-white'>Assumptions</Text>
                            </View> */}

                            {/* <View className='p-2'>
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
                            </View> */}

                            {/* <View className='w-full h-9 bg-[#2A5784] p-2 '>
                                <Text className='font-bold text-sm text-white'>Optional</Text>
                            </View> */}

                            {/* <View className='p-2'>
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
                            </View> */}

                            {/* <View className='flex-row justify-around items-center mb-4 mt-3'>
                                <TouchableOpacity className='bg-[#003655] items-center justify-center  px-4 py-2 rounded-md'>
                                    <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                    <Text className='font-bold text-white text-[13px]'>Clear</Text>
                                </TouchableOpacity>
                                <View className='border border-[#003655] rounded-lg p-1'>
                                    <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                                </View>
                            </View> */}

                        </View>
                    </View>

                    <Text className='font-bold text-base text-[#00325F] mt-2'>Accumulation Schedule</Text>

                    <View className=' mt-2'>
                        <View className={` flex-row justify-between  bg-[#003655]`}>
                            <Text className='font-bold border-r border-white text-[10px] w-[25%] text-center text-white p-1'>Year</Text>

                            <Text className='font-bold border-r border-white text-[10px] w-[25%] text-center text-white p-1'>Addition</Text>

                            <Text className='font-bold border-r border-white text-[10px] w-[25%] text-center text-white p-1'>Return</Text>

                            <Text className='font-bold  text-[10px] w-[25%] text-center text-white p-1'>Ending balance</Text>
                        </View>

                        <View className='bg-black/25'>
                            {data.map((item) => (
                                <View key={item.year} className="flex-row justify-between">
                                    <Text className="font-normal border-r border-black  text-black text-[11px] p-2 w-[25%] text-center">{item.year}</Text>
                                    <Text className="font-normal border-r border-black  text-[#003655] text-[11px] p-2 w-[25%] text-center">{item.addition}</Text>
                                    <Text className="font-normal border-r border-black  text-[#003655]  text-[11px] p-2 w-[25%] text-center">{item.amount}</Text>
                                    <Text
                                        className={`font-normal  text-[11px] w-[25%] p-2 text-center text-[#003655] `}
                                    >
                                        {item.change}
                                    </Text>
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

export default RetirementIncomePlanning;
