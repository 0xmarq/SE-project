import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function GenderScreen() {
  const router = useRouter();

  const handleSelect = async (gender: string) => {
    await AsyncStorage.setItem('gender', gender);
    router.push('/(onboarding)/focus');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>What's your gender?</Text>
      <TouchableOpacity onPress={() => handleSelect('male')}>
        <Text>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelect('female')}>
        <Text>Female</Text>
      </TouchableOpacity>
    </View>
  );
}
