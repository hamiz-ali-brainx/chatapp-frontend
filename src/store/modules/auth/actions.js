import {userService} from "../../../services"

export default {

    async getAllUsers(context, payload) {
        const response = await userService.getAllUsers(payload);

        context.commit("setAllUsers", {
            allUsers: response.data.users
        });
    },
    async loginUser(context, payload) {
        const response = await userService.login(payload);

        if ((response.data.error !== undefined) || (response.data.errors !== undefined)) {
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        } else {


            console.log(response.data[0].user);

            context.commit("setErrors", {
                error: ''
            });

            context.commit("setToken", {
                token: response.data[0].token
            })
            context.commit("setUser", {
                user: response.data[0].user
            })
            localStorage.setItem('token', response.data[0].token);

        }
    },
    async registerUser(context, payload) {
        const response = await userService.register(payload);
        if ((response.data.error !== undefined) || (response.data.errors !== undefined)) {
            context.commit("setSuccess", {
                success: ''
            })
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        } else {
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setSuccess", {
                success: response.data.message
            })
        }
    },
    async sendPasswordResetLink(context, payload) {
        const response = await userService.resetPasswordLink(payload);
        if ((response.data.error !== undefined) || (response.data.errors !== undefined)) {
            context.commit("setSuccess", {
                success: ''
            })
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        } else {
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setSuccess", {
                success: response.data.message
            })
        }
    },
    async updatePassword(context, payload) {
        const response = await userService.updatePassword(payload);

        if ((response.data.error !== undefined) || (response.data.errors !== undefined)) {
            context.commit("setSuccess", {
                success: ''
            })
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        } else {
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setSuccess", {
                success: response.data.message
            })
        }
    }

}