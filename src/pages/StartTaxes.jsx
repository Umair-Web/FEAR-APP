import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const StartTaxes = () => {

    const financialTools = [
        { id: 1, title: 'View 1040 PDF' },
        { id: 2, title: 'View RECEIPT' },
        { id: 3, title: 'FILE AN AMENDMENT' },
        { id: 4, title: 'FILE AN EXTENSION' },


    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='bg-[#004B90]/20 rounded-[36px] mb-4 items-center justify-center py-5'>
                        <Text className='font-semibold text-2xl text-[#003655]'>WELCOME TO H&R</Text>

                        <Text className='font-semibold text-2xl mt-2 text-[#003655]'>BLOCK TAX PREP</Text>

                        <View className='bg-[#003656] w-[60%] mt-4 items-center justify-center rounded-2xl p-2'>

                            <Text className='font-semibold text-lg text-white'>Start Taxes</Text>
                        </View>
                    </View>

                    {financialTools.map((tool) => (
                        <View key={tool.id} className='bg-[#003655] my-3 h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                            <Text className='font-medium text-base text-white w-11/12'>{tool.title}</Text>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    ))}


                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default StartTaxes;
