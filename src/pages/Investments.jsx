import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { LineChart } from 'react-native-gifted-charts';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Investments = () => {
    const [selected, setSelected] = useState('1h');

    const handleSelect = (value) => {
        setSelected(value);
    };

    const ptData30m = [
        { value: 160, },
        { value: 180, },
        { value: 190, },
        { value: 180, },
        { value: 140, },
        { value: 145, },
        { value: 160, },
        { value: 200, },
        { value: 220, },
        { value: 280, },
        { value: 260, },
        { value: 340, },
        { value: 385, },
        { value: 280, },
        { value: 390, },
        { value: 370, },
        { value: 285, },
        { value: 295, },
        { value: 280, },
        { value: 295, },
        { value: 260, },
        { value: 255, },
        { value: 190, },
        { value: 220, },
        { value: 205, },
        { value: 230, },
        { value: 210, },
        { value: 240, },
        { value: 250, },
        { value: 280, },
        { value: 250, },
        { value: 210, },
    ];

    const ptData1H = [
        { value: 100 }, { value: 120 }, { value: 140 }, { value: 160 }, { value: 180 },
        { value: 200 }, { value: 220 }, { value: 240 }, { value: 260 }, { value: 280 },
        { value: 300 }, { value: 320 }, { value: 340 }, { value: 360 }, { value: 380 },
    ];

    const ptData4H = [
        { value: 80 }, { value: 90 }, { value: 100 }, { value: 110 }, { value: 120 },
        { value: 130 }, { value: 140 }, { value: 150 }, { value: 160 }, { value: 170 },
        { value: 180 }, { value: 190 }, { value: 200 }, { value: 210 }, { value: 220 },
        { value: 230 }, { value: 240 }, { value: 250 }, { value: 260 }, { value: 270 },
        { value: 280 }, { value: 290 }, { value: 300 }, { value: 310 }, { value: 320 },
    ];

    const ptData1D = [
        { value: 60 }, { value: 70 }, { value: 80 }, { value: 90 }, { value: 100 },
        { value: 110 }, { value: 120 }, { value: 130 }, { value: 140 }, { value: 150 },
        { value: 160 }, { value: 170 }, { value: 180 }, { value: 190 }, { value: 200 },
        { value: 210 }, { value: 220 }, { value: 230 }, { value: 240 }, { value: 250 },
        { value: 260 }, { value: 270 }, { value: 280 }, { value: 290 }, { value: 300 },
        { value: 310 }, { value: 320 }, { value: 330 }, { value: 340 }, { value: 350 },
        { value: 360 }, { value: 370 }, { value: 380 }, { value: 390 }, { value: 400 },
    ];

    const ptData7D = [
        { value: 40 }, { value: 50 }, { value: 60 }, { value: 70 }, { value: 80 },
        { value: 90 }, { value: 100 }, { value: 110 }, { value: 120 }, { value: 130 },
        { value: 140 }, { value: 150 }, { value: 160 }, { value: 170 }, { value: 180 },
        { value: 190 }, { value: 200 }, { value: 210 }, { value: 220 }, { value: 230 },
        { value: 240 }, { value: 250 }, { value: 260 }, { value: 270 }, { value: 280 },
        { value: 290 }, { value: 300 }, { value: 310 }, { value: 320 }, { value: 330 },
        { value: 340 }, { value: 350 }, { value: 360 }, { value: 370 }, { value: 380 },
    ];

    const stockData = [
        {

            Risk1: 79,
            Risk2: 75,
            data: [{ value: 1 }, { value: 10 }, { value: 5 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 43 }],
            color: '#003655',
            text: "If 2013 like Bull Market to happen again",
            percent1: 0.59,
            percent2: 9.59,
            up: require("../assets/tri-up.png"),
            down: require("../assets/tri-down.png")

        },
        {
            Risk1: 78,
            Risk2: 75,
            data: [{ value: 43 }, { value: 25 }, { value: 30 }, { value: 15 }, { value: 20 }, { value: 5 }, { value: 10 }, { value: 0 }],
            color: '#003655',
            text: "If 2008 like Bear Market to happen again",
            percent1: 38.5,
            percent2: -32.5,
            up: require("../assets/tri-up.png"),
            down: require("../assets/tri-down.png")
        },
        {
            Risk1: 78,
            Risk2: 75,
            data: [{ value: 20 }, { value: 15 }, { value: 30 }, { value: 5 }, { value: 10 }, { value: 4 }, { value: 25 }, { value: 43 }],
            color: '#003655',
            text: "If financial crisis to happen again",
            percent1: 0.59,
            percent2: 9.59,
            up: require("../assets/tri-up.png"),
            down: require("../assets/tri-down.png")
        },


    ];

    const [ptData, setPtData] = useState(ptData30m);


    const stocks = [
        { symbol: "VASGX", name: "VANGUARD", price: "$23,495", change: "+23.4%" },
        { symbol: "VHDYX", name: "VANGUARD", price: "$15.95", change: "-12.1%" },
        { symbol: "LPRRX", name: "Ethereum", price: "$12.950", change: "+11.1%" },
        { symbol: "VTV", name: "VANGUARD", price: "$15.95", change: "-10.9%" },
        { symbol: "RGAGX", name: "VANGUARD", price: "$15.95", change: "+10.8%" },
        { symbol: "DVY", name: "VANGUARD", price: "$15.95", change: "-12.2%" },
        { symbol: "WTMGX", name: "ISHARES", price: "$15.95", change: "-9.8%" },
        { symbol: "VWO", name: "Ethereum", price: "$12.950", change: "+1.5%" },
    ];

    const carddata = [{ value: 1 }, { value: 10 }, { value: 5 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 43 }]
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <Text className=' font-medium text-[20px] text-black'>Welcome to Portfolio</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='h-[200px] relative'>
                        <View
                            style={{
                                paddingVertical: 2,
                                paddingLeft: 1,
                                backgroundColor: '#fff',
                                position: "absolute",
                                bottom: -10
                            }}>
                            <LineChart
                                areaChart
                                data={ptData}
                                rotateLabel
                                width={300}
                                hideDataPoints
                                hideYAxisText
                                hideRules
                                spacing={10}
                                curved
                                isAnimated={true}
                                startFillColor="#003655"
                                endFillColor="#004B90"
                                startOpacity={0.9}
                                endOpacity={0.5}
                                initialSpacing={0}
                                noOfSections={6}
                                maxValue={600}
                                yAxisColor="white"
                                yAxisThickness={0}
                                rulesType="solid"
                                rulesColor="gray"
                                yAxisTextStyle={{ color: 'gray' }}
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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => setPtData(ptData30m)}>
                                <Text className='text-black'>30m</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPtData(ptData1H)}>
                                <Text className='text-black'>1H</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPtData(ptData4H)}>
                                <Text className='text-black'>4H</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPtData(ptData1D)}>
                                <Text className='text-black'>1D</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPtData(ptData7D)}>
                                <Text className='text-black'>7D</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text className=' font-medium text-[20px] text-black mt-3'>Portfolio</Text>
                    <ScrollView className=''>
                        {stockData.map((stock, index) => (
                            <View key={index} className='bg-[#004B90]/10  px-2 py-1 rounded-xl  mb-3'>
                                <Text className='font-normal text-sm text-[#00325F]'>{stock.text}</Text>
                                <View key={index} className='flex-row justify-between items-start py-3'>
                                    <View className='flex-row items-center gap-x-5 pl-2'>
                                        <View className='rounded-md w-9 h-11 it bg-[#D8D8D8] flex-col items-center justify-around'>
                                            <Text className='text-white font-semibold text-xs'>Risk</Text>
                                            <Text className='text-white font-semibold text-xs'>{stock.Risk1}</Text>
                                        </View>
                                        <View className='bg-[#003655] rounded-lg items-center justify-center p-1 flex-row gap-x-[1px]'>
                                            <Image className='w-2 h-2' source={stock.up} />
                                            <Text className='text-white font-semibold text-xs'>{stock.percent1} %</Text>
                                        </View>

                                    </View>
                                    <View className=' flex-row items-center '>
                                        <View className='absolute -top-3 -left-16'>
                                            <LineChart
                                                areaChart
                                                curved
                                                isAnimated
                                                data={stock.data}
                                                height={50}
                                                width={120}
                                                spacing={8}
                                                initialSpacing={0}
                                                color1={stock.color}
                                                hideDataPoints
                                                hideAxesAndRules
                                                startFillColor1={stock.color}
                                                startOpacity={0.5}
                                                endOpacity={0.1} />
                                        </View>

                                    </View>
                                    <View className='flex-row items-center gap-x-5  pl'>
                                        <View className='rounded-md w-9 h-11 it bg-[#D8D8D8] flex-col items-center justify-around'>
                                            <Text className='text-white font-semibold text-xs'>Risk</Text>
                                            <Text className='text-white font-semibold text-xs'>{stock.percent2}</Text>
                                        </View>
                                        <View className='bg-[#003655] rounded-lg items-center justify-center p-1 flex-row gap-x-[1px]'>
                                            <Image className='w-2 h-2' source={stock.down} />
                                            <Text className='text-white font-semibold text-xs'>{stock.percent2}%</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>

                        ))}
                    </ScrollView>


                    <View className='bg-[#004B90]/10 p-2 rounded-lg mt-2'>
                        <View className='flex-row justify-between items-center mt-3'>
                            <View>
                                <Text className='font-semibold text-black text-base'>Copy</Text>


                            </View>

                            <View className="flex-row gap-x-2 ">
                                <TouchableOpacity
                                    onPress={() => handleSelect('All')}
                                    className={` rounded-lg px-2 py-1  ${selected === 'All' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                        }`}
                                >
                                    <Text className={`text-sm font-medium text-center  ${selected === 'All' ? "text-blue-500" : "text-black"}`} >All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleSelect('Portfolio')}
                                    className={` rounded-lg px-2 py-1  ${selected === 'Portfolio' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                        }`}
                                >
                                    <Text className={`text-sm font-medium text-center  ${selected === 'Portfolio' ? "text-blue-500" : "text-black"}`} >Portfolio</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleSelect('Accounts')}
                                    className={` rounded-lg px-2 py-1  ${selected === 'Accounts' ? 'bg-white ' : 'bg-[#F2F2F2]'
                                        }`}
                                >
                                    <Text className={`text-sm font-medium text-center  ${selected === 'Accounts' ? "text-blue-500" : "text-black"}`} >Accounts</Text>
                                </TouchableOpacity>


                            </View>

                        </View>

                        <View className='flex-col gap-y-4 mt-4 '>
                            {stocks.map((stock, index) => {
                                const isPositive = stock.change.includes('+');
                                const bgColor = isPositive ? '#00325F/30' : '#E52E2E/30'; // Light blue for positive, light red for negative
                                const textColor = isPositive ? '#00325F' : '#E52E2E'; // Dark blue for positive, dark red for negative

                                return (
                                    <View key={index} className='flex-row justify-between items-center gap-x-2'>
                                        <Text className='font-semibold w-[25%] text-black text-base'>{stock.symbol}</Text>
                                        <Text className='font-medium w-[25%] text-black/40 text-xs'>{stock.name}</Text>
                                        <Text className='font-normal w-[25%] text-black text-xs'>{stock.price}</Text>
                                        <View className={`rounded-xl w-[25%] p-[2px]`} style={{ backgroundColor: bgColor }}>
                                            <Text className='font-normal text-sm' style={{ color: textColor }}>{stock.change}</Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>

                    </View>

                    <View className='bg-[#004770] h-44 rounded-xl mt-4 p-3 relative'>
                        <View className='flex-row items-center gap-x-2'>
                            <View className='bg-[#929292] rounded-lg p-2 items-center'>
                                <Text className='font-semibold text-xs text-white'>Risk</Text>
                                <Text className='font-semibold text-xs text-white'>75</Text>
                            </View>
                            <View className='flex-col items-start'>
                                <Text className='font-bold text-white text-base'>Risk Analysis</Text>
                                <Text className='font-normal text-white text-sm'>Ethereum</Text>
                            </View>

                        </View>
                        <Text className='font-bold text-white text-base mt-6'>$101,893</Text>

                        <View className='flex-row items-center gap-x-5 mt-6'>
                            <Text className='font-normal text-white text-sm'>EXAMPLE IRA</Text>
                            <View className='bg-[#e8ffeb] px-2 py-1 rounded-xl'>
                                <Text className='font-semibold text-xs text-black'>+24.68%</Text>
                            </View>



                        </View>

                        <View className='absolute left-40 top-12'>
                            <LineChart
                                areaChart
                                curved
                                isAnimated
                                data={carddata}
                                height={50}
                                width={200}
                                spacing={12}
                                initialSpacing={0}
                                color1={"white"}
                                hideDataPoints
                                hideAxesAndRules
                                startFillColor1={"white"}
                                startOpacity={0.5}
                                endOpacity={0.1} />
                        </View>
                    </View>





                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Investments;
