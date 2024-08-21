import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const ExpenseTracking2 = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
         <Header/>
            <View className='px-5' style={{height:screenHeight*0.8}} >
                <ScrollView  showsVerticalScrollIndicator={false}>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default ExpenseTracking2;
