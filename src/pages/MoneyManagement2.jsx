import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { BarChart } from 'react-native-gifted-charts';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import BgImage from '../Components/BgImage';

const { height: screenHeight } = Dimensions.get('window');



const MoneyManagement2 = () => {

    const tableHead = ['Account Type', 'Total Number', 'Balance', 'Credit Limit'];
    const tableData = [
        ['Mortage', '1', '$123456', '$123456'],
        ['Investment', '3', '$123456', '$123456'],
        ['Car Loans', '1', '$123456', '$123456'],
        ['Total', '5', '$123456', '$123456'],
    ];

    const tableHead2 = ['Account Type', 'Status', 'Monthly Payment', 'Accounts With Balance'];
    const tableData2 = [
        ['Mortage', 'Open', '$123456', '1'],
        ['Investment', 'Never', '$123456', '3'],
        ['Car Loans', 'Late', '$123456', '1'],
        ['Total', 'Open', '$123456', '5'],
    ];
    const barData = [
        {
            value: 30, frontColor: '#71c4ca', topLabelComponent: () => (
                <Text style={{ color: 'black', fontSize: 13, marginBottom: 6 }}>30</Text>
            ),
        },
        {
            value: 40, frontColor: '#eedb85', topLabelComponent: () => (
                <Text style={{ color: 'black', fontSize: 13, marginBottom: 6 }}>40</Text>
            ),
        },
        {
            value: 60, frontColor: '#f08699', topLabelComponent: () => (
                <Text style={{ color: 'black', fontSize: 13, marginBottom: 6 }}>60</Text>
            ),
        },

    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View style={{ height: screenHeight * 0.75 }} className='mt-2'>
                <ScrollView className='px-5'>
                    <View>
                        <View className='w-full bg-[#152425] p-2 rounded-tl-xl rounded-tr-xl'>
                            <Text className='font-semibold text-white text-lg'>Credit Report</Text>
                        </View>
                        <View className='w-full bg-[#bbcfd0] p-2 rounded-bl-xl rounded-br-xl'>
                            <View className='flex-row justify-between items-center'>
                                <Text className='font-bold text-black text-base'>From</Text>
                                <Text className='font-normal text-black text-base'>10/10.20209</Text>
                            </View>

                            <View className='flex-row justify-between items-center'>
                                <Text className='font-bold text-black text-base'>Until</Text>
                                <Text className='font-normal text-black text-base'>10/10.20209</Text>
                            </View>

                            <View className='flex-row justify-between items-center'>
                                <Text className='font-bold text-black text-base'>Customer Number:</Text>
                                <Text className='font-normal text-black text-base'>12345678</Text>
                            </View>

                            <View className='flex-row justify-between items-center'>
                                <Text className='font-bold text-black text-base'>Customer Name:</Text>
                                <Text className='font-normal text-black text-base'>Jhon Doe</Text>
                            </View>

                            <View className='flex-row justify-between items-center'>
                                <Text className='font-bold text-black text-base'>Phone Number:</Text>
                                <Text className='font-normal text-black text-base'>1234 567 89101</Text>
                            </View>

                            <View className='flex-row justify-between items-center'>
                                <Text className='font-bold text-black text-base'>Address:</Text>
                                <Text className='font-normal text-black text-base'>256 lexington tennsessee</Text>
                            </View>
                        </View>
                    </View>

                    <View className='my-2'>
                        <View className='w-full bg-[#2a484a] p-2 rounded-tl-xl rounded-tr-xl'>
                            <Text className='font-semibold text-white text-lg'>Credit Summary</Text>
                        </View>
                        <View className='w-full bg-[#71c4ca] p-2 rounded-bl-xl rounded-br-xl'>
                            <Text className='font-normal mb-2 text-black text-xs'>
                                Creating a "credit summary" text typically involves summarizing key details about an individual's or entity's credit status...
                            </Text>

                            <ScrollView horizontal={true}>
                                <View>
                                    <View className='flex-row bg-[#2a484a]'>
                                        {tableHead.map((head, index) => (
                                            <View key={index} className='flex-1 w-[50px] p-2 border-r border-white'>
                                                <Text className='text-white font-semibold text-xs'>{head}</Text>
                                            </View>
                                        ))}
                                    </View>

                                    {tableData.map((rowData, rowIndex) => (
                                        <View key={rowIndex} className={`flex-row ${rowIndex % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                                            {rowData.map((cellData, cellIndex) => (
                                                <View key={cellIndex} className={`flex-1 p-1 w-[75px] border-r border-gray-300 ${cellIndex === 0 ? 'bg-gray-300' : ''}`}>
                                                    <Text className='text-black text-[11px]'>{cellData}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>

                            <ScrollView horizontal={true} className='mt-2'>
                                <View>
                                    <View className='flex-row bg-[#2a484a]'>
                                        {tableHead2.map((head, index) => (
                                            <View key={index} className='flex-1 w-[50px] p-2 border-r border-white'>
                                                <Text className='text-white font-semibold text-xs'>{head}</Text>
                                            </View>
                                        ))}
                                    </View>

                                    {tableData2.map((rowData, rowIndex) => (
                                        <View key={rowIndex} className={`flex-row ${rowIndex % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                                            {rowData.map((cellData, cellIndex) => (
                                                <View key={cellIndex} className={`flex-1 p-1 w-[75px] border-r border-gray-300 ${cellIndex === 0 ? 'bg-gray-300' : ''}`}>
                                                    <Text className='text-black text-[11px]'>{cellData}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>

                        </View>
                    </View>
                    <View className='my-2'>
                        <View className='w-full bg-[#2a484a] p-2 rounded-tl-xl rounded-tr-xl'>
                            <Text className='font-semibold text-white text-lg'>Debt by account type</Text>
                        </View>
                        <View className='w-full bg-[#bccfd0] p-2 rounded-bl-xl rounded-br-xl'>

                            <View className='-left-2 bottom-5'>
                                <BarChart
                                    horizontal
                                    barWidth={22}
                                    noOfSections={6}
                                    barBorderRadius={10}
                                    frontColor="lightgray"
                                    data={barData}
                                    yAxisThickness={1}
                                    xAxisThickness={1}

                                    rulesColor={"black"}



                                />
                            </View>
                            <View className='ml-4 gap-y-2'>
                                <View className='flex-row gap-x-2 items-center'>

                                    <View className='w-5 h-5 rou bg-[#71c4ca] rounded-full'></View>

                                    <Text className='font-medium text-black text-xs'>Mortage</Text>

                                </View>


                                <View className='flex-row gap-x-2 items-center'>

                                    <View className='w-5 h-5 rou bg-[#eedb85] rounded-full'></View>

                                    <Text className='font-medium text-black text-xs'>Credit</Text>

                                </View>


                                <View className='flex-row gap-x-2 items-center'>

                                    <View className='w-5 h-5 rou bg-[#f08699] rounded-full'></View>

                                    <Text className='font-medium text-black text-xs'>Balance</Text>

                                </View>
                            </View>
                        </View>


                    </View>


                    <View className='my-2'>
                        <View className='w-full bg-[#2a484a] p-2 rounded-tl-xl rounded-tr-xl'>
                            <Text className='font-semibold text-white text-lg'>Account Age</Text>
                        </View>
                        <View className='w-full bg-[#bccfd0] p-2 rounded-bl-xl rounded-br-xl'>
                            <Text className='font-normal mb-2 text-black text-sm'>
                                It is the great idea to keep your oldes account open beacuse a hig average account agae demonstrates stability  to lenders
                            </Text>

                            <View className='w-full bg-[#bbcfd0] p-2 rounded-bl-xl rounded-br-xl'>
                                <View className='flex-row justify-between items-center'>
                                    <Text className='font-bold text-black text-sm'>Length of credit history</Text>
                                    <Text className='font-normal text-black text-xs'>10 Years,11 months</Text>
                                </View>

                                <View className='flex-row justify-between items-center'>
                                    <Text className='font-bold text-black text-sm'>Average Account Age
                                    </Text>
                                    <Text className='font-normal text-black text-xs'>7 years,2 months</Text>
                                </View>

                                <View className='flex-row justify-between items-center'>
                                    <Text className='font-bold text-black text-sm'>Oldest Account</Text>
                                    <Text className='font-normal text-black text-xs'>CApital Bank USA</Text>
                                </View>

                                <View className='flex-row justify-between items-center'>
                                    <Text className='font-bold text-black text-sm'>Most Recent Account</Text>
                                    <Text className='font-normal text-black text-xs'>Bells Fargo</Text>
                                </View>


                            </View>



                        </View>
                    </View>


                    <View className='my-2'>
                        <View className='w-full bg-[#2a484a] p-2 rounded-tl-xl rounded-tr-xl'>
                            <Text className='font-semibold text-white text-lg'>Inquiries and request for credit history</Text>
                        </View>
                        <View className='w-full bg-[#71c4ca] p-2 rounded-bl-xl rounded-br-xl'>
                            <Text className='font-normal mb-2 text-black text-xs'>
                                Numerous inquiries on your credit report might make you appear riskt to lenders. Only seek new credit when yu truly need it.
                            </Text>

                            <Text className='font-bold mb-2 text-black text-xs'>
                                Inquiries in the last 24 hours.
                            </Text>

                            <View className='flex-row items-center w-full border border-white'>

                                <Text className='font-xs font-semibold text-black border-r border-white p-2'>ABC Mortage Services</Text>

                                <Text className='font-xs font-semibold text-black p-2'>01/24/2028</Text>

                            </View>

                            <View className='flex-row items-center w-full border border-white mt-2'>

                                <Text className='font-xs font-semibold text-black border-r border-white p-2'>Blue Hill Lending Co.</Text>

                                <Text className='font-xs font-semibold text-black p-2'>01/24/2028</Text>

                            </View>



                        </View>
                    </View>



                </ScrollView>
            </View>

            <View className=' px-8 mt-3'>
                <LinearGradient
                    colors={['#01101D', '#0078BB']}
                    style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 120 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <TouchableOpacity className='w-[300px] h-[40px] flex-row justify-center items-center' >
                        <Text className='text-white text-[17px] font-normal'>Download PDF</Text>
                        <Image className='ml-2 h-[17px] w-[17px]' source={require("../assets/download-circular-button.png")} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: '#2a484a', alignItems: "flex-start" },
    wrapper: { flexDirection: 'row', backgroundColor: "white" },
    title: { flex: 1, backgroundColor: '#bccfd0' },
    row: { height: 28 },
    text: { textAlign: 'center' },
    text1: { textAlign: "center", color: "white" },
    text2: { textAlign: "center", color: "black" },
});


export default MoneyManagement2;






















