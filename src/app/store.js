import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Api } from "../services/api";
import { AdminApi } from "../services/adminapi";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]:Api.reducer,
        [AdminApi.reducerPath]:AdminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Api.middleware).concat(AdminApi.middleware),
})
setupListeners(store.dispatch)