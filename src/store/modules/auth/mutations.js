export default {
    setToken (state, payload){
        state.token = payload.token
    },
    setErrors(state, payload){
        state.error = payload.error;
    },
    setSuccess(state,payload){
        state.success=  payload.success
    },
    setUser(state,payload){
        state.user = payload.user;
    },
    setAllUsers(state,payload){
        state.all_users = payload.allUsers;
    }
}