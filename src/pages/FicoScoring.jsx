import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';



const FICO_DATA = [
    {
        scoreRange: "<580",
        rating: "Poor",
        description: [
            "Well below average.",
            "Demonstrates to lenders that you’re a risky borrower."
        ]
    },
    {
        scoreRange: "580-669",
        rating: "Fair",
        description: [
            "Below average.",
            "Many lenders will approve loans."
        ]
    },
    {
        scoreRange: "670-739",
        rating: "Good",
        description: [
            "Near or slightly above average.",
            "Lenders consider this a good score."
        ]
    },
    {
        scoreRange: "740-799",
        rating: "Very Good",
        description: [
            "Above average.",
            "Demonstrates to lenders you’re a very dependable borrower."
        ]
    },
    {
        scoreRange: "800+",
        rating: "Exceptional",
        description: [
            "Well above average.",
            "Demonstrates to lenders you’re an exceptional borrower."
        ]
    }
];

const FicoScoring = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='bg-[#00325F]/60 '>
                        <View className='flex-row px-2 py-3 border-b border-gray-200'>
                            <View className='w-[30%]'>
                                <Text className='text-black font-black text-sm'>FICO SCORE</Text>
                            </View>
                            <View className='w-[20%]'>
                                <Text className='text-black font-black text-sm'>Rating</Text>
                            </View>
                            <View className='w-[50%]'>
                                <Text className='text-black font-black text-sm'>What does score means</Text>
                            </View>
                        </View>

                        {FICO_DATA.map((item, index) => (
                            <View key={index} className='flex-row px-2 py-3 border-b border-gray-200'>
                                <View className='w-[30%]'>
                                    <Text className='text-black font-medium text-xs'>{item.scoreRange}</Text>
                                </View>
                                <View className='w-[20%]'>
                                    <Text className='text-black font-medium text-[11px]'>{item.rating}</Text>
                                </View>
                                <View className='w-[50%] flex-col items-start'>
                                    {item.description.map((desc, idx) => (
                                        <Text key={idx} className='text-black font-medium text-xs'>• {desc}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <View className=' items-center mt-2'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 10 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity onPress={()=>(navigation.navigate("RichKnowledge"))} className='w-[200px] h-[40px] flex-row justify-center items-center' >
                            <Text className='text-white text-[17px] font-normal'>Contact Rich</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default FicoScoring;
