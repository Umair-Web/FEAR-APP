import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { PieChart } from "react-native-gifted-charts";

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const TaxEfficientWithdrawal = () => {

    const pieData = [
        { value: 47, color: '#E697FF' },
        { value: 40, color: '#82F0FF' },
        { value: 20, color: '#FFA5CB' },
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
                            width: screenWidth * 0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#E697FF')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 10 }}>Retire at 65 with income of $80,000 per year</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: screenWidth * 0.7 }}>
                        {renderDot('#82F0FF')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 10 }}>Travel to Europe every year after retirement</Text>
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
                            width: screenWidth * 0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#FFA5CB')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 10 }}>Pay off all the debts before retirement</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: screenWidth * 0.7 }}>
                        {renderDot('#63ABFD')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 10 }}>Comparing several options</Text>
                    </View>
                </View>
            </>
        );
    };


    const pieData2 = [
        { value: 40, color: '#7AFFC7' },
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
                            width: screenWidth * 0.7,
                            marginRight: 20,
                        }}>
                        {renderDot('#7AFFC7')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 10 }}>Work part time in retirement.</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: screenWidth * 0.7 }}>
                        {renderDot('#D884FF')}
                        <Text style={{ color: 'black', fontWeight: "400", fontSize: 10 }}>Save $1 million in retirement accounts by age 60</Text>
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
                    <Text className='font-semibold text-[15px] text-[#003655] my-1'>Tax-Efficient Withdrawal Strategies</Text>

                    <Text className='font-bold text-[15px] text-[#374151] my-1'>Tax-Efficient Withdrawal Strategies for Retirement</Text>

                    <Text className='font-medium text-[15px] text-[#374151] my-1'>Planning your retirement withdrawals strategically can help minimize tax liabilities and maximize your retirement income. Here are key considerations and tools to help you navigate tax-efficient withdrawal strategies:</Text>

                    <Text className='font-bold text-[15px] text-[#374151] my-2'> Understanding Retirement Accounts and Taxation </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1 underline'>• Know Your Accounts : </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1'>Understand how different retirement accounts (e.g., traditional IRA, Roth IRA, 401(k)) are taxed during contributions, growth, and withdrawals. </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1 underline'>• Tax Bracket Basics : </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1'>Familiarize yourself with tax brackets and how your withdrawals can impact your taxable income in retirement. </Text>



                    <Text className='font-bold text-[15px] text-[#374151] my-2'>Strategies for Tax-efficient Withdrawals </Text>


                    <Text className='font-bold text-[15px] text-[#374151] my-2 underline'>Sequential Withdrawals: </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1'>Consider withdrawing from taxable accounts first to allow taxdeferred accounts (e.g., traditional IRAs, 401(k)s) to continue growing tax-deferred.
                        ial situation and retirement goals. Resources and Tools Our Roth IRA Conversion Calculator: Access retirement income planners and our very own Roth IRA Conversion Calculator Roth IRA conversion calculator to simulate different withdrawal strategies and tax scenarios</Text>


                    <Text className='font-bold text-[15px] text-[#374151] my-2 underline'>Asset Location Optimization  </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1'><Text className='underline'>Asset Allocation: </Text>Optimize the placement of assets between taxable, tax-deferred, and tax-free accounts to minimize overall taxes. Consider which investments are best held in each account type for tax efficiency.<Text className='font-bold underline'> Managing Required Minimum Distributions (RMDs).</Text></Text>



                    <Text className='font-medium text-[15px] text-[#374151] my-1 underline'>
                        Plan for RMDs

                    </Text>


                    <Text className='font-medium text-[15px] text-[#374151] my-1'>
                        Understand the rules and implications of Required Minimum Distributions (RMDs) from tax-deferred retirement accounts starting at age 72 (or 70½ for those born before July 1, 1949). Professional Guidance Consultation with Advisors: Consider consulting with a tax advisor or financial planner for personalized recommendations tailored to your specific finance.

                    </Text>

                    <Text className='font-semibold text-[15px] text-[#003655] my-2'>Tax-Efficient Withdrawal Strategies</Text>


                    <View className='px-2 my-1'>
                        <Text className='font-semibold text-xs text-[#00325F] my-1'>Setting Goals and objectives</Text>

                        <View
                            style={{

                                backgroundColor: '#fff',
                                borderRadius: 10,
                                flex: 1,
                                borderWidth: 0.5,
                                marginTop: 8
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
                                borderRadius: 10,
                                flex: 1,
                                borderWidth: 0.5,
                                marginTop: 8
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

export default TaxEfficientWithdrawal;
