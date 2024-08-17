import React from 'react'
import { View,Image } from 'react-native'
const BgImage = () => {
    return (
        <View className="w-full absolute inset-0 justify-center items-center top-44 opacity-50 -z-20">
            <Image
                className='w-full h-[330px]'
                source={require('../assets/FearLogoBlurred.png')}
            />
        </View>
    )
}

export default BgImage