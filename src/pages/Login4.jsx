import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const Login4 = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className="justify-center items-center">
                <Image source={require("../assets/FearLogo128.png")} />

            </View>
            <Text className='font-bold text-black text-center text-[22px]'>Join F.E.A.R App Now</Text>
          <View className='px-5'>
            <View>
                <Text className='font-bold text-[18px] text-[#004770]'>Personal Information</Text>
            </View>

          </View>


        </SafeAreaView>
    )
}

export default Login4