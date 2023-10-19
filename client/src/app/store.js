import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ecoModaApi } from "./apiSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice,
        [ecoModaApi.reducerPath]: ecoModaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecoModaApi.middleware),
});

setupListeners(store.dispatch);
