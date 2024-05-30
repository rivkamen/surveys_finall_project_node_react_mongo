import apiSlice from "../../app/apiSlice"
const ansApiSlice = apiSlice.injectEndpoints({
endpoints: (build)=>({
addAnswer: build.mutation({
query: (ans)=>({
url: "/api/surveys/answers/addAnswer",
method: "PUT",
body: ans
}), providesTags:["Answers"]

}),
updateAnswer : build.mutation({
query: (ans) =>({
url: "/api/surveys/answers/updateAnswer",
method: "PUT",
body: ans
}),invalidatesTags:["Answers"]

}),
deleteAnswer : build.mutation({
    query: (ans) =>({
    url: "/api/surveys/answers/deleteAnswer",
    method: "PUT",
    body: ans
    }),invalidatesTags:["Answers"]

    }),
    changeAnswerData : build.mutation({
        query: (ans) =>({
        url: "/api/surveys/answers/changeAnswerData",
        method: "PUT",
        body: ans
        }),invalidatesTags:["Answers"]

        }),
})

})
export const {useAddAnswerMutation, useUpdateAnswerMutation,useDeleteAnswerMutation,useChangeAnswerDataMutation} = ansApiSlice
