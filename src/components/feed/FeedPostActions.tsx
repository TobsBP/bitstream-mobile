import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

type Props = {
  likes: number | string;
  comments: number | string;
  liked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
};

export function FeedPostActions({ likes, comments, liked, onLike, onComment, onShare }: Props) {
  const mutedColor = 'rgba(255,255,255,0.7)';
  const primaryColor = '#FEE341';

  return (
    <View className="flex-row items-center justify-between border-b border-outline-variant/15 px-4 py-4">
      <View className="flex-row items-center gap-6">
        <View className="flex-row items-center gap-2">
          <Pressable onPress={onLike} hitSlop={8}>
            <MaterialIcons
              name={liked ? 'favorite' : 'favorite-border'}
              size={24}
              color={liked ? primaryColor : mutedColor}
            />
          </Pressable>
          <Text className={`text-sm font-bold ${liked ? 'text-primary' : 'text-on-surface'}`}>
            {likes}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Pressable onPress={onComment} hitSlop={8}>
            <MaterialIcons name="chat-bubble-outline" size={24} color={mutedColor} />
          </Pressable>
          <Text className="text-sm font-bold text-on-surface/70">{comments}</Text>
        </View>
      </View>
      <Pressable onPress={onShare} hitSlop={8}>
        <MaterialIcons name="share" size={24} color={mutedColor} />
      </Pressable>
    </View>
  );
}
