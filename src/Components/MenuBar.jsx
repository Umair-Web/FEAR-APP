import React from 'react'
import { View,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MenuBar = () => {
    const navigation = useNavigation();

    return (
        <View className='absolute bottom-0 w-full h-[50px] bg-[#DEDEDE] justify-center items-center'>
            <View className='flex-row gap-x-16'>
                <TouchableOpacity  delayPressIn={1} onPress={()=>(navigation.navigate("Dashboard"))} ><Image source={require("../assets/home.png")} className='w-[22px] h-[22px]'></Image></TouchableOpacity>
                <TouchableOpacity delayPressIn={1} onPress={()=>(navigation.navigate("RecentActivity"))}><Image source={require("../assets/clock.png")} className='w-[22px] h-[22px]'></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require("../assets/stock.png")} className='w-[22px] h-[22px]'></Image></TouchableOpacity>
                {/* <Image source={require("../assets/home.png")} className='w-[22px] h-[22px]'></Image>
                <Image source={require("../assets/clock.png")} className='w-[22px] h-[22px]'></Image>
                <Image source={require("../assets/stock.png")} className='w-[22px] h-[22px]'></Image> */}
            </View>

        </View>
    )
}

export default MenuBar