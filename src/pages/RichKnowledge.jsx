import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const RichKnowledge = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView className='' showsVerticalScrollIndicator={false}>

                    <View>
                        <Image style={{ width: screenWidth * 0.9, height: screenHeight * 0.45 }} source={require("../assets/GoldenFear.png")} />
                        <Image className='w-[100px] h-[100px] rounded-full absolute bottom-12  right-0' source={require("../assets/download.jpeg")} />

                    </View>

                    <View className='flex-row mt-4 gap-x-1 items-center'>
                        <View className='bg-[#003656] w-[48%]  items-center justify-center rounded-2xl p-2'>

                            <Text className='font-semibold text-lg text-white'>Personal Growth</Text>
                        </View>

                        <View className='bg-[#003656] w-[48%] items-center justify-center rounded-2xl p-2'>

                            <Text className='font-semibold text-lg text-white'>Finance</Text>
                        </View>
                    </View>


                    <View className='flex-row mt-4 gap-x-1 items-center'>
                        <View className='bg-[#003656] w-[48%]  items-center justify-center rounded-2xl p-2'>

                            <Text className='font-semibold text-lg text-white'>Expenses</Text>
                        </View>

                        <View className='bg-[#003656] w-[48%] items-center justify-center rounded-2xl p-2'>

                            <Text className='font-semibold text-lg text-white'>Income</Text>
                        </View>
                    </View>

                    <View className='mt-3 flex-row justify-between items-center'>
                        <Text className='font-bold text-xl text-[003658]'>About Rich Knowledge</Text>

                        <Image className="w-6 h-6" source={require("../assets/right-00325f.png")}/>
                    </View>

                    <Text className='text-[#808080] text-base font-semibold mt-3'>Rich Knowledge, that empowers individuals to take control of their finances and achieve generational wealth</Text>


                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default RichKnowledge;
