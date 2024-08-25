import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const TaxChart = () => {
    // State for each input field
    const [currentAnnualIncome, setCurrentAnnualIncome] = useState("$150,000");
    const [taxFilingStatus, setTaxFilingStatus] = useState("Single");
    const [currentTaxRate, setCurrentTaxRate] = useState("24%");
    const [futureTaxableIncome, setFutureTaxableIncome] = useState("$150,000");
    const [futureTaxFilingStatus, setFutureTaxFilingStatus] = useState("Single");
    const [futureTaxRate, setFutureTaxRate] = useState("24%");
    const [rothConversionAmount, setRothConversionAmount] = useState("$150,000");
    const [yearsUntilDistribution, setYearsUntilDistribution] = useState("24%");
    const [payConversionTaxes, setPayConversionTaxes] = useState("CASH");
    const [iraBasis, setIraBasis] = useState("24%");
    const [dividendTaxRate, setDividendTaxRate] = useState("24%");
    const [capitalGainTaxRate, setCapitalGainTaxRate] = useState("24%");
    const [annualReturn, setAnnualReturn] = useState("24%");
    const [dividendYield, setDividendYield] = useState("24%");
    const [cashYield, setCashYield] = useState("24%");

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-base font-bold text-[#00325F]'>Tax Charts</Text>

                    <View className='bg-black/25 rounded-2xl mt-4 p-2'>
                        <Text className='text-lg mt-1 font-bold text-[#00325F]'>Account Type</Text>
                        <Text className='text-base font-semibold text-black mt-1'>Clients information</Text>
                        <Text className='text-[10px] font-medium text-red-600 underline mt-1'>View Current Taxes chart</Text>

                        <Text className='text-[10px] font-medium text-black mt-2'>Current annual tax income</Text>
                        <View className='w-full bg-white h-[34px] border border-black/50 mt-2 text-black shadow-black shadow-2xl' >
                            <TextInput
                                className='text-[10px] text-black p-1 font-normal'
                                placeholder="$150,000"
                                placeholderTextColor="#A5A5A5"
                                value={currentAnnualIncome}
                                onChangeText={setCurrentAnnualIncome}
                            />
                        </View>

                        <Text className='text-[10px] font-medium text-black mt-2'>Tax filing status</Text>
                        <View className='w-full bg-white h-[34px] border border-black/50 mt-2 text-black shadow-black shadow-2xl' >
                            <TextInput
                                className='text-[10px] text-black p-1 font-normal'
                                placeholder="Single"
                                placeholderTextColor="#A5A5A5"
                                value={taxFilingStatus}
                                onChangeText={setTaxFilingStatus}
                            />
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Current tax Rate</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={currentTaxRate}
                                    onChangeText={setCurrentTaxRate}
                                />
                            </View>
                        </View>

                        <Text className='text-[10px] font-medium text-black mt-2'>Future taxable income at distribution</Text>
                        <View className='w-full bg-white h-[34px] border border-black/50 mt-2 text-black shadow-black shadow-2xl' >
                            <TextInput
                                className='text-[10px] text-black p-1 font-normal'
                                placeholder="$150,000"
                                placeholderTextColor="#A5A5A5"
                                value={futureTaxableIncome}
                                onChangeText={setFutureTaxableIncome}
                            />
                        </View>

                        <Text className='text-[10px] font-medium text-black mt-2'>Future tax filing status</Text>
                        <View className='w-full bg-white h-[34px] border border-black/50 mt-2 text-black shadow-black shadow-2xl' >
                            <TextInput
                                className='text-[10px] text-black p-1 font-normal'
                                placeholder="Single"
                                placeholderTextColor="#A5A5A5"
                                value={futureTaxFilingStatus}
                                onChangeText={setFutureTaxFilingStatus}
                            />
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Future tax Rate</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={futureTaxRate}
                                    onChangeText={setFutureTaxRate}
                                />
                            </View>
                        </View>

                        <Text className='text-base font-semibold text-black mt-3'>Planned Conversion Strategy</Text>

                        <Text className='text-[10px] font-medium text-black mt-1'>Roth conversion amount</Text>
                        <View className='w-full bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl mt-2' >
                            <TextInput
                                className='text-[10px] text-black p-2 font-normal'
                                placeholder="$150,000"
                                placeholderTextColor="#A5A5A5"
                                value={rothConversionAmount}
                                onChangeText={setRothConversionAmount}
                            />
                        </View>
                        <Text className='text-[9px] font-medium text-black/50 mt-1'>Enter a value between 1 and 100</Text>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Years until distribution</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={yearsUntilDistribution}
                                    onChangeText={setYearsUntilDistribution}
                                />
                            </View>
                        </View>

                        <Text className='text-[10px] font-medium text-black mt-2'>How will you pay conversion taxes</Text>
                        <View className='w-full bg-white h-[34px] border border-black/50 mt-2 text-black shadow-black shadow-2xl' >
                            <TextInput
                                className='text-[10px] text-black p-1 font-normal'
                                placeholder="CASH"
                                placeholderTextColor="#A5A5A5"
                                value={payConversionTaxes}
                                onChangeText={setPayConversionTaxes}
                            />
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>IRA basis</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={iraBasis}
                                    onChangeText={setIraBasis}
                                />
                            </View>
                        </View>

                        <Text className='text-base font-semibold text-black mt-3'>Expected returns and Income at Distribution</Text>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Dividend tax rate</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={dividendTaxRate}
                                    onChangeText={setDividendTaxRate}
                                />
                            </View>
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Capital Gain tax rate</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={capitalGainTaxRate}
                                    onChangeText={setCapitalGainTaxRate}
                                />
                            </View>
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Annual return (before-tax)</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={annualReturn}
                                    onChangeText={setAnnualReturn}
                                />
                            </View>
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Dividend yield</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={dividendYield}
                                    onChangeText={setDividendYield}
                                />
                            </View>
                        </View>

                        <View className='flex-row justify-between items-center mt-3'>
                            <View className='flex-col items-start'>
                                <Text className='text-[10px] font-medium text-black'>Cash yield</Text>
                                <Text className='text-[9px] font-medium text-black/50'>Enter a value between 1 and 100</Text>
                            </View>
                            <View className='w-[30%] bg-white h-[34px] border border-black/50 text-black shadow-black shadow-2xl' >
                                <TextInput
                                    className='text-[10px] text-black p-2 font-normal'
                                    placeholder="24%"
                                    placeholderTextColor="#A5A5A5"
                                    value={cashYield}
                                    onChangeText={setCashYield}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default TaxChart;
