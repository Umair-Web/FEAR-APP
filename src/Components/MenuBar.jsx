import React from 'react'
import { View,Image } from 'react-native'
const MenuBar = () => {
    return (
        <View className='absolute bottom-0 w-full h-[65px] bg-[#DEDEDE] justify-center items-center'>
            <View className='flex-row gap-x-16'>
                <Image source={require("../assets/home.png")} className='w-[25px] h-[25px]'></Image>
                <Image source={require("../assets/clock.png")} className='w-[25px] h-[25px]'></Image>
                <Image source={require("../assets/stock.png")} className='w-[25px] h-[25px]'></Image>
            </View>

        </View>
    )
}

export default MenuBar