import axios from 'axios';
const BASE_URL = import.meta.env.VITE_SERVER;


async function getAllFriends() {


    return await axios.get(BASE_URL + "get-all-friends",  {
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


export const friendService = {
    getAllFriends
}