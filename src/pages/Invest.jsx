import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';


const Invest = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency
    const [value, setValue] = useState('');

    const navigation = useNavigation();
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View>
                {/* Header */}
                {/* <View className='px-5 mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View> */}
                <Header/>
                <Text className='text-[20px] font-semibold text-black text-center mt-2'>Buy Stock Coin</Text>
                <View className='px-5 flex-row items-center justify-between'>
                    <Text className='text-[17px] font-medium text-black/40 my-4'>
                        I want to pay
                    </Text>

                    <View className='flex-row items-center gap-x-1'>
                        <Text className='text-[17px] font-semibold text-[#165BAA]'>
                            By Money
                        </Text>

                        <Image className='w-5 h-3 mt-1' source={require("../assets/two-arrows.png")} />
                    </View>
                </View>

                <View className='px-5'>
                    <View className='flex-row justify-between bg-[#D9D9D9] h-[49px] rounded-md p-1'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>
                                <View>
                                    <TextInput
                                        className='text-black justify-start items-center h-[32px] text-[16px] p-1 px-2'
                                        placeholder="Please enter amount"
                                        placeholderTextColor="#a3a3a3"
                                        autoCapitalize="none"
                                        value={value}
                                        onChangeText={setValue}
                                        keyboardType='numeric'
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>
                        {/* Currency Picker */}
                        <View className='justify-center'>
                            <Picker
                            
                                selectedValue={selectedCurrency}
                                style={{  height: 50, width: 50, color: 'black' ,borderRadius:100 }}
                                onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
                            >
                                <Picker.Item label="USD" value="USD" />
                                <Picker.Item label="PKR" value="PKR" />
                                <Picker.Item label="INR" value="INR" />
                                <Picker.Item label="EUR" value="EUR" />
                                <Picker.Item label="GBP" value="GBP" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <Text className='text-[12px] font-medium text-black/40 px-5 my-4'>
                1,431.00-750,000.00
                    </Text>

                <View className='px-6 mt-[350px]'>
                    <TouchableOpacity onPress={()=>(navigation.navigate("Login"))} className='bg-[#004B90]/80 items-center justify-center p-3 rounded-full'>
                        <Text className='text-white font-normal text-[17px]'>Log in</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
            <MenuBar />
            <BgImage/>
        </SafeAreaView>
    );
};

export default Invest;
