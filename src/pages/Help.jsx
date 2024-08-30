import React from 'react'
import { SafeAreaView,TouchableOpacity,View,Image,Text,ScrollView } from 'react-native'
import MenuBar from '../Components/MenuBar'
import Header from '../Components/Header'
import BgImage from '../Components/BgImage'

const Help = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
             {/* <View className=' mt-3 px-5 flex-row items-center justify-between border-b-2 border-gray-100 pb-3'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image source={require("../assets/notification.png")} />
                    <Image source={require("../assets/questionmark.png")} />
                    <Image source={require("../assets/settings.png")} />
                </View> */}

                <Header/>

            <ScrollView className="px-5 flex-col gap-y-1 mb-[73px] mt-0.5">
                <Text className='font-semibold text-[#2A3039] text-base mt-2'>Help with account</Text>
                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white  w-11/12'>How do I access my credit report?</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>How do I create a budget using the portal tools?</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>How do I open a trading account?</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>How is my personal and financial information protected?</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>What should I do if I suspect unauthorized activity on my account?</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>How do I close my account?</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <Text className='font-semibold text-[#2A3039] text-base mt-2'>Help with account</Text>


                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>Read Inbox</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>
               
                <Text className='font-semibold text-[#2A3039] text-base mt-2'>Help topics</Text>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>About F.E.A.R App</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>

                <View className='bg-[#003655] h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                    <Text className='font-medium text-base text-white w-11/12'>How to manage your account</Text>
                    <Image className='w-[13px] h-[13px]'source={require("../assets/right-arrow-2.png")}/>
                </View>
               


            </ScrollView>
            <BgImage/>
           <MenuBar/>
        </SafeAreaView>
    )
}

export default Help