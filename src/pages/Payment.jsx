import React, { useState } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Text, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Keyboard, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MenuBar from '../Components/MenuBar';

const Payment = () => {
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [zipCode, setZipCode] = useState('');

    return (
        <SafeAreaView className='flex-1 bg-white'>
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
                <View className='mt-4 px-6'>
                    <Text className='text-[#00325f] font-bold text-[25px]'>Add Payment</Text>
                    <View className='flex-row gap-x-2 mt-4'>
                        <View className=' px-2 py-4 bg-white rounded-md shadow-md shadow-gray-700'>
                            <Image source={require("../assets/Visa_Logo1.png")} />
                        </View>
                        <View className='px-3 py-3 bg-white rounded-md shadow-md shadow-gray-700'>
                            <Image source={require("../assets/MasterCard_Log1.png")} />
                        </View>
                        <View className='px-6 py-3 bg-white rounded-md shadow-md shadow-gray-700'>
                            <Image source={require("../assets/pngwing1.png")} />
                        </View>
                    </View>
                    <View className='flex-row items-center mt-3 gap-x-2'>
                        <Image source={require("../assets/scan.png")} className='w-[22px] h-[22px]' />
                        <Text className='font-bold text-[#00325f] text-[14px]'>Scan card</Text>
                    </View>
                </View>


            </View>

            <ScrollView className='mt-3 px-10'>
                <View>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <Text className='text-black font-normal text-[16px] mb-1'>Name on card</Text>
                            <View>
                                <TextInput
                                    className='text-[#00325f] justify-start items-center h-[45px] border-[1px] bg-white px-3'
                                    placeholder="NAME"
                                    placeholderTextColor="#00325f"
                                    autoCapitalize="none"
                                    value={nameOnCard}
                                    onChangeText={setNameOnCard}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </View>

                <View className='mt-3'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <Text className='text-black font-normal text-[16px] mb-1'>Card Number</Text>
                            <View>
                                <TextInput
                                    className='text-[#00325f] justify-start items-center h-[45px] border-[1px] bg-white px-3'
                                    placeholder="XXXX  XXXX  XXXX  XXXX"
                                    placeholderTextColor="#00325f"
                                    autoCapitalize="none"
                                    value={cardNumber}
                                    onChangeText={setCardNumber}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </View>

                <View className='mt-3'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className='flex-row justify-between'>
                            <View className='w-32'>
                                <Text className='text-[16px] mb-1 text-black font-normal'>Expiry Date</Text>
                                <View>
                                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                            className='text-[#00325f] justify-start items-center h-[45px] border-[1px] bg-white px-3'
                                            placeholder="MM/YY"
                                            autoCapitalize="none"
                                            placeholderTextColor="#00325f"
                                            value={expiryDate}
                                            onChangeText={setExpiryDate}
                                        />
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                            <View className='w-32'>
                                <Text className='text-[16px] mb-1 text-black font-normal'>Security Code</Text>
                                <View>
                                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                            className='text-[#00325f] justify-start items-center h-[45px] border-[1px] bg-white px-3'
                                            placeholder="CVV"
                                            autoCapitalize="none"
                                            placeholderTextColor="#00325f"
                                            value={securityCode}
                                            onChangeText={setSecurityCode}
                                        />
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View className='mt-3'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <Text className='text-black font-normal text-[16px] mb-1'>ZIP/Postal Code</Text>
                            <View>
                                <TextInput
                                    className='text-[#00325f] justify-start items-center h-[45px] border-[1px] bg-white px-3'
                                    placeholder="XXXXX"
                                    placeholderTextColor="#00325f"
                                    autoCapitalize="none"
                                    value={zipCode}
                                    onChangeText={setZipCode}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </View>
                <View className='px-6 mt-8'>
                    <TouchableOpacity className='bg-[#003655] items-center justify-center p-1 rounded-full'>
                        <Text className='text-white font-bold text-[24px]'>Add</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


            <MenuBar />

            <View className="w-full absolute inset-0 justify-center items-center top-44 opacity-50 -z-10">
                <Image
                    className='w-3/4 h-[310px]'
                    source={require('../assets/FearLogoBlurred.png')}
                />
            </View>
        </SafeAreaView>
    );
};

export default Payment;
