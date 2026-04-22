import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postService } from '@/services/post.service';
import type { CreatePostBody, Post } from '@/types/post.types';

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filter?: string) => [...postKeys.lists(), { filter }] as const,
  byUser: (userId: string, filter?: string) =>
    [...postKeys.all, 'byUser', userId, { filter }] as const,
  detail: (id: string) => [...postKeys.all, 'detail', id] as const,
};

export function usePosts(filter?: string) {
  return useQuery<Post[]>({
    queryKey: postKeys.list(filter),
    queryFn: () => postService.getPosts(),
    staleTime: 30_000,
  });
}

export function usePost(id: string) {
  return useQuery<Post>({
    queryKey: postKeys.detail(id),
    queryFn: () => postService.getPost(id),
    staleTime: 60_000,
    enabled: !!id,
  });
}

export function useUserPosts(userId: string, filter?: string) {
  return useQuery<Post[]>({
    queryKey: postKeys.byUser(userId, filter),
    queryFn: () => postService.getUserPosts(userId, filter),
    staleTime: 60_000,
    enabled: !!userId,
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, CreatePostBody>({
    mutationFn: (body) => postService.createPost(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.lists() });
    },
  });
}
