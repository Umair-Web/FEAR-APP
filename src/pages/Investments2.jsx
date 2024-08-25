import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from 'react-native-gifted-charts';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Investments2 = () => {
    const [selected, setSelected] = useState('Holdings');

    const handleSelect = (value) => {
        setSelected(value);
    };

    const lineData = [
        { value: 180, label: 'Jan', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 90, label: 'Feb', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 70, label: 'Mar', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 65, label: 'Apr', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 60, label: 'May', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 70, label: 'Jun', labelTextStyle: { color: 'black', fontSize: 8 }, },
    ];

    const lineData2 = [
        { value: 50, label: 'Jan', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 70, label: 'Feb', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 75, label: 'Mar', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 85, label: 'Apr', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 90, label: 'May', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 70, label: 'Jun', labelTextStyle: { color: 'black', fontSize: 8 }, },

    ];

    const lineData3 = [
        { value: 55, label: 'Jan', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 60, label: 'Feb', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 80, label: 'Mar', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 70, label: 'Apr', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 68, label: 'May', labelTextStyle: { color: 'black', fontSize: 8 }, },
        { value: 70, label: 'Jun', labelTextStyle: { color: 'black', fontSize: 8 }, },
    ];


    const data = [
        { id: '01.', category: 'Personal', amount: '25 Mar, 01.23 AM', change: '+$10,500%' },
        { id: '02.', category: 'Both IRA', amount: '20 Jan, 11.19 AM', change: '+$5000' },
        { id: '03.', category: '401K ', amount: '29 Jan, 12.01 AM', change: '-$2,500' },
        { id: '04.', category: 'Personal', amount: '02 feb, 05.00 AM', change: '+$9000' },
        { id: '05.', category: '401K', amount: '21 Apr, 09.45 AM', change: '-$1,500' },
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <Text className='font-bold text-base text-[#003655] px-6'>Investments</Text>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="mt-2 flex-row items-center  rounded-lg">
                        <TouchableOpacity
                            onPress={() => handleSelect('Holdings')}
                            className={`px-4 py-2  w-1/3 ${selected === 'Holdings' ? 'border-b-2 border-blue-600 ' : ''
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === 'Holdings' ? "text-blue-600" : "text-black"}`} >Holdings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelect('Balance')}
                            className={`px-4 py-2  w-1/3 ${selected === 'Balance' ? 'border-b-2 border-blue-600 ' : ''
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === 'Balance' ? "text-blue-600" : "text-black"}`} >Balance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelect('Expense')}
                            className={`px-4 py-2  w-1/3 ${selected === 'Expense' ? 'border-b-2 border-blue-600 ' : ''
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === 'Expense' ? "text-blue-600" : "text-black"}`} >Expense</Text>
                        </TouchableOpacity>
                    </View>

                    <View className=' bg-[#004B90]/20 p-3 border-b-2 border-white rounded-t-xl mt-4'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-semibold text-[#00325F] text-base'>History Tab</Text>
                            <Image className='w-5 h-5' source={require("../assets/settings/about-us.png")} />
                        </View>
                        <Text className='font-normal text-[#00325F] text-base'>$390,000</Text>
                    </View>


                    <View className=' bg-[#004B90]/20 p-3 rounded-b-xl'>
                        <View>
                            <LineChart
                                data={lineData}
                                verticalLinesColor="#fff" // Set the color of vertical lines
                                rulesColor={"#fff"}

                                data2={lineData2}
                                data3={lineData3}
                                height={250}
                                showVerticalLines
                                width={screenWidth * 0.65}
                                spacing={42}
                                initialSpacing={8}
                                color1="#165BAA"
                                color2="#A155B9"
                                color3="#F765A3"
                                textColor1="green"
                                rulesType='solid'
                                dataPointsHeight={6}
                                dataPointsWidth={6}
                                dataPointsColor1="#165BAA"
                                dataPointsColor2="#A155B9"
                                dataPointsColor3="#F765A3"
                                textShiftY={-2}
                                textShiftX={-5}
                                textFontSize={13}
                                yAxisTextStyle={{ color: 'black', fontSize: 13 }}
                                thickness={2}
                                yAxisLabelWidth={30}
                                xAxisLabelTextStyle={{ color: 'black', fontSize: 9 }}
                                yAxisThickness={0}
                                yAxisLabelCount={5}
                                maxValue={100}


                            />
                        </View>

                        <View className='ml-2 gap-y-2 flex-row justify-between mt-2'>
                            <View className='flex-row gap-x-2 items-center'>

                                <View className='w-3 h-3 rou bg-[#165BAA] rounded-full'></View>

                                <Text className='font-medium text-black text-xs'>PERSONAL</Text>

                            </View>


                            <View className='flex-row gap-x-2 items-center'>

                                <View className='w-3 h-3 rou bg-[#A155B9] rounded-full'></View>

                                <Text className='font-medium text-black text-xs'>IRA</Text>

                            </View>


                            <View className='flex-row gap-x-2 items-center'>

                                <View className='w-3 h-3 rou bg-[#F765A3] rounded-full'></View>

                                <Text className='font-medium text-black text-xs'>INVEST</Text>

                            </View>
                        </View>
                    </View>

                    <View className='bg-[#003655] rounded-2xl px-4 mt-2'>
                        <View className={` flex-row justify-between border-b border-white py-2`}>
                            <Text className='font-medium text-xs w-[23%] text-center text-white'>Description.</Text>

                            <Text className='font-medium text-xs w-[35%] text-center text-white'>Date</Text>

                            <Text className='font-medium text-xs w-[20%] text-center text-white'>Amount</Text>


                        </View>

                        <View>
                            {data.map((item) => (
                                <View key={item.id} className="flex-row justify-between py-2">

                                    <Text className="font-normal w-[20%] text-xs text-center text-white">{item.category}</Text>
                                    <Text className="font-normal text-xs w-[35%] text-center text-white">{item.amount}</Text>
                                    <Text
                                        className={`font-normal text-xs w-[20%] text-center ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                                            }`}
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

export default Investments2;
