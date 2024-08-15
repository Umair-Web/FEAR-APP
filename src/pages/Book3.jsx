import React from 'react'
import { SafeAreaView, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native'
import MenuBar from '../Components/MenuBar'

const Book3 = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image source={require("../assets/notification.png")} />
                    <Image source={require("../assets/questionmark.png")} />
                    <Image source={require("../assets/settings.png")} />
                </View>
            
            <ScrollView className="px-5 mb-10">
                
                <View className='items-center ml-2 mt-2'>
                <View className='w-full h-[37px] flex-row items-center justify-between mt-2'>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center  border-white bg-[#003655] rounded-lg p-2 '>

                        <Text className='text-sm font-bold text-white'>Personal Growth</Text>
                    </View>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center bg-[#003655] rounded-lg p-2'>
                        <Text className='text-sm font-bold text-white'>Finance</Text>

                    </View>
                </View>


                <View className='w-full h-[37px] flex-row items-center justify-between mt-2'>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center  border-white bg-[#003655] rounded-lg p-2 '>

                        <Text className='text-sm font-bold text-white'>Expenses</Text>
                    </View>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center bg-[#003655] rounded-lg p-2'>
                        <Text className='text-sm font-bold text-white'>Income</Text>

                    </View>
                </View>

                </View>
                


                <View>
                    <View className='w-full flex-row items-center justify-between'>
                        <Text className='text-xl font-semibold text-[#00325F] mt-2'>About Rich knowledge</Text>
                        <Image className='w-5 h-5' source={require("../assets/right-00325f.png")} />
                    </View>

                    <Text className='text-sm mt-2 font-bold text-gray-400'>Rich Knowledge, that empowers individuals to take control of their finances and achieve generational wealth.</Text>
                    <Text className='text-xs mt-2 font-bold text-gray-400'>This content is for financial purposes only and is not intended for other uses. It provides comprehensive insights into personal finance, investment strategies, economic trends, and financial planning. The information contained herein is designed to help you make informed decisions about your finances, whether you're saving for retirement, planning a budget, investing in the stock market, or managing debt. It includes expert advice, real-world examples, and actionable tips to enhance your financial literacy and help you achieve your financial goals.</Text>
                </View>



                <Text className='font-semibold text-[20px] text-[#003655] mt-2'>
                    Key Points
                </Text>
                <View className='w-full h-[45px] bg-[#003655] rounded-lg flex-row items-center justify-center mt-3'>
                    <Text className='text-xl font-semibold text-white'>Get the full Book</Text>
                </View>



                <Text className='font-semibold text-[20px] text-[#003655] mt-2'>

                    Explore the Categories
                </Text>
                <View className='items-center'>
                    <View className='w-11/12  h-[45px] flex-row items-center justify-between mt-2'>
                        <View className='flex-row  items-center gap-x-2 w-1/2 justify-center  border-white bg-[#003655] rounded-lg p-3 '>
                        <Image className='w-6 h-6' source={require("../assets/happy.png")} />
                            <Text className='text-sm font-bold text-white'>Happiness</Text>
                        </View>
                        <View className='flex-row items-center gap-x-2 w-1/2 justify-center bg-[#003655] rounded-lg p-3'>
                            <Image className='w-6 h-6' source={require("../assets/money-bag.png")} />
                            <Text className='text-sm font-bold text-white'>rich</Text>

                        </View>
                    </View>
                </View>





                <View className='items-center'>
                    <View className='w-11/12 h-[45px] bg-[#003655] rounded-lg flex-row items-center justify-center mt-3'>
                        <View className='flex-row items-center gap-x-2 w-1/2 justify-center border-r-[1px] border-white'>
                            <Image className='w-5 h-5' source={require("../assets/book-cover.png")} />
                            <Text className='text-sm font-bold text-white'>Read Book</Text>
                        </View>
                        <View className='flex-row items-center gap-x-2 w-1/2 justify-center'>
                            <Image className='w-6 h-6' source={require("../assets/headphone.png")} />
                            <Text className='text-sm font-bold text-white'>Play Book</Text>

                        </View>
                    </View>

                </View>
            </ScrollView>
            <MenuBar />
        </SafeAreaView>
    )
}

export default Book3