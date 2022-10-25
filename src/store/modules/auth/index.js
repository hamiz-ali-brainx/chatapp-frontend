import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
    namespaced: true,
    state(){
        return {
            token : '',
            user: {},
            error: '',
            all_users: [],
            success: ''
        };
    },
    mutations,
    getters,
    actions
}