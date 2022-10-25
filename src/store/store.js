import {createStore } from 'vuex';
import auth from './modules/auth/index';
import friends from './modules/friends/index'
import messages from './modules/messages/index';
import groups from './modules/groupMessages/index';
const store = createStore({
    modules: {
        auth,
        friends,
        messages,
        groups
    }
})


export default store;