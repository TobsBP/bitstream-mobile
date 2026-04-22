import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { collectionService } from '@/services/collection.service';
import type {
  AddPostToCollectionBody,
  Collection,
  CreateCollectionBody,
} from '@/types/collection.types';
import type { MessageResponse } from '@/types/common.types';

export const collectionKeys = {
  all: ['collections'] as const,
  lists: () => [...collectionKeys.all, 'list'] as const,
  detail: (id: string) => [...collectionKeys.all, 'detail', id] as const,
};

export function useCollections() {
  return useQuery<Collection[]>({
    queryKey: collectionKeys.lists(),
    queryFn: () => collectionService.getCollections(),
    staleTime: 60_000,
  });
}

export function useCollection(id: string) {
  return useQuery<Collection>({
    queryKey: collectionKeys.detail(id),
    queryFn: () => collectionService.getCollection(id),
    staleTime: 60_000,
    enabled: !!id,
  });
}

export function useCreateCollection() {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, CreateCollectionBody>({
    mutationFn: (body) => collectionService.createCollection(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: collectionKeys.lists() });
    },
  });
}

export function useAddPostToCollection(collectionId: string) {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, AddPostToCollectionBody>({
    mutationFn: (body) => collectionService.addPostToCollection(collectionId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: collectionKeys.detail(collectionId) });
    },
  });
}
