import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER;


async function getAllMessages(args) {

    console.log(localStorage.getItem("token"));
    return await axios.get(BASE_URL + "get-conversation/" + args, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response;
    }).catch((err) => {
        return err.response;
    });
    //turn request_response;
}

async function getGroupMessages(args){

    return await axios.get(BASE_URL + "get-group-conversation/" + args, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response;
    }).catch((err) => {
        return err.response;
    });
}

async function sendMessage(args) {
    const {receiver_id, text} = args;
    return await axios.post(BASE_URL + "send-message", {
        receiver_id,
        text
    }, {

        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }

    }).then((response)=>{
        return response;
    }).catch((err)=>{
        return err.response;
    })

}

async function sendGroupMessage(args) {
    const {group_id, text} = args;
    return await axios.post(BASE_URL + "group-message", {
        group_id,
        text
    }, {

        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }

    }).then((response)=>{
        return response;
    }).catch((err)=>{
        return err.response;
    })

}

export const messageService = {
    getAllMessages,
    sendMessage,
    getGroupMessages,
    sendGroupMessage
}