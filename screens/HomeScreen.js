import { View, Text, TextInput,Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'
import Categories from "../components/Categories";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
            source={require('../assets/wc.png')}
            className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
                Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon  size={20} color="#000"/>
            </Text>
        </View>
        <UserIcon size={30} color="#000" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput 
                placeholder='Restaurants and Cuisines'
                keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon color="#000" />
      </View>

      {/* Body */}
      <ScrollView 
        className="bg-gray-100"
        contentContainerStyle={{
            paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured rows */}
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;