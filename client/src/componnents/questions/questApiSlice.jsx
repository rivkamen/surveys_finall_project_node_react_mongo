import apiSlice from "../../app/apiSlice"
const questApiSlice = apiSlice.injectEndpoints({
endpoints: (build)=>({
addQuestion: build.mutation({
query: (quest)=>({
url: "/api/surveys/Questions/addQuestion",
method: "PUT",
body: quest
}),providesTags:["Questions"]

}),
updateQuestion : build.mutation({
query: (quest) =>({
url: "/api/surveys/questions/updateQuestion",
method: "PUT",
body: quest
}),invalidatesTags:["Questions"]

}),
deleteQuestion : build.mutation({
    query: (quest) =>({
    url: "/api/surveys/questions/deleteQuestion",
    method: "PUT",
    body: quest
    }),invalidatesTags:["Questions"]

    }),

    chooseSegQuestion : build.mutation({
        query: (quest) =>({
        url: "/api/surveys/questions/chooseSeg",
        method: "PUT",
        body: quest
        }),invalidatesTags:["Questions"]
    
        })
    
})

})
export const {useAddQuestionMutation, useUpdateQuestionMutation,useDeleteQuestionMutation,useChooseSegQuestionMutation} = questApiSlice
