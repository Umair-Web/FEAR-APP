import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';

const MoneyManagement1 = () => {
    const legalInfo = [
        'U.S. Constitution and Federal Statutes',
        '* Consumer Credit Protection Act - 15 U.S.C, Chapter 41',
        '* Truth In Lending Act - 15 U.S.C. § 1601',
        '* Fair Credit Reporting Act - 15 U.S.C. § 1681',
        '* Fair Credit Billing Act - 15 U.S.C. § 1637',
        '* Equal Credit Opportunity Act - 15 U.S.C. §§ 1691 - 1691e',
        '* The Fair Credit Debt Collection Act - 15 U.S.C. §§ 1692 - 16920',
        '* CRS Annotated Constitution',
        'Federal Agency Regulations',
        '* Code of Federal Regulations: 12 C.F.R. - Banks and Banking',
        'Federal Judicial Decisions',
        '* U.S. Supreme Court:',
        '* Recent Decisions on Consumer Credit',
        '* liibulletin Oral Argument Previews',
        '* U.S. Circuit Courts of Appeals:',
        '* Recent Decisions on Consumer Credit',
    ];
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

            <ScrollView className='px-5 mt-3'>
                {legalInfo.map((item, index) => (
                    <Text key={index} className='text-[#67707d] font-medium text-[15px] my-1'>
                        {item}
                    </Text>
                ))}

                <View className='items-end'>
                    {/* <View className='bg-[#D9D9D9] w-11 h-5 rounded-md items-center justify-center'>
                        <Image className='w-6 h-6' source={require("../assets/right-arrow.png")}/>
                    </View> */}
                </View>
            </ScrollView>

            <MenuBar />
        </SafeAreaView>
    );
};

export default MoneyManagement1;
