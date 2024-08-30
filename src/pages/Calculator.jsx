import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import Slider from '@react-native-community/slider';
const { height: screenHeight } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';



const { width: screenWidth } = Dimensions.get("window");

const Calculator = () => {
    const [range, setRange] = useState(0)
    const [range2, setRange2] = useState(0)
    const [range3, setRange3] = useState(0)
    const [range4, setRange4] = useState(0)
    const [range5, setRange5] = useState(0)
    const [range6, setRange6] = useState(0)

    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
                <TouchableOpacity onPress={() => (navigation.navigate("ROICalculator"))}
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

                    <View className='flex-col py-3 border-b border-gray-400  '>

                        <View className='flex-row justify-between'>
                            <Text className='font-normal  text-[#545151] text-[14px]'>PROPERTY EVALUATION</Text>

                            <Text className='font-bold text-black text-[14px]'>{range}</Text>

                        </View>

                        <View className='items-center' >

                            <Slider
                                style={{ width: screenWidth * 0.93, height: 40 }}
                                minimumValue={0}
                                maximumValue={10000}

                                minimumTrackTintColor="#165BAA"
                                maximumTrackTintColor="black"
                                onValueChange={setRange}
                                thumbTintColor={"#165BAA"}

                            />
                        </View>

                    </View>

                    <View className='flex-col py-3 border-b border-gray-400 mt-3  '>

                        <View className='flex-row justify-between'>
                            <Text className='font-normal  text-[#545151] text-[14px]'>INCOME</Text>

                            <Text className='font-bold text-black text-[14px]'>{range2}/Year</Text>

                        </View>

                        <View className='items-center' >

                            <Slider
                                style={{ width: screenWidth * 0.93, height: 40 }}
                                minimumValue={0}
                                maximumValue={10000}

                                minimumTrackTintColor="#165BAA"
                                maximumTrackTintColor="black"
                                onValueChange={setRange2}
                                thumbTintColor={"#165BAA"}

                            />
                        </View>

                    </View>

                    <View className='flex-col py-3 border-b border-gray-400 mt-3  '>

                        <View className='flex-row justify-between'>
                            <Text className='font-normal  text-[#545151] text-[14px]'>DOWN PAYMENT</Text>

                            <Text className='font-bold text-black text-[14px]'>{range3}%</Text>

                        </View>

                        <View className='items-center' >

                            <Slider
                                style={{ width: screenWidth * 0.93, height: 40 }}
                                minimumValue={0}
                                maximumValue={10000}

                                minimumTrackTintColor="#165BAA"
                                maximumTrackTintColor="black"
                                onValueChange={setRange3}
                                thumbTintColor={"#165BAA"}

                            />
                        </View>

                    </View>

                    <View className='flex-col py-3 border-b border-gray-400  mt-3 '>

                        <View className='flex-row justify-between'>
                            <Text className='font-normal  text-[#545151] text-[14px]'>MONTHLY DEBTS</Text>

                            <Text className='font-bold text-black text-[14px]'>${range4}/Month</Text>

                        </View>

                        <View className='items-center' >

                            <Slider
                                style={{ width: screenWidth * 0.93, height: 40 }}
                                minimumValue={0}
                                maximumValue={10000}

                                minimumTrackTintColor="#165BAA"
                                maximumTrackTintColor="black"
                                onValueChange={setRange4}
                                thumbTintColor={"#165BAA"}

                            />
                        </View>

                    </View>

                    <View className='flex-col py-3 border-b border-gray-400  mt-3 '>

                        <View className='flex-row justify-between'>
                            <Text className='font-normal  text-[#545151] text-[14px]'>LOAN TERMS</Text>

                            <Text className='font-bold text-black text-[14px]'>{range5} Years</Text>

                        </View>

                        <View className='items-center' >

                            <Slider
                                style={{ width: screenWidth * 0.93, height: 40 }}
                                minimumValue={0}
                                maximumValue={10000}

                                minimumTrackTintColor="#165BAA"
                                maximumTrackTintColor="black"
                                onValueChange={setRange5}
                                thumbTintColor={"#165BAA"}

                            />
                        </View>

                    </View>

                    <View className='flex-col py-3 border-b border-gray-400 mt-3  '>

                        <View className='flex-row justify-between'>
                            <Text className='font-normal  text-[#545151] text-[14px]'>PROPERTY EVALUATION</Text>

                            <Text className='font-bold text-black text-[14px]'>{range6}%</Text>

                        </View>

                        <View className='items-center' >

                            <Slider
                                style={{ width: screenWidth * 0.93, height: 40 }}
                                minimumValue={0}
                                maximumValue={10000}

                                minimumTrackTintColor="#165BAA"
                                maximumTrackTintColor="black"
                                onValueChange={setRange6}
                                thumbTintColor={"#165BAA"}

                            />
                        </View>

                    </View>

                    <View className='bg-[#165BAA] p-4 items-center justify-center rounded-full mt-5'>
                        <Text className='font-normal text-xl text-white'>Calculate</Text>
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Calculator;
