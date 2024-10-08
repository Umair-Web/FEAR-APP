import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, Dimensions,TouchableOpacity } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';

const { height: screenHeight } = Dimensions.get("window");

const InsuranceAgent1 = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");

    const agents = [
        { id: 1, name: "Agent 1", image: require("../assets/download.jpeg"), price: "$100", icon: "🖤",Link:"InsuranceAgent2" },
        { id: 2, name: "Agent 2", image: require("../assets/download.jpeg"), price: "$150", icon: "🖤",Link:"InsuranceAgent2"},
        { id: 3, name: "Agent 3", image: require("../assets/download.jpeg"), price: "$200", icon: "🖤",Link:"InsuranceAgent2"},
        // Add more agents as needed
    ];

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='items-center'>
                        <View className='h-[150px] w-[150px] rounded-full bg-[#00325F] items-center justify-center'>
                            <Image className='w-[100px] h-[100px] rounded-full' source={require("../assets/download.jpeg")} />
                        </View>
                        <Text className='font-semibold text-[20px] text-[#146AEB] mt-3'>INSURANCE AGENT</Text>
                        <View className='flex-row'>
                            <View className='flex-row items-center gap-x-1 border-r px-2'>
                                <Text className='font-semibold text-[14px] text-[#146AEB]'>4.5</Text>
                                <Text className='font-semibold text-[14px] text-[#146AEB]'>★</Text>
                            </View>
                            <View className='flex-row items-center gap-x-1 px-2'>
                                <Text className='font-semibold text-[14px] text-[#146AEB]'>92</Text>
                                <Text className='font-semibold text-[14px] text-[#146AEB]'>💙</Text>
                            </View>
                        </View>
                    </View>

                    <View className='flex-row mt-3 items-center gap-x-4'>
                        <View className='w-[80%] bg-black/30 rounded-lg'>
                            <View className='flex-row items-center px-2 gap-x-2'>
                                <Image className='w-4 h-4' source={require("../assets/search.png")} />
                                <TextInput
                                    className='h-11 text-base text-black font-normal'
                                    placeholder="Search"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                    value={search}
                                    onChangeText={setSearch}
                                />
                            </View>
                        </View>
                        <View className='w-[20%]'>
                            <Image className='w-7 h-7' source={require("../assets/filter-black.png")} />
                        </View>
                    </View>

                    <View className='flex-row flex-wrap gap-4 mt-4'>
                        {agents.map(agent => (
                            <TouchableOpacity activeOpacity={1}  delayPressIn={1} onPress={()=>(navigation.navigate(agent.Link))} key={agent.id} className='w-[45%] flex-col items-start'>
                                <Image className='h-[195px] w-full rounded-t-lg object-contain' source={agent.image} />
                                <Text className='font-semibold text-sm text-[#146AEB] mt-2'>{agent.name}</Text>
                                <View className='flex-row w-full justify-between'>
                                    <Text className='font-semibold text-sm text-[#146AEB]'>{agent.price}</Text>
                                    <View className='flex-row items-center gap-x-1'>
                                        <Text className='font-normal text-xs text-[#146AEB]'>{agent.icon}</Text>
                                        <Text className='font-normal text-xs text-[#146AEB]'>{agent.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default InsuranceAgent1;
