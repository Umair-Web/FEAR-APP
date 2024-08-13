import React, { useState } from 'react'
import { Image, SafeAreaView, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

const Login5 = () => {
    const options = [
        { id: 1, label: 'Desktop' },
        { id: 2, label: 'Mobile' },
        { id: 3, label: 'Both' },
    ];
    const options2 = [
        { id: 1, label: 'Low' },
        { id: 2, label: 'Medium' },
        { id: 3, label: 'High' },
    ];
    const options3 = [
        { id: 1, label: 'Stocks' },
        { id: 2, label: 'Options' },
        { id: 3, label: 'ETFs' },
        { id: 4, label: 'Futures' },
        { id: 5, label: 'Forex' },
        { id: 6, label: 'Cryptocurrencies' },
    ];


    const [experience, setExperience] = useState('');
    const [knowing, setKnowing] = useState('');
    const [additionalcomments, setAdditionalcomments] = useState('');
    const [authorize, setAuthorize] = useState(false);
    const [others, setOthers] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [progress, setProgress] = useState(100);

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className="justify-center items-center">
                <Image source={require("../assets/FearLogo128.png")} className='w-[80px] h-[80px]' />

            </View>
            <Text className='font-bold text-black text-center text-[18px]'>Join F.E.A.R App Now</Text>

            <ScrollView className='px-5'>
                <View>
                    <Text className='font-semibold text-[13px] text-black'>Preferred Trading Platform</Text>
                    <View className='flex-row justify-between mb-1'>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                className="flex-row items-center"
                                onPress={() => setSelectedOption(option.id)}
                            >
                                <View className="h-3 w-3 border-[1px] border-[#00325F] rounded-full items-center justify-center">
                                    {selectedOption === option.id && <View className="h-2 w-2 bg-[#00325F] rounded-full" />}
                                </View>
                                <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <Text className='font-semibold text-[13px] text-black'>Preferred Trading Instruments select all that apply</Text>
                <View className='flex-col gap-y-2 mb-1'>
                    {options3.map((option) => (
                        <TouchableOpacity
                            key={option.id}
                            className="flex-row items-center"
                            onPress={() => setSelectedOption3(option.id)}
                        >
                            <View className="h-3 w-3 border-[1px] border-[#00325F] items-center justify-center">
                                {selectedOption3 === option.id && <View className="h-2 w-2 bg-[#00325F] " />}
                            </View>
                            <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={others}
                                onChangeText={setOthers}
                                placeholder="Others"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View>
                    <Text className='font-semibold text-[13px] text-black mb-1 mt-1'>Risk Tolerance</Text>
                    <View className='flex-row justify-between'>
                        {options2.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                className="flex-row items-center"
                                onPress={() => setSelectedOption2(option.id)}
                            >
                                <View className="h-3 w-3 border-[1px] border-[#00325F] rounded-full items-center justify-center">
                                    {selectedOption2 === option.id && <View className="h-2 w-2 bg-[#00325F] rounded-full" />}
                                </View>
                                <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <Text className='font-bold text-[15px] text-[#004770]  mt-1' >Investment Experience</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={experience}
                                onChangeText={setExperience}
                                placeholder="Years of Investing Experience"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <Text className='font-bold text-[15px] text-[#004770]  mt-1' >Additional Information</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={knowing}
                                onChangeText={setKnowing}
                                placeholder="How did you hear about F.E.A.R. app?"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={additionalcomments}
                                onChangeText={setAdditionalcomments}
                                placeholder="Any additional comments or preferences"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                
                <Text className='font-bold text-[15px] text-[#004770] mt-1' >Consumer Report Authorization</Text>
                <Text className='font-semibold text-[13px] text-black'>I authorize F.E.A.R. APP to access and view my consumer report information from TransUnion, Equifax, and Experian, including my FICO scores, solely for personal use and account verification purposes.</Text>
                <View className='flex-col gap-y-2'>
              
                        <TouchableOpacity
                
                            className="flex-row items-center"
                            onPress={() => setAuthorize(!authorize)}
                        >
                            <View className="h-3 w-3 border-[1px] border-[#00325F] items-center justify-center">
                                {authorize? <View className="h-2 w-2 bg-[#00325F] " />:''}
                            </View>
                            <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">I authorize</Text>
                        </TouchableOpacity>
          
                </View>
                <Text className='font-bold text-[15px] text-[#004770]  mt-1' >Terms of Services</Text>
                <Text className='font-semibold text-[13px] text-black mb-1'>Terms of Service as provided earlier</Text>

                <View className=' w-11/12 left-4'>
                    <View className='flex-row items-end justify-end'>
                        <Text className='text-[11px] font-bold text-[#00325F] '>3 of 3 Completed</Text>

                    </View>
                    <View style={styles.container}>
                        <ProgressBar progress={progress} />
                    </View>
                </View>
            </ScrollView>


            <View className='absolute w-[26px] h-[26px] border-2 border-[#00325F] rounded-full top-2 right-4 items-center justify-center'>
                <Image source={require("../assets/right-arrow.png")} className='w-4 h-4' />
            </View>

        </SafeAreaView>
    )
}
const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
    progressBarContainer: {
        width: '100%',
        height: 4,
        backgroundColor: '#e0e0df',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#00325F',
        borderRadius: 10,
    },
});

export default Login5