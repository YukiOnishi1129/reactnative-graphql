/**
 * AppStorage
 * @package storage
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

export default new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {},
});
