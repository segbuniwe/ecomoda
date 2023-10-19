import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecoModaApi = createApi({
    reducerPath: "ecoModaApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST,
    }),
    endpoints: (builder) => ({
        getAccount: builder.query({
            query: () => ({
                url: `/token`,
                credentials: "include",
            }),
            transformResponse: (response) => (response ? response.account : null),
            providesTags: ["Account"],
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/token",
                method: "DELETE",
                credentials: "include",
            }),
            invalidatesTags: ["Account", "Clothes"],
        }),
        signup: builder.mutation({
            query: (body) => ({
                url: `/api/accounts`,
                method: "POST",
                body,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Account", "Clothes"],
        }),
        login: builder.mutation({
            query: ({ username, password }) => {
                const body = new FormData();
                body.append("username", username);
                body.append("password", password);
                return {
                    url: `/token`,
                    method: "POST",
                    body,
                    credentials: "include",
                };
            },
            invalidatesTags: ["Account", "Clothes"],
        }),
        getClothesByAccount: builder.query({
            query: () => ({
                url: `/api/clothes/mine`,
                credentials: "include",
            }),
            providesTags: ["Clothes"],
            transformResponse: (response) => response.clothes,
        }),
        createClothes: builder.mutation({
            query: (body) => ({
                url: `/api/clothes`,
                method: "POST",
                body,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Clothes", "Account"],
        }),
        deleteClothes: builder.mutation({
            query: (clothes_id) => ({
                url: `/api/clothes/${clothes_id}`,
                method: "DELETE",
                credentials: "include",
            }),
            invalidatesTags: ["Clothes", "Account"],
        }),
        updateClothes: builder.mutation({
            query: ({ body, clothes_id }) => ({
                url: `/api/clothes/${clothes_id}`,
                body,
                method: "PUT",
                credentials: "include",
            }),
            transformResponse: (response) => response.clothes,
            invalidatesTags: ["Clothes", "Account"],
        }),
        getClothesById: builder.query({
            query: (clothes_id) => ({
                url: `/api/clothes/${clothes_id}`,
                credentials: "include",
            }),
        }),
        getAllClothes: builder.query({
            query: () => ({
                url: "/api/clothes-list",
                credentials: "include",
            }),
            providesTags: ["Clothes List"],
            transformResponse: (response) => response.clothes,
        }),
    }),
});

export const {
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
    useSignupMutation,
    useGetClothesByAccountQuery,
    useCreateClothesMutation,
    useDeleteClothesMutation,
    useUpdateClothesMutation,
    useGetClothesByIdQuery,
    useGetAllClothesQuery,
} = ecoModaApi;
