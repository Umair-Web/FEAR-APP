import React from 'react'
import { SafeAreaView,TouchableOpacity,Image,Text,View } from 'react-native'
import MenuBar from '../Components/MenuBar'

const Book2 = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className="px-5">
                <View className=' mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image source={require("../assets/notification.png")} />
                    <Image source={require("../assets/questionmark.png")} />
                    <Image source={require("../assets/settings.png")} />
                </View>
                 <View className='items-center'>
                 <View className='w-11/12 h-[37px] bg-[#003655] rounded-lg flex-row items-center justify-center mt-2'>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center border-r-[1px] border-white'>
                        <Image className='w-5 h-5' source={require("../assets/clock-white.png")} />
                        <Text className='text-sm font-bold text-white'>18 min</Text>
                    </View>
                    <View className='flex-row items-center gap-x-2 w-1/2 justify-center'>
                        <Image className='w-6 h-6' source={require("../assets/idea.png")} />
                        <Text className='text-sm font-bold text-white'>6 Insights</Text>

                    </View>
                </View>

                 </View>

                 <View>
                    <View className='w-full flex-row items-center justify-between'>
                        <Text className='text-xl font-semibold text-[#00325F] mt-2'>What’s Inside</Text>
                        <Image className='w-5 h-5' source={require("../assets/right-00325f.png")} />
                    </View>

                    <Text className='text-xs mt-2 font-bold text-gray-400'>Take a comprehensive look at your financial landscape, including income, expenses, debts, and assets. Understanding your current financial position is crucial for developing a realistic retirement plan. It
                        allows you to identify areas for improvement, such as reducing expenses or increasing income, and lays
                        the foundation for setting achievable financial goals.</Text>
                </View>

                <View className='bg-[#003655] rounded-xl mt-3 p-3'>
                <Text className='font-semibold text-[20px] text-white'>You will Learn</Text>
                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]'  source={require("../assets/star.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>What is Finance</Text>
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]'  source={require("../assets/star.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Managing your Finance</Text>
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]'  source={require("../assets/star.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Understanding your financial position </Text>
                        </View>
        
                    </View>
                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/star.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>reducing expenses or increasing income</Text>
                        </View>
                    </View>
                    
                </View>

                <Text className='font-semibold text-[20px] text-[#003655]'>
                  Key Points
                </Text>

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
            </View>
         <MenuBar/>
        </SafeAreaView>
    )
}

export default Book2