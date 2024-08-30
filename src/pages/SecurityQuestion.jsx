import React, { useState } from 'react'
import { Image, SafeAreaView, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TextInput, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BgImage from '../Components/BgImage';



const SecurityQuestion = () => {
    const options = [
        { id: 1, label: 'Beginner' },
        { id: 2, label: 'Intermediate' },
        { id: 3, label: 'Advance' },
    ];
    const options2 = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' },
        { id: 4, label: 'Occasionally' },
    ];
    const options3 = [
        { id: 1, label: 'Wealth Accumulation' },
        { id: 2, label: 'Income Generation' },
        { id: 3, label: 'Speculation' },
        { id: 4, label: 'Retirement Planning' },
        { id: 5, label: 'Education funding' },
    ];


    const [securityQues, setSecurityQues] = useState('');
    const [answer, setAnswer] = useState('');
    const [networth, setNetworth] = useState('');
    const [assets, setAssets] = useState('');
    const [debt, setDebt] = useState('');
    const [expenses, setExpenses] = useState('');
    const [others, setOthers] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [progress, setProgress] = useState(66);

    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className="justify-center items-center">
                <Image source={require("../assets/FearLogo128.png")} className='w-[80px] h-[80px]' />

            </View>
            <Text className='font-bold text-black text-center text-[18px]'>Join F.E.A.R App Now</Text>

            <ScrollView className='px-5'>
                <Text className='font-bold text-[15px] text-[#004770] mb-2 mt-1' >Security Question</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={securityQues}
                                onChangeText={setSecurityQues}
                                placeholder="Security Question"
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
                                value={answer}
                                onChangeText={setAnswer}
                                placeholder="Answer"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <Text className='font-bold text-[15px] text-[#004770] mb-2 mt-2' >Financial Information</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={networth}
                                onChangeText={setNetworth}
                                placeholder="Net Worth"
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
                                value={assets}
                                onChangeText={setAssets}
                                placeholder="Liquid Assets"
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
                                value={debt}
                                onChangeText={setDebt}
                                placeholder="Debt (if any)"
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
                                value={expenses}
                                onChangeText={setExpenses}
                                placeholder="Monthly expenses"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View>
                    <Text className='font-semibold text-[13px] text-black mb-1 mt-2'>Investment Experience</Text>
                    <View className='flex-row justify-between'>
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
                <View>
                    <Text className='font-semibold text-[13px] text-black mb-1 mt-2'>Trading Frequency</Text>
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
                <Text className='font-bold text-[15px] text-[#004770] mt-2' >Trading Preferences</Text>
                <Text className='font-semibold text-[13px] text-black mb-2'>Investment Goals Select all that apply </Text>
                <View className='flex-col gap-y-2'>
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
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-2'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={others}
                                onChangeText={setOthers}
                                placeholder="others"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View className=' w-11/12 left-4'>
                    <View className='flex-row items-end justify-end'>
                        <Text className='text-[11px] font-bold text-[#00325F] '>2 of 3 Completed</Text>

                    </View>
                    <View style={styles.container}>
                        <ProgressBar progress={progress} />
                    </View>
            </View>
            </ScrollView>

          
            <TouchableOpacity activeOpacity={1}   delayPressIn={0.1} onPress={()=>(navigation.navigate("Login5"))} className='absolute w-[26px] h-[26px] border-2 border-[#00325F] rounded-full top-2 right-4 items-center justify-center'>
                <Image source={require("../assets/right-arrow.png")} className='w-4 h-4' />
            </TouchableOpacity>

        <BgImage/>
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

export default SecurityQuestion