import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Image, Text } from 'react-native'
import MenuBar from '../Components/MenuBar'
import BgImage from '../Components/BgImage'
const Member2 = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className="px-5">
        <View className='absolute ml-5 mt-3'>
          <TouchableOpacity className='py-2 px-4 rounded-2xl bg-[#F5F5F5]'>
            <Image source={require("../assets/Arrow1.png")} />
          </TouchableOpacity>
        </View>
        <View className='absolute top-14 left-2'>
          <Image source={require("../assets/FearLogoSmall.png")} />
        </View>
        <View className=' mt-24 items-center px-4'>
          <View className='relative'>
            <Image
              source={require("../assets/download.jpeg")}
              className='w-[100px] h-[100px] rounded-full'
            />
            <Image source={require("../assets/editing.png")} className='absolute bottom-2 right-0 w-[23px] h-[23px]'></Image>
          </View>
          <Text className='font-bold text-xl text-white'>DAVID</Text>
          <Text className='mb-2 text-white'>
            youremail@domain.com | +01 234 567 8
          </Text>
          <View className='bg-[#00325F] w-full p-4 rounded-xl'>
            <Text className='font-semibold text-[20px] mb-2 text-white text-center'>All-Access Tier</Text>
            <Text className='font-normal text-[15px] text-start text-white'>
            The all-access tier provides full access to all features of the app, including unlimited assistance from the AI assistant, direct access to top-tier financial advisors, life insurance agents, CPAs, and tax attorneys for personalized guidance and support. It also includes advanced tax optimization strategies and priority customer support. This tier price is $99.99 per month.

            </Text>
            <View className='mt-4'>
              <Text className='font-extrabold text-white text-[19px]'>$99.99</Text>
              <Text className='text-white font-normal'>per month</Text>
            </View>


          </View>
          <View className='flex-row mt-4 gap-x-4'>
            <TouchableOpacity className='py-3 px-12 rounded-2xl bg-[#00325F]'>
              <Text className='font-medium text-white'>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity className='py-3 px-12 border-2 border-[#00325F] rounded-2xl '>
              <Text className='font-medium  text-[#00325F]'>Cancel</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <MenuBar />
      <BgImage />
      <View 
      className='absolute -z-10 -top-24'
      >
        <Image className='w-[364px] h-[367px]' source={require("../assets/rectangle2.png")}></Image>
      </View>

    </SafeAreaView>
  )
}

export default Member2