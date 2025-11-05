import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Searchh } from '../training/index';


export default function DiscoverScreen() {
  const router = useRouter();

  const workouts = [
    { 
      id: "abs", 
      title: "Only 4 Moves for Abs", 
      desc: "4 simple exercises only! Burn belly fat and firm your abs.",
      img: { uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" }
    },
    { 
      id: "belly-fat", 
      title: "Belly Fat Burner HIIT Beginner", 
      desc: "14 min • Beginner",
      img: { uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" }
    },
    { 
      id: "no-jump", 
      title: "Lose Fat (No Jumping!)", 
      desc: "15 min • Intermediate",
      img: { uri: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" }
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: "white", paddingTop: 5}}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }} >
        <Text style={{ fontWeight: "bold", fontSize: 26, marginBottom: 20, paddingTop: 25 }}>Discover</Text>
        <Searchh placeholder="Search for nearby gyms.. "/>
        {workouts.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{ marginBottom: 20 }}
            onPress={() => router.push(`/discover/${item.id}`)}
          >
            <Image
              source={item.img}
              style={{ width: "100%", height: 200, borderRadius: 12 }}
            />
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
              <Text style={{ color: "gray" }}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}