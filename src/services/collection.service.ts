import { z } from 'zod';
import { apiClient } from '@/lib/api-client';
import { withCapture } from '@/lib/sentry';
import type { AddPostToCollectionBody, CreateCollectionBody } from '@/types/collection.types';
import { CollectionSchema } from '@/types/collection.types';
import { MessageResponseSchema } from '@/types/common.types';

class CollectionService {
  async getCollections() {
    return withCapture(async () => {
      const response = await apiClient.get('/collections');
      return z.array(CollectionSchema).parse(response);
    });
  }

  async getCollection(id: string) {
    return withCapture(async () => {
      const response = await apiClient.get(`/collection/${id}`);
      return CollectionSchema.parse(response);
    });
  }

  async createCollection(body: CreateCollectionBody) {
    return withCapture(async () => {
      const response = await apiClient.post('/collection', body);
      return MessageResponseSchema.parse(response);
    });
  }

  async addPostToCollection(collectionId: string, body: AddPostToCollectionBody) {
    return withCapture(async () => {
      const response = await apiClient.post(`/collection/${collectionId}/post`, body);
      return MessageResponseSchema.parse(response);
    });
  }
}

export const collectionService = new CollectionService();
