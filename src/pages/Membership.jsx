import React from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MenuBar from '../Components/MenuBar'
import { useNavigation } from '@react-navigation/native'
import Header from '../Components/Header'
const Membership = () => {
  const navigation = useNavigation();
  const membership = [
    {
      img: require("../assets/FearLogoSmall.png"),
      title: "Basic Membership",
      content: "Simple access, only for overview, insights, updates and learning",
      price: "$14.99",
      Link: "Member"
    },
    {
      img: require("../assets/FearLogoSmall2.png"),
      title: "Premium Membership",
      content: "Upgraded access, good for overview, insights, updates and earning. Unlock webinars and communities, invest/trade, 1 access to CPA, attorney etc.",
      price: "$25.99",
      Link: "Member2"
    },
    {
      img: require("../assets/FearLogoSmall3.png"),
      title: "All-Access Membership",
      content: "Unlock access to each and everything in the F.E.A.R Application. Your one-stop solution to financial freedom. Why waitstart now!",
      price: "$99.99",
      Link: "Member3"
    }
  ];

  return (
    <SafeAreaView className='flex-1'>
      <Header/>
      <View className='px-5'>
       
        <View>
          <Text className='text-black font-semibold text-[36px]'>Memberships</Text>
          <Text className='text-black font-normal leading-6 text-sm'>Choose the membership of your choice to get started with F.E.A.R. Application</Text>
        </View>
        <ScrollView className='mt-4'>
          {membership.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => (navigation.navigate(item.Link))} activeOpacity={1}   delayPressIn={0.1} className='py-1'>
              <LinearGradient
                key={index}
                colors={['#01101D', '#0078BB']}
                style={{
                  shadowColor: "#0078BB",
                  shadowOffset: { width: 10, height: 200 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 0,
                  borderRadius: 15,
                  display: "flex",
                  flexDirection: "row",
                  padding: 7,
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className='w-full justify-between mt-5  h-fit'
              >
                <View>
                  <Image source={item.img} className='w-[50px] h-[57px]' />
                </View>
                <View className='flex-col w-40 items-start'>
                  <Text activeOpacity={1}   delayPressIn={0.1} onPress={() => navigation.navigate(item.Link)} className='font-semibold text-white text-base'>{item.title}</Text>
                  <Text activeOpacity={1}   delayPressIn={0.1} onPress={() => navigation.navigate(item.Link)} className="font-normal text-[12px] text-white">{item.content}</Text>
                </View>
                <View className='flex-col  items-center  h-full relative w-[27%]'>
                  <View  className='mb-2'>
                    <Text activeOpacity={1}   delayPressIn={0.1} onPress={() => navigation.navigate(item.Link)} className='text-[16px] font-normal text-white'>{item.price}</Text>
                  </View>
                  <View className='gap-y-1 absolute bottom-0'>
                    <Text activeOpacity={1}   delayPressIn={0.1} onPress={() => navigation.navigate(item.Link)} className='text-xs text-white font-normal text-center'>per month</Text>
                    <TouchableOpacity className='bg-[#0089D6] rounded-md p-2' onPress={() => navigation.navigate(item.Link)}>
                      <Text className='text-white font-normal text-xs'>Learn more</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

          ))}
        </ScrollView>
      </View>


      <MenuBar />

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