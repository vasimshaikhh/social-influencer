import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:2000/'
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'login',
                body: ab,
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
        signUp: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'signup',
                body: ab,
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
        constactInflu: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'contact',
                body: ab,
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
    
        influencer: builder.query({
            query: () => ({
                method: 'GET',
                url: 'infludata',
                headers: {
                    'Content-type': 'application/json',
                    "cache-control": "no-cache"
                }
            })
        }),
        videopost: builder.query({
            query: () => ({
                method: 'GET',
                url: 'video',
                headers: {
                    'Content-type':'application/json'
                }
            })
        }),
        imageUpload: builder.mutation({
            query: ({image}) => {
                const fd = new FormData();
                fd.append('imo', image)
                return {
                    url: 'images',
                    method: 'POST',                    
                    body:fd,                
                }
            }                        
        }),
        videoUpload: builder.mutation({
            query: ({video}) => {
                const fd = new FormData();
                fd.append('vi', video)
                return {
                    url: 'videos',
                    method: 'POST',                    
                    body:fd,                
                }
            }                        
        }),
        
        getProfilee: builder.mutation({
            query: (id) => {
                const formData = new FormData()
                formData.append('id',id)
                return {
                method: 'POST',
                url: 'usersdata',
                // body: formData,
                // body: id,
                body: JSON.stringify({ id }),
                headers: {
                    'Content-Type': 'application/json',           
                }
                }               
            }
        }),
        getImageId: builder.mutation({
            query: (user_id) => {
                return {
                method: 'POST',
                url: 'userid',
                body: JSON.stringify({ user_id }),
                headers: {
                    'Content-Type': 'application/json',           
                }
                }               
            }
        }),
        getVideoId: builder.mutation({
            query: (user_id) => {
                return {
                method: 'POST',
                url: 'uservideos',
                body: JSON.stringify({ user_id }),
                headers: {
                    'Content-Type': 'application/json',           
                }
                }               
            }
        }),
        postImgAndVid: builder.mutation({
            query: (ad) => {
                return {
                method: 'POST',
                url: 'userpost',
                body: ad,
                headers: {
                    'Content-Type': 'application/json',           
                }
                }               
            }
        }),
        postVid: builder.mutation({
            query: (ad) => {
                return {
                method: 'POST',
                url: 'uservideo',
                body: ad,
                headers: {
                    'Content-Type': 'application/json',           
                }
                }               
            }
        }),
     
    })
})

export const { useSignInMutation,
    useSignUpMutation, useConstactInfluMutation, useInfluencerQuery, useVideopostQuery, useImageUploadMutation, useVideoUploadMutation,
    useGetProfileeMutation,useGetImageIdMutation,usePostImgAndVidMutation,usePostVidMutation,useGetVideoIdMutation
} = Api