import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image,Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';
import BgImage from '../Components/BgImage';



const {height:screenHeight}=Dimensions.get("window")

const ConsumerCredit = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1'>

          <Header/>


            <ScrollView className='px-5 mt-1 relative' style={{height:screenHeight*0.8}}>
                <Text className='text-black font-semibold text-[16px] my-2'>Consumer Credit</Text>
                <Text className='text-[#374151] font-medium text-[15px] my-2'>Consumer credit refers to the ability of a consumer to access a loan. The most common form of credit used by consumers is a credit card account issued by a financial institution. Merchants may also provide direct financing for products which they sell.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>Banks may directly finance purchases through loans and mortgages.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>The law of consumer credit is primarily embodied in federal and state statutes. These laws protect consumers and provide guidelines for the credit industry.</Text>

                <Text className='text-[#374151] font-medium text-[15px] my-2'>States have passed various statutes regulating consumer credit. For example, the Uniform Consumer Credit Code (UCCC) has been adopted as law in eleven states and Guam. Its purpose is to protect consumers obtaining credit transactions and ensure that adequate credit is available. To do this, the UCCC includes provisions outlawing waiving rights through contracts and sets caps on interest rates.</Text>

                <Text className='text-[#374151] font-medium text-[15px] mt-1 mb-5'>In 1968 Congress passed the Consumer Credit Protection Act to further regulate the consumer credit industry.</Text>
                

                <TouchableOpacity    delayPressIn={1} onPress={()=>(navigation.navigate("MoneyManagement1"))} className='border border-[#003655] rounded-lg p-1 mb-44 w-[35px]' >
                                <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                </TouchableOpacity>
            </ScrollView>
            <MenuBar />
            <BgImage/>
        </SafeAreaView>

    );
};

export default ConsumerCredit;
