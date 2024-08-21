import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const Communities1 = () => {

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-4xl text-black'>Communities</Text>
                    <View className=' gap-y-6 mt-4'>
                        <View>
                            <LinearGradient
                            colors={['#01101D', '#0078BB']}
                            style={{


                                shadowColor: "#0078BB",
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 0.5,
                                shadowRadius: 10,
                                elevation: 10,
                                alignItems: "center",
                                padding: 10,
                                display: "flex",
                                flexDirection: "row",
                                gap: 30,
                                borderRadius: 20

                            }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <Image className='h-24 w-[20%] ml-3' source={require("../assets/FearLogoBig.png")} />
                            <Text className='text-white w-[80%] text-[19px] font-medium'>Access
                                Community
                                messaging feed</Text>
                        </LinearGradient>
                        </View>

                        <View className={`mt-[${2}]`}>
                            <LinearGradient
                            colors={['#01101D', '#0078BB']}
                            style={{


                                shadowColor: "#0078BB",
                                shadowOffset: { width: 10, height: 10 },
                                shadowOpacity: 0.5,
                                shadowRadius: 10,
                                elevation: 10,
                                alignItems: "center",
                                padding: 10,
                                display: "flex",
                                flexDirection: "row",
                                gap: 30,
                                borderRadius: 20

                            }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <Image className='h-24 w-[20%] ml-3' source={require("../assets/FearLogoBig.png")} />
                            <Text className='text-white w-[80%] text-[19px] font-medium'>Access
                            Audio Rooms</Text>
                        </LinearGradient>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Communities1;
