import apiSlice from "../../app/apiSlice"
const SurveyApiSlice = apiSlice.injectEndpoints({
endpoints: (build) => ({
getSurveys: build.query({
query:(s)=>({
url: '/api/surveys?status='+s.status//+'&sector='+s.sector+'&sex='+s.sex+'&birthDate='+s.birthDate
}),
providesTags:["Surveys"]

}),
addSurvey: build.mutation({
    query: (survey) =>({
    url: "/api/surveys/add",
    method: "POST",
    body: survey
    }),
    invalidatesTags:["Surveys"]

}),

updateSurvey: build.mutation({
    query: (survey) =>({
    url: "/api/surveys/update",
    method: "PUT",
    body: survey
    }),
    invalidatesTags:["Surveys"]

}),
deleteSurvey: build.mutation({
    query: (survey) =>({
    url: "/api/surveys/delete",
    method: "DELETE",
    body: survey
    }),
    invalidatesTags:["Surveys"]
}),
countSurvey: build.mutation({
    query: (survey) =>({
    url: "/api/surveys/count",
    method: "PUT",
    body: survey
    }),
    invalidatesTags:["Surveys"]
}),
statusSurvey: build.mutation({
    query: (survey) =>({
    url: "/api/surveys/status",
    method: "PUT",
    body: survey
    }),
    invalidatesTags:["Surveys"]
}),

})
})
export const {useGetSurveysQuery, useAddSurveyMutation,useUpdateSurveyMutation,useDeleteSurveyMutation,useCountSurveyMutation,useStatusSurveyMutation}=SurveyApiSlice

