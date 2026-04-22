import { MaterialIcons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {
  avatarUrl?: string;
  onMenuPress?: () => void;
  onSearchPress?: () => void;
  onAvatarPress?: () => void;
};

export function TopAppBar({ avatarUrl, onMenuPress, onSearchPress, onAvatarPress }: Props) {
  return (
    <View className="h-16 flex-row items-center justify-between border-b border-primary-container/15 bg-surface px-4">
      <View className="flex-row items-center gap-4">
        <Pressable onPress={onMenuPress} hitSlop={8} className="p-2">
          <MaterialIcons name="menu" size={24} color="rgba(255,255,255,0.7)" />
        </Pressable>
        <Text className="text-xl font-black uppercase tracking-widest text-primary">
          PIXEL_NEXUS
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Pressable onPress={onSearchPress} hitSlop={8} className="p-2">
          <MaterialIcons name="search" size={24} color="rgba(255,255,255,0.7)" />
        </Pressable>
        <Pressable
          onPress={onAvatarPress}
          className="h-8 w-8 border border-primary/30 bg-primary-container"
        >
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} className="h-full w-full" resizeMode="cover" />
          ) : null}
        </Pressable>
      </View>
    </View>
  );
}
