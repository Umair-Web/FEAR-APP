import React from 'react'
import { View,TouchableOpacity,Image,Text } from 'react-native'
const Header = () => {
    return (
        <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
            <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                <Image source={require("../assets/Arrow1.png")} />
            </TouchableOpacity>
            <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
            <Text className="text-[18px] font-normal text-black">David Walker</Text>
            <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
            <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
            <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
        </View>
    )
}

export default Header