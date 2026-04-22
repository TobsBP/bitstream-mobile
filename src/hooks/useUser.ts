import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/user.service';
import type { Achievement, MessageResponse } from '@/types/common.types';
import type { Post } from '@/types/post.types';
import type { User } from '@/types/user.types';

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  detail: (id: string) => [...userKeys.all, 'detail', id] as const,
  achievements: (id: string) => [...userKeys.all, id, 'achievements'] as const,
  posts: (id: string, filter?: string) => [...userKeys.all, id, 'posts', { filter }] as const,
  followers: (id: string) => [...userKeys.all, id, 'followers'] as const,
  following: (id: string) => [...userKeys.all, id, 'following'] as const,
};

export function useUsers() {
  return useQuery<User[]>({
    queryKey: userKeys.lists(),
    queryFn: () => userService.getUsers(),
    staleTime: 60_000,
  });
}

export function useUser(id: string) {
  return useQuery<User>({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getUser(id),
    staleTime: 60_000,
    enabled: !!id,
  });
}

export function useUserAchievements(userId: string) {
  return useQuery<Achievement[]>({
    queryKey: userKeys.achievements(userId),
    queryFn: () => userService.getAchievements(userId),
    staleTime: 5 * 60_000,
    enabled: !!userId,
  });
}

export function useUserPosts(userId: string, filter?: string) {
  return useQuery<Post[]>({
    queryKey: userKeys.posts(userId, filter),
    queryFn: () => userService.getUserPosts(userId, filter),
    staleTime: 60_000,
    enabled: !!userId,
  });
}

export function useFollowers(userId: string) {
  return useQuery<User[]>({
    queryKey: userKeys.followers(userId),
    queryFn: () => userService.getFollowers(userId),
    staleTime: 60_000,
    enabled: !!userId,
  });
}

export function useFollowing(userId: string) {
  return useQuery<User[]>({
    queryKey: userKeys.following(userId),
    queryFn: () => userService.getFollowing(userId),
    staleTime: 60_000,
    enabled: !!userId,
  });
}

export function useUploadAvatar(userId: string) {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, FormData>({
    mutationFn: (formData) => userService.uploadAvatar(userId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.detail(userId) });
    },
  });
}

export function useToggleFollow(userId: string) {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, void, { previous: User[] | undefined }>({
    mutationFn: () => userService.toggleFollow(userId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: userKeys.followers(userId) });
      const previous = queryClient.getQueryData<User[]>(userKeys.followers(userId));
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(userKeys.followers(userId), context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.followers(userId) });
      queryClient.invalidateQueries({ queryKey: userKeys.following(userId) });
    },
  });
}
