import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';


const TaxEducationPdf = () => {

    const navigation = useNavigation();
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
            <Header />


            <ScrollView className='px-5 mt-1 mb-12'>
                <Text className='text-black font-semibold text-[15px] my-2'>1. What is Tax?</Text>
                <Text >Tax is a mandatory financial charge imposed by a government on individuals and businesses to fund various public expenditures. Taxes are essential for a country's development, as they support infrastructure, education, healthcare, and other public services</Text>
                <Text className='text-black font-semibold text-[15px] my-2'>Types of Taxes:</Text>
                <Text className='my-1'>Income Tax: Levied on individual and corporate earnings.</Text>
                <Text className='my-1'>Sales Tax: Applied to the sale of goods and services.</Text>
                <Text className='my-1'>Property Tax: Based on property ownership.</Text>
                <Text className='my-1'>Excise Tax: Imposed on specific goods, such as alcohol and tobacco.</Text>
                <Text className='my-1'>Payroll Tax: Deducted from employees' salaries to fund social security and Medicare.</Text>
                <Text className='my-1'>Capital Gains Tax: Charged on the profit from the sale of assets or investments.</Text>


                <Text className='text-black font-semibold text-[15px] my-2'>3. Why Do We Pay Taxes?</Text>
                <Text className='my-1'>Taxes are essential for funding government activities and public services, such as:</Text>


                <Text className='my-1'>Infrastructure:Building and maintaining roads, bridges, and public transportation.</Text>


                <Text className='my-1'>Healthcare:Providing medical services and facilities.</Text>

                <Text className='my-1'>Defense: Supporting the military and national security.</Text>

                <Text className='my-1'>Social Services: Assisting low-income families, the elderly, and disabled individuals.</Text>


                <TouchableOpacity delayPressIn={1} onPress={() => (navigation.navigate("Calculator"))} className='border border-[#003655] rounded-lg p-1 mb-4 mt-4 w-[35px]' >
                    <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                </TouchableOpacity>
            </ScrollView>
            <MenuBar />
        </SafeAreaView>

    );
};

export default TaxEducationPdf;
