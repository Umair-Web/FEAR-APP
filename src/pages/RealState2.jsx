import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");
const RealState2 = () => {
    const images = [
        require("../assets/home.jpg"),
        require("../assets/house2.jpg"), // Add more images as needed
        require("../assets/house3.jpg"),
        require("../assets/house4.jpg"),
        require("../assets/house5.jpg"),
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [rating, setRating] = useState(4);

    const handleRating = (star) => {
        setRating(star);
        console.log(rating);
    }

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Header />
            <View className='px-5' style={{ height: screenHeight * 0.8 }} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image className='w-full h-72 rounded-lg' source={currentImage} />
                    <ScrollView showsHorizontalScrollIndicator={false} className='mt-2' horizontal={true}>
                        {images.map((img, index) => (
                            <TouchableOpacity key={index} onPress={() => setCurrentImage(img)}>
                                <Image className='w-20 h-14 rounded-lg mx-1' source={img} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View className='flex-row items-center justify-between mt-2'>
                        <Text className='font-bold text-xl text-[#003655]'>The Stables</Text>
                        <Text className='font-medium text-lg text-[#3F4661]'>#100,000</Text>
                    </View>

                    <View className='items-center flex-row gap-x-2'>
                        <View className='flex-row gap-x-1'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                                    <Text className={`${star <= rating ? 'text-[#003655]' : 'text-[#CCC]'} text-lg`}>
                                        ★
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Text>{rating}/5</Text>
                        <Text className='font-normal text-sm text-[#55615F]'>(15 Reviews)</Text>
                    </View>

                    <Text className='font-semibold text-lg text-black'>Description</Text>
                    <Text className='font-medium mt-1 text-sm text-black/70'>
                        Discover your own piece of paradise with the Seaside STABLES. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
                    </Text>

                    <View className='flex-row justify-between mt-1'>
                        <Text className='font-semibold text-lg mt-2 text-[#003655]'>04 <Text className='font-medium text-sm text-[#003655]'>Bedrooms</Text></Text>
                        <Text className='font-semibold text-lg mt-2 text-[#003655]'>04 <Text className='font-medium text-sm text-[#003655]'>Bathrooms</Text></Text>
                        <Text className='font-semibold text-lg mt-2 text-[#003655]'>04 <Text className='font-medium text-sm text-[#003655]'>Dining rooms</Text></Text>
                    </View>

                    <Text className='font-bold text-lg mt-3 text-[#003655]'>
                        Location & Public Facilities
                    </Text>

                    <View className='flex-row items-center gap-x-4 mt-3'>
                        <View className='bg-[#F5F4F8] w-12 h-12 rounded-full items-center justify-center'>
                            <Image className='w-5 h-5' source={require("../assets/location-gray.png")} />
                        </View>
                        <Text className='font-normal text-xs w-[65%] text-[#033B5A]'>
                            St. Cikoko Timur, Kec. Pancoran, Jakarta Selatan, Indonesia 12770
                        </Text>
                    </View>

                    <View className='flex-row items-center p-2 rounded-3xl mt-3 border border-[#033B5A]'>
                        <Image className='w-4 h-4' source={require("../assets/location-bl.png")} />
                        <Text className='font-normal ml-4 text-xs w-[95%] text-[#033B5A]'>
                            <Text className='font-bold'>2.5 Km </Text>from your location
                        </Text>
                    </View>

                    <View className='mt-3'>
                        <View className='bg-[#dedede] rounded-t-3xl h-[150px]'>
                        </View>
                        <View className='bg-[#00325F] rounded-b-3xl h-[40px] items-center justify-center'>
                            <Text className='font-normal text-xs text-white'>View all on map</Text>
                        </View>
                    </View>

                    <Text className='font-bold text-lg mt-3 text-[#252B5C]'>Reviews</Text>

                    <View className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-x-1'>
                            <Text className='font-bold text-xl text-[#252B5C]'>4.9</Text>

                            <View className='flex-col items-start'>
                                <View className='flex-row'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                                            <Text className={`${star <= rating ? 'text-[#003655]' : 'text-[#CCC]'} text-xs`}>
                                                ★
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <Text className='text-[9px] font-normal text-[#53587A]'>From 112 reviewers</Text>
                            </View>


                        </View>
                        <View className='flex-row mr-1'>
                            <Image className='w-[32px] h-[32px] rounded-full -mr-1' source={require("../assets/download.jpeg")} />
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white'>
                                <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                            </View>
                            <View className='w-[33px] h-[33px] rounded-full -mr-1 border-[1px] border-white'>
                                <Image className='w-[32px] h-[32px] rounded-full' source={require("../assets/download.jpeg")} />
                            </View>
                        </View>
                    </View>

                    <View className='bg-[#003655]/80 p-3 rounded-3xl mt-4 flex-row items-start'>
                        <View className='w-[45px] h-[45px] rounded-full items-center justify-center bg-white'>
                            <Image className='w-[41px] h-[41px] rounded-full' source={require("../assets/download.jpeg")} />
                        </View>

                        <View style={{width:screenWidth*0.65}} className='flex-col  ml-4 items-start'>


                            <View className='flex-row w-full justify-between items-start'>

                                <View className='flex-col items-start gap-y-1'>
                                    <Text className='font-bold text-xs text-[#252B5C]'>Kurt Mullins</Text>
                                    <Text className='font-normal text-[8px] text-white'>8 Days ago</Text>
                                </View>

                                <View className='flex-row'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                                            <Text className={`${star <= rating ? 'text-yellow-400' : 'text-[#CCC]'} text-xs`}>
                                                ★
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                
                               
                               
                                

                            </View>


                            <Text className='font-normal text-[10px] text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                        </View>


                    </View>



                    <View className='bg-[#003655]/80 p-3 rounded-3xl mt-4 flex-row items-start'>
                        <View className='w-[45px] h-[45px] rounded-full items-center justify-center bg-white'>
                            <Image className='w-[41px] h-[41px] rounded-full' source={require("../assets/download.jpeg")} />
                        </View>

                        <View style={{width:screenWidth*0.65}} className='flex-col  ml-4 items-start'>


                            <View className='flex-row w-full justify-between items-start'>

                                <View className='flex-col items-start gap-y-1'>
                                    <Text className='font-bold text-xs text-[#252B5C]'>Kurt Mullins</Text>
                                    <Text className='font-normal text-[8px] text-white'>8 Days ago</Text>
                                </View>

                                <View className='flex-row'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                                            <Text className={`${star <= rating ? 'text-yellow-400' : 'text-[#CCC]'} text-xs`}>
                                                ★
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                
                               
                               
                                

                            </View>


                            <Text className='font-normal text-[10px] text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                        </View>


                    </View>

                    <View className=' items-center mt-3'>
                        <LinearGradient
                            colors={['#01101D', '#0078BB']}
                            style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 30 }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <TouchableOpacity className='w-[200px] h-[40px] flex-row justify-center items-center' >
                                <Text className='text-white text-[17px] font-normal'>Reserve it</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default RealState2;
