import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import Header from '../Components/Header';
import BgImage from '../Components/BgImage';


const CreditEducationPdf = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            {/* <View className='px-5'>
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
            </View> */}

            <Header/>


            <ScrollView className='px-5 mt-1 mb-12'>
                <Text className='text-black font-semibold text-[15px] my-2'>Chapter 11: Harnessing Consumer Laws for Credit</Text>
                <Text >11.1 Understanding the Fair Credit Reporting Act (FCRA) and Its Provisions at regulating it collection, dissemination, and usto of consumer credit incoronations ati a credit riotes sinder this important its essential to help consumers understand the FCRA and their</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>Why It Matters</Text>
                <Text>"The FCRA provides consumers with important rights and protections regarding their credit information, ensuring accuracy, fairness, and privacy in credit reporting practices. By understanding the FCRA, consumers can advocate for their rights and take action to protect their credit profiles." - Fair Isaac Corporation</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>How-to:</Text>
                <Text>Provide an overview of the FCRA, its history, and its primary objectives, such as promoting accuracy and fairness in credit reporting, protecting consumer privacy, and facilitating access to credit information.spain acuries, and lin CRA Sharing of their croi himation ces third padit reports,
                Offer guidance on how consumers can exercise their rights under the FCRA, such as requesting free annual credit reports, disputing inaccurate information, and filing complaints with regulatory agencies or seeking legal recourse for violations</Text>

                <Text className='text-black font-semibold text-[15px] my-2'>11.2 Exploring Key Rights and Protections Under 15 USC 1681</Text>

                <Text>15 USC 1681 is a critical section of the United States Code that outlines various rights and protections for consumers regarding credit reporting and privacy.</Text>
            </ScrollView>
            <MenuBar />
            <BgImage/>
        </SafeAreaView>

    );
};

export default CreditEducationPdf;
