import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions,Image,TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import Header from '../Components/Header';
import BgImage from '../Components/BgImage';
import MenuBar from '../Components/MenuBar';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Tax2 = () => {
    const [selected, setSelected] = useState('Trend');

    const handleSelect = (value) => {
        setSelected(value);
    };

    const ptData = [
        { value: 160, date: '1 Apr 2022' },
        { value: 180, date: '2 Apr 2022' },
        { value: 190, date: '3 Apr 2022' },
        { value: 180, date: '4 Apr 2022' },
        { value: 140, date: '5 Apr 2022' },
        { value: 145, date: '6 Apr 2022' },
        { value: 160, date: '7 Apr 2022' },
        { value: 200, date: '8 Apr 2022' },

        { value: 220, date: '9 Apr 2022' },
        {
            value: 240,
            date: '10 Apr 2022',
            label: '10 Apr',
            labelTextStyle: { color: '#c4d3e1', width: 40,fontSize:12 },
        },
        { value: 280, date: '11 Apr 2022' },
        { value: 260, date: '12 Apr 2022' },
        { value: 340, date: '13 Apr 2022' },
        { value: 385, date: '14 Apr 2022' },
        { value: 280, date: '15 Apr 2022' },
        { value: 390, date: '16 Apr 2022' },

        { value: 370, date: '17 Apr 2022' },
        { value: 285, date: '18 Apr 2022' },
        { value: 295, date: '19 Apr 2022' },
        {
            value: 300,
            date: '20 Apr 2022',
            label: '20 Apr',
            labelTextStyle: { color: '#c4d3e1', width: 40,fontSize:12 },
        },
        { value: 280, date: '21 Apr 2022' },
        { value: 295, date: '22 Apr 2022' },
        { value: 260, date: '23 Apr 2022' },
        { value: 255, date: '24 Apr 2022' },

        { value: 190, date: '25 Apr 2022' },
        { value: 220, date: '26 Apr 2022' },
        { value: 205, date: '27 Apr 2022' },
        { value: 230, date: '28 Apr 2022' },
        { value: 210, date: '29 Apr 2022' },
        {
            value: 200,
            date: '30 Apr 2022',
            label: '30 Apr',
            labelTextStyle: { color: '#c4d3e1', width: 40,fontSize:12 },
        },
        { value: 240, date: '1 May 2022' },
        { value: 250, date: '2 May 2022' },
        { value: 280, date: '3 May 2022' },
        { value: 250, date: '4 May 2022' },
        { value: 210, date: '5 May 2022' },
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{height:screenHeight*0.9}} >
                <ScrollView >
                    <View className='p-2'>
                        <Image className=' h-[180px] object-contain w-full rounded-lg' source={require("../assets/download.jpeg")} />
                    </View>
                    <View className='flex-row justify-between items-center mt-1'>
                        <Text className='font-semibold text-[18px] text-[#003655]'>Tax Agent</Text>
                        <Image className='w-4 h-4' source={require("../assets/heart-empty.png")} />
                    </View>
                    <View className='bg-[#165BAA] p-1 rounded-lg mt-1'>
                        <Text className='font-semibold text-[16px] text-white text-center'>HIRE</Text>
                    </View>

                    <View className='px-5'>
                        <View className="mt-2 flex-row items-center gap-x-4">
                            <TouchableOpacity
                                onPress={() => handleSelect('Trend')}
                            >
                                <Text className={`text-sm font-medium text-center ${selected === 'Trend' ? "text-blue-500" : "text-black"}`}>Trend</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSelect('Details')}
                             
                            >
                                <Text className={`text-sm font-medium text-center ${selected === 'Details' ? "text-blue-500" : "text-black"}`}>Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleSelect('Offers')}
                               
                            >
                                <Text className={`text-sm font-medium text-center ${selected === 'Offers' ? "text-blue-500" : "text-black"}`}>Offers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View
                        style={{
                            paddingVertical: 45,
                            paddingLeft: 0,
                            backgroundColor: '#fff',
                        }}>
                        <LineChart
                            areaChart
                            curved
                            data={ptData}
                            rotateLabel
                            width={screenWidth*0.7}
                            hideDataPoints
                            spacing={5}
                            color="#854bfe"
                            thickness={2}
                            startFillColor="rgb(79, 79, 79)"
                            endFillColor="rgb(79, 79, 79)"
                            startOpacity={0.9}
                            endOpacity={0.9}
                            initialSpacing={0}
                            noOfSections={5}
                            maxValue={600}
                            yAxisColor="white"
                            yAxisThickness={0}
                            rulesType="solid"
                            rulesColor="gray"
                            yAxisTextStyle={{ color: '#c4d3e1' }}
                            yAxisSide='right'
                            xAxisColor="lightgray"
                            pointerConfig={{
                                pointerStripHeight: 160,
                                pointerStripColor: 'lightgray',
                                pointerStripWidth: 2,
                                pointerColor: 'lightgray',
                                radius: 6,
                                pointerLabelWidth: 100,
                                pointerLabelHeight: 90,
                                activatePointersOnLongPress: true,
                                autoAdjustPointerLabelPosition: false,
                                pointerLabelComponent: items => {
                                    return (
                                        <View
                                            style={{
                                                height: 90,
                                                width: 100,
                                                justifyContent: 'center',
                                                marginTop: -30,
                                                marginLeft: -40,
                                            }}>
                                            <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                                                {items[0].date}
                                            </Text>

                                            <View style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'white' }}>
                                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                                    {'$' + items[0].value + '.0'}
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                },
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Tax2;
