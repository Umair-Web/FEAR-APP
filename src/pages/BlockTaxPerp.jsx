import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

import { useNavigation } from '@react-navigation/native';


const { height: screenHeight } = Dimensions.get("window");

const BlockTaxPrep = () => {

    const navigation = useNavigation();


    const financialTools = [
        { id: 1, title: 'Retirement Calculator',Link:"Retirement" },
        { id: 2, title: 'Retirement Goals',Link:"RetirementGoals"  },
        { id: 3, title: 'Portfolio Management',Link:"Investments"  },
        { id: 4, title: 'Diversification Analysis',Link:"Invest3"  },
        { id: 5, title: 'Liquidate Analysis',Link:"Invest4"  },
        { id: 7, title: 'Investments',Link:"Investments2"  },
        { id: 8, title: 'Retirement Income Planning',Link:"RetirementIncomePlanning"  },
        { id: 9, title: 'Social Security Estimator',Link:"SocialSecurityEstimator" },
        { id: 10, title: 'Budget Planner',Link:"RetiremnentBudgetPlanner"  },
        { id: 11, title: 'Roth Calculator',Link:"TaxChart"  },
        { id: 12, title: 'Tax Efficient Withdrawal Strategies',Link:"TaxEfficientWithdrawal"  },
        { id: 13, title: 'Expense Tracking',Link:"ExpenseTrackingText"  },
        { id: 14, title: 'Account Type Management',Link:"SpendingCategory"  },
        // { id: 15, title: 'Insurance policy management',Link:""  },
        // { id: 16, title: 'Premium tracking and payments',Link:""  },
        // { id: 17, title: 'Payment reminder',Link:""  },
        // { id: 18, title: 'Monthly expenses',Link:""  },
        // { id: 19, title: 'Insurance agents',Link:""  },
        // { id: 20, title: 'Property listing',Link:""  },
        // { id: 21, title: 'Home finance',Link:""  },
        // { id: 22, title: 'Property index',Link:""  },
        // { id: 23, title: 'Property market trends',Link:""  },
        // { id: 24, title: 'ROi calculator',Link:""  },
        // { id: 25, title: 'Compare mortgage rates',Link:""  },
        // { id: 26, title: 'Tax deduction guide',Link:""  },

    ];
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {financialTools.map((tool) => (
                        <TouchableOpacity   delayPressIn={1} onPress={()=>(navigation.navigate(tool.Link))} key={tool.id} className='bg-[#003655] my-1 h-fit w-full flex-row items-center justify-between p-3 rounded-md'>
                            <Text className='font-medium text-base text-white w-11/12'>{tool.title}</Text>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default BlockTaxPrep;
