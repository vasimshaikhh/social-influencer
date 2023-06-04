import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const AdminApi = createApi({
    reducerPath: 'AdminApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:2000/'
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'adminsignin',
                body: ab,
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
        signUp: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'adminsignup',
                body: ab,
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
        getUsersDetail: builder.query({
            query: () => ({
                method: 'GET',
                url: 'users',
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
        getUserContactInfo: builder.query({
            query: () => ({
                method: 'GET',
                url: 'contactdata',
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),

    })
})

export const { useSignInMutation,
    useSignUpMutation,
    useGetUsersDetailQuery,
    useGetUserContactInfoQuery
} = AdminApi