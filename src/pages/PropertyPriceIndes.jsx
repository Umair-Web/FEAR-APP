import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from "react-native-gifted-charts";



const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const PropertyPriceIndes = () => {
    const [selected, setSelected] = useState('Price USD');

    const handleSelect = (value) => {
        setSelected(value);
    };


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
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="mt-2 flex-row items-center  rounded-lg">
                        <TouchableOpacity
                            onPress={() => handleSelect('Price USD')}
                            className={`px-4 py-2  w-1/3 ${selected === 'Price USD' ? 'border-b-2 border-blue-600 ' : ''
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === 'Price USD' ? "text-blue-600" : "text-black"}`} >Price USD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelect('Price SQR Feet')}
                            className={`px-4 py-2  w-[40%] ${selected === 'Price SQR Feet' ? 'border-b-2 border-blue-600 ' : ''
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === 'Price SQR Feet' ? "text-blue-600" : "text-black"}`} >Price SQR Feet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSelect('Index')}
                            className={`px-2 py-2  w-1/3 ${selected === 'Index' ? 'border-b-2 border-blue-600 ' : ''
                                }`}
                        >
                            <Text className={`text-sm font-medium text-center  ${selected === 'Index' ? "text-blue-600" : "text-black"}`} >Index</Text>
                        </TouchableOpacity>
                    </View>


                    <View className=''>
                        <View style={{
                            marginTop: 5,
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

                    <Text className='font-medium text-xl text-[#003655] mt-3'>Current Price</Text>

                    <Text className='font-extrabold text-[22px] text-[#003655] mt-1'>$521,652</Text>

                    <Text className='font-normal text-base text-center text-[#003655] mt-1'>Price change (August - May)</Text>

                    <View className='flex-row justify-between items-center mt-4'>
                        <View className=' border-l-[5px] border-[#ED5B75] flex-col items-start'>
                            <Text className='text-base ml-2 text-[#272727] font-bold'>6 months ago</Text>
                            <Text className='text-sm ml-2 text-[#003655] font-semibold'>$ 3900,000</Text>
                        </View>

                        <Image className='w-4 h-4' source={require("../assets/right-arrow-gray.png")}/>
                    </View>


                    <View className='flex-row justify-between items-center mt-4'>
                        <View className=' border-l-[5px] border-[#ED5B75] flex-col items-start'>
                            <Text className='text-base ml-2 text-[#272727] font-bold'>12 months ago</Text>
                            <Text className='text-sm ml-2 text-[#003655] font-semibold'>$ 3900,000</Text>
                        </View>

                        <Image className='w-4 h-4' source={require("../assets/right-arrow-gray.png")}/>
                    </View>


                    <View className='flex-row justify-between items-center mt-4'>
                        <View className=' border-l-[5px] border-[#ED5B75] flex-col items-start'>
                            <Text className='text-base ml-2 text-[#272727] font-bold'>24 months ago</Text>
                            <Text className='text-sm ml-2 text-[#003655] font-semibold'>$ 3900,000</Text>
                        </View>

                        <Image className='w-4 h-4' source={require("../assets/right-arrow-gray.png")}/>
                    </View>

                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default PropertyPriceIndes;
