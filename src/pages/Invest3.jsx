import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const Invest3 = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text className='text-lg font-bold mb-4 text-center'>Diversification Analysis</Text>
                    
                    <View className='flex-col justify-between items-center mb-4'>
                        <View className='space-y-2'>
                            <View className='bg-blue-100 p-3 rounded-md'>
                                <Text className='font-bold text-blue-900'>Dir of Operations</Text>
                                <Text className='text-blue-900'>$157,000/Yr</Text>
                            </View>
                            <View className='bg-blue-100 p-3 rounded-md'>
                                <Text className='font-bold text-blue-900'>Social Security</Text>
                                <Text className='text-blue-900'>$32,000/Yr</Text>
                            </View>
                            <View className='bg-red-100 p-3 rounded-md'>
                                <Text className='font-bold text-red-900'>Active 401(k)</Text>
                                <Text className='text-red-900'>$200,000</Text>
                            </View>
                            <View className='bg-red-100 p-3 rounded-md'>
                                <Text className='font-bold text-red-900'>Inactive 401(k)</Text>
                                <Text className='text-red-900'>$50,000</Text>
                            </View>
                            <View className='bg-red-100 p-3 rounded-md'>
                                <Text className='font-bold text-red-900'>401k</Text>
                                <Text className='text-red-900'>$100,000</Text>
                            </View>
                            <View className='bg-green-100 p-3 rounded-md'>
                                <Text className='font-bold text-green-900'>Expected Inheritance</Text>
                                <Text className='text-green-900'>$40,000/Yr</Text>
                            </View>
                            <View className='bg-green-100 p-3 rounded-md'>
                                <Text className='font-bold text-green-900'>Brokerage Acc</Text>
                                <Text className='text-green-900'>$424,000/Yr</Text>
                            </View>
                        </View>

                        <Image className='w-[100px] h-[100px] rounded-full  my-5' source={require("../assets/download.jpeg")} />

                        <View className='space-y-2'>
                            <View className='bg-purple-100 p-3 rounded-md'>
                                <Text className='font-bold text-purple-900'>UL WTC RIDER</Text>
                                <Text className='text-purple-900'>$400,000</Text>
                            </View>
                            <View className='bg-yellow-100 p-3 rounded-md'>
                                <Text className='font-bold text-yellow-900'>UL JOSH TRUST</Text>
                                <Text className='text-yellow-900'>$500,000</Text>
                            </View>
                            <View className='bg-blue-100 p-3 rounded-md'>
                                <Text className='font-bold text-blue-900'>Teacher</Text>
                                <Text className='text-blue-900'>$75,000/Yr</Text>
                            </View>
                            <View className='bg-blue-100 p-3 rounded-md'>
                                <Text className='font-bold text-blue-900'>Owner Distribution</Text>
                                <Text className='text-blue-900'>$280,000/Yr</Text>
                            </View>
                            <View className='bg-blue-100 p-3 rounded-md'>
                                <Text className='font-bold text-blue-900'>Teacher Pensions</Text>
                                <Text className='text-blue-900'>$32,000/Yr</Text>
                            </View>
                            <View className='bg-blue-100 p-3 rounded-md'>
                                <Text className='font-bold text-blue-900'>Social Security</Text>
                                <Text className='text-blue-900'>$32,000/Yr</Text>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Invest3;
