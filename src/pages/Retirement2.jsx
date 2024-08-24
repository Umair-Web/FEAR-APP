import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Retirement2 = () => {
    const [ageNow, setAgeNow] = useState('');
    const [plannedAge, setPlannedAge] = useState('');
    const [amountNeeded, setAmountNeeded] = useState('');
    const [retirementSaving, setRetirementSaving] = useState('');
    const [averageInvestment, setaverageInvestment] = useState('');


    const [ageNow2, setAgeNow2] = useState('');
    const [plannedAge2, setPlannedAge2] = useState('');
    const [lifeExpectancy,SetLifeExpectancy ] = useState('');
    const [retirement,SetRetirement ] = useState('');
    const [anncontribution,SetAnnContribution ] = useState('');
    const [moncontribution,Setmoncontribution ] = useState('');
    const [avgInvestment,SetavgInvestment ] = useState('');
    const [inflationrate,SetInflationRate ] = useState('');


    const [amounthave, setAmountHave] = useState('');
    const [withdraw, setwithdraw] = useState('');
    const [investmentReturn, SetinvestmentReturn] = useState('');
    
    
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5 ' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='bg-black/25 rounded-2xl'>
                        <View>
                            <Text className='text-[#00325F] text-sm text-center font-bold mt-2'>how can you save for retirement</Text>
                            <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your age now</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={ageNow}
                                            onChangeText={setAgeNow}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>your planned retirement age</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={plannedAge}
                                            onChangeText={setPlannedAge}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Amount needed retirement age</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={amountNeeded}
                                            onChangeText={setAmountNeeded}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your retirement savings now</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={retirementSaving}
                                            onChangeText={setRetirementSaving}
                                        />
                                    </View>

                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Average investment return</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={averageInvestment}
                                            onChangeText={setaverageInvestment}
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

                    <View className='bg-black/25 rounded-2xl mt-4'>
                        <View>
                            <Text className='text-[#00325F] text-sm text-center font-bold mt-2'>How much can you withdraw after retirement.</Text>
                            <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your age now</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={ageNow2}
                                            onChangeText={setAgeNow2}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your planned retirement age</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={plannedAge2}
                                            onChangeText={setPlannedAge2}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your life expectancy</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={lifeExpectancy}
                                            onChangeText={SetLifeExpectancy}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your Retirement Savings Today</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={retirement}
                                            onChangeText={SetRetirement}
                                        />
                                    </View>

                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Annual Contribution</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={anncontribution}
                                            onChangeText={SetAnnContribution}
                                        />
                                    </View>

                                </View>


                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Monthly Contribution</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={moncontribution}
                                            onChangeText={Setmoncontribution}
                                        />
                                    </View>

                                </View>




                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Average Investment Return</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={avgInvestment}
                                            onChangeText={setaverageInvestment}
                                        />
                                    </View>

                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Inflation Rate(Annual)</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={inflationrate}
                                            onChangeText={SetInflationRate}
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

                                    <View className='border border-[#003655] rounded-lg p-1'>
                                        <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                                    </View>

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



                    <View className='bg-black/25 rounded-2xl mt-4 mb-60'>
                        <View>
                            <Text className='text-[#00325F] text-sm text-center font-bold mt-2'>How long can your money last?</Text>
                            <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>The amount you have</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={amounthave}
                                            onChangeText={setAmountHave}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Your plan to withdraw</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={withdraw}
                                            onChangeText={setwithdraw}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Average investment return</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={investmentReturn}
                                            onChangeText={SetinvestmentReturn}
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

                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Retirement2