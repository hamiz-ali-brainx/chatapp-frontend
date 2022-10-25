export default {
    user: state => {
        return state.user;
    },
    getUser: state => (id)=> {
        return state.all_users.find(user=> user.id === id);
    }
}