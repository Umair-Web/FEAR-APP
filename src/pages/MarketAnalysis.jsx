import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from 'react-native-gifted-charts';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const MarketAnalysis = () => {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [beds, setBeds] = useState("");
    const [year, setYear] = useState("");
    const carddata = [{ value: 1 }, { value: 10 }, { value: 5 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 43 }]

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View className='relative'>
                        <Image className='w-full h-52 rounded-md' source={require("../assets/home.jpg")} />

                        <View className='flex-col items-start absolute left-2'>
                            <Text className='font-semibold text-white text-xl'>Property Market</Text>

                        </View>

                        <View className='flex-row flex-wrap full gap-2 absolute bottom-2 left-2'>
                            <View className='w-[45%] h-8 border border-[#005686] bg-white rounded-3xl p-1'>
                                <View className='flex-row items-center justify-between'>
                                    <TextInput
                                        className='text-xs text-[#003655] p-1 font-normal'
                                        placeholder="Search by city"
                                        placeholderTextColor="#003655"
                                        value={city}
                                        onChangeText={setCity}
                                    />
                                    <Image className='w-3 h-3' source={require("../assets/location.png")} />
                                </View>
                            </View>

                            <View className='w-[45%] h-8 border border-[#005686] bg-white rounded-3xl p-1'>
                                <View className='flex-row items-center justify-between'>
                                    <TextInput
                                        className='text-xs text-[#003655] p-1 font-normal'
                                        placeholder="Search by location"
                                        placeholderTextColor="#003655"
                                        value={location}
                                        onChangeText={setLocation}
                                    />
                                    <Image className='w-3 h-3' source={require("../assets/location.png")} />
                                </View>
                            </View>


                            <View className='w-[45%] h-8 border border-[#005686] bg-white rounded-3xl p-1'>
                                <View className='flex-row items-center justify-between'>
                                    <TextInput
                                        className='text-xs text-[#003655] p-1 font-normal'
                                        placeholder="Property type"
                                        placeholderTextColor="#003655"
                                        value={propertyType}
                                        onChangeText={setPropertyType}
                                    />
                                    <Image className='w-4 h-4' source={require("../assets/property.png")} />
                                </View>
                            </View>

                        </View>

                        <View className='flex-row absolute gap-x-2 left-[30%] top-[20%] items-center justify-center'>
                            <View className='bg-[#003655]/80 px-6 py-2 rounded-xl'>
                                <Text className='font-normal text-[10px] text-white'>Buy</Text>
                            </View>
                            <View className='bg-[#003655]/80 px-6 py-2 rounded-xl'>
                                <Text className='font-normal text-[10px] text-white'>Rent</Text>
                            </View>
                        </View>





                    </View>

                    <Text className='font-semibold text-sm text-[#003655] mt-2'>Top trending locations</Text>

                    <View className='flex-row flex-wrap full gap-4 mt-2'>
                        <View className='w-[45%] flex-col items-start bg-[#899460]/60 p-2 rounded-xl'>

                            <Text className='font-bold text-white text-[13px]'>1-Florida </Text>

                            <View className=' right-6'>
                                <LineChart
                                    areaChart
                                    curved
                                    isAnimated
                                    data={carddata}
                                    height={50}
                                    width={screenWidth * 0.4}
                                    spacing={12}
                                    initialSpacing={0}
                                    color1={"#216083"}
                                    hideDataPoints
                                    hideAxesAndRules
                                    startFillColor1={"#216083"}
                                    endFillColor1='#216083'
                                    startOpacity={0.9}
                                    endOpacity={0.9} />
                            </View>


                            <Text className='font-bold text-xl text-[#00325F]'>25%</Text>


                            <Text className='font-medium text-[#353535] text-[13px]'>Of total searches</Text>


                        </View>

                        <View className='w-[45%] flex-col items-start bg-[#899460]/60 p-2 rounded-xl'>

                            <Text className='font-bold text-white text-[13px]'>1-Florida </Text>

                            <View className=' right-6'>
                                <LineChart
                                    areaChart
                                    curved
                                    isAnimated
                                    data={carddata}
                                    height={50}
                                    width={screenWidth * 0.4}
                                    spacing={12}
                                    initialSpacing={0}
                                    color1={"#216083"}
                                    hideDataPoints
                                    hideAxesAndRules
                                    startFillColor1={"#216083"}
                                    endFillColor1='#216083'
                                    startOpacity={0.9}
                                    endOpacity={0.9} />
                            </View>


                            <Text className='font-bold text-xl text-[#00325F]'>25%</Text>


                            <Text className='font-medium text-[#353535] text-[13px]'>Of total searches</Text>


                        </View>


                        <View className='w-[45%] flex-col items-start bg-[#899460]/60 p-2 rounded-xl'>

                            <Text className='font-bold text-white text-[13px]'>1-Florida </Text>

                            <View className=' right-6'>
                                <LineChart
                                    areaChart
                                    curved
                                    isAnimated
                                    data={carddata}
                                    height={50}
                                    width={screenWidth * 0.4}
                                    spacing={12}
                                    initialSpacing={0}
                                    color1={"#216083"}
                                    hideDataPoints
                                    hideAxesAndRules
                                    startFillColor1={"#216083"}
                                    endFillColor1='#216083'
                                    startOpacity={0.9}
                                    endOpacity={0.9} />
                            </View>


                            <Text className='font-bold text-xl text-[#00325F]'>25%</Text>


                            <Text className='font-medium text-[#353535] text-[13px]'>Of total searches</Text>


                        </View>

                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default MarketAnalysis;
