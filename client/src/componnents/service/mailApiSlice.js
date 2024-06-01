import apiSlice from "../../app/apiSlice"
const mailApiSlice = apiSlice.injectEndpoints({
endpoints: (build) => ({
// getSurveys: build.query({
// query:(s)=>({
// url: '/api/surveys?status='+s.status//+'&sector='+s.sector+'&gender='+s.gender+'&birthDate='+s.birthDate
// }),
// providesTags:["Surveys"]

// }),
sendMail: build.mutation({
    query: (survey) =>({
    url: "/api/mail/",
    method: "POST",
    body: survey
    }),
    invalidatesTags:["Surveys"]

}),



})
})
export const {useSendMailMutation}=mailApiSlice