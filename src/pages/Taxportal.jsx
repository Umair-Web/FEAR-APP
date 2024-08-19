import React, { useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet, Animated, Dimensions, ImageBackground } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const Taxportal = () => {


    const screenWidth = width
    const screenHeight = height




    return (
        <SafeAreaView className='bg-white flex-1'>


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


            <View>

                <View className='px-5'>

                    <Text className="text-lg font-normal text-black mt-1">Welcome back David!!</Text>

                    <Text className="text-4xl font-bold text-center text-black mt-1">Tax Portal</Text>


                    <View className='relative' >
                        <Image style={{ width: screenWidth * 0.9, height: 160, borderRadius: 10 }} source={require("../assets/newsback.png")} />

                        <Text className='absolute left-1/4 top-1/2 font-bold text-6xl text-white'>NEWS</Text>
                        <View className='absolute left-[18%] rounded-xl mt-2 bg-[#003655] p-1 px-2'>
                            <Text className='font-bold text-lg text-white'>Real-Time Tax Update</Text>
                        </View>
                    </View>


                    <View className='flex-row justify-between items-center my-1'>
                        <View className='items-center'>
                            <Image className='w-14 h-14' source={require("../assets/FearLogo.png")} />
                            <Text className='font-normal text-xs text-black'>Data and Research</Text>
                        </View>

                        <View className='items-center'>
                            <Image className='w-8 h-8' source={require("../assets/search3.png")} />
                            <Text className='font-normal text-xs text-black'>Latest</Text>
                        </View>



                    </View>










                </View>




            </View>
            <View className='h-[40%]' >
                <ScrollView className='px-5'  >



                    <View className='flex-col justify-between mt-2 gap-y-4'>
                        <View style={{ width: screenWidth * 0.9 }} className='relative'>
                            <Image style={{ width: screenWidth * 0.9 }} className=' h-[80px] rounded-3xl' source={require("../assets/random.jpeg")} />
                            <View style={{ width: screenWidth * 0.9 }} className='flex-row items-end justify-between absolute px-6 py-1'>
                                <View className='flex-col items-start gap-y-2'>
                                    <Image className='w-10 h-10' source={require("../assets/report.png")} />
                                    <Text className='font-normal text-white text-[17px]'>Tax Fillings</Text>
                                </View>

                                <View>
                                    <Image className='w-7 h-7' source={require("../assets/next.png")} />
                                </View>

                            </View>
                        </View>

                        <View style={{ width: screenWidth * 0.9 }} className='relative'>
                            <Image style={{ width: screenWidth * 0.9 }} className=' h-[80px] rounded-3xl' source={require("../assets/random.jpeg")} />
                            <View style={{ width: screenWidth * 0.9 }} className='flex-row items-end justify-between absolute px-6 py-1'>
                                <View className='flex-col items-start gap-y-2'>
                                    <Image className='w-10 h-10' source={require("../assets/report.png")} />
                                    <Text className='font-normal text-white text-[17px]'>Tax Codes</Text>
                                </View>

                                <View>
                                    <Image className='w-7 h-7' source={require("../assets/next.png")} />
                                </View>

                            </View>
                        </View>


                        <View style={{ width: screenWidth * 0.9 }} className='relative'>
                            <Image style={{ width: screenWidth * 0.9 }} className=' h-[80px] rounded-3xl' source={require("../assets/random.jpeg")} />
                            <View style={{ width: screenWidth * 0.9 }} className='flex-row items-end justify-between absolute px-6 py-1'>
                                <View className='flex-col items-start gap-y-2'>
                                    <Image className='w-10 h-10' source={require("../assets/report.png")} />
                                    <Text className='font-normal text-white text-[17px]'>Quarterly Audits</Text>
                                </View>

                                <View>
                                    <Image className='w-7 h-7' source={require("../assets/next.png")} />
                                </View>

                            </View>
                        </View>

                        <View style={{ width: screenWidth * 0.9 }} className='relative'>
                            <Image style={{ width: screenWidth * 0.9 }} className=' h-[80px] rounded-3xl' source={require("../assets/random.jpeg")} />
                            <View style={{ width: screenWidth * 0.9 }} className='flex-row items-end justify-between absolute px-6 py-1'>
                                <View className='flex-col items-start gap-y-2'>
                                    <Image className='w-10 h-10' source={require("../assets/report.png")} />
                                    <Text className='font-normal text-white text-[17px]'>Tax Education</Text>
                                </View>

                                <View>
                                    <Image className='w-7 h-7' source={require("../assets/next.png")} />
                                </View>

                            </View>
                        </View>

                        <View style={{ width: screenWidth * 0.9 }} className='relative'>
                            <Image style={{ width: screenWidth * 0.9 }} className=' h-[80px] rounded-3xl' source={require("../assets/random.jpeg")} />
                            <View style={{ width: screenWidth * 0.9 }} className='flex-row items-end justify-between absolute px-6 py-1'>
                                <View className='flex-col items-start gap-y-2'>
                                    <Image className='w-10 h-10' source={require("../assets/report.png")} />
                                    <Text className='font-normal text-white text-[17px]'>Tax Professionals</Text>
                                </View>

                                <View>
                                    <Image className='w-7 h-7' source={require("../assets/next.png")} />
                                </View>

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

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 25,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'orange',
    },
});

export default Taxportal;
