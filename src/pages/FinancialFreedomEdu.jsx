import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import FinancialFreedom from './FinancialFreedom';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const FinancialFreedomEdu = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-black font-semibold text-[15px] my-2'>Crafting Your Path to Financial Freedom:</Text>
                    <Text className='text-black font-semibold text-[14px] my-2'>Introduction</Text>
                    <Text >augure the completes of hard a teaming an aune by wine rem me ident am</Text>
                    <Text >historal some contrares but ato asper, we an ut retiremen plen that not only</Text>

                    <Text className='text-black font-semibold text-[14px] my-2'>Learning from History:</Text>

                    <Text >The Blueprint for Success:</Text>

                    <Text className='text-black font-semibold text-[15px] my-2'>Within the Next 5 Years:</Text>

                    <Text className='text-black font-semibold text-[14px] my-2'>1. Assess Your Current Financial Situation:</Text>



                    <Text className='my-1'>Take a comprehensive look at your financial landscape, including income, expenses, debts, and assets.
                        {`\n \n`}
                        Understanding your current financial position is crucial for developing a realistic retirement plan. It allows you to identify areas for improvement, such as reducing expenses or increasing income, and lays the foundation for setting achievable financial goals.</Text>

                    <Text className='text-black font-semibold text-[14px] my-2'>2. Set Clear Goals:</Text>


                    <Text className='my-1'>Define your retirement age, lifestyle aspirations, and financial milestones. Clear and specific goals provide direction and motivation, helping you stay focused on your long-term objectives. Whether it's retiring at a certain age, traveling the world, or leaving a financial legacy for your loved ones, having well-defined goals allows you to tailor your retirement plan accordingly</Text>

                    <Text className='text-black font-semibold text-[14px] my-2'>3. Understand Risk Tolerance:</Text>

                    <Text className='my-1'>Evaluate your comfort level with market fluctuations and investment risk. Risk tolerance varies from person to person and is influenced by factors such as age, financial obligations, and investment experience. Understanding your risk tolerance helps you select investment options that align with your temperament and financial goals. It also enables you to construct a balanced portfolio that balances risk and potential return.</Text>


                    <Text className='text-black font-semibold text-[14px] my-2'>4. Establish an IRA:</Text>

                    <Text className='my-1'>Open an Individual Retirement Account (IRA), either Traditional or Roth, to take advantage of tax benefits and investment opportunities. Traditional IRAs offer tax-deferred growth, meaning you won't pay taxes on your investment gains until you make withdrawals in retirement. Roth IRAs, on the other hand, allow for tax-free withdrawals in retirement, making them an attractive option for tax-conscious investors. Both types of IRAs offer a wide range of investment options, including stocks, bonds, mutual funds, and exchange-traded funds (ETFs), allowing you to tailor your portfolio to your risk tolerance and investment preferences.</Text>



                    <Text className='text-black font-semibold text-[14px] my-2'>5. Invest Regularly:</Text>

                    <Text className='my-1'>Consistently contribute to your IRA and other investment accounts to harness the power of compounding. Regular investing, also known as dollar-cost averaging, involves investing a fixed amount of money at regular intervals, regardless of market conditions. This strategy allows you to buy more shares when prices are low and fewer shares when prices are high, smoothing out market volatility over time and potentially enhancing long-term returns.</Text>

                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default FinancialFreedomEdu;
