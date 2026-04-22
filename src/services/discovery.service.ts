import { z } from 'zod';
import { apiClient } from '@/lib/api-client';
import { withCapture } from '@/lib/sentry';
import type { TrendingHashtag } from '@/types/discovery.types';
import { TrendingHashtagSchema } from '@/types/discovery.types';
import type { Post } from '@/types/post.types';
import { PostSchema } from '@/types/post.types';

class DiscoveryService {
  async getTrending(): Promise<TrendingHashtag[]> {
    return withCapture(async () => {
      const response = await apiClient.get('/trending');
      return z.array(TrendingHashtagSchema).parse(response);
    });
  }

  async getDiscover(): Promise<Post[]> {
    return withCapture(async () => {
      const response = await apiClient.get('/discover');
      return z.array(PostSchema).parse(response);
    });
  }

  async getHashtagPosts(tag: string): Promise<Post[]> {
    return withCapture(async () => {
      const response = await apiClient.get(`/hashtag/${encodeURIComponent(tag)}/posts`);
      return z.array(PostSchema).parse(response);
    });
  }
}

export const discoveryService = new DiscoveryService();
