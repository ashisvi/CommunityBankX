import { create } from 'zustand';
import { supabase } from '@/utils/supabase';
import { uploadImage } from '@/utils/uploadImage';

export interface UserProfile {
  id: string;
  email: string | null;
  fullName?: string;
  address?: string;
  phoneNumber?: string;
  profileUrl?: string;
}

interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (fields: {
    fullName?: string;
    address?: string;
    phoneNumber?: string;
    photoUri?: string;
  }) => Promise<void>;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  error: null,

  signUp: async (email, password) => {
    set({ loading: true });
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) set({ error: error.message });
    else set({ user: { id: data.user?.id!, email: data.user?.email || null } });
    set({ loading: false });
  },

  signIn: async (email, password) => {
    set({ loading: true });
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) set({ error: error.message });
    else set({ user: { id: data.user?.id!, email: data.user?.email || null } });
    set({ loading: false });
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },

  fetchProfile: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    console.log('useAuthStore.ts ~ user ~', user);
    console.log('useAuthStore.ts ~ profile ~', profile);

    if (profile) set({ user: { ...user, ...profile } });
  },

  updateProfile: async ({ address, phoneNumber, photoUri }) => {
    const current = get().user;
    if (!current) return;

    let profileUrl = current.profileUrl;
    // if (photoUri) profileUrl = await uploadImage(current.id, photoUri);

    const { error } = await supabase.from('profiles').upsert({
      id: current.id,
      address,
      phoneNumber,
      photoUri,
    });

    if (error) throw error;

    set({ user: { ...current, address, phoneNumber, profileUrl } });
  },
}));
