export default {
    setMessages(state,payload){

        state.messages = payload.message
    },
    setGroupMessages(state,payload){
        //console.log(payload.groupMessages)
        state.groupMessages = payload.groupMessages
    }
};