import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';


const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const MoneyManagementEducation1 = () => {
    const navigation = useNavigation();
    const chapters = [

        // Money Management Chapters
        { title: 'Chapter 1 Introduction to Money Management', date: '29 Oct 2023', size: '2 MB',Link:"MoneyManagementEduPdf" },
        { title: 'Chapter 2 Creating a Budget', date: '29 Oct 2023', size: '14 KB',Link:"MoneyManagementEduPdf" },
        { title: 'Chapter 3 Saving Strategies', date: '29 Oct 2023', size: '14 KB',Link:"MoneyManagementEduPdf" },
        { title: 'Chapter 4 Debt Management', date: '29 Oct 2023', size: '14 KB',Link:"MoneyManagementEduPdf" },
        { title: 'Chapter 5 Investing Basics', date: '29 Oct 2023', size: '14 KB',Link:"MoneyManagementEduPdf" },
        { title: 'Chapter 6 Retirement Planning', date: '29 Oct 2023', size: '14 KB',Link:"MoneyManagementEduPdf"},
        { title: 'Chapter 7 Financial Planning For Major Life Events', date: '29 Oct 2023', size: '14 KB',Link:"MoneyManagementEduPdf" }
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>

            <View>
                <Header />

                <View className='px-5'>
                    <View className=' mt-3 ml-1 flex-row items-start justify-between'>
                        <View className='flex-row items-start gap-x-3'>
                            <Image className='h-[16px] w-[16px] mt-2' source={require("../assets/back.png")} />
                            <View>
                                <Text className="text-[20px] font-bold text-black">Education</Text>
                                <Text className="text-[14px] font-normal text-[#A6A6A6]">Money Managment - Education </Text>
                            </View>
                        </View>
                        <View>
                            <Image className='h-[17px] w-[17px] mt-2' source={require("../assets/search.png")} />
                        </View>

                    </View>
                </View>

            </View>
            <View className='px-5' style={{ height: screenHeight * 0.75 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {chapters.map((chapter, index) => (
                        <TouchableOpacity delayPressIn={1} onPress={()=>(navigation.navigate(chapter.Link))} key={index} className='flex-row justify-between items-start p-3 mt-2 border-[1px] border-[#DCDCDC] rounded-xl mb-2'>
                            <View className='flex-row items-center gap-x-1'>
                                <Image className='w-[35px] h-[36px]' source={require("../assets/FearLogo.png")} />
                                <View className='flex-col items-start w-4/5'>
                                    <Text className='font-medium text-black text-[14px]'>{chapter.title}</Text>
                                    <Text className='font-normal text-black text-[10px]'>{chapter.date} | {chapter.size}</Text>
                                </View>
                            </View>
                            <View>
                                <Image className='w-[23px] h-[23px] mt-1' source={require("../assets/dots.png")} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default MoneyManagementEducation1;