import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const TaxDeductionGuide = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header/>
            <View className='px-5' style={{height: screenHeight * 0.8}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-lg font-bold mb-4'>1. Tax Deduction Guide</Text>
                    
                    <Text className='text-base font-bold mb-2'>Tax Deduction Guide for Real Estate Investors</Text>
                    <Text className='text-base mb-4'>
                        As a real estate investor, you can take advantage of various tax deductions to reduce your 
                        taxable income. This guide provides an overview of the common deductions available to 
                        property owners and investors.
                    </Text>
                    
                    <Text className='text-base font-bold mb-2'>1. Mortgage Interest</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Deduction:</Text> Interest paid on loans used to acquire or improve rental properties.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Documentation:</Text> Mortgage statements showing interest payments.</Text>
                    
                    <Text className='text-base font-bold mb-2'>2. Property Taxes</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Deduction:</Text> Annual property taxes paid to local and state governments.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Documentation:</Text> Property tax bills and receipts of payments.</Text>
                    
                    <Text className='text-base font-bold mb-2'>3. Operating Expenses</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Maintenance and Repairs:</Text> Costs for maintaining and repairing the property (e.g., fixing leaks, painting, landscaping).</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Utilities:</Text> Payments for services such as water, electricity, and gas.</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Insurance:</Text> Premiums for property and liability insurance policies.</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Property Management Fees:</Text> Fees paid to property management companies.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Advertising:</Text> Costs for marketing rental properties to potential tenants.</Text>
                    
                    <Text className='text-base font-bold mb-2'>4. Depreciation</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Deduction:</Text> Annual deduction for the wear and tear of the property over its useful life.</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Calculation:</Text> Typically calculated using the Modified Accelerated Cost Recovery System (MACRS).</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Documentation:</Text> Depreciation schedule showing annual depreciation amounts.</Text>
                    
                    <Text className='text-base font-bold mb-2'>5. Professional Services</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Legal Fees:</Text> Costs for legal advice and services related to property management.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Accounting Fees:</Text> Payments to accountants for tax preparation and financial advice.</Text>
                    
                    <Text className='text-base font-bold mb-2'>6. Travel Expenses</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Local Travel:</Text> Deductible expenses for traveling to and from rental properties (e.g., mileage, tolls, parking).</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Long-Distance Travel:</Text> Costs for travel to rental properties that are located far from your home, including airfare, lodging, and meals.</Text>

                    <Text className='text-base font-bold mb-2'>8. Interest on Loans</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Deduction:</Text> Interest on loans taken for property-related expenses, such as renovations or repairs.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Documentation:</Text> Loan agreements and interest statements.</Text>

                    <Text className='text-base font-bold mb-2'>9. Losses from Theft or Casualties</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Deduction:</Text> Costs associated with damage or loss due to theft, vandalism, or natural disasters not covered by insurance.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Documentation:</Text> Police reports, insurance claims, and repair invoices.</Text>

                    <Text className='text-base font-bold mb-2'>10. HOA Fees</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Deduction:</Text> Monthly or annual homeowners association fees for properties located in HOA communities.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Documentation:</Text> HOA statements and payment records.</Text>

                    <Text className='text-base font-bold mb-2'>Maximizing Your Deductions</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Keep Accurate Records:</Text> Maintain detailed and organized records of all income and expenses related to your rental properties.</Text>
                    <Text className='text-base mb-1'><Text className='font-bold'>Consult a Tax Professional:</Text> Seek advice from a qualified tax professional to ensure you are taking advantage of all available deductions and complying with tax laws.</Text>
                    <Text className='text-base mb-4'><Text className='font-bold'>Use Tax Software:</Text> Consider using tax software to track your deductions and simplify the filing process.</Text>
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default TaxDeductionGuide;
