import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, Dimensions,Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from 'react-native-gifted-charts';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");


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


    const lineData = [
        { value: 200, label: '0', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 400, label: '10', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 200, label: '20', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 1000, label: '30', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 600, label: '40', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 700, label: '50', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 800, label: '60', labelTextStyle: { color: 'black', fontSize: 8 }, },
    ];


    const lineData2 = [
        { value: 50, label: '0', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 30, label: '10', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 10, label: '20', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 0, label: '30', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 0, label: '40', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 0, label: '50', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 0, label: '60', labelTextStyle: { color: 'black', fontSize: 8 }, },
    ];


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

                    <ScrollView showsVerticalScrollIndicator={false} className='mt-4'>
                    <Text className='font-medium text-[15px] text-[#00325F]'>Asset growth</Text>

                    <View className=' bg-[#004B90]/20 p-3 border-b-2 border-white rounded-t-xl mt-4'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-semibold text-[#828282] text-base'>Roth graph</Text>
                            <Image className='w-5 h-5' source={require("../assets/settings/about-us.png")} />
                        </View>

                    </View>


                    <View className=' bg-[#004B90]/20 p-3 rounded-b-xl'>
                        <View>
                            <LineChart
                                data={lineData}
                                verticalLinesColor="#333" // Set the color of vertical lines
                                rulesColor={"#333"}
                                height={200}
                                showVerticalLines

                                width={screenWidth * 0.65}
                                spacing={38}
                                initialSpacing={2}
                                color1="#165BAA"
                                rulesType='solid'
                                dataPointsColor1="#165BAA"
                                textShiftY={-2}
                                textShiftX={-5}
                                textFontSize={13}
                                yAxisTextStyle={{ color: 'black', fontSize: 13 }}
                                thickness={3}
                                yAxisLabelWidth={42}
                                xAxisLabelTextStyle={{ color: 'black', fontSize: 9 }}
                                yAxisThickness={0}
                                yAxisLabelCount={2}
                                maxValue={1200}
                                noOfSections={6}
                                yAxisLabelSuffix='K.'


                            />
                        </View>
                        <Text className='font-normal text-xs text-[#4F4F4F] text-center mt-1'>Years distribution</Text>
                    </View>







                    <Text className='font-medium text-[15px] text-[#00325F] mt-4'>Break even tax rate</Text>

                    <View className=' bg-[#004B90]/20 p-3 border-b-2 border-white rounded-t-xl mt-4'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-semibold text-[#828282] text-base'>Roth graph</Text>
                            <Image className='w-5 h-5' source={require("../assets/settings/about-us.png")} />
                        </View>
                        <Text className='font-normal text-[#4F4F4F] text-xs'>BREAK EVEN TAX RATE</Text>
                    </View>


                    <View className=' bg-[#004B90]/20 p-3 rounded-b-xl'>
                        <View>
                            <LineChart
                                data={lineData2}
                                verticalLinesColor="#333" // Set the color of vertical lines
                                rulesColor={"#333"}
                                height={200}
                                showVerticalLines

                                width={screenWidth * 0.65}
                                spacing={38}
                                initialSpacing={2}
                                color1="#165BAA"
                                rulesType='solid'
                                dataPointsColor1="#165BAA"
                                textShiftY={-2}
                                textShiftX={-5}
                                textFontSize={13}
                                yAxisTextStyle={{ color: 'black', fontSize: 13 }}
                                thickness={3}
                                yAxisLabelWidth={42}
                                xAxisLabelTextStyle={{ color: 'black', fontSize: 9 }}
                                yAxisThickness={0}
                                yAxisLabelCount={2}
                                maxValue={40}
                                noOfSections={6}
                                yAxisLabelSuffix='%.'



                            />
                        </View>
                        <Text className='font-normal text-xs text-[#4F4F4F] text-center mt-1'>Years distribution</Text>
                    </View>

                </ScrollView>
                </ScrollView>

            
            </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default TaxChart;
