import {messageService} from "@/services";

export default {
    async getAllmessages(context, payload) {
        const response = await messageService.getAllMessages(payload.with);

        console.log(response);
        context.commit('setMessages', {
            message: response.data[0].message
        })

    },
    async sendMessage(context, payload) {
        const response = await messageService.sendMessage(payload);
        console.log(response);

    },

    async sendGroupMessage(context, payload) {
        await messageService.sendGroupMessage(payload);

    },
    async getGroupConversation(context, payload) {
        const response = await messageService.getGroupMessages(payload.group_id);
        console.log(response.data[0].message)
        context.commit('setGroupMessages', {
            groupMessages: response.data[0].message
        })

    }
}