import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import MenuBar from '../Components/MenuBar'

const Settings = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <Text className='text-2xl font-bold text-black text-center'>Settings</Text>
            <Image className='absolute w-[18px] h-[18px] left-3 top-2' source={require("../assets/back.png")} />
            <View className=' mt-5 px-5 flex-row items-center justify-between mb-2'>
                <View className='flex-row items-center justify-between'>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black ml-1">David Walker</Text>
                </View>
                <View>
                    <Image source={require("../assets/edit-text.png")} />
                </View>
            </View>
            <ScrollView className='px-5 mb-20'>

                <View className='bg-[#003655]/90 rounded-xl mt-3'>
                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/notification2.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Notifications</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/storage.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Storage and Data</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/globe.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Languages</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>
                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/themes.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Themes</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>
                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/files.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>My Files</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>
                </View>
                <View className='bg-[#003655]/90 rounded-xl mt-3'>
                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/change-user.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Change Username</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/change-number.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Change Number</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/change-password.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Change Password</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>
                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/security.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Account Security</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                </View>

                <View className='bg-[#003655]/90 rounded-xl mt-3'>
                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/policy.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Privacy Policy</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/user-agreement.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>User agreement</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/help-center.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Help Center</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>
                    <View className='flex-row justify-between items-center p-3 '>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/report.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Report a problem</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>
                </View>

                <View className='bg-[#003655]/90 rounded-xl mt-3'>
                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/about-us.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>About us</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3 border-b-[1px] border-white'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/logout.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Logout</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                    <View className='flex-row justify-between items-center p-3'>
                        <View className='flex-row items-center'>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/settings/delete.png")} />
                            <Text className='font-normal text-white text-xs ml-3'>Delete</Text>
                        </View>
                        <View>
                            <Image className='w-[13px] h-[13px]' source={require("../assets/right-arrow-2.png")} />
                        </View>
                    </View>

                </View>

            </ScrollView>
            <MenuBar />
        </SafeAreaView>
    )
}

export default Settings