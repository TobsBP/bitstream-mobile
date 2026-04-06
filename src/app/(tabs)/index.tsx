import { ScrollView, Text, View } from 'react-native';

export default function FeedScreen() {
  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="px-4 pt-12 pb-4">
          <Text className="text-white text-2xl font-bold">Feed</Text>
        </View>
        {/* TODO: feed posts */}
      </ScrollView>
    </View>
  );
}
