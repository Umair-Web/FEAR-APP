import React,{useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Slider from '@react-native-community/slider';
const DailyMarketUpdates = () => {
   
    const[range,setRange]=useState(0)
    const[range2,setRange2]=useState(0)
    const customLabel = (label, day) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'gray', fontSize: 10 }}>{day}</Text>
                <Text style={{ color: 'black', fontSize: 10 }}>{label}</Text>
            </View>
        );
    };

    const data = [
        { value: 500, labelComponent: () => customLabel('15', 'Mon') },
        { value: 1000, labelComponent: () => customLabel('16', 'Tue') },
        { value: 800, labelComponent: () => customLabel('17', 'Wed') },
        { value: 1200, labelComponent: () => customLabel('18', 'Thu') },
        { value: 2800, labelComponent: () => customLabel('19', 'Fri') },
        { value: 3500, labelComponent: () => customLabel('20', 'Sat') },
        { value: 3700, labelComponent: () => customLabel('21', 'Sun') },
        { value: 4000, labelComponent: () => customLabel('22', 'Mon') },
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View>
                {/* Header */}
                <View className='px-5 mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>

                <View className='px-5 mt-2'>
                    <View className='p-3 border-l-[5px] border-[#003655] flex-col items-start'>
                        <Text className='text-3xl text-[#003655] font-medium'>3,839.65</Text>
                        <Text className='text-xs text-[#003655] font-normal'>105(%0.8)</Text>
                    </View>
                </View>

                <View className='px-5'>
                    <View style={{
                        marginTop: 10,
                        paddingVertical: 10,
                        backgroundColor: '#fff',
                    }}>
                        <LineChart
                            thickness={3}
                            color="#165baa"
                            maxValue={5000}
                            noOfSections={5}
                            areaChart
                            yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
                            data={data}
                            curved
                            startFillColor={'#b9ddc5'}
                            endFillColor={'#b9ddc5'}
                            startOpacity={0.4}
                            endOpacity={0.4}
                            spacing={30}
                            backgroundColor="#fff"
                            rulesColor="lightgray"
                            rulesType="solid"
                            yAxisColor="lightgray"
                            xAxisColor="lightgray"
                            hideDataPoints={true}
                            dataPointsColor="#165baa"
                            dataPointsRadius={4}
                            dataPointsWidth={4}
                            showYAxisIndices

                        />
                    </View>
                </View>

            </View>

            <ScrollView className='px-5 mt-2 mb-20'>

                <Text className='font-semibold text-lg text-black border-b-2 border-black'>Stats</Text>


                <View className='flex-row items-center justify-between py-3  '>
                    <Text className='font-semibold text-[#83878C] text-[14px]'>Volume</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>8,425,777</Text>
                </View>

                <View className='flex-row items-center justify-between py-3  '>
                    <Text className='font-semibold text-[#83878C] text-[14px]'>Open Price</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>15.2</Text>

                    <Text className='font-semibold text-[#83878C] text-[14px]'>Last Day</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>15.12</Text>
                </View>


                <Text className='font-semibold text-lg text-black border-b-2 border-black'>Latest Quote</Text>




                <View className='flex-row items-center justify-between py-3   '>
                    <Text className='font-semibold text-[#83878C] text-[14px]'>Bid  Price</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>0</Text>

                    <Text className='font-semibold text-[#83878C] text-[14px]'>Ask Price</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>17.12</Text>
                </View>

                <View className='flex-row items-center justify-between py-3'>
                    <Text className='font-semibold text-[#83878C] text-[14px]'> Bid Vol</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>0</Text>

                    <Text className='font-semibold text-[#83878C] text-[14px]'>Ask Vol</Text>

                    <Text className='font-medium text-[#00325F] text-[14px]'>77,152</Text>
                </View>




                <Text className='font-semibold text-lg text-black border-b-2 border-black'>Day’s Range</Text>




                <View className='flex-row items-center justify-between py-3   '>
                    <Text className='font-semibold text-[#83878C] text-[14px]'>Day Low</Text>


                    

                    <Text className='font-semibold text-[#83878C] text-[14px]'>Day High</Text>


                </View>

                <View className='flex-row items-center py-3 justify-between  '>


                    <Text className='font-medium  text-[#00325F] text-[14px]'>1235</Text>

                    <View className='relative'>
                        <Text className='absolute font-medium text-[#00325F] left-[45%] bottom-8'>{range}</Text>
                        <Slider
                            style={{ width: 200, height: 40 }}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="black"
                            maximumTrackTintColor="black"
                            onValueChange={setRange}
                            thumbTintColor={"#00325F"}
                        />
                    </View>
                    <Text className='font-medium text-[#00325F] text-[14px]'>77,152</Text>
                </View>

                <Text className='font-semibold text-lg text-black border-b-2 border-black'>52-Week Range</Text>
                
                <View className='flex-row items-center justify-between py-3   '>
                    <Text className='font-semibold text-[#83878C] text-[14px]'>Day Low</Text>


                    

                    <Text className='font-semibold text-[#83878C] text-[14px]'>Day High</Text>


                </View>

                <View className='flex-row items-center py-3 justify-between  '>


                    <Text className='font-medium  text-[#00325F] text-[14px]'>1234</Text>

                    

                    <View className='relative'>
                        <Text className='absolute font-medium text-[#00325F] left-[45%] bottom-8'>{range2}</Text>
                        <Slider
                            style={{ width: 200, height: 40 }}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="black"
                            maximumTrackTintColor="black"
                            onValueChange={setRange2}
                            thumbTintColor={"#00325F"}
                        />
                    </View>
                    <Text className='font-medium text-[#00325F] text-[14px]'>5675</Text>
                </View>
                





            </ScrollView>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default DailyMarketUpdates;
