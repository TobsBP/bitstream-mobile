import { useQuery } from '@tanstack/react-query';
import { discoveryService } from '@/services/discovery.service';
import type { TrendingHashtag } from '@/types/discovery.types';
import type { Post } from '@/types/post.types';

export const discoveryKeys = {
  all: ['discovery'] as const,
  trending: () => [...discoveryKeys.all, 'trending'] as const,
  discover: () => [...discoveryKeys.all, 'discover'] as const,
  hashtag: (tag: string) => [...discoveryKeys.all, 'hashtag', tag] as const,
};

export function useTrending() {
  return useQuery<TrendingHashtag[]>({
    queryKey: discoveryKeys.trending(),
    queryFn: () => discoveryService.getTrending(),
    staleTime: 5 * 60_000,
  });
}

export function useDiscover() {
  return useQuery<Post[]>({
    queryKey: discoveryKeys.discover(),
    queryFn: () => discoveryService.getDiscover(),
    staleTime: 60_000,
  });
}

export function useHashtagPosts(tag: string) {
  return useQuery<Post[]>({
    queryKey: discoveryKeys.hashtag(tag),
    queryFn: () => discoveryService.getHashtagPosts(tag),
    staleTime: 60_000,
    enabled: !!tag,
  });
}
