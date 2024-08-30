import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image, FlatList, ScrollView } from 'react-native'
import BgImage from '../Components/BgImage';
import MenuBar from '../Components/MenuBar';

const Allpayments = () => {

    const cardData = [
        {
            id: 1,
            cardNumber: '12345678',
            cardType: 'MASTER CARD',
            balance: '13.20',
            logo: require('../assets/MasterCard_Log1.png'),
        },
        {
            id: 2,
            cardNumber: '87654321',
            cardType: 'VISA CARD',
            balance: '45.00',
            logo: require('../assets/Visa_Logo1.png'),
        },
        {
            id: 3,
            cardNumber: '11223344',
            cardType: 'Pay Pal',
            balance: '67.89',
            logo: require('../assets/pngwing1.png'),
        },
    ];
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='px-5'>
                <View className=' mt-3 flex-row items-center justify-between'>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <View className='flex-col mt-1'>
                        <Text className="text-[18px] font-normal text-white">David Walker</Text>
                        <Text className="text-[18px] font-extrabold text-white">$0.00</Text>
                    </View>

                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-white.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-white.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-white.png")} />
                </View>
            </View>
            <View className="absolute w-full h-3/5 -z-10 bg-[#00325F] rounded-bl-3xl rounded-br-3xl">

            </View>
            <View className='px-5 mt-4'>
                <Text className='text-white text-[18px] font-extrabold'>Smart cards</Text>
                <ScrollView className='mt-4 gap-x-5' horizontal={true} showsHorizontalScrollIndicator={false}>
                    {cardData.map((card) => (
                        <View key={card.id} className='w-[290px] h-[150px] bg-white rounded-xl justify-between items-start p-4'>
                            <View className='flex-row justify-between w-full items-center'>
                                <View className='gap-2'>
                                    <Text className='text-[#8A8A8A] text-[15px] font-extrabold'>{card.cardNumber}</Text>
                                    <Text className='text-[#474A56] text-[18px] font-black'>{card.cardType}</Text>
                                </View>
                                <View>
                                    <Image source={card.logo} />
                                </View>
                            </View>
                            <View>
                                <Text className='text-[#8A8A8A] text-[12px] font-black'>BALANCE</Text>
                                <Text className='text-[20px] text-[#334D8F]' style={{ fontWeight: 900 }}>{card.balance}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View className='px-5 mt-3'>
                <Text className='text-white text-[18px] font-extrabold'>Quick Actions</Text>
                <View className='mt-3 flex-row justify-between'>
                    <View className='w-[100px] h-[100px] justify-center items-center bg-[#004770] rounded-md p-7'>
                        <Image source={require("../assets/credit-card.png")} className='h-[24px] w-[24px]'/>
                        <Text className='text-[15px] font-black text-white text-center mt-2'>Pay Bills</Text>
                    </View>
                    <View className='w-[100px] h-[100px] justify-center items-center bg-[#004770] rounded-md'>
                        <Image source={require("../assets/wallet.png")} className='h-[24px] w-[24px]'/>
                        <Text className='text-[15px] font-black text-white text-center mt-2'>Increase balance</Text>
                    </View>
                    <View className='w-[100px] h-[100px] justify-center items-center bg-[#004770] rounded-md'>
                        <Image source={require("../assets/document.png")} className='h-[24px] w-[24px]'/>
                        <Text className='text-[15px] font-black text-white text-center mt-2'>Payment templates</Text>
                    </View>
                </View>
            </View>

            <View className='px-5 mt-5'>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-[#474A56] font-black text-[18px]'>Latest payments</Text>
                    <Text className='text-[#474A56] font-black text-[15px] underline'>All</Text>
                </View> 
                <View className='flex-row items-center p-2 justify-around'>
                    <Image source={require("../assets/Union.png")}/>
                    <View className='bg-[#F8F8FA] flex-row justify-between p-3'>
                        <View>
                            <Text className='text-[#8A8A8A] font-black text-[15px] '>Mastercard **** </Text>
                            <Text className='text-[#8A8A8A] font-black text-[15px] '>3241</Text>
                        </View>
                        <Text className='text-[#8A8A8A] font-black text-[15px] '>12/12/21</Text>
                    </View>
                </View>
                <View className='flex-row items-center p-2 justify-around'>
                    <Image source={require("../assets/Union.png")}/>
                    <View className='bg-[#F8F8FA] flex-row justify-between p-3 '>
                        <View>
                            <Text className='text-[#8A8A8A] font-black text-[15px] '>Mastercard **** </Text>
                            <Text className='text-[#8A8A8A] font-black text-[15px] '>3241</Text>
                        </View>
                        <Text className='text-[#8A8A8A] font-black text-[15px] '>12/12/21</Text>
                    </View>
                </View>
            </View>
            <View className='absolute w-[26px] h-[26px] border-2 border-[#00325F] rounded-full bottom-20 right-2 items-center justify-center'>
                <Image source={require("../assets/right-arrow.png")} className='w-4 h-4'/>
            </View>
           <MenuBar/>
           <BgImage/>
          
   
        </SafeAreaView>
    )
}

export default Allpayments