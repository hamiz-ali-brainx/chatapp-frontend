import {friendService} from "../../../services"

export default {
    async getAllFriends(context, payload) {
        const response = await friendService.getAllFriends();

        const friends = [...response.data.message.friends_to, ...response.data.message.friends_from]

        context.commit("setFriends", {
            friends
        });


    },
}