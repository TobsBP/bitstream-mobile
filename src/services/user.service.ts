import { z } from 'zod';
import { apiClient } from '@/lib/api-client';
import { withCapture } from '@/lib/sentry';
import type { Achievement, MessageResponse } from '@/types/common.types';
import { AchievementSchema, MessageResponseSchema } from '@/types/common.types';
import type { Post } from '@/types/post.types';
import { PostSchema } from '@/types/post.types';
import type { User } from '@/types/user.types';
import { UserSchema } from '@/types/user.types';

class UserService {
  async getUsers(): Promise<User[]> {
    return withCapture(async () => {
      const response = await apiClient.get('/users');
      return z.array(UserSchema).parse(response);
    });
  }

  async getUser(id: string): Promise<User> {
    return withCapture(async () => {
      const response = await apiClient.get(`/user/${id}`);
      return UserSchema.parse(response);
    });
  }

  async uploadAvatar(userId: string, formData: FormData): Promise<MessageResponse> {
    return withCapture(async () => {
      const response = await apiClient.post(`/user/${userId}/avatar`, formData);
      return MessageResponseSchema.parse(response);
    });
  }

  async getAchievements(userId: string): Promise<Achievement[]> {
    return withCapture(async () => {
      const response = await apiClient.get(`/user/${userId}/achievements`);
      return z.array(AchievementSchema).parse(response);
    });
  }

  async getUserPosts(userId: string, filter?: string): Promise<Post[]> {
    const query = filter ? `?filter=${encodeURIComponent(filter)}` : '';
    return withCapture(async () => {
      const response = await apiClient.get(`/user/${userId}/posts${query}`);
      return z.array(PostSchema).parse(response);
    });
  }

  async getFollowers(userId: string): Promise<User[]> {
    return withCapture(async () => {
      const response = await apiClient.get(`/user/${userId}/followers`);
      return z.array(UserSchema).parse(response);
    });
  }

  async getFollowing(userId: string): Promise<User[]> {
    return withCapture(async () => {
      const response = await apiClient.get(`/user/${userId}/following`);
      return z.array(UserSchema).parse(response);
    });
  }

  async toggleFollow(userId: string): Promise<MessageResponse> {
    return withCapture(async () => {
      const response = await apiClient.post(`/user/${userId}/follow`);
      return MessageResponseSchema.parse(response);
    });
  }
}

export const userService = new UserService();
