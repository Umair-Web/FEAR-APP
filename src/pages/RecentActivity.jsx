import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Slider from '@react-native-community/slider';
const RecentActivity = () => {


    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className='relative'>
                {/* Header */}
                <View className='px-5 mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>

                <View className='mt-2 px-5 flex-row justify-between items-center'>
                    <View>
                        <Text className="text-3xl font-bold text-black">Recent Activity</Text>

                    </View>
                    <View className='border-[1px] border-[#A9A9A9] rounded-full p-2' >

                        <Image className='w-3 h-3' source={require("../assets/close.png")} />

                    </View>

                </View>

                <ScrollView className='px-5 h-2/3  '>
                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1 '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>
                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>

                    <View className='mt-2 ml-1 flex-row items-start justify-between border-b-[1px] border-black/20 py-3'>


                        <View>
                            <Text className="text-[14px] font-semibold text-[#4D5A69]">User Stories.doc</Text>
                            <Text className="text-[10px] font-medium text-[#818A94]">Modified 14 days ago</Text>
                        </View>

                        <View className='flex-row mr-1  '>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1   ' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white '>
                                <Image className='w-[32px] h-[32px] rounded-full   ' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>

                    </View>





                </ScrollView>

                <View className='flex-row items-center justify-between px-5 mt-8'>




                    <Text className="text-[10px] font-medium text-[#818A94]">Showing 4 of 11 items</Text>

                    <View className='flex-row items-center gap-x-2 '>
                        <Text className="text-[10px] font-medium text-[#818A94] ">1 of 3</Text>
                        <View className='w-16 h-7 border-[1px] flex-row  border-[#818A94] justify-center items-center rounded-3xl'>
                        <View>
                             <Image className='w-3 h-3 mr-5' source={require("../assets/tri-left.png")}/>
                        </View>
                         
                          <Image className='w-3 h-3' source={require("../assets/tri-right.png")}/>
                        </View>


                    </View>

                </View>


            </View>
            <MenuBar />
            <BgImage />
        </SafeAreaView>
    );
};

export default RecentActivity;
