import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import { LineChart } from "react-native-gifted-charts";
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const ExpenseTracking = () => {
    const lineData = [
        { value: 180, label: 'Monday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 90, label: 'Tuesday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 70, label: 'Wednesday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 65, label: 'Thursday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 60, label: 'Friday', labelTextStyle: { color: 'white', fontSize: 9 }, },
    ];

    const lineData2 = [
        { value: 50, label: 'Monday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 70, label: 'Tuesday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 75, label: 'Wednesday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 85, label: 'Thursday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 90, label: 'Friday', labelTextStyle: { color: 'white', fontSize: 9 }, },
    ];

    const lineData3 = [
        { value: 55, label: 'Monday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 60, label: 'Tuesday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 80, label: 'Wednesday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 70, label: 'Thursday', labelTextStyle: { color: 'white', fontSize: 9 }, },
        { value: 68, label: 'Friday', labelTextStyle: { color: 'white', fontSize: 9 }, },
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
         <Header/>
            <View className='px-5' style={{height:screenHeight*0.8}} >
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <View className=' bg-[#003655]/70 p-3 border-b-2 border-white rounded-t-xl'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-medium text-white text-xl'>History Tab</Text>
                            <Image className='w-6 h-6' source={require("../assets/settings/about-us.png")} />
                        </View>
                        <Text className='font-medium text-white text-3xl'>Credits</Text>
                    </View>


                    <View className=' bg-[#003655]/70 p-3 rounded-b-xl'>
                        <View>
                            <LineChart
                                data={lineData}
                                data2={lineData2}
                                data3={lineData3}
                                height={250}
                                showVerticalLines
                                width={screenWidth * 0.61}
                                spacing={52}
                                initialSpacing={8}
                                color1="#f94144"
                                color2="orange"
                                color3="#FFD700"
                                textColor1="green"
                                dataPointsHeight={6}
                                dataPointsWidth={6}
                                dataPointsColor1="#f94144"
                                dataPointsColor2="orange"
                                dataPointsColor3="#FFD700"
                                textShiftY={-2}
                                textShiftX={-5}
                                textFontSize={13}
                                yAxisTextStyle={{ color: 'white', fontSize: 13 }}
                                curved
                                thickness={3}
                                yAxisLabelWidth={40}
                                xAxisLabelTextStyle={{ color: 'white', fontSize: 9 }}
                                yAxisThickness={0}
                                yAxisLabelCount={5}

                            />
                        </View>

                        <View className='ml-2 gap-y-2 flex-row justify-between mt-2'>
                            <View className='flex-row gap-x-2 items-center'>

                                <View className='w-3 h-3 rou bg-[#f94144] rounded-full'></View>

                                <Text className='font-medium text-white text-xs'>Florida</Text>

                            </View>


                            <View className='flex-row gap-x-2 items-center'>

                                <View className='w-3 h-3 rou bg-orange-400 rounded-full'></View>

                                <Text className='font-medium text-white text-xs'>California</Text>

                            </View>


                            <View className='flex-row gap-x-2 items-center'>

                                <View className='w-3 h-3 rou bg-[#FFD700] rounded-full'></View>

                                <Text className='font-medium text-white text-xs'>Texas</Text>

                            </View>
                        </View>
                    </View>
                    <View className='bg-[#003655]/90 rounded-xl mt-4 border-2 border-white
                '>
                        <View className='flex-row justify-between items-center px-2 py-2 border-b border-white'>
                            <Text className='font-bold text-xs text-white'>Description</Text>
                            <Text className='font-bold text-xs text-white'>Florida</Text>
                            <Text className='font-bold text-xs text-white'>California</Text>
                            <Text className='font-bold text-xs text-white'>Texas</Text>

                        </View>
                        <View className='flex-row justify-between items-center px-2 py-2'>
                            <Text className='font-normal text-xs text-white'>1234</Text>
                            <Text className='font-normal text-xs text-white'>71.323</Text>
                            <Text className='font-normal text-xs text-white'>51.94</Text>
                            <Text className='font-normal text-xs text-white'>41212</Text>

                        </View>

                        <View className='flex-row justify-between items-center px-2 py-2'>
                            <Text className='font-normal text-xs text-white'>1234</Text>
                            <Text className='font-normal text-xs text-white'>71.323</Text>
                            <Text className='font-normal text-xs text-white'>51.94</Text>
                            <Text className='font-normal text-xs text-white'>41212</Text>

                        </View>

                        <View className='flex-row justify-between items-center px-2 py-2'>
                            <Text className='font-normal text-xs text-white'>1234</Text>
                            <Text className='font-normal text-xs text-white'>71.323</Text>
                            <Text className='font-normal text-xs text-white'>51.94</Text>
                            <Text className='font-normal text-xs text-white'>41212</Text>

                        </View>

                        <View className='flex-row justify-between items-center px-2 py-2'>
                            <Text className='font-normal text-xs text-white'>1234</Text>
                            <Text className='font-normal text-xs text-white'>71.323</Text>
                            <Text className='font-normal text-xs text-white'>51.94</Text>
                            <Text className='font-normal text-xs text-white'>41212</Text>

                        </View>


                        <View className='flex-row justify-between items-center px-2 py-2'>
                            <Text className='font-normal text-xs text-white'>1234</Text>
                            <Text className='font-normal text-xs text-white'>71.323</Text>
                            <Text className='font-normal text-xs text-white'>51.94</Text>
                            <Text className='font-normal text-xs text-white'>41212</Text>

                        </View>
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default ExpenseTracking;
