import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import MenuBar from '../Components/MenuBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';


const chapters = [
    { title: 'Chapter 1 Introduction to Taxes', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf" },
    { title: 'Chapter 2 Understand Tax Income', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf"  },
    { title: 'Chapter 3 Tax Deduction and Credits', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf"  },
    { title: 'Chapter 4 How to File Your Taxes', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf"  },
    { title: 'Chapter 5 Tax Forms and Documents', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf"  },
    { title: 'Chapter 6 Tax Planning and Strategies', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf"  },
    { title: 'Chapter 7 Estate and Gift Taxes', date: '29 Oct 2023', size: '14 KB',Link:"TaxEducationPdf"  }
];

const TaxEducation = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header/>

            <View>
                {/* <View className='px-5'>
                    <View className=' mt-3 flex-row items-center justify-between'>
                        <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                            <Image source={require("../assets/Arrow1.png")} />
                        </TouchableOpacity>
                        <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                        <Text className="text-[18px] font-normal text-black">David Walker</Text>
                        <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                        <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                        <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                    </View>
                </View> */}

                <View className='px-5'>
                    <View className=' mt-3 ml-1 flex-row items-start justify-between'>
                        <View className='flex-row items-start gap-x-3'>
                            <Image className='h-[16px] w-[16px] mt-2' source={require("../assets/back.png")} />
                            <View>
                                <Text className="text-[20px] font-bold text-black">Files</Text>
                                <Text className="text-[14px] font-normal text-[#A6A6A6]">Tax portal-Education</Text>
                            </View>
                        </View>
                        <View>
                            <Image className='h-[17px] w-[17px] mt-2' source={require("../assets/search.png")} />
                        </View>

                    </View>
                </View>

            </View>
            <ScrollView className='px-5 mt-5'>
                {chapters.map((chapter, index) => (
                    <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate(chapter.Link))}   key={index} className='flex-row justify-between items-start p-3 border-[1px] border-[#DCDCDC] rounded-xl mb-2'>
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
            <MenuBar />
        </SafeAreaView>

    );
};

export default TaxEducation;
