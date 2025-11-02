import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';
import { Buffer } from 'buffer';

export const uploadImage = async (userId: string, imageUri: string) => {
  const { data, error } = await supabase.storage
    .from('profile_photos')
    .upload(`avatars/${userId}.png`, imageUri, {
      cacheControl: '3600',
      upsert: false,
      contentType: 'image/png',
    });

  if (error) {
    console.error('Error getting signed URL:', error);
    return;
  }

  console.log(data);
  // const uploadUrl = data.;

  // Upload file using expo FileSystem uploadAsync
  const uploadResult = await FileSystem.uploadAsync(uploadUrl, imageUri, {
    httpMethod: 'PUT',
    headers: {
      'Content-Type': 'image/png',
    },
  });

  const { data: urlData } = supabase.storage
    .from('profile_photos')
    .getPublicUrl(`avatars/${userId}.jpg`);
  return urlData.publicUrl;
};
