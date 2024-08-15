import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BgImage from '../Components/BgImage';
const Dashboard = () => {
    const translateX = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: Dimensions.get('window').width,
                duration: 20000, // Adjust the duration for speed
                useNativeDriver: true,
            }),
        ).start();
    }, [translateX]);

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View style={styles.container}>
                <Animated.Text style={[styles.text, { transform: [{ translateX }] }]}>
                    Trump Media & Tech DJT 61.90 +11.95 Robinsons Pvt.Ltd BTC -29.83
                </Animated.Text>
            </View>
            <View className='px-5'>
                <View className=' mt-10 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image source={require("../assets/notification.png")} />
                    <Image source={require("../assets/questionmark.png")} />
                    <Image source={require("../assets/settings.png")} />
                </View>
                <Text className='text-3xl text-black font-semibold'>Welcome David!</Text>
                <Text className='text-2xl text-black font-normal text-center'>Financial Portal Tab</Text>
                <View className='items-center mt-2'>
                    <View className='flex-row gap-4'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:10
                      
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image source={require("../assets/FearLogoVerySmall.png")}/>
                        <Text className='text-white text-[14px] font-normal'>Credit Portal</Text>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:7
                         
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image source={require("../assets/FearLogoVerySmall.png")}/>
                        <Text className='text-white text-[14px] font-normal text-center'>Trading and </Text>
                        <Text className='text-white text-[14px] font-normal text-center'>Investment</Text>
                        <Text className='text-white text-[14px] font-normal text-center'>Portal</Text>
                    </LinearGradient>
                    </View>
                    <View className='flex-row gap-x-4 mt-1'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:8
                      
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image source={require("../assets/FearLogoVerySmall.png")}/>
                        <Text className='text-white text-[14px] font-normal text-center'>Money </Text>
                        <Text className='text-white text-[14px] font-normal text-center'>Management</Text>
                        <Text className='text-white text-[14px] font-normal text-center'>Portal</Text>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:7
                         
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image source={require("../assets/FearLogoVerySmall.png")}/>
                        <Text className='text-white text-[14px] font-normal text-center'>Tax Portal</Text>
                        
                    </LinearGradient>
                    </View>
                    <View className='flex-row gap-x-4 mt-1'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:10
                      
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image source={require("../assets/FearLogoVerySmall.png")}/>
                        <Text className='text-white text-[14px] font-normal'>Memberships</Text>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:18
                         
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image className='w-[50px] h-[45px] mb-3' source={require("../assets/globe.png")}/>
                        <Text className='text-white text-[14px] font-normal text-center'>Webinars</Text>
                        
                    </LinearGradient>
                    </View>
                    <View className='flex-row gap-x-4 mt-1'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:18
                      
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                        <Image className='w-[50px] h-[45px] mb-3' source={require("../assets/chat.png")}/>
                        <Text className='text-white text-[14px] font-normal text-center'>Community</Text>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{
                            width: 134,
                            height: 134, 
                            shadowColor: "#0078BB",
                            shadowOffset: { width: 10, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            elevation: 10,
                            height:134,
                            borderRadius: 120,
                            alignItems:"center",
                            padding:18
                         
                        }}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 0, y: 1 }}>  
                         <Image className='w-[50px] h-[45px] mb-3' source={require("../assets/books.png")}/>
                         <Text className='text-white text-[14px] font-normal text-center'>Book store</Text>
                    </LinearGradient>
                    </View>
                   
                </View>
            </View>
            <View className="w-full absolute inset-0 justify-center items-center top-44 opacity-100 -z-20">
            <Image
                className='w-full h-[310px]'
                source={require('../assets/FearLogoBlurred.png')}
            />
        </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 25,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Dashboard;
