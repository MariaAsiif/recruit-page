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
        gatePopup: null,
        verify: null,
        profilePic: null,
        country: null,

    }
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
                userInfo: {
                    name: null,
                    email: null,
                    role: null,
                    userid: null,
                    profilePic: null,
                    country: null,


                }
            }
        },
        updateUser: (state, action) => {
            debugger
            state.userInfo = { ...state.userInfo, gatePopup: action.payload };
        }
    },
})

// Action creators are generated for each case reducer function
export const { signin, signout, updateUser } = RecruitAuthSlice.actions

export default RecruitAuthSlice.reducer