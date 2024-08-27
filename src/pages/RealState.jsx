import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const RealState = () => {
    // State variables for each input field
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [beds, setBeds] = useState("");
    const [year, setYear] = useState("");

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View className='relative'>
                        <Image className='w-full h-52 rounded-md' source={require("../assets/home.jpg")} />

                        <View className='flex-col items-start absolute left-2'>
                            <Text className='font-bold text-white text-[25px]'>Hey, <Text className='font-extrabold'>DAVID!</Text> </Text>

                            <Text className='font-medium text-white text-[22px]'>Let's start exploring  </Text>
                        </View>


                        <View className='absolute bottom-2 w-full h-[50px] p-3'>
                            <View className='bg-[#003655]/70 rounded-2xl w-full h-[40px] flex-row items-center justify-between px-2'>
                                <TextInput
                                    className=' h-11 text-base text-white font-normal'
                                    placeholder="Search House, Apartment, etc"
                                    placeholderTextColor="#fff"
                                    autoCapitalize="none"
                                    value={search}
                                    onChangeText={setSearch}
                                />
                                <View className='flex-row items-center gap-x-3'>
                                    <Image className='w-4 h-4' source={require("../assets/microphone-white.png")} />
                                </View>

                            </View>
                        </View>


                    </View>

                    <View className='flex-row flex-wrap full gap-4 mt-4'>
                        <View className='w-[45%] border border-[#005686] bg-white rounded-3xl p-1'>
                            <View className='flex-row items-center justify-between'>
                                <TextInput
                                    className='text-sm text-[#003655] p-1 font-normal'
                                    placeholder="Search by city"
                                    placeholderTextColor="#003655"
                                    value={city}
                                    onChangeText={setCity}
                                />
                                <Image className='w-4 h-4' source={require("../assets/location.png")} />
                            </View>
                        </View>

                        <View className='w-[45%] border border-[#005686] bg-white rounded-3xl p-1'>
                            <View className='flex-row items-center justify-between'>
                                <TextInput
                                    className='text-sm text-[#003655] p-1 font-normal'
                                    placeholder="Search by location"
                                    placeholderTextColor="#003655"
                                    value={location}
                                    onChangeText={setLocation}
                                />
                                <Image className='w-4 h-4' source={require("../assets/location.png")} />
                            </View>
                        </View>


                        <View className='w-[45%] border border-[#005686] bg-white rounded-3xl p-1'>
                            <View className='flex-row items-center justify-between'>
                                <TextInput
                                    className='text-sm text-[#003655] p-1 font-normal'
                                    placeholder="Property type"
                                    placeholderTextColor="#003655"
                                    value={propertyType}
                                    onChangeText={setPropertyType}
                                />
                                <Image className='w-5 h-5' source={require("../assets/property.png")} />
                            </View>
                        </View>

                        <View className='w-[45%] border border-[#005686] bg-white rounded-3xl p-1'>
                            <View className='flex-row items-center justify-between'>
                                <TextInput
                                    className='text-sm text-[#003655] p-1 font-normal'
                                    placeholder="Price range"
                                    placeholderTextColor="#003655"
                                    value={priceRange}
                                    onChangeText={setPriceRange}
                                />
                                <Image className='w-4 h-4' source={require("../assets/price.png")} />
                            </View>
                        </View>


                        <View className='w-[45%] border border-[#005686] bg-white rounded-3xl p-1'>
                            <View className='flex-row items-center justify-between'>
                                <TextInput
                                    className='text-sm text-[#003655] p-1 font-normal'
                                    placeholder="By beds"
                                    placeholderTextColor="#003655"
                                    value={beds}
                                    onChangeText={setBeds}
                                />
                                <Image className='w-4 h-4' source={require("../assets/bed.png")} />
                            </View>
                        </View>


                        <View className='w-[45%] border border-[#005686] bg-white rounded-3xl p-1'>
                            <View className='flex-row items-center justify-between'>
                                <TextInput
                                    className='text-sm text-[#003655] p-1 font-normal'
                                    placeholder="By year"
                                    placeholderTextColor="#003655"
                                    value={year}
                                    onChangeText={setYear}
                                />
                                <Image className='w-4 h-4' source={require("../assets/year.png")} />
                            </View>
                        </View>
                    </View>


                    <View className='flex-row flex-wrap full gap-4 mt-4'>
                        <View className='w-[45%] bg-[#e2e0e5] rounded-xl p-2 relative'>
                            <Image className='w-[100%] h-24 rounded-lg object-contain' source={require("../assets/home.jpg")} />

                            <Text className='font-bold text-xs text-black mt-1'>The Stables</Text>
                            <Text className='font-normal text-xs text-[#022E46] mt-1'>$ 9540.99</Text>
                            <View className='flex-row justify-between mt-1 items-center '>
                                <Image className='w-3 h-3' source={require("../assets/location-gray.png")} />
                                <Text className='font-normal w-[90%] text-[#7F7F7F] text-[10px]'>Terry Lane, Golden CO 80403</Text>
                            </View>

                            <View className='bg-[#768494] w-6 h-6 items-center justify-center right-2 top-2 absolute rounded-full'>
                                <Image className='w-3 h-3' source={require("../assets/heart-empty.png")} />

                            </View>

                        </View>


                        <View className='w-[45%] bg-[#e2e0e5] rounded-xl p-2 relative'>
                            <Image className='w-[100%] h-24 rounded-lg object-contain' source={require("../assets/home.jpg")} />

                            <Text className='font-bold text-xs text-black mt-1'>The Stables</Text>
                            <Text className='font-normal text-xs text-[#022E46] mt-1'>$ 9540.99</Text>
                            <View className='flex-row justify-between mt-1 items-center '>
                                <Image className='w-3 h-3' source={require("../assets/location-gray.png")} />
                                <Text className='font-normal w-[90%] text-[#7F7F7F] text-[10px]'>Terry Lane, Golden CO 80403</Text>
                            </View>

                            <View className='bg-[#768494] w-6 h-6 items-center justify-center right-2 top-2 absolute rounded-full'>
                                <Image className='w-3 h-3' source={require("../assets/heart-empty.png")} />

                            </View>

                        </View>


                        <View className='w-[45%] bg-[#e2e0e5] rounded-xl p-2 relative'>
                            <Image className='w-[100%] h-24 rounded-lg object-contain' source={require("../assets/home.jpg")} />

                            <Text className='font-bold text-xs text-black mt-1'>The Stables</Text>
                            <Text className='font-normal text-xs text-[#022E46] mt-1'>$ 9540.99</Text>
                            <View className='flex-row justify-between mt-1 items-center '>
                                <Image className='w-3 h-3' source={require("../assets/location-gray.png")} />
                                <Text className='font-normal w-[90%] text-[#7F7F7F] text-[10px]'>Terry Lane, Golden CO 80403</Text>
                            </View>

                            <View className='bg-[#768494] w-6 h-6 items-center justify-center right-2 top-2 absolute rounded-full'>
                                <Image className='w-3 h-3' source={require("../assets/heart-empty.png")} />

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

export default RealState;
