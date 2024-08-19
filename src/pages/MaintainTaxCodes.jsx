import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
const { height: screenHeight } = Dimensions.get("window")
import LinearGradient from 'react-native-linear-gradient';

const MaintainTaxCodes = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>

            <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
                <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
            </View>
            <Text className='font-semibold text-[20px] text-[#00325F] px-5'>Maintain tax codes</Text>
            <View style={{ height: screenHeight * 0.70 }} className='mt-2'>
                <ScrollView className=' px-5'>

                    <View className='bg-[#003655]/40 p-2 rounded-xl mt-3'>
                        <View className='flex-row justify-between'>

                            <View className='bg-[#003655] p-2 rounded-xl'>
                                <Text className='font-extralight text-white text-xs'>Properties</Text>
                            </View>

                            <View className='bg-[#003655] p-2 rounded-xl'>
                                <Text className='font-extralight text-white text-xs'>accounts</Text>
                            </View>

                            <View className='bg-[#003655] p-2 rounded-xl'>
                                <Text className='font-extralight text-white text-xs'>line</Text>
                            </View>

                            <View className='bg-[#003655] p-2 rounded-xl'>
                                <Text className='font-extralight text-white text-xs'>Levels</Text>
                            </View>

                            <View className='bg-[#003655] p-2 rounded-xl'>
                                <Text className='font-extralight text-white text-xs'>Periods</Text>
                            </View>


                        </View>
                        <Text className='font-bold text-sm text-[#00325F] '>Tax Rates</Text>

                        <View>
                            <View className='flex-row items-center justify-between w-1/2 my-1'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Country key</Text>

                                <Text className='font-bold text-[10px] text-white'>US</Text>
                            </View>

                            <View className='flex-row items-center justify-between w-1/2 my-1'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Tax Code</Text>

                                <Text className='font-bold text-[10px] text-white'>10</Text>
                            </View>


                            <View className='flex-row items-center justify-between w-1/2 my-1'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Procedure</Text>

                                <Text className='font-bold text-[10px] text-white'>TAXUSJ</Text>
                            </View>

                            <View className='flex-row items-center justify-between w-1/2 my-1'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Tax Jurisdiction</Text>

                                <Text className='font-bold text-[10px] text-white'>KS00000</Text>
                            </View>


                            <View className='flex-row items-center justify-between w-1/2 my-1'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Valid from</Text>

                                <Text className='font-bold text-[10px] text-white'>29.04.21012</Text>
                            </View>










                        </View>


                    </View>


                    <View className='bg-[#003655]/40 p-2 rounded-xl mt-3'>

                        <Text className='font-bold text-sm text-[#00325F] '>Percentage rates</Text>
                        <View className='flex-row justify-between gap-x-2 '>

                            <View className='w-[38%]'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Tax Type</Text>
                            </View>

                            <View className='w-[17%]'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Acct key</Text>

                            </View>
                            <View className='w-[35%]'>
                                <Text className='font-medium text-[13px] text-[#00325F] '>Tax percent.rate</Text>
                            </View>




                        </View>


                        <View>
                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="Base Amount"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] '></View>
                            </View>

                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="Subtotal"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"

                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] '></View>
                            </View>

                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="Distribution G/L"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] '></View>
                            </View>

                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="A/p Sales Tax 1 inv"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                                placeholder="NVV"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] bg-[#D9D9D9] '></View>
                            </View>

                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="A/p Sales Tax 2 inv"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                                placeholder="NVV"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] bg-[#D9D9D9]'></View>
                            </View>

                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="A/p Sales Tax 3 inv"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"

                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                                placeholder="NVV"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] bg-[#D9D9D9]'></View>
                            </View>

                            <View className='flex-row items-center justify-between gap-x-2  my-1'>
                                <View className='w-[38%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholder="A/p Sales Tax 4 inv"
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[17%] h-[24px] bg-[#D9D9D9]'>
                                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                                            <TextInput
                                                className='text-[#00325F] text-[10px] font-normal p-1'
                                                placeholderTextColor="#00325F"
                                                autoCapitalize="none"
                                                placeholder="NVV"
                                            />

                                        </KeyboardAvoidingView>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View className='w-[35%] h-[24px] bg-[#D9D9D9]'></View>
                            </View>




                        </View>


                    </View>


                </ScrollView>
            </View>


            <View className=' items-center mt-2'>
                <LinearGradient
                    colors={['#01101D', '#0078BB']}
                    style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 10 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <TouchableOpacity className='w-[200px] h-[40px] flex-row justify-center items-center' >
                        <Text className='text-white text-[17px] font-normal'>Contact Rich</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>

    );
};

export default MaintainTaxCodes;
