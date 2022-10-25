import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
    namespaced: true,
    state(){
        return {
            messages : [],
            groupMessages: [],
            senderName: [],
            error: '',
            success: ''
        };
    },
    mutations,
    getters,
    actions
}