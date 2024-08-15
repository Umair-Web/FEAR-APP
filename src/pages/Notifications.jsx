import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import MenuBar from '../Components/MenuBar'

const Notifications = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='px-5 mt-3 flex-row items-center justify-between'>
                <View className='flex-row items-center justify-between gap-x-3'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                </View>


            </View>
            <View className='items-center my-2 justify-between px-5 flex-row'>
                <Text className='text-xl font-semibold text-black'>Notifications</Text>
                <Image className='w-[22px] h-[22px]' source={require("../assets/dots.png")} />
            </View>
            <ScrollView className='mb-[65px]'>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
                <View className='w-full h-fit border-b-[1px] border-gray-100 p-4 flex-row items-start gap-x-2'>
                    <View className='mt-1'>
                        <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                         <View className='w-[8px] h-[8px] border-[1px] border-blue-500 rounded-full absolute -top-2 -left-1 bg-blue-300'></View>
                    </View>

                    <View className='w-4/5 flex-col items-start'>
                        <Text className='text-sm text-gray-900 font-normal' >
                            Dennis Nedry likedyour  Chapter 1 Finance education report
                        </Text>
                        <Text className='text-sm text-gray-400 font-normal' >
                        Last Wednesday at 9:42 AM
                        </Text>
                    </View>
                    

                </View>
             
            </ScrollView>
            <MenuBar/>
        </SafeAreaView>
    )
}

export default Notifications