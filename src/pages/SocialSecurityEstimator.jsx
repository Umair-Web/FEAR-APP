import React,{useState} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const SocialSecurityEstimator = () => {
    const [dob,setDob ] = useState('');
    const [currSal,setCurrSal ] = useState('');
    const [martlStts,setMartlStts ] = useState('');
    const [earnhis,setEarnhis ] = useState('');
    const [retireAge,setRetireAge ] = useState('')

    return (
        <SafeAreaView className='bg-white flex-1'>
         <Header/>
            <View className='px-5' style={{height:screenHeight*0.8}} >
                <ScrollView  showsVerticalScrollIndicator={false}>
                <View className='bg-black/25 rounded-2xl mt-4'>
                        <View>
                            <Text className='text-[#00325F] text-sm text-center font-bold mt-2'>Social Security Calculator</Text>

                            <Text className='text-black text-xs font-medium mt-2 p-2'>This calculator guides you in making smart choices that can
                            help you maximize security benefits</Text>

                            <Text className='text-[#00325F] text-sm text-start p-2 font-bold'>Enter your details</Text>

                            <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Date of Birth</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={dob}
                                            onChangeText={setDob}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Current Salary</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={currSal}
                                            onChangeText={setCurrSal}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Martial Status</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={martlStts}
                                            onChangeText={setMartlStts}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Full Earnings History</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={earnhis}
                                            onChangeText={setEarnhis}
                                        />
                                    </View>

                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[40%]'>Anticipated Retirement Age</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={retireAge}
                                            onChangeText={setRetireAge}
                                        />
                                    </View>

                                </View>

                        


                                <View className='flex-row justify-center gap-x-3 items-center mb-4 mt-3'>
                                    <TouchableOpacity className='bg-[#003655] items-center justify-center  px-4 py-2 rounded-md'>
                                        <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                        <Text className='font-bold text-white text-[13px]'>Clear</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>



                            {/* <View className='w-full h-9 bg-[#2A5784] p-2 '>
                                <Text className='font-bold text-sm text-white'>Assumptions</Text>
                            </View> */}

                            {/* <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your current Income increase</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={incomeIncrease}
                                            onChangeText={setIncomeIncrease}
                                        />
                                    </View>
                                    <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Income needed after retirement</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={incomeAfterRetirement}
                                            onChangeText={setIncomeAfterRetirement}
                                        />
                                    </View>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Average investment return</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={investmentReturn}
                                            onChangeText={setInvestmentReturn}
                                        />
                                    </View>
                                    <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Inflation rate</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={inflationRate}
                                            onChangeText={setInflationRate}
                                        />
                                    </View>
                                    <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                                </View>
                            </View> */}

                            {/* <View className='w-full h-9 bg-[#2A5784] p-2 '>
                                <Text className='font-bold text-sm text-white'>Optional</Text>
                            </View> */}

                            {/* <View className='p-2'>
                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Other income after retirement</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={otherIncomeAfterRetirement}
                                            onChangeText={setOtherIncomeAfterRetirement}
                                        />
                                    </View>
                                    <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/month</Text>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Your current retirement savings</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={currentRetirementSavings}
                                            onChangeText={setCurrentRetirementSavings}
                                        />
                                    </View>
                                    <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                                </View>

                                <View className='flex-row items-center my-1'>
                                    <Text className='font-medium text-[#003655] text-xs w-[35%]'>Future retirement savings</Text>
                                    <View className='w-[45%] ml-2 bg-white h-[24px] border border-black/50 text-black' >
                                        <TextInput
                                            className='text-[10px] text-black p-1 font-normal'
                                            placeholder="Type here"
                                            placeholderTextColor="#A5A5A5"
                                            value={futureRetirementSavings}
                                            onChangeText={setFutureRetirementSavings}
                                        />
                                    </View>
                                    <Text className='ml-1 font-medium text-[10px] text-[#003655]'>/year</Text>
                                </View>
                            </View> */}

                            {/* <View className='flex-row justify-around items-center mb-4 mt-3'>
                                <TouchableOpacity className='bg-[#003655] items-center justify-center  px-4 py-2 rounded-md'>
                                    <Text className='font-bold text-white text-[13px]'>Calculate</Text>
                                </TouchableOpacity>

                                <TouchableOpacity className='bg-[#929292] items-center justify-center px-4 py-2 rounded-md'>
                                    <Text className='font-bold text-white text-[13px]'>Clear</Text>
                                </TouchableOpacity>
                                <View className='border border-[#003655] rounded-lg p-1'>
                                    <Image className="w-6 h-6 " source={require("../assets/right-arrow.png")} />
                                </View>
                            </View> */}

                        </View>
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default SocialSecurityEstimator;
