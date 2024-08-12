import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Image, Text } from 'react-native'
import MenuBar from '../Components/MenuBar'
import BgImage from '../Components/BgImage'
const Member = () => {
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
            <Text className='font-semibold text-[20px] mb-2 text-white text-center'>Basic Membership</Text>
            <Text className='font-normal text-[15px] text-start text-white'>
              This tier offers access to the core features mentioned earlier, along with basic assistance from the Al assistant for learning and understanding financial concepts. It also includes access to a limited number of financial advisors and tax professionals for consultation, as well as basic tax filing capabilities. This tier price is $14.99 per monthF
            </Text>
            <View className='mt-4'>
              <Text className='font-extrabold text-white text-[19px]'>$14.99</Text>
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

export default Member