import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity, Text, Image, View,ScrollView } from 'react-native'
import MenuBar from '../Components/MenuBar'

const Book1 = () => {
    const [rating, setRating] = useState(4);
    const handleRating = (star) => {
        setRating(star)
        console.log(rating)
    }
    return (
        <SafeAreaView className='bg-white flex-1'>
              <View className='px-5 mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image source={require("../assets/notification.png")} />
                    <Image source={require("../assets/questionmark.png")} />
                    <Image source={require("../assets/settings.png")} />
            </View>
            <ScrollView className="px-5">
              
                <View className='items-center mt-6'>
                    <Image className='h-[210px] w-[140px] object-contain rounded-xl' source={require("../assets/BookSample.jpg")} />
                </View>
                <Text className='text-center font-extrabold text-[15px] text-[#003655] mt-4'>Crafting Your Path to Financial Freedom</Text>
                <Text className='font-medium text-gray-400 text-[14px] text-center'>Suzy Menkes </Text>
                <View className='items-center justify-center flex-row gap-x-2'>
                    <View className='flex-row gap-x-1'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                                <Text className={`${star<=rating?'text-[#FFD700]':'text-[#CCC]'} text-lg`}>
                                    ★
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text>{rating}/5</Text>
                </View>
                <View>

                </View>
                <View className='w-full h-[37px] bg-[#4B4242] rounded-lg flex-row items-center justify-center'>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center border-r-[1px] border-white'>
                        <Image className='w-5 h-5' source={require("../assets/clock-white.png")} />
                        <Text className='text-sm font-bold text-white'>18 min</Text>
                    </View>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center'>
                        <Image className='w-6 h-6' source={require("../assets/idea.png")} />
                        <Text className='text-sm font-bold text-white'>6 Insights</Text>

                    </View>
                </View>
                <View>
                    <View className='w-full flex-row items-center justify-between'>
                        <Text className='text-xl font-semibold text-[#00325F] mt-2'>What’s Inside</Text>
                        <Image className='w-5 h-5' source={require("../assets/right-00325f.png")} />
                    </View>

                    <Text className='text-sm font-bold text-gray-400'>Take a comprehensive look at your financial landscape, including income, expenses, debts, and assets. Understanding your current financial position is crucial for developing a realistic retirement plan. It
                        allows you to identify areas for improvement, such as reducing expenses or increasing income, and lays
                        the foundation for setting achievable financial goals.</Text>
                </View>
                <View className='items-center mt-4'>
                    <View className='w-11/12 h-[37px] bg-[#5f6368] rounded-lg flex-row items-center justify-center'>
                        <View className='flex-row items-center gap-x-2 w-1/2 justify-center border-r-[1px] border-white'>
                            <Image className='w-5 h-5' source={require("../assets/clock-white.png")} />
                            <Text className='text-sm font-bold text-white'>Read Book</Text>
                        </View>
                        <View className='flex-row items-center gap-x-2 w-1/2 justify-center'>
                            <Image className='w-6 h-6' source={require("../assets/idea.png")} />
                            <Text className='text-sm font-bold text-white'>Play Book</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <MenuBar />
        </SafeAreaView>
    )
}

export default Book1
