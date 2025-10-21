import { create } from 'zustand';
import { supabase } from '@/utils/supabase';

type User = {
  id: string;
  email?: string | undefined;
};

type AuthState = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  fetchUser: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  signIn: async (email, password) => {
    set({ isLoading: true });
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
      set({ isLoading: false });
      return;
    }
    set({ user: data.user, isLoading: false });
  },

  signOut: async () => {
    set({ isLoading: true });
    await supabase.auth.signOut();
    set({ user: null, isLoading: false });
  },

  fetchUser: async () => {
    set({ isLoading: true });
    const { data } = await supabase.auth.getUser();
    if (data?.user) set({ user: data.user, isLoading: false });
    else set({ user: null, isLoading: false });
  },
}));
