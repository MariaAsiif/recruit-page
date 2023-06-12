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
export const UserAuthSlice = createSlice({
    name: 'UserAuthSlice',
    initialState,
    reducers: {
        signin: (state, action) => {
            debugger
            state.loginInfo.token = action.payload.token
            state.userInfo.name = action.payload.userdata.first_name
            state.userInfo.email = action.payload.userdata.email
            state.userInfo.role = action.payload?.userdata?.rolePrivileges?.roleName || "superadmin"
            state.userInfo.userid = action.payload.userdata._id
            state.userInfo.permission = action.payload.userdata.rolePrivileges
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
        
    },
})

// Action creators are generated for each case reducer function
export const { signin, signout  } = UserAuthSlice.actions

export default UserAuthSlice.reducer