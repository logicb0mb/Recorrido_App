import { Platform } from 'react-native';
const liveHost = 'https://recorrido-shreyas.herokuapp.com';
const localHost = 'http://localhost:3000/';

export const isAndroid = Platform.OS === 'android';
export const isDevelopment = process.env.NODE_ENV === 'development';
// in android locall firebase functions wil not works as its does not serve on https and android does not support http therefore i am using livehost directly
// whenever testing keep in mind firebase daily usage of storage
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
