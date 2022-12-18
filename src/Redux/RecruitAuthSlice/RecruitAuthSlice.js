import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginInfo: {
        token: null
    },
    userInfo: {
        name: null,
        email: null,
        role: null,
        userid: null,

    }
}
export const RecruitAuthSlice = createSlice({
    name: 'RecruitAuthSlice',
    initialState,
    reducers: {
        signin: (state, action) => {
            debugger
            state.loginInfo.token = action.payload.token
            state.userInfo.name = action.payload.userdata?.first_name
            state.userInfo.email = action.payload.userdata?.email
            state.userInfo.role = action.payload?.userdata?.role
            state.userInfo.userid = action.payload.userdata?._id
            state.userInfo.gatePopup = action.payload.userdata?.ageGateVerified
            state.userInfo.verify = action.payload.userdata?.verification_code
        },
        signout: (state) => {
            return {
                loginInfo: {
                    token: null
                },
                userInfo: {
                    name: null,
                    email: null,
                    role: null,
                    userid: null,
                }
            }
        },
        updateUser : (state , action) => {
            state.userInfo.gatePopup = action.payload
        }  },
})

// Action creators are generated for each case reducer function
export const { signin, signout , updateUser } = RecruitAuthSlice.actions

export default RecruitAuthSlice.reducer