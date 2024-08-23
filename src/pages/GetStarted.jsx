import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import bgimage from "../assets/Rectangle1.png"
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
const GetStarted = () => {
    const navigation=useNavigation();

    return (
        <SafeAreaView className='flex-1'>
            <ImageBackground className='flex-1 items-center justify-center gap-9' source={require("../assets/Rectangle1.png")}>
                <View className="w-full items-center mb-5">
                    <Image
                        className='w-3/4 h-[370px]'
                        source={require('../assets/FearLogo.png')}
                    />
                </View>
                <View className='px-8'>
                    <Text className='text-center font-semibold text-white text-[32px] leading-[41px]'>Financial Education & Execution Made
                        Easy!</Text>
                </View>

                <View className='px-9'><Text className='text-center text-white text-[17px] font-light'>Take control of Your finances & achieve generational wealth</Text></View>

                <View className='mb-10' >
                    <LinearGradient
                    
                        colors={['#01101D', '#0078BB']}
                        style={{ width: "300px", height: "0px", borderRadius: 16,shadowColor:"#0078BB",shadowOffset: { width: 10, height: 10 },shadowOpacity: 0.5,shadowRadius: 10,  elevation: 10, borderRadius: 16,}}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>
                        <TouchableOpacity onPress={()=>(navigation.navigate("Login"))} className='w-[300px] h-[50px] py-3 rounded-2xl'>
                            <Text className='text-white text-center text-[17px] '>Get Started</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </ImageBackground>

        </SafeAreaView>
    )
}

export default GetStarted