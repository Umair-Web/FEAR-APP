import React, { useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet, Animated, Dimensions, ImageBackground } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import { ProgressChart } from 'react-native-chart-kit';
const { width } = Dimensions.get('window');

const CreditPortal = () => {
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



    const screenWidth = width

    const chartConfig1 = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(255, 123, 1, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const chartConfig2 = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(31, 220, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const chartConfig3 = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(11, 228, 202, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };


    return (
        <SafeAreaView className='bg-white flex-1'>
            <View style={styles.container}>
                <Animated.Text style={[styles.text, { transform: [{ translateX }] }]}>
                    Trump Media & Tech DJT 61.90 +11.95 Robinsons Pvt.Ltd BTC -29.83
                </Animated.Text>
            </View>

               {/* Header */}
               <View className='px-5 mt-8 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>


            <ScrollView className='mb-16'>
             
                <View className='px-5'>
                    <Text className="text-4xl font-semibold text-black mt-1">Credit Portal</Text>

                    <Text className="text-sm font-normal text-black mt-1">Your all in one hub for Credit management</Text>

                    <View className='items-center mt-2 flex-row justify-between'>
                        <ProgressChart
                            data={{
                                data: [0.701], // Pass an array, even if it's a single value
                            }}
                            width={screenWidth * 0.29}
                            height={100}
                            strokeWidth={10}
                            radius={40}
                            hideLegend={true}
                            chartConfig={chartConfig1}
                        />

                        <ProgressChart
                            data={{
                                data: [0.72], // Pass an array, even if it's a single value
                            }}
                            width={screenWidth * 0.29}
                            height={100}
                            strokeWidth={10}
                            radius={40}
                            hideLegend={true}
                            chartConfig={chartConfig2}
                        />

                        <ProgressChart
                            data={{
                                data: [0.75], // Pass an array, even if it's a single value
                            }}
                            width={screenWidth * 0.29}
                            height={100}
                            strokeWidth={10}
                            radius={40}
                            hideLegend={true}
                            chartConfig={chartConfig3}
                        />

                    </View>

                    <View className='items-center  flex-row justify-between'>
                        <Text width={screenWidth * 0.29} className='font-semibold text-lg text-center text-black '>
                            Experian
                        </Text>
                        <Text width={screenWidth * 0.29} className='font-semibold text-lg text-center text-black '>
                            Equifax
                        </Text>
                        <Text width={screenWidth * 0.29} className='font-semibold text-lg text-center text-black '>
                            TransUnion
                        </Text>

                    </View>

                    <View className='items-center flex-row justify-between bottom-[99px]'>
                        <Text width={screenWidth * 0.29} className='font-bold text-[22px] text-center text-black '>
                            700
                        </Text>
                        <Text width={screenWidth * 0.29} className='font-bold text-[22px] text-center text-black '>
                            700
                        </Text>
                        <Text width={screenWidth * 0.29} className='font-bold text-[22px] text-center text-black '>
                            700
                        </Text>

                    </View>

                    <View>
                        <View className=' h-[45px] flex-row items-center justify-between  gap-x-1'>
                            <View className=' bg-white border w-1/2  border-black rounded-lg p-2'>

                                <Text className='text-base font-semibold text-black'>FICO Score
                                    Module</Text>
                            </View>
                            <View className=' bg-white border w-1/2   border-black rounded-lg p-2'>

                                <Text className='text-base text-center font-semibold text-black'>News</Text>
                            </View>
                        </View>

                        <View>
                            <Text className='text-[20px] mt-1 font-semibold text-black'>Access more of the Credit Portal</Text>

                            <View className='flex-row items-center'>
                                <View className='w-2/3'>
                                    <Text className='text-sm font-normal text-black'>With the F.E.A.R app, you can have access to relevant reports, consumer laws, dispute laws and education regarding credit.</Text></View>
                                <View className=' bg-white border w-1/3  border-black rounded-lg p-2'>

                                    <Text className='text-base font-semibold text-black text-center'>History</Text>
                                </View>
                            </View>
                        </View>

                        <View className='flex-row justify-between mt-2'>
                            <View className='relative'>
                                <Image className='w-[150px] h-[100px] rounded-2xl' source={require("../assets/random.jpeg")} />
                                <View className='flex-row items-end justify-between absolute w-32 top-6 left-2 '>
                                    <View className='flex-col items-start gap-y-2'>
                                        <Image className='w-10 h-10' source={require("../assets/report.png")} />
                                        <Text className='font-normal text-white text-[17px]'>Reports</Text>
                                    </View>

                                    <View>
                                       <Image className='w-7 h-7' source={require("../assets/next.png")}/>
                                    </View>

                                </View>
                            </View>


                            <View className='relative'>
                                <Image className='w-[150px] h-[100px] rounded-2xl' source={require("../assets/random.jpeg")} />
                                <View className='flex-row items-end justify-between absolute w-32 top-6 left-2 '>
                                    <View className='flex-col items-start gap-y-2'>
                                        <Image className='w-10 h-10' source={require("../assets/Law.png")} />
                                        <Text className='font-normal text-white text-[17px]'>Laws 
                                        </Text>
                                       
                                    </View>

                                    <View>
                                       <Image className='w-7 h-7' source={require("../assets/next.png")}/>
                                    </View>

                                </View>
                            </View>

                        </View>

                        <View className='flex-row justify-between mt-2 '>
                            <View className='relative'>
                                <Image className='w-[150px] h-[100px] rounded-2xl' source={require("../assets/random.jpeg")} />
                                <View className='flex-row items-end justify-between absolute w-32 top-6 left-2 '>
                                    <View className='flex-col items-start gap-y-2'>
                                        <Image className='w-10 h-10' source={require("../assets/dispute.png")} />
                                        <Text className='font-normal text-white text-[17px]'>Dispute</Text>
                                    </View>

                                    <View>
                                       <Image className='w-7 h-7' source={require("../assets/next.png")}/>
                                    </View>

                                </View>
                            </View>


                            <View className='relative'>
                                <Image className='w-[150px] h-[100px] rounded-2xl' source={require("../assets/random.jpeg")} />
                                <View className='flex-row items-end justify-between absolute w-32 top-6 left-2 '>
                                    <View className='flex-col items-start gap-y-2'>
                                        <Image className='w-10 h-10' source={require("../assets/Education.png")} />
                                        <Text className='font-normal text-white text-[17px]'>Education 
                                        </Text>
                                       
                                    </View>

                                    <View>
                                       <Image className='w-7 h-7' source={require("../assets/next.png")}/>
                                    </View>

                                </View>
                            </View>

                        </View>


                    </View>



                    

                </View>




            </ScrollView>
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

export default CreditPortal;
