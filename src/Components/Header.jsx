import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';



const Header = () => {
    const navigation = useNavigation();
    return (
        <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
            <TouchableOpacity onPress={() => (navigation.goBack())}
                className='py-2 px-4 rounded-2xl bg-black/10'>
                <Image className="h-[16px] w-[18px]" source={require("../assets/back2.png")} />
            </TouchableOpacity>
            <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
            <Text className="text-[18px] font-normal text-black">David Walker</Text>
            <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Notifications"))}><Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Help"))}><Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Settings"))}><Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} /></TouchableOpacity>
        </View>
    )
}

export default Header