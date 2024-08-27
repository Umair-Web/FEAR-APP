import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const LifeInsuranceCalculator = () => {

    const [finalExpenses, setFinalExpenses] = useState('');
    const [mortgagePayoff, setMortgagePayoff] = useState('');
    const [k12EducationExpenses, setK12EducationExpenses] = useState('');
    const [collegeTuition, setCollegeTuition] = useState('');


    const [groceriesDining, setGroceriesDining] = useState('');
    const [rentMortgage, setRentMortgage] = useState('');
    const [childCare, setChildCare] = useState('');
    const [medicalExpenses, setMedicalExpenses] = useState('');


    const [transposition, setTransposition] = useState('');
    const [phone, setPhone] = useState('');
    const [insurance, setInsurance] = useState('');
    const [debtPayments, setDebtPayments] = useState('');
    const [monthlyExpenseYears, setMonthlyExpenseYears] = useState('');


    const [spouseIncome, setSpouseIncome] = useState('');
    const [spouseWorkYears, setSpouseWorkYears] = useState('');
    const [spouseTaxRate, setSpouseTaxRate] = useState('');



    const [savingsValue, setSavingsValue] = useState('');
    const [retirementPlanValue, setRetirementPlanValue] = useState('');
    const [insuranceValue, setInsuranceValue] = useState('');
 
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='bg-black/20 p-2 border-b-2 border-black/30'>
                        <Text className='font-semibold text-lg text-[#003655]'>Large expenses</Text>
                        <Text className='font-medium text-sm text-[#374151] mt-1'>
                            First we’ll estimate some of one time expenses your family would face as well as some other expenses that you want to provide with life insurance
                        </Text>

                        <Text className='font-semibold text-base text-[#003655] mt-4'>Final Expenses</Text>
                        <View className='flex-row items-center justify-between mt-1'>
                            <Text className='font-medium text-sm text-[#374151]'>*Final expenses</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={finalExpenses}
                                    onChangeText={setFinalExpenses}
                                />
                            </View>
                        </View>

                        <Text className='font-semibold text-base text-[#003655] mt-4'>Mortgage</Text>
                        <View className='flex-row items-center justify-between'>
                            <Text className='font-medium text-sm text-[#374151]'>Mortgage payoff amount</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={mortgagePayoff}
                                    onChangeText={setMortgagePayoff}
                                />
                            </View>
                        </View>

                        <Text className='font-semibold text-base text-[#003655] mt-4'>Educational Expenses</Text>
                        <View className='flex-row items-center justify-between mt-1'>
                            <Text className='font-medium text-sm text-[#374151]'>K-12 education expenses</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={k12EducationExpenses}
                                    onChangeText={setK12EducationExpenses}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-medium text-sm text-[#374151]'>College tuition</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={collegeTuition}
                                    onChangeText={setCollegeTuition}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-bold text-xs text-black'>College tuition</Text>
                            <Text className='font-bold text-xs w-[45%] text-black'>$ 0</Text>
                        </View>
                    </View>



                    <View className='bg-black/20 p-2 border-b-2 border-black/30'>
                        <Text className='font-semibold text-lg text-[#003655]'>Covering monthly expenses</Text>

                        <Text className='font-medium text-sm text-[#374151] mt-1'>FNow lets look at your monthly living expenses.</Text>

                        <Text className='font-semibold text-base text-[#003655] mt-4'>Food</Text>


                        <View className='flex-row items-center justify-between mt-1'>
                            <Text className='font-medium text-sm text-[#374151]'>Groceries, dining</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    value={groceriesDining}
                                    onChangeText={setGroceriesDining}
                                    placeholderTextColor="#A5A5A5"

                                />
                            </View>
                        </View>


                        <Text className='font-semibold text-base text-[#003655] mt-4'>Housing</Text>


                        <View className='flex-row items-center justify-between'>
                            <Text className='font-medium text-sm text-[#374151]'>Rent , mortgage</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={rentMortgage}
                                    onChangeText={setRentMortgage}

                                />
                            </View>
                        </View>



                        <Text className='font-semibold text-base text-[#003655] mt-4'>Family</Text>


                        <View className='flex-row items-center justify-between mt-1'>
                            <Text className='font-medium text-sm text-[#374151]'>Child care</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={childCare}
                                    onChangeText={setChildCare}

                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151]'>Medical expenses</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={medicalExpenses}
                                    onChangeText={setMedicalExpenses}

                                />
                            </View>
                        </View>






                    </View>



                    <View className='bg-black/20 p-2 border-b-2 border-black/30'>
                        <Text className='font-semibold text-lg text-[#003655]'>Other monthly expenses</Text>



                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151]'>Transposition</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={transposition}
                                    onChangeText={setTransposition}

                                />
                            </View>
                        </View>





                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151]'>Phone</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={phone}
                                    onChangeText={setPhone}
                                />
                            </View>
                        </View>





                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151]'>Insurance</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={insurance}
                                    onChangeText={setInsurance}
                                />
                            </View>
                        </View>



                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151]'>*Debt payments</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={debtPayments}
                                    onChangeText={setDebtPayments}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>*How many years would you like to provide for these monthly expenses</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={monthlyExpenseYears}
                                    onChangeText={setMonthlyExpenseYears}

                                />
                            </View>
                        </View>


                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-bold text-xs text-black'>Total expenses per month</Text>

                            <Text className='font-bold text-xs w-[45%] text-black'>$ 0</Text>

                        </View>


                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-bold text-xs text-black'>Total expenses for 0 month</Text>

                            <Text className='font-bold text-xs w-[45%] text-black'>$ 0</Text>

                        </View>


                    </View>


                    <View className='bg-black/20 p-2 border-b-2 border-black/30'>
                        <Text className='font-semibold text-lg text-[#003655]'>Income and assests</Text>

                        <Text className='font-medium text-sm text-[#374151] mt-1'>Next we will look for current assets and income that would be available to your family today if unexpected happens</Text>

                        <Text className='font-semibold text-base text-[#003655] mt-4'>Spouse future income</Text>
                        <Text className='font-medium text-sm text-[#374151]'>Are you married?</Text>


                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>What is your spouse annual income before taxs</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={spouseIncome}
                                    onChangeText={setSpouseIncome}

                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>How many year you spouse will work?</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={spouseWorkYears}
                                    onChangeText={setSpouseWorkYears}

                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>Spouse expected marginal tax rate?</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={spouseTaxRate}
                                    onChangeText={setSpouseTaxRate}

                                />
                            </View>
                        </View>



                    </View>




                    <View className='bg-black/20 p-2 border-b-2 border-black/30'>
                        <Text className='font-semibold text-lg text-[#003655]'>Current assets</Text>



                        <View className='flex-row items-center justify-between mt-2'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>Total value of your saving and investments</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={savingsValue}
                                    onChangeText={setSavingsValue}

                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>Value of your employer retirement plan</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={retirementPlanValue}
                                    onChangeText={setRetirementPlanValue}

                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-medium text-sm text-[#374151] w-[50%]'>Current Insurance</Text>
                            <View className='w-[45%] bg-white h-[22px] border border-black/50 text-black shadow-black shadow-2xl'>
                                <TextInput
                                    className='text-[10px] text-black p-1 font-normal'
                                    placeholder="$"
                                    placeholderTextColor="#A5A5A5"
                                    value={insuranceValue}
                                    onChangeText={setInsuranceValue}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-bold text-xs text-black'>Total assets and Income</Text>

                            <Text className='font-bold text-xs w-[45%] text-black'>$ 19,123</Text>

                        </View>




                    </View>

                    <View className='bg-black/20 p-2 '>
                        <Text className='font-semibold text-lg text-[#003655]'>Your estimate</Text>

                        <View className='flex-row gap-x-6 mt-4'>
                            <Text className='font-bold text-sm  text-[#003655] w-[20%]'>$ 128,123</Text>

                            <Text className='font-medium text-sm  text-[#374151] w-[70%]'>To cover monthly expenses for 2 years</Text>
                        </View>

                        <View className='flex-row gap-x-6 mt-2'>
                            <Text className='font-bold text-sm  text-[#003655] w-[20%]'>$ 4,342</Text>

                            <Text className='font-medium text-sm  text-[#374151] w-[70%]'>To cover large expenses </Text>
                        </View>

                        <View className='flex-row gap-x-6 mt-2'>
                            <Text className='font-bold text-sm  text-[#003655] w-[20%]'>$ 19,125</Text>

                            <Text className='font-medium text-sm  text-[#374151] w-[70%]'>Minus your existing assets</Text>
                        </View>

                        <View className='flex-row gap-x-6 mt-2'>
                            <Text className='font-bold text-sm  text-[#003655] w-[20%]'>$ 113,617</Text>

                            <Text className='font-medium text-sm  text-[#374151] w-[70%]'>Total estimated life insurance needed.</Text>
                        </View>


                        <Text className='font-semibold text-lg text-[#003655]'>Note about your estimate</Text>

                        <Text className='font-medium text-sm text-[#374151] mt-1'>Total estimated life insurance needed</Text>



                        <Text className='font-bold text-sm mt-4  text-[#003655] '>Enter your Email address</Text>
                        <View className=' bg-white mt-2 h-[28px] border border-black/50 text-black shadow-black shadow-2xl'>
                            <TextInput
                                className='text-[10px] text-black p-1 font-normal'
                                placeholder="Enter email"
                                placeholderTextColor="#A5A5A5"
                                value={email}
                                onChangeText={setEmail}

                            />
                        </View>
                        <View className=' items-center mt-4'>
                            <LinearGradient
                                colors={['#01101D', '#0078BB']}
                                style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 30, elevation: 10, borderRadius: 60 }}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <TouchableOpacity className='w-[200px] h-[35px] flex-row justify-center items-center' >
                                    <Text className='text-white text-[17px] font-normal'>Email My results</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>

                        <View className='flex-row justify-center gap-x-3 items-center mb-44 mt-4'>
                            <TouchableOpacity className='bg-[#003655] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Edit my answers</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Clear</Text>
                            </TouchableOpacity>
                        </View>






                    </View>

                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default LifeInsuranceCalculator;
