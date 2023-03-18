import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginInfo: {
        token: null
    },
    userInfo: null
}
export const RecruitAuthSlice = createSlice({
    name: 'RecruitAuthSlice',
    initialState,
    reducers: {
        signin: (state, action) => {
            state.loginInfo.token = action.payload.token
            state.userInfo = action.payload.userdata

        },
        signout: (state) => {
            return {
                loginInfo: {
                    token: null
                },
                userInfo: null
            }
        },
        updateProfile: (state, action) => {
            debugger
            state.userInfo = action.payload
        },
        updateSavedJobs: (state, action) => {
            state.userInfo = { ...state.userInfo, savedJobs: action.payload };
        },
        updateUser: (state, action) => {
            debugger
            state.userInfo = { ...state.userInfo, gatePopup: action.payload };
        }
    },
})

// Action creators are generated for each case reducer function
export const { signin, signout, updateUser , updateProfile , updateSavedJobs } = RecruitAuthSlice.actions

export default RecruitAuthSlice.reducer