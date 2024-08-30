import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, processColor, Dimensions, ScrollView } from 'react-native';
import { CandleStickChart } from 'react-native-charts-wrapper';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");


const Markets2 = () => {
    const [selected, setSelected] = useState('1h');

    const handleSelect = (value) => {
        setSelected(value);
    };

    const candleData = {
        dataSets: [{
            values: [
                { shadowH: 34563, shadowL: 33982, open: 34450, close: 34265 },
                { shadowH: 34453, shadowL: 34123, open: 34342, close: 34200 },
                { shadowH: 34400, shadowL: 34000, open: 34200, close: 34100 },
                { shadowH: 34600, shadowL: 34200, open: 34500, close: 34300 },
                { shadowH: 34400, shadowL: 34000, open: 34200, close: 34100 }
            ],
            label: 'Stock Data',
            config: {
                highlightColor: processColor('red'),
                shadowColor: processColor('black'),
                shadowWidth: 1,
                shadowColorSameAsCandle: true,
                increasingColor: processColor('blue'),
                increasingPaintStyle: 'FILL',
                decreasingColor: processColor('red'),
                decreasingPaintStyle: 'FILL',
            }
        }]
    };

    const xAxis = {
        drawLabels: true,
        position: 'BOTTOM',
        drawGridLines: false,
        granularityEnabled: true,
        granularity: 1,
        valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    };

    const yAxis = {
        left: {
            enabled: true,
            drawGridLines: false,
        },
        right: {
            enabled: false,
        },
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Header */}

                    {/* <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.headerButton}>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image style={styles.profileImage} source={require("../assets/download.jpeg")} />
                    <Text style={styles.profileName}>David Walker</Text>
                    <Image style={styles.headerIcon} source={require("../assets/bell-black.png")} />
                    <Image style={styles.headerIcon} source={require("../assets/question-black.png")} />
                    <Image style={styles.headerIcon} source={require("../assets/settings-black.png")} />
                </View> */}
                    <Text style={styles.balanceText}>$2,432.32</Text>
                    <View style={styles.percentageContainer}>
                        <Text style={styles.percentageText}>-13.35% (24h)</Text>
                        <Image style={styles.percentageIcon} source={require("../assets/down.png")} />
                    </View>

                    {/* Time Selector */}
                    <View style={styles.timeSelectorContainer}>
                        {['1h', '24h', '1w'].map(time => (
                            <TouchableOpacity
                                key={time}
                                onPress={() => handleSelect(time)}
                                style={[styles.timeButton, selected === time && styles.selectedTimeButton]}
                            >
                                <Text style={[styles.timeText, selected === time && styles.selectedTimeText]}>
                                    {time}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Candlestick Chart */}
                    <View style={styles.chartContainer}>
                        <CandleStickChart
                            style={styles.chart}
                            data={candleData}
                            xAxis={xAxis}
                            yAxis={yAxis}
                            chartDescription={{ text: '' }}
                            legend={{ enabled: false }}
                            autoScaleMinMaxEnabled={true}
                            drawGridBackground={false}
                            scaleEnabled={true}
                            pinchZoom={true}
                            doubleTapToZoomEnabled={true}
                            highlightPerDragEnabled={true}
                            marker={{ enabled: true }}
                        />
                    </View>

                    {/* Market Details */}
                    <View style={styles.marketDetailsContainer}>
                        {[
                            { label: 'Open', value1: '35632.12', label2: 'High', value2: '35621.90' },
                            { label: 'Close', value1: '33432.42', label2: 'Low', value2: '33421.30' },
                            { label: 'Daily Vol', value1: '35632.12', label2: 'Market Cap', value2: '1.324M' },
                        ].map((item, index) => (
                            <View key={index} style={styles.marketDetailRow}>
                                <Text style={styles.detailLabel}>{item.label}</Text>
                                <View style={styles.detailValueContainer}>
                                    <Text style={styles.detailValue}>{item.value1}</Text>
                                    <Text style={styles.detailLabel}>{item.label2}</Text>
                                </View>
                                <Text style={styles.detailValue}>{item.value2}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

            </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
    },
    headerButton: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    profileImage: {
        width: 43,
        height: 43,
        borderRadius: 21.5,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'black',
    },
    headerIcon: {
        width: 20,
        height: 20,
    },
    balanceText: {
        fontSize: 44,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
    },
    percentageContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    percentageText: {
        fontSize: 12,
        color: 'red',
        marginRight: 5,
    },
    percentageIcon: {
        width: 12,
        height: 12,
    },
    timeSelectorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        padding: 5,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 15,
    },
    timeButton: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTimeButton: {
        backgroundColor: 'white',
    },
    timeText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    selectedTimeText: {
        color: 'blue',
    },
    chartContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    chart: {
        height: 300,
        backgroundColor: 'white',
    },
    marketDetailsContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    marketDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#F2F2F2',
    },
    detailLabel: {
        fontSize: 12,
        color: '#83878C',
        fontWeight: '500',
    },
    detailValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailValue: {
        fontSize: 14,
        color: '#27292C',
        fontWeight: '500',
        marginLeft: 10,
    },
});

export default Markets2;
