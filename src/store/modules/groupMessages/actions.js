import {groupService} from "@/services";

export default {
    async getGroups(context, payload) {
        const response = await groupService.getAllGroups(payload);
        context.commit("setGroups", {
            groups: response.data.Groups
        });
    },

}