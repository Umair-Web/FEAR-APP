import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import MenuBar from '../Components/MenuBar';
import { useNavigation } from '@react-navigation/native';

const Hub = () => {
    const navigation = useNavigation();


    const translateX = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: Dimensions.get('window').width,
                duration: 20000, // Adjust the duration for speed
                useNativeDriver: true,
            }),
        ).start();
    }, [translateX]);

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View style={styles.container}>
                <Animated.Text style={[styles.text, { transform: [{ translateX }] }]}>
                    Trump Media & Tech DJT 61.90 +11.95 Robinsons Pvt.Ltd BTC -29.83
                </Animated.Text>
            </View>
            <View>
                <View className='px-5'>
                    <View className=' mt-8 flex-row items-center justify-between'>
                        <TouchableOpacity onPress={() => (navigation.goBack())}
                            className='py-2 px-4 rounded-2xl bg-black/10'>
                            <Image className="h-[16px] w-[18px]" source={require("../assets/back2.png")} />
                        </TouchableOpacity>
                        <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                        <Text className="text-[18px] font-normal text-black">David Walker</Text>
                        <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Notifications"))}><Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} /></TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Help"))}><Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} /></TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Settings"))}><Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} /></TouchableOpacity>
                    </View>
                    <Text className='text-sm text-black font-normal mt-2'>Your all in one hub for access to Trading and Investment, Real Time Info, and Stock News.
                    </Text>

                    <View className='items-center mt-2'>
                        <FastImage source={require("../assets/earth-revolve.gif")} style={{ width: 200, height: 200 }} />
                        <View className='absolute right-24 top-6 items-center'>
                            <Text className='text-sm text-white font-normal'>London</Text>
                            <View className='bg-[#01BF92] w-10 h-10 rounded-full items-center justify-center'>
                                <Text className='text-[8px] text-white font-normal'>SSE 0.93%</Text>
                            </View>
                        </View>
                        <View className='absolute left-24 top-20 items-center'>
                            <Text className='text-sm text-white font-normal'>New York</Text>
                            <View className='bg-[#FF0099] w-10 h-10 rounded-full items-center justify-center'>
                                <Text className='text-[8px] text-white font-normal'>NASDAQ 0.3%</Text>
                            </View>
                        </View>
                    </View>

                    <View className='items-center'>
                        <View className='w-full h-[45px] flex-row items-center mt-2  justify-around'>
                            <View className='w-2/5'>
                                <LinearGradient
                                    colors={['#01101D', '#0078BB']}
                                    style={{ shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 120, }}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    <TouchableOpacity delayPressIn={1} onPress={() => (navigation.navigate("Discover"))} className='items-center justify-center p-3' >
                                        <Text className='text-sm font-bold text-white'>Discover</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <TouchableOpacity delayPressIn={1} onPress={() => (navigation.navigate("Markets"))} className='flex-row items-center  w-2/5 justify-center bg-white border-[#003655] border-[1px] rounded-3xl p-3'>

                                <Text className='text-sm font-bold text-[#003655]'>Markets</Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='flex-row  items-center justify-between mt-2'>
                        <Text className='text-[15px] text-black font-normal'>Markets open</Text>
                        <Text className='text-[10px] text-gray-400 font-normal'>00:59:59 to market close</Text>
                    </View>

                    <View className='flex-row items-center justify-between gap-x-3 mt-2'>
                        <View>
                            <Text className='text-[15px] text-black font-semibold'>DJIA</Text>
                            <Text className='text-[15px] text-black font-normal'>38,546.63</Text>
                            <Text className='text-[15px] text-[#2CDC00] font-normal'>221.87(1.69%)</Text>
                        </View>
                        <View>
                            <Text className='text-[15px] text-black font-semibold'>S&P 600</Text>
                            <Text className='text-[15px] text-black font-normal'>58,987.3</Text>
                            <Text className='text-[15px] text-[#2CDC00] font-normal'>543.47(9.99%)</Text>
                        </View>
                        <View>
                            <Text className='text-[15px] text-black font-semibold'>NASDAQ</Text>
                            <Text className='text-[15px] text-black font-normal'>12,416.633</Text>
                            <Text className='text-[15px] text-[#2CDC00] font-normal'>7431.87(00.69%)</Text>
                        </View>
                    </View>

                </View>

            </View>
            <ScrollView className='mt-2 mb-10'>

                <TouchableOpacity onPress={()=>(navigation.navigate("Markets2"))} className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>Balances</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={()=>(navigation.navigate("Position"))} className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>Positions</Text>
                </TouchableOpacity>




                <TouchableOpacity onPress={()=>(navigation.navigate("TradingandInvesting"))} className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>Education</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>(navigation.navigate("TradingandInvestingEdu2"))} className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>Position & Market News</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>(navigation.navigate("DailyMarketUpdates"))} className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>Daily Market Updates</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>What is Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>What is Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>What is Finance</Text>
                </TouchableOpacity>
                <View className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>What is Finance</Text>
                </View>
                <View className='flex-row items-center border-b-4 border-gray-300 px-5 py-1'>
                    <Image className='w-[15px] h-[15px]' source={require("../assets/arrow-right-circle-balck.png")} />
                    <Text className='font-normal text-black text-base ml-3'>What is Finance</Text>
                </View>




            </ScrollView>
            <View className="w-full  absolute inset-0 justify-center items-center top-32 opacity-100 -z-20">
                <Image
                    className='w-full h-[330px]'
                    source={require('../assets/FearLogoBlurred.png')}
                />
            </View>
            <TouchableOpacity onPress={() => (navigation.navigate("AiAssistant"))} className='absolute bottom-12 right-5 '>
                <FastImage source={require("../assets/Robot.gif")} style={{ width: 80, height: 80 }} />

            </TouchableOpacity>

            <MenuBar />
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
        color: '#000',
    },
});

export default Hub;
