import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  return persistReducer(
    {
      key: 'meetapp',
      storage,
      whitelist: ['user', 'auth'],
    },
    reducers
  );
};
