import React from 'react'
import { SafeAreaView,TouchableOpacity,Image,Text,View } from 'react-native'
import MenuBar from '../Components/MenuBar'
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';
import BgImage from '../Components/BgImage';


const Book2 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header/>
            <View className="px-5">
               
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
                        <TouchableOpacity    delayPressIn={1} onPress={()=>(navigation.navigate("Book3"))}>
                            <Image className='w-5 h-5' source={require("../assets/right-00325f.png")} />
                        </TouchableOpacity>
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
         <BgImage/>
        </SafeAreaView>
    )
}

export default Book2