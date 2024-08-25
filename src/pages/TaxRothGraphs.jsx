import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from 'react-native-gifted-charts';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");


const TaxRothGraphs = () => {

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
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default TaxRothGraphs;
