import { apiClient } from '@/lib/api-client';
import { withCapture } from '@/lib/sentry';
import type { MessageResponse } from '@/types/common.types';
import { MessageResponseSchema, TokenResponseSchema } from '@/types/common.types';
import type { LoginBody, RegisterBody } from '@/types/user.types';

class AuthService {
  async register(body: RegisterBody): Promise<MessageResponse> {
    return withCapture(async () => {
      const response = await apiClient.post('/auth/register', body);
      return MessageResponseSchema.parse(response);
    });
  }

  async login(body: LoginBody): Promise<string> {
    return withCapture(async () => {
      const response = await apiClient.post('/auth/login', body);
      const parsed = TokenResponseSchema.parse(response);
      await apiClient.setToken(parsed.token);
      return parsed.token;
    });
  }

  async logout(): Promise<void> {
    await apiClient.clearToken();
  }

  async getToken(): Promise<string | null> {
    return apiClient.getToken();
  }

  async isAuthenticated(): Promise<boolean> {
    return !!(await this.getToken());
  }
}

export const authService = new AuthService();
