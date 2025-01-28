import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import myPlaylistSlice from '../slices/MyPlaylistSlice';
import PlaylistSlice from '../slices/PlaylistSlice';
import SongSlice from '../slices/SongSlice';
import UserSlice from '../slices/UserSlice';
import playerSlice from '../slices/playerSlice';
import userAuth from '../slices/userAuth';
// import { combineReducers } from 'redux'; // Import combineReducers from redux

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['authAction', 'player'],
};

// Combine your reducers using combineReducers
    const rootReducer = combineReducers({
    auth: UserSlice,
    authAction: userAuth,
    song: SongSlice,
    player: playerSlice,
    playlist: PlaylistSlice,
    myPlaylist: myPlaylistSlice,
    // Add your other reducers here
    });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
reducer: persistedReducer,
});

export const persistor = persistStore(store);










// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import myPlaylistSlice from '../slices/MyPlaylistSlice';
// import PlaylistSlice from '../slices/PlaylistSlice';
// import SongSlice from '../slices/SongSlice';
// import UserSlice from '../slices/UserSlice';
// import playerSlice from '../slices/playerSlice';
// import userAuth from '../slices/userAuth';

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['authAction', 'player'],
//     };
    
// const persistedReducer = persistReducer(persistConfig, {
//     auth: UserSlice,
//     authAction: userAuth,
//     song: SongSlice,
//     player: playerSlice,
//     playlist: PlaylistSlice,
//     myPlaylist: myPlaylistSlice,
// });


//     export const store = configureStore({
//         reducer: persistedReducer,
//     });
    
//     export const persistor = persistStore(store)

// export const store=configureStore({
//     reducer:{
//         auth:UserSlice,
//         authAction:userAuth,
//         song:SongSlice,
//         player:playerSlice,
//         playlist:PlaylistSlice,
//         myPlaylist:myPlaylistSlice,
//     },
// })