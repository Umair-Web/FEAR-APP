import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { PieChart } from "react-native-gifted-charts";

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const RetirementGoals = () => {
    const pieData = [
        { value: 47,color: '#E697FF'},
        { value: 40, color: '#82F0FF' },
        { value: 20, color: '#FFA5CB'},
        { value: 3, color: '#63ABFD' },
    ];

    const renderDot = color => {
        return (
            <View
                style={{
                    height: 10,
                    width: 15,
                    backgroundColor: color,
                    marginRight: 10,
                }}
            />
        );
    };

    const renderLegendComponent = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'col',
                        justifyContent: 'center',
                        marginBottom: 1,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width:screenWidth*0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#E697FF')}
                        <Text style={{ color: 'black',fontWeight:"400",fontSize:10 }}>Retire at 65 with income of $80,000 per year</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width:screenWidth*0.7 }}>
                        {renderDot('#82F0FF')}
                        <Text style={{ color: 'black',fontWeight:"400",fontSize:10 }}>Travel to Europe every year after retirement</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'col',
                        justifyContent: 'center',
                        marginBottom: 5,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width:screenWidth*0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#FFA5CB')}
                        <Text style={{ color: 'black',fontWeight:"400",fontSize:10 }}>Pay off all the debts before retirement</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center',width:screenWidth*0.7 }}>
                        {renderDot('#63ABFD')}
                        <Text style={{ color: 'black',fontWeight:"400",fontSize:10 }}>Comparing several options</Text>
                    </View>
                </View>
            </>
        );
    };


    const pieData2 = [
        { value: 40,color: '#7AFFC7'},
        { value: 60, color: '#D884FF' },
      
    ];

    const renderLegendComponent2 = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'col',
                        justifyContent: 'center',
                        marginBottom: 1,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width:screenWidth*0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#7AFFC7')}
                        <Text style={{ color: 'black',fontWeight:"400",fontSize:10 }}>Work part time in retirement.</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width:screenWidth*0.7 }}>
                        {renderDot('#D884FF')}
                        <Text style={{ color: 'black',fontWeight:"400",fontSize:10 }}>Save $1 million in retirement accounts by age 60</Text>
                    </View>
                </View>
            </>
        );
    };


    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <Text className='text-center font-medium text-[20px] text-black'>Retirement Goals</Text>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 20s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Start saving and investing early</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Pay off high-interest debt</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 30s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Increase your retirement contributions</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Set up a solid savings plan</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Consider professional financial advice</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 40s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Maximize your retirement savings</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Pay off significant debts</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Ensure you have a diversified portfolio</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 50s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Aim to have multiple income streams</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Review and adjust your retirement plan</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Consider long-term care insurance</Text>

                        </View>
                    </View>


                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 60s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Evaluate your retirement income needs</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Pay off high-interest debt</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Increase your retirement contributions</Text>

                        </View>
                    </View>



                    <Text className='font-semibold text-xs text-[#00325F] my-1'>In your 70s</Text>
                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Ensure you have a sustainable withdrawal plan</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Consider part-time work if needed</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <View className='bg-black/25 rounded-lg p-2'>
                            <Text className='font-normal text-xs text-[#00325F]'>Focus on maintaining your health</Text>

                        </View>
                    </View>

                    <View className='px-2 my-1'>
                        <Text className='font-semibold text-xs text-[#00325F] my-1'>Setting Goals and objectives</Text>

                        <View
                            style={{

                                backgroundColor: '#fff',
                                borderRadius:10,
                                flex: 1,
                                borderWidth:0.5,
                                marginTop:8
                            }}>
                            <View
                                style={{
                                    margin: 0,
                                    padding: 16,
                                    borderRadius: 20,
                                    backgroundColor: '#fff',
                                }}>
                            
                                <View style={{ padding: 20, alignItems: 'center' }}>
                                    <PieChart
                                        data={pieData}
                                        donut
                                        showGradient
                                        sectionAutoFocus
                                        radius={80}
                                        innerRadius={60}
                                        innerCircleColor={'#fff'}
                                        // centerLabelComponent={() => {
                                        //     return (
                                        //         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        //             <Text
                                        //                 style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                        //                 47%
                                        //             </Text>
                                        //             <Text style={{ fontSize: 14, color: 'white' }}>Excellent</Text>
                                        //         </View>
                                        //     );
                                        // }}
                                    />
                                </View>
                                {renderLegendComponent()}
                            </View>
                        </View>


                        <View
                            style={{

                                backgroundColor: '#fff',
                                borderRadius:10,
                                flex: 1,
                                borderWidth:0.5,
                                marginTop:8
                            }}>
                            <View
                                style={{
                                    margin: 0,
                                    padding: 16,
                                    borderRadius: 20,
                                    backgroundColor: '#fff',
                                }}>
                            
                                <View style={{ padding: 20, alignItems: 'center' }}>
                                    <PieChart
                                        data={pieData2}
                                        donut
                                        showGradient
                                        sectionAutoFocus
                                        radius={80}
                                        innerRadius={60}
                                        innerCircleColor={'#fff'}
                                        // centerLabelComponent={() => {
                                        //     return (
                                        //         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        //             <Text
                                        //                 style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                        //                 47%
                                        //             </Text>
                                        //             <Text style={{ fontSize: 14, color: 'white' }}>Excellent</Text>
                                        //         </View>
                                        //     );
                                        // }}
                                    />
                                </View>
                                {renderLegendComponent2()}
                            </View>
                        </View>
                    </View>





                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default RetirementGoals;
