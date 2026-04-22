import { MaterialIcons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {
  username: string;
  subtitle: string;
  avatarUrl: string;
  onMorePress?: () => void;
  onUserPress?: () => void;
};

export function FeedPostHeader({ username, subtitle, avatarUrl, onMorePress, onUserPress }: Props) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <Pressable className="flex-row items-center gap-3" onPress={onUserPress}>
        <View className="h-10 w-10 border border-outline-variant p-0.5">
          <Image source={{ uri: avatarUrl }} className="h-full w-full" resizeMode="cover" />
        </View>
        <View>
          <Text className="text-sm font-bold leading-none text-on-surface">{username}</Text>
          <Text className="text-[10px] uppercase tracking-tighter text-on-surface/40">
            {subtitle}
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={onMorePress} hitSlop={8}>
        <MaterialIcons name="more-vert" size={24} color="rgba(255,255,255,0.5)" />
      </Pressable>
    </View>
  );
}
