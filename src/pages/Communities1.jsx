import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';


const Communities1 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className=' mt-3 px-5 flex-row items-center justify-between  pb-3'>
                <TouchableOpacity onPress={() => (navigation.navigate("Dashboard"))}
                    className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image className="h-[16px] w-[18px]" source={require("../assets/back2.png")} />
                </TouchableOpacity>
                <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                <Text className="text-[18px] font-normal text-black">David Walker</Text>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Notifications"))}><Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Help"))}><Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={() => (navigation.navigate("Settings"))}><Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} /></TouchableOpacity>
            </View>
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='font-semibold text-4xl text-black'>Communities</Text>
                    <View className=' gap-y-6 mt-4'>
                        <TouchableOpacity activeOpacity={1} delayPressIn={1} onPress={() => (navigation.navigate("Communities2"))}>
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
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} delayPressIn={1} onPress={() => (navigation.navigate("AudioRoom"))} className={`mt-[${2}]`}>
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
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default Communities1;
