import { Image, Text, View } from 'react-native';
import { FeedPostActions } from './FeedPostActions';
import { FeedPostHeader } from './FeedPostHeader';

export type FeedPostData = {
  id: string;
  username: string;
  subtitle: string;
  avatarUrl: string;
  imageUrl: string;
  projectTag?: string;
  caption?: string;
  likes: number | string;
  comments: number | string;
  liked?: boolean;
};

type Props = {
  post: FeedPostData;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onUserPress?: () => void;
  onMorePress?: () => void;
};

export function FeedPost({ post, onLike, onComment, onShare, onUserPress, onMorePress }: Props) {
  return (
    <View className="mb-12">
      <FeedPostHeader
        username={post.username}
        subtitle={post.subtitle}
        avatarUrl={post.avatarUrl}
        onUserPress={onUserPress}
        onMorePress={onMorePress}
      />

      <View className="aspect-square w-full overflow-hidden bg-surface-container-highest">
        <Image source={{ uri: post.imageUrl }} className="h-full w-full" resizeMode="cover" />

        {post.projectTag ? (
          <View className="absolute bottom-4 left-4 border-l-4 border-primary bg-surface/80 p-2">
            <Text className="text-xs font-bold uppercase tracking-widest text-primary">
              {post.projectTag}
            </Text>
          </View>
        ) : null}

        {post.caption ? (
          <View className="absolute bottom-0 left-0 w-full p-4">
            <Text className="text-xs text-on-surface" numberOfLines={2}>
              {post.caption}
            </Text>
          </View>
        ) : null}
      </View>

      <FeedPostActions
        likes={post.likes}
        comments={post.comments}
        liked={post.liked}
        onLike={onLike}
        onComment={onComment}
        onShare={onShare}
      />
    </View>
  );
}
