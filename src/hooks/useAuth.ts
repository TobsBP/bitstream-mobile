import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import type { MessageResponse } from '@/types/common.types';
import type { LoginBody, RegisterBody } from '@/types/user.types';

export const authKeys = {
  all: ['auth'] as const,
  token: () => [...authKeys.all, 'token'] as const,
};

export function useAuthToken() {
  return useQuery({
    queryKey: authKeys.token(),
    queryFn: () => authService.getToken(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

export function useRegister() {
  return useMutation<MessageResponse, Error, RegisterBody>({
    mutationFn: (body) => authService.register(body),
  });
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation<string, Error, LoginBody>({
    mutationFn: (body) => authService.login(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, void>({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.clear();
    },
  });
}
