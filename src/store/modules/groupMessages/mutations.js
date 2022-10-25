export default {
    setGroupMessages(state,payload){

        state.groupMessages = payload.groupMessages
    },
    setGroups(state,payload){
        state.groups = payload.groups;
    }
};