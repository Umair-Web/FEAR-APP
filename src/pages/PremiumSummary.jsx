import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const PremiumSummary = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
         <Header/>
            <View className='px-5' style={{height:screenHeight*0.8}} >
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-base text-[#003655]'>Premium Tracking and Payments</Text>

                    <Text className='font-medium mt-2 text-base text-[#374151]'>Welcome to our premium policies overview. We offer two membership plans to suit your needs: Basic at $10 and Premium at $25. Below is a detailed summary of the premium amounts for each policy, including a breakdown of monthly, quarterly, and annual payments.</Text>

                    <Text className='font-semibold mt-3 text-base text-[#374151]'>Membership Plans</Text>


                    <Text className='font-medium underline mt-3 text-base text-[#374151]'>Basic Membership</Text>

                    <Text className='font-medium text-sm text-[#374151] my-1'>• Cost: $10 per month</Text>

                    <Text className='font-medium text-sm text-[#374151] my-1'>• Benefits:</Text>

                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Access to basic policy features</Text>
                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Limited coverage options</Text>
                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Standard customer support</Text>


                    <Text className='font-medium underline mt-3 text-base text-[#374151]'>Premium Membership</Text>

                    <Text className='font-medium text-sm text-[#374151] my-1'>• Cost: $25 per month</Text>

                    <Text className='font-medium text-sm text-[#374151] my-1'>• Benefits:</Text>

                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Access to all policy features</Text>
                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Comprehensive coverage options</Text>
                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Priority customer support</Text>
                    <Text className='font-medium text-sm text-[#374151] my-1'>     • Additional discounts and offers</Text>

                    

                    <Text className='font-medium mt-2 text-base text-[#374151]'>Choose the plan that best suits your needs and enjoy the peace of mind that comes with comprehensive coverage and premium service.</Text>


                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default PremiumSummary;
