import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image,Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
const {height:screenHeight}=Dimensions.get("window")

const ConsumerCredit = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            <View className='px-5'>
                <View className=' mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>
            </View>


            <ScrollView className='px-5 mt-1' style={{height:screenHeight*0.8}}>
                <Text className='text-black font-semibold text-[16px] my-2'>Consumer Credit</Text>
                <Text className='text-[#374151] font-medium text-[15px] my-2'>Consumer credit refers to the ability of a consumer to access a loan. The most common form of credit used by consumers is a credit card account issued by a financial institution. Merchants may also provide direct financing for products which they sell.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>Banks may directly finance purchases through loans and mortgages.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>The law of consumer credit is primarily embodied in federal and state statutes. These laws protect consumers and provide guidelines for the credit industry.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>States have passed various statutes regulating consumer credit. For example, the Uniform Consumer Credit Code (UCCC) has been adopted as law in eleven states and Guam. Its purpose is to protect consumers obtaining credit transactions and ensure that adequate credit is available. To do this, the UCCC includes provisions outlawing waiving rights through contracts and sets caps on interest rates.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>In 1968 Congress passed the Consumer Credit Protection Act to further regulate the consumer credit industry.</Text>
                
            </ScrollView>
            <MenuBar />
        </SafeAreaView>

    );
};

export default ConsumerCredit;
