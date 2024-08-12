import React from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, Text,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MenuBar from '../Components/MenuBar'
const Membership = () => {
    const membership = [
        {
          img: require("../assets/FearLogoSmall.png"),
          title: "Basic Membership",
          content: "Simple access, only for overview, insights, updates and learning",
          price: "$14.99"
        },
        {
          img: require("../assets/FearLogoSmall2.png"),
          title: "Premium Membership",
          content: "Upgraded access, good for overview, insights, updates and earning. Unlock webinars and communities, invest/trade, 1 access to CPA, attorney etc.",
          price: "$25.99"
        },
        {
          img: require("../assets/FearLogoSmall3.png"),
          title: "All-Access Membership",
          content: "Unlock access to each and everything in the F.E.A.R Application. Your one-stop solution to financial freedom. Why waitstart now!",
          price: "$99.99"
        }
      ];

    return (
        <SafeAreaView className='flex-1'>
            <View className='px-5'>
            <View className=' mt-3 flex-row items-center justify-between'>
                <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <Image source={require("../assets/notification.png")} />
                <Image source={require("../assets/questionmark.png")} />
                <Image source={require("../assets/settings.png")} />
            </View>
            <View>
                <Text className='text-black font-semibold text-[36px]'>Memberships</Text>
                <Text className='text-black font-normal leading-6 text-sm'>Choose the membership of your choice to get started with F.E.A.R. Application</Text>
            </View>
            <ScrollView className='mt-4'>
            {membership.map((item, index) => (
        <LinearGradient
          key={index}
          colors={['#01101D', '#0078BB']}
          style={{
            shadowColor: "#0078BB",
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation:0,
            borderRadius: 15,
            display: "flex",
            flexDirection: "row",
            padding: 7,
            alignItems: "flex-start",
            marginBottom: 10
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className='w-full justify-between mt-5'
        >
          <View>
            <Image source={item.img} className='w-[50px] h-[57px]' />
          </View>
          <View className='flex-col w-40 items-start'>
            <Text className='font-semibold text-white text-base'>{item.title}</Text>
            <Text className="font-normal text-[12px] text-white">{item.content}</Text>
          </View>
          <View className='flex-col  items-center'>
            <View className='mb-2'>
            <Text className='text-[16px] font-normal text-white'>{item.price}</Text>
            </View>
          
            <View className='gap-y-1'>
              <Text className='text-xs text-white font-normal text-center'>per month</Text>
              <TouchableOpacity className='bg-[#0089D6] rounded-md p-1'>
                <Text className='text-white font-normal text-xs'>Learn more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      ))}
            </ScrollView>
            </View>
            

        <MenuBar/>
   
        <View className="w-full absolute inset-0 justify-center items-center top-44 opacity-100">
                    <Image
                        className='w-3/4 h-[310px]'
                        source={require('../assets/FearLogoBlurred.png')}
                    />
        </View>
        </SafeAreaView>
    )
}

export default Membership