import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { PieChart } from 'react-native-gifted-charts';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const SavingVehicles = () => {
    const [selected2, setSelected2] = useState('APR');

    const handleSelect2 = (value) => {
        setSelected2(value);
    };


    const renderDot = (color) => {
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

    const pieData2 = [
        { value: 40, color: '#4CE794' },
        { value: 40, color: '#34A853' },
        { value: 20, color: '#34A853' },
    ];

    const renderLegendComponent2 = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'col',
                        justifyContent: 'center',
                        marginBottom: 1,
                        marginTop:16
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: screenWidth * 0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#4CE794')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 16 }}>Domestic.  40%</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: screenWidth * 0.7 }}>
                        {renderDot('#34A853')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 16 }}>International. 40%</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: screenWidth * 0.7 }}>
                        {renderDot('#34A853')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 16 }}>Others. 20%</Text>
                    </View>
                </View>
            </>
        );
    };


    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-xl text-[#003655]'>WELCOME BACK DAVID</Text>

                    <Text className='font-semibold text-3xl mt-3 text-black'>$555,200.01</Text>


                    <View className='flex-row mt-4 justify-between items-center'>

                        <TouchableOpacity
                            onPress={() => handleSelect2('Balance')}
                        >
                            <Text className={`text-sm font-medium text-[#02174A]  ${selected2 === 'Balance' ? "font-bold underline " : ""}`} >Balance</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => handleSelect2('Holdings')}
                        >
                            <Text className={`text-sm font-medium text-[#02174A]  ${selected2 === 'Holdings' ? "font-bold underline " : ""}`} >Holdings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleSelect2('Activity')}
                        >
                            <Text className={`text-sm font-medium text-[#02174A] ${selected2 === 'Activity' ? "font-bold underline " : ""}`} >Activity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleSelect2('Performance')}
                        >
                            <Text className={`text-sm font-medium text-[#02174A] ${selected2 === 'Performance' ? "font-bold underline " : ""}`} >Performance</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleSelect2('Watch')}
                        >
                            <Text className={`text-sm font-medium text-[#02174A] ${selected2 === 'Watch' ? "font-bold underline " : ""}`} >Watch</Text>
                        </TouchableOpacity>





                    </View>


                    <Text className='font-semibold text-lg mt-3 text-[#003655]'>Analysis for all accounts</Text>

                    <View className='bg-[#004B90]/20 p-2 mt-4'>
                        <Text className='font-medium text-sm text-[#131F3D]'>Portfolio alerts (4)</Text></View>

                    <Text className='font-bold text-[15px] text-[#131F3D] mt-3'>Asset mix</Text>
                    <View className='flex-row mt-3 items-center'>

                        <View className='bg-[#3D5D83] w-[15%] h-[35px]'></View>
                        <View className='bg-[#F1A128] w-[15%] h-[35px]'></View>
                        <View className='bg-[#141111] w-[15%] h-[35px]'></View>
                        <View className='bg-[#312B2B] w-[15%] h-[35px]'></View>
                        <Text className='font-medium text-sm text-[#131F3D] ml-2'>Current</Text>

                    </View>

                    <View className='flex-row mt-3 items-center'>

                        <View className='bg-[#3D5D83] w-[15%] h-[35px]'></View>
                        <View className='bg-[#F1A128] w-[15%] h-[35px]'></View>
                        <View className='bg-[#141111] w-[15%] h-[35px]'></View>
                        <View className='bg-[#312B2B] w-[15%] h-[35px]'></View>
                        <Text className='font-medium text-sm text-[#131F3D] ml-2'>Target</Text>

                    </View>

                    <View className='mt-3'>

                        <View className='flex-row items-center justify-between mt-1'>
                            <View className='flex-row items-center gap-x-2'>
                                <View className='bg-[#3D5D83] w-[21px] h-[8px]'></View>
                                <Text className='font-normal text-xs text-[#003655]'>Stocks</Text>
                            </View>

                            <View className='flex-row gap-x-2'>

                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>

                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-1'>
                            <View className='flex-row items-center gap-x-2'>
                                <View className='bg-[#F1A128] w-[21px] h-[8px]'></View>
                                <Text className='font-normal text-xs text-[#003655]'>Bonds</Text>
                            </View>

                            <View className='flex-row gap-x-2'>

                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>

                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-1'>
                            <View className='flex-row items-center gap-x-2'>
                                <View className='bg-[#141111] w-[21px] h-[8px]'></View>
                                <Text className='font-normal text-xs text-[#003655]'>Reserves</Text>
                            </View>

                            <View className='flex-row gap-x-2'>

                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>

                            </View>
                        </View>

                        <View className='flex-row items-center justify-between mt-1'>
                            <View className='flex-row items-center gap-x-2'>
                                <View className='bg-[#312B2B] w-[21px] h-[8px]'></View>
                                <Text className='font-normal text-xs text-[#003655]'>Other</Text>
                            </View>

                            <View className='flex-row gap-x-2'>

                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>
                                <Text className='font-medium text-[9px] text-[#003655]'>99.9%</Text>

                            </View>
                        </View>
                    </View>

                    <Text className='font-bold text-[15px] text-[#131F3D] mt-3'>Stock Analysis</Text>

                    <View
                        style={{
                            backgroundColor: '#fff',
                            paddingVertical: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 8,

                            marginTop: 20,
                        }}>
                        <PieChart
                            donut
                            innerRadius={65}
                            radius={80}
                            data={pieData2}
                            centerLabelComponent={() => {
                                return <Text style={{ fontSize: 18, fontWeight: "500" }}>62% Stocks</Text>;
                            }}
                        />
                        {renderLegendComponent2()}
                    </View>
                </ScrollView>
            </View >

            <BgImage />
            <MenuBar />
        </SafeAreaView >
    );
};

export default SavingVehicles;
