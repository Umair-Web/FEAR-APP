import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { PieChart } from 'react-native-gifted-charts';
import { useNavigation } from '@react-navigation/native';


const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const ROICalculator = () => {

    const navigation = useNavigation();


    // State for selected option
    const [selectedOption, setSelectedOption] = useState(null);

    // State for each TextInput
    const [personalExpenses, setPersonalExpenses] = useState('');
    const [amountReturned, setAmountReturned] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const options = [
        { id: 1, label: 'Uses Dates' },
        { id: 2, label: 'Uses Length' },

    ];

    const renderDot = (color) => {
        return (
            <View
                style={{
                    height: 10,
                    width: 15,
                    backgroundColor: color,
                    marginRight: 10,
                }}
            />
        );
    };

    const pieData2 = [
        { value: 40, color: '#2CDC00' },
        { value: 60, color: '#165BAA' },
    ];

    const renderLegendComponent2 = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'col',
                        justifyContent: 'center',
                        marginBottom: 1,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: screenWidth * 0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#2CDC00')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 16 }}>Profit.</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: screenWidth * 0.7 }}>
                        {renderDot('#165BAA')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 16 }}>Invested.</Text>
                    </View>
                </View>
            </>
        );
    };

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
                <TouchableOpacity onPress={() => (navigation.navigate("TaxEducationLinks"))}
                    className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image className="h-[16px] w-[18px]" source={require("../assets/back2.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Notifications"))}><Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Help"))}><Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Settings"))}><Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} /></TouchableOpacity>
            </View>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-bold text-lg text-black'>ROI Calculator</Text>
                    <View className='bg-[#D9D9D9] p-4 rounded-2xl mt-3'>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-normal text-[15px] text-black'>Personal expenses</Text>
                            <View className='w-[45%] bg-white h-[28px] border-2 border-[#165BAA] rounded-lg text-black shadow-black shadow-2xl '>
                                <TextInput
                                    className='text-[12px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={personalExpenses}
                                    onChangeText={setPersonalExpenses}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between my-2'>
                            <Text className='font-normal text-[15px] text-black'>Amount Returned</Text>
                            <View className='w-[45%] bg-white h-[28px] border-2 border-[#165BAA] rounded-lg text-black shadow-black shadow-2xl '>
                                <TextInput
                                    className='text-[12px] text-black p-1 font-normal'
                                    placeholder="Type here.."
                                    placeholderTextColor="#A5A5A5"
                                    value={amountReturned}
                                    onChangeText={setAmountReturned}
                                />
                            </View>
                        </View>

                        <Text className='font-normal mt-2 text-[15px] text-black'>Investment Time</Text>

                        <View className='flex-row justify-around mt-2'>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option.id}
                                    className="flex-row items-center"
                                    onPress={() => setSelectedOption(option.id)}
                                >
                                    <View className="h-5 w-5 border-[1px] border-[#00325F] rounded-full items-center justify-center">
                                        {selectedOption === option.id && <View className="h-4 w-4 bg-[#165BAA] rounded-full" />}
                                    </View>
                                    <Text className="ml-2 text-sm font-normal text-[#4B4242]">{option.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-normal text-[15px] text-black'>From</Text>
                            <View className='w-[45%] bg-white h-[28px] border-2 border-[#165BAA] rounded-lg text-black shadow-black shadow-2xl '>
                                <TextInput
                                    className='text-[12px] text-black p-1 font-normal'
                                    placeholder="12/01/24"
                                    placeholderTextColor="#A5A5A5"
                                    value={fromDate}
                                    onChangeText={setFromDate}
                                />
                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-3'>
                            <Text className='font-normal text-[15px] text-black'>To</Text>
                            <View className='w-[45%] bg-white h-[28px] border-2 border-[#165BAA] rounded-lg text-black shadow-black shadow-2xl '>
                                <TextInput
                                    className='text-[12px] text-black p-1 font-normal'
                                    placeholder="12/01/24"
                                    placeholderTextColor="#A5A5A5"
                                    value={toDate}
                                    onChangeText={setToDate}
                                />
                            </View>
                        </View>

                        <View className='flex-row justify-center gap-x-3 items-center  mt-4'>
                            <TouchableOpacity className='bg-[#003655] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                <Text className='font-bold text-white text-[13px]'>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='bg-[#34A853] p-3 mt-4 rounded-2xl'>
                        <Text className='font-bold text-lg text-white '>Result</Text>
                    </View>

                    <View className='mt-4'>
                        <View className='flex-row bg-[#D9D9D9] rounded-t-lg mt-2'>
                            <Text className='w-[60%] font-normal text-black text-xs p-2'>Investment Gain</Text>
                            <View className='w-[40%] p-2 border-l border-gray-400'>
                                <Text className=' font-normal text-[#34A853] text-xs text-right'>$1,000.00</Text>
                            </View>
                        </View>

                        <View className='flex-row bg-[#F2F0F0]'>
                            <Text className='w-[60%] font-normal text-black text-xs p-2'>ROI</Text>
                            <View className='w-[40%] p-2 border-l border-gray-400'>
                                <Text className=' font-normal text-[#34A853] text-xs text-right'>100.00%</Text>
                            </View>
                        </View>

                        <View className='flex-row bg-[#D9D9D9]'>
                            <Text className='w-[60%] font-normal text-black text-xs p-2'>Annualized ROI</Text>
                            <View className='w-[40%] p-2 border-l border-gray-400'>
                                <Text className=' font-normal text-[#34A853] text-xs text-right'>16.54%</Text>
                            </View>
                        </View>

                        <View className='flex-row bg-[#F2F0F0] rounded-b-lg'>
                            <Text className='w-[60%] font-normal text-black text-xs p-2'>Investment Length</Text>
                            <View className='w-[40%] p-2 border-l border-gray-400'>
                                <Text className=' font-normal text-[#34A853] text-xs text-right'>4,529 years</Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            backgroundColor: '#fff',
                            paddingVertical: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 8,

                            marginTop: 20,
                        }}>
                        <PieChart
                            donut
                            innerRadius={65}
                            radius={80}
                            data={pieData2}
                            centerLabelComponent={() => {
                                return <Text style={{ fontSize: 18 }}>60%</Text>;
                            }}
                        />
                        {renderLegendComponent2()}
                    </View>

                    <TouchableOpacity delayPressIn={1} onPress={() => (navigation.navigate("Calculator"))} className='border border-[#003655] rounded-lg p-1 mb-4 mt-4 w-[35px]' >
                        <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default ROICalculator;
