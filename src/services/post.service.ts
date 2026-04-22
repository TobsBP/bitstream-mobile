import { z } from 'zod';
import { apiClient } from '@/lib/api-client';
import { withCapture } from '@/lib/sentry';
import type { CreatePostBody, Post } from '@/types/post.types';
import { PostSchema } from '@/types/post.types';

class PostService {
  async getPosts(): Promise<Post[]> {
    return withCapture(async () => {
      const response = await apiClient.get('/posts');
      return z.array(PostSchema).parse(response);
    });
  }

  async getPost(id: string): Promise<Post> {
    return withCapture(async () => {
      const response = await apiClient.get(`/post/${id}`);
      return PostSchema.parse(response);
    });
  }

  async getUserPosts(userId: string, filter?: string): Promise<Post[]> {
    const query = filter ? `?filter=${encodeURIComponent(filter)}` : '';
    return withCapture(async () => {
      const response = await apiClient.get(`/posts/${userId}${query}`);
      return z.array(PostSchema).parse(response);
    });
  }

  async createPost(body: CreatePostBody): Promise<void> {
    await withCapture(() => apiClient.post('/post', body));
  }
}

export const postService = new PostService();
