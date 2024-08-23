import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Budget = () => {
    const [selected, setSelected] = useState('1h');

    const handleSelect = (value) => {
        setSelected(value);
    };
    const transactions = [
        {
            id: 1,
            title: "Currency exchange",
            amount: "$ 350.00",
            transactionId: "698094554317",
            date: "17 Sep 2023",
            time: "11:21 AM",
            status: "pending",
            statusColor: "#f49a47",
            statusBgColor: "#f49a47",
        },
        {
            id: 2,
            title: "Cash-in",
            sub_title: "From ABC Bank ATM",
            amount: "$ 100.00",
            transactionId: "564925374920",
            date: "17 Sep 2023",
            time: "10:34 AM",
            status: "confirmed",
            statusColor: "#5DC486",
            statusBgColor: "#00FF94",
        },
        {
            id: 3,
            title: "Cashback from purchase",
            sub_title: "Purchase from Amazon.com",
            amount: "$ 1.75",
            transactionId: "685746354219",
            date: "16 Sep 2023",
            time: "16:08 PM",
            status: "confirmed",
            statusColor: "#5DC486",
            statusBgColor: "#00FF94",
        },
        {
            id: 4,
            title: "Transfer to card",
            sub_title: "Not enough funds",
            amount: "$ 1.75",
            transactionId: "685746354219",
            date: "16 Sep 2023",
            time: "16:08 PM",
            status: "canceled",
            statusColor: "#f54b5f",
            statusBgColor: "#f54b5f",
        },
        {
            id: 5,
            title: "Currency exchange",
            amount: "$ 350.00",
            transactionId: "698094554317",
            date: "17 Sep 2023",
            time: "11:21 AM",
            status: "pending",
            statusColor: "#f49a47",
            statusBgColor: "#f49a47",
        },
        {
            id: 6,
            title: "Cash-in",
            sub_title: "From ABC Bank ATM",
            amount: "$ 100.00",
            transactionId: "564925374920",
            date: "17 Sep 2023",
            time: "10:34 AM",
            status: "confirmed",
            statusColor: "#5DC486",
            statusBgColor: "#00FF94",
        },
        {
            id: 7,
            title: "Cashback from purchase",
            sub_title: "Purchase from Amazon.com",
            amount: "$ 1.75",
            transactionId: "685746354219",
            date: "16 Sep 2023",
            time: "16:08 PM",
            status: "confirmed",
            statusColor: "#5DC486",
            statusBgColor: "#00FF94",
        },
        {
            id: 8,
            title: "Transfer to card",
            sub_title: "Not enough funds",
            amount: "$ 1.75",
            transactionId: "685746354219",
            date: "16 Sep 2023",
            time: "16:08 PM",
            status: "canceled",
            statusColor: "#f54b5f",
            statusBgColor: "#f54b5f",
        },
        // Add other transactions similarly...
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <Text className='font-semibold text-xl text-black text-center my-2'>Add Budget </Text>
            <View className='items-center '>
                <View className="mt-2 flex-row items-center  bg-[#f1f3fc] rounded-lg">
                    <TouchableOpacity
                        onPress={() => handleSelect('Payment')}
                        className={`px-4 py-2  w-1/3 ${selected === 'Payment' ? 'border-b-2 border-blue-600 ' : ''
                            }`}
                    >
                        <Text className={`text-sm font-medium text-center  ${selected === 'Payment' ? "text-blue-600" : "text-black"}`} >Payment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleSelect('Annually')}
                        className={`px-4 py-2  w-1/3 ${selected === 'Annually' ? 'border-b-2 border-blue-600 ' : ''
                            }`}
                    >
                        <Text className={`text-sm font-medium text-center  ${selected === 'Annually' ? "text-blue-600" : "text-black"}`} >Annually</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleSelect('Settings')}
                        className={`px-4 py-2  w-1/3 ${selected === 'Settings' ? 'border-b-2 border-blue-600 ' : ''
                            }`}
                    >
                        <Text className={`text-sm font-medium text-center  ${selected === 'Settings' ? "text-blue-600" : "text-black"}`} >Settings</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View className='px-5' style={{ height: screenHeight * 0.7 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='flex-col gap-y-2 mt-1'>
                        {transactions.map((transaction) => (
                            <View key={transaction.id} className='flex-row justify-between items-center border border-gray-200 p-2 rounded-xl'>
                                <View className='flex-row items-center gap-x-2 w-[70%]'>
                                    <View className='h-12 w-12 rounded-lg bg-[#b3c5f7] items-center justify-center'>
                                        <Image className='w-5 h-5' source={require("../assets/wallet.png")} />
                                    </View>
                                    <View className='flex-col items-start gap-y-1'>
                                        <View className=''>
                                            <Text className='text-[#26273A]  font-medium text-[14px]'>{transaction.title}</Text>
                                            {transaction.sub_title && <Text className='text-[#26273A] mt-1 font-normal text-[11px]'>{transaction.sub_title}</Text>}
                                        </View>

                                        <View>
                                            <Text className='text-[#26273A]/60 font-normal text-xs'>Transaction ID</Text>
                                            <Text className='text-[#26273A] font-normal text-xs'>{transaction.transactionId}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className='flex-col items-end w-[30%]'>
                                    <Text className='font-bold text-black text-base'>{transaction.amount}</Text>
                                    <View style={{ backgroundColor: `${transaction.statusBgColor}20`, paddingHorizontal: 4, height: 16, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: transaction.statusColor, fontWeight: 'bold', fontSize: 10 }}>{transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</Text>
                                    </View>
                                    <Text className='text-[#8A8CA9] font-semibold text-xs mt-1'>{transaction.date}  {transaction.time}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Budget;
