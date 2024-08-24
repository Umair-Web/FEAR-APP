import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Money = () => {

    const financialOptions = [
        {
            id: 1,
            title: "Insurance",
            image: require("../assets/insurancebgimg.jpg"),
            icon: require("../assets/verified-user.png"),
            arrowIcon: require("../assets/right-arrow.png"),
        },
        {
            id: 2,
            title: "Saving Vehicles",
            image: require("../assets/savevehiclebgimg.jpg"),
            icon: require("../assets/car-locked.png"),
            arrowIcon: require("../assets/right-arrow.png"),
        },
        {
            id: 3,
            title: "Retirement",
            image: require("../assets/retirementbgimg.jpg"),
            icon: require("../assets/retirement.png"),
            arrowIcon: require("../assets/right-arrow.png"),
        },
        {
            id: 4,
            title: "Real Estate",
            image: require("../assets/realstatebgimg.jpg"),
            icon: require("../assets/realstate.png"),
            arrowIcon: require("../assets/right-arrow.png"),
        }
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-normal text-black text-lg'>Welcome back David!!</Text>
                    <Text className='font-bold text-black text-[26px]'>
                        Whealth Wise Manager.
                    </Text>
                    <Image className='w-full h-20 rounded-3xl mt-2' source={require("../assets/sample-image2.jpg")} />
                    <View className='bg-white border border-[#004770] p-2  mt-2 rounded-2xl items-center justify-center'>
                        <View className='flex-row items-center gap-x-4'>
                            <Text className='font-normal text-[#004770] text-base'>Live Financial Advisor</Text>
                            <Image className='w-6 h-6' source={require("../assets/right-00325f.png")} />
                        </View>

                    </View>
                    <View className=' mt-2'>
                        <LinearGradient
                            colors={['#01101D', '#0078BB']}
                            style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 120 }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <TouchableOpacity className='w-[300px] h-[40px] flex-row justify-center items-center' >
                                <Text className='text-white text-[17px] font-normal'>Budget</Text>

                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View className='flex-row items-center justify-between mb-3'>
                        <Text className='font-semibold text-xl text-black'>Analytics</Text>
                        <Text className='font-semibold text-sm text-black'>See all</Text>
                    </View>
                    <View className='flex-row flex-wrap full gap-4'>
                        {financialOptions.map(option => (
                            <View key={option.id} className='w-[45%] flex-col items-start'>
                                <View className='h-[104px] w-full relative'>
                                    <Image className='h-[104px] w-full rounded-lg object-contain' source={option.image} />
                                    <Image className='w-6 h-6 absolute left-2 top-2' source={option.icon} />
                                </View>
                                <View className='flex-row w-full justify-between items-center'>
                                    <Text className='font-normal text-base text-black'>{option.title}</Text>
                                    <View className='border border-[#004167] rounded-xl px-1'>
                                        <Image className='w-4 h-4' source={option.arrowIcon} />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View className='w-full mt-4 relative'>
                        <Image className=' h-[180px] object-contain w-full rounded-lg' source={require("../assets/sample-user.jpg")} />
                        <View className='flex-row w-[120px] justify-between items-center absolute left-[30%] top-[40%]'>
                            <Text className='font-normal text-base text-white'>Education</Text>
                            <View className='border border-white rounded-xl px-1'>
                                <Image className='w-4 h-4' source={require("../assets/right-arrow-white.png")} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Money;
