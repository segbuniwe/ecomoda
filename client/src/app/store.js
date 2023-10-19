import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ecoModaApi } from "./apiSlice";

export const store = configureStore({
    reducer: {
        [ecoModaApi.reducerPath]: ecoModaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecoModaApi.middleware),
});

setupListeners(store.dispatch);
