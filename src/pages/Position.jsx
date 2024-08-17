import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView,TouchableOpacity, Image, processColor } from 'react-native';
import MenuBar from '../Components/MenuBar';
import { CandleStickChart } from 'react-native-charts-wrapper';
import BgImage from '../Components/BgImage';

const Position = () => {
    const [data, setData] = useState({
        dataSets: [{
            label: "Candlestick Data",
            values: [
                { shadowH: 270, shadowL: 210, open: 240, close: 220 },  // Monday
                { shadowH: 245, shadowL: 205, open: 230, close: 210 },  // Tuesday
                { shadowH: 260, shadowL: 230, open: 250, close: 240 },  // Wednesday
                { shadowH: 255, shadowL: 225, open: 235, close: 245 },  // Thursday
                { shadowH: 275, shadowL: 235, open: 240, close: 260 },  // Friday
                { shadowH: 265, shadowL: 225, open: 250, close: 245 },  // Saturday
                { shadowH: 280, shadowL: 240, open: 255, close: 270 },  // Sunday
            ],
            config: {
                highlightColor: processColor('darkgray'),
                shadowColor: processColor('black'),
                shadowWidth: 1,
                shadowColorSameAsCandle: true,
                increasingColor: processColor('#165BAA'),
                increasingPaintStyle: 'FILL',
                decreasingColor: processColor('#000'),
            }
        }],
    });

    const xAxis = {
        valueFormatter: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        position: 'BOTTOM',
        drawGridLines: false,
        granularityEnabled: true,
        granularity: 1,
        textSize: 12,
        textColor: processColor('black'),
    };

    const yAxis = {
        left: {
            drawLabels: true,
            drawGridLines: true,
            granularityEnabled: true,
            granularity: 10,
            axisMinimum: 200,  // Adjust according to your data range
            axisMaximum: 280,  // Adjust according to your data range
            textSize: 12,
            textColor: processColor('black'),
        },
        right: {
            drawLabels: false,
        },
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.1)' }}>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image style={{ width: 43, height: 43, borderRadius: 21.5 }} source={require("../assets/download.jpeg")} />
                    <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'black' }}>David Walker</Text>
                    <Image style={{ width: 20, height: 20 }} source={require("../assets/bell-black.png")} />
                    <Image style={{ width: 18, height: 18 }} source={require("../assets/question-black.png")} />
                    <Image style={{ width: 18, height: 18 }} source={require("../assets/settings-black.png")} />
                </View>

                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', paddingHorizontal: 32, marginTop: 10 }}>NIKE</Text>
                <Text style={{ fontSize: 30, fontWeight: '600', color: 'black', paddingHorizontal: 32 }}>$600.7</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#165BAA', paddingHorizontal: 32 }}>-0.07%</Text>

                <View style={{ height: 300, marginHorizontal: 12, marginTop: 5,marginBottom:15 }}>
                    <CandleStickChart
                        style={{ flex: 1 }}
                        data={data}
                        marker={{
                            enabled: true,
                            markerColor: processColor('gray'),
                            textColor: processColor('white'),
                        }}
                        xAxis={xAxis}
                        yAxis={yAxis}
                        chartDescription={{ text: '' }}
                        legend={{ enabled: false }}
                        drawBorders={true}
                        borderColor={processColor('gray')}
                        borderWidth={1}
                    />
                </View>
                <View className='px-5 mt-2'>
                    <View className='flex-row justify-between items-center p-3 bg-[#004B90]/20 rounded-xl'>
                        <View className='flex-col items-start justify-between'>

                            <Text className='text-[18px] font-medium text-white'>Trade Convert with 0 fees</Text>
                            <Text className='text-[14px] font-semibold text-[#00325F]'>Runtime</Text>



                        </View>

                        <View>
                            <Image className='w-5 h-5' source={require("../assets/currency.png")} />
                        </View>

                    </View>
                </View>
                <Text className='px-5 mt-2 font-semibold text-[18px] text-[#00325F] '>
                    About NIKE
                </Text>
                <View className='mt-2 mb-1 px-5 flex-row justify-between items-start'>
                    <View>
                        <Text className="text-[14px] font-normal text-[#A6A6A6]">Rank</Text>
                    </View>
                    <Text className="text-[14px] font-medium text-[#3f3f3f]">No. 7</Text>

                </View>

                <View className=' mb-1 px-5 flex-row justify-between items-start'>
                    <View>
                        <Text className="text-[14px] font-normal text-[#A6A6A6]">Market Cap</Text>
                    </View>
                    <Text className="text-[14px] font-medium text-[#3f3f3f]">$88.77</Text>

                </View>

                <View className='mb-1 px-5 flex-row justify-between items-start'>
                    <View>
                        <Text className="text-[14px] font-normal text-[#A6A6A6]">Market Dominance</Text>
                    </View>
                    <Text className="text-[14px] font-medium text-[#3f3f3f]">7.88%</Text>

                </View>

            </ScrollView>

            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default Position;
