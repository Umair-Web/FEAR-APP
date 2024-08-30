import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';


const Insurance = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='flex-row justify-between'>
                        <View className=' items-center mt-2 '>
                            <LinearGradient
                                colors={['#2364ad', '#87bbf2']}
                                style={{ height: 160, width: screenWidth * 0.5, shadowColor: "#0078BB", borderRadius: 30, opacity: 0.85, alignItems: "center" }}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("InsuranceAgent1"))} className='flex-col items-center gap-y-10 p-2'>
                                    <Text className='font-medium text-white text-base'>
                                        Our Agents
                                    </Text>

                                    <View className='gap-y-2'>
                                        <Text className='font-normal text-white text-center text-xs'>Meet your exclusive insuarance advisor and advice</Text>

                                        <View className='flex-row items-center justify-between'>

                                            <Image className='w-[30px] h-[30px] rounded-full' source={require("../assets/download.jpeg")} />

                                            <Image className='w-[30px] h-[30px] rounded-full' source={require("../assets/download.jpeg")} />


                                            <Image className='w-[30px] h-[30px] rounded-full' source={require("../assets/download.jpeg")} />


                                            <Image className='w-[30px] h-[30px] rounded-full' source={require("../assets/download.jpeg")} />

                                            <View className='w-[30px] h-[30px] rounded-full bg-[#9897d5] border border-white items-center justify-center'>
                                                <Text className='font-medium text-xs text-black'>+50</Text>
                                            </View>



                                        </View>
                                    </View>

                                </TouchableOpacity>


                            </LinearGradient>
                        </View>

                        <View className=' items-center mt-2 '>
                            <LinearGradient
                                colors={['#2364ad', '#87bbf2']}
                                style={{ height: 160, width: screenWidth * 0.35, shadowColor: "#0078BB", borderRadius: 30, opacity: 0.85, alignItems: "center", justifyContent: "center" }}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate("InsuranceAgent1"))} className='items-center justify-center p-2 gap-y-2'>
                                    <Image className='w-6 h-6' source={require("../assets/chat.png")} />

                                    <Text className='font-semibold text-base text-center text-white'>
                                        Chat with
                                        expert
                                    </Text>

                                    <Text className='font-normal text-[10px] underline text-white'>
                                        Message Now
                                    </Text>



                                </TouchableOpacity>

                            </LinearGradient>
                        </View>
                    </View>

                    <View className='p-1'>
                        <View className='bg-[#DCF8E7]/70 mt-5 rounded-[30px] h-56 p-4 flex-col justify-between'>


                            <Text className='font-bold text-base text-black'><Text className='text-[#297248]'>92% </Text>of you saved an average of $25 <Text className='text-[#297248]'>when you switched to us.</Text></Text>

                            <Text className='font-semibold text-[10px] text-[#666666]'>96.6% of users happy with us.</Text>

                            <View className='flex-row items-center justify-between'>
                                <View className='flex-col items-start gap-y-2'>
                                    <Text className='text-[20px] text-[#ffdc64]'>★★★★★</Text>

                                    <Text className='font-semibold text-[#666666] text-[10px]'>4.5/5 reviews.</Text>
                                </View>

                                <View className="items-center justify-center p-2 rounded-xl bg-[#287247]/60">
                                    <Text className='font-bold text-base text-black'>Recommend Us</Text>
                                </View>
                            </View>


                        </View>



                    </View>



                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className='mt-4 gap-x-4'>

                        <LinearGradient
                            colors={['#2364ad', '#87bbf2']}
                            style={{ height: 160, width: screenWidth * 0.33, shadowColor: "#0078BB", borderRadius: 30, opacity: 0.9, alignItems: "center", justifyContent: "center" }}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <View className='items-center justify-center p-2 gap-y-2'>
                                <View className="rounded-full bg-[#CDCCFA] w-12 h-12 items-center justify-center">
                                    <Image className='w-5 h-5' source={require("../assets/star2.png")} />

                                </View>

                                <Text className='font-semibold text-base text-center text-white'>
                                    Most popular
                                    plans
                                </Text>

                                <View className='items-center justify-center px-3 rounded-2xl py-1 bg-[#CAC9FF]'>
                                    <Text className='font-normal text-xs text-white'>
                                        click
                                    </Text>

                                </View>



                            </View>

                        </LinearGradient>

                        <LinearGradient
                            colors={['#2364ad', '#87bbf2']}
                            style={{ height: 160, width: screenWidth * 0.33, shadowColor: "#0078BB", borderRadius: 30, opacity: 0.9, alignItems: "center", justifyContent: "center" }}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <View className='items-center justify-center p-2 gap-y-2'>
                                <View className="rounded-full bg-[#CDCCFA] w-12 h-12 items-center justify-center">
                                    <Image className='w-5 h-5' source={require("../assets/coin.png")} />

                                </View>

                                <Text className='font-semibold text-base text-center text-white'>
                                    Value for money plans
                                </Text>

                                <View className='items-center justify-center px-3 rounded-2xl py-1 bg-[#CAC9FF]'>
                                    <Text className='font-normal text-xs text-white'>
                                        click
                                    </Text>

                                </View>



                            </View>

                        </LinearGradient>


                        <LinearGradient
                            colors={['#2364ad', '#87bbf2']}
                            style={{ height: 160, width: screenWidth * 0.33, shadowColor: "#0078BB", borderRadius: 30, opacity: 0.9, alignItems: "center", justifyContent: "center" }}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <View className='items-center justify-center p-2 gap-y-2'>
                                <View className="rounded-full bg-[#CDCCFA] w-12 h-12 items-center justify-center">
                                    <Image className='w-5 h-5' source={require("../assets/coin.png")} />

                                </View>

                                <Text className='font-semibold text-base text-center text-white'>
                                    Value for money plans
                                </Text>

                                <View className='items-center justify-center px-3 rounded-2xl py-1 bg-[#CAC9FF]'>
                                    <Text className='font-normal text-xs text-white'>
                                        click
                                    </Text>

                                </View>



                            </View>

                        </LinearGradient>







                    </ScrollView>




                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Insurance;
