import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const InsurancePolicyManagement = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-base text-black my-1'>Insurance Policy Management</Text>

                    <Text className='font-bold text-base text-[#374151] my-3'>1. Health Insurance Policy</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Policy Number: H123456789</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Provider: HealthCare Plus</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Coverage Amount: $500,000</Text>
                    <Text className='font-medium text-xs text-[#374151] my-1'>• Type: Health</Text>


                    <Text className='font-bold text-base text-[#374151] my-3'>2. Life Insurance Policy</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Policy Number: L987654321</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Provider: LifeSecure</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Coverage Amount: $1,000,000</Text>
                    <Text className='font-medium text-xs text-[#374151] my-1'>• Type: Life</Text>


                    <Text className='font-bold text-base text-[#374151] my-3'>3. Auto Insurance Policy</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Policy Number: A112233445</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Provider: AutoProtect</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Coverage Amount: $50,000</Text>
                    <Text className='font-medium text-xs text-[#374151] my-1'>• Type: Auto</Text>


                    <Text className='font-bold text-base text-[#374151] my-1'>4. Home Insurance Policy</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Policy Number: H998877665</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Provider: HomeSafe</Text>

                    <Text className='font-medium text-xs text-[#374151] my-1'>• Coverage Amount: $300,000</Text>
                    <Text className='font-medium text-xs text-[#374151] my-1'>• Type: Home</Text>

                    <View className=' items-center mt-3'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 10 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity className='w-[200px] h-[40px] flex-row justify-center items-center' >
                            <Text className='text-white text-[17px] font-normal'>Contact Rich</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>



                </ScrollView>

               
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default InsurancePolicyManagement;
