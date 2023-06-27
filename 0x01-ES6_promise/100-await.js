import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('photo-profile-1');
    const userPromise = createUser('Guillaume', 'Salva');

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
