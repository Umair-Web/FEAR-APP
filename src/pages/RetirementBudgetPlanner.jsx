import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const RetirementBudgetPlanner = () => {
    // State for each TextInput field
    const [wagesSalary, setWagesSalary] = useState('');
    const [otherIncome, setOtherIncome] = useState('');
    const [mortgageRent, setMortgageRent] = useState('');
    const [insurance, setInsurance] = useState('');
    const [foodGroceries, setFoodGroceries] = useState('');
    const [householdBills, setHouseholdBills] = useState('');
    const [transport, setTransport] = useState('');
    const [entertainment, setEntertainment] = useState('');
    const [personalExpenses, setPersonalExpenses] = useState('');
    const [otherExpenses, setOtherExpenses] = useState('');

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5 mb-48' style={{ height: screenHeight * 0.8 }}>
                <ScrollView className='' showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-[22px] text-[#003655]'>Budget Planner</Text>

                    <View className='p-2 mt-3 bg-[#004B90]/20 rounded-t-xl'>
                        <View className='flex-row items-center justify-between'>
                            <Text className='font-semibold text-xs text-[#003655]'>Your monthly income</Text>
                            <Text className='font-semibold text-xs text-[#003655]'>Amount in your dollars</Text>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[13px] text-[#374151]'>Wages/Salary (after tax)</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={wagesSalary}
                                    onChangeText={setWagesSalary}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[13px] text-[#374151]'>Any other income</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={otherIncome}
                                    onChangeText={setOtherIncome}
                                />
                            </View>
                        </View>
                    </View>

                    <View className='p-2 bg-[#333]/20 rounded-b-xl'>
                        <View className='flex-row items-center justify-between'>
                            <Text className='font-semibold text-xs text-[#003655]'>Your monthly expenditure</Text>
                            <Text className='font-semibold text-xs text-[#003655]'>Amount in your dollars</Text>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>Mortgage/ Rent</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={mortgageRent}
                                    onChangeText={setMortgageRent}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>All insurance (car, life)</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={insurance}
                                    onChangeText={setInsurance}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>Food groceries</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={foodGroceries}
                                    onChangeText={setFoodGroceries}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>Household bills</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={householdBills}
                                    onChangeText={setHouseholdBills}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[12px] text-[#374151]'>Transport (bus, car, train, etc.)</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={transport}
                                    onChangeText={setTransport}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>Entertainment</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={entertainment}
                                    onChangeText={setEntertainment}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>Personal expenses</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={personalExpenses}
                                    onChangeText={setPersonalExpenses}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-medium text-[15px] text-[#374151]'>Any other income</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={otherExpenses}
                                    onChangeText={setOtherExpenses}
                                />
                            </View>
                        </View>

                        <View className='flex-row justify-center gap-x-3 items-center mb-44 mt-3'>
                            <TouchableOpacity className='bg-[#003655] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
}

export default RetirementBudgetPlanner;
