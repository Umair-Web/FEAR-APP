import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';



const { height: screenHeight } = Dimensions.get("window");

const InsuranceLinks = () => {

    const navigation = useNavigation();
    
    
    
    
    const financialTools = [
        { id: 15, title: 'Insurance policy management',Link:"InsurancePolicyManagement" },
        { id: 16, title: 'Premium tracking and payments',Link:"PremiumSummary" },
        { id: 17, title: 'Payment reminder',Link:"PaymentReminder" },
        { id: 18, title: 'Monthly expenses',Link:"LifeInsuranceCalculator" },
        { id: 19, title: 'Insurance agents',Link:"Insurance" },

    ];
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {financialTools.map((tool) => (
                        <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate(tool.Link))} key={tool.id} className='bg-[#003655] my-2 h-16  w-full flex-row items-center justify-between p-3 rounded-md'>
                            <Text className='font-medium text-base text-white w-11/12'>{tool.title}</Text>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default InsuranceLinks;
