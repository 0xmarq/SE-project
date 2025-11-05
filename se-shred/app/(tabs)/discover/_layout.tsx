import { Stack } from "expo-router";

export default function DiscoverLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Discover" }} />
      <Stack.Screen name="[id]" options={{ title: "Workout Details" }} />
    </Stack>
  );
}
