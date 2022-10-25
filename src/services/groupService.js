import axios from 'axios';
const BASE_URL = import.meta.env.VITE_SERVER;


async function getAllGroups() {


    return await axios.get(BASE_URL + "get-groups",  {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => {
        return response;
    }).catch((err) => {
        return err.response;
    });
}


export const groupService = {
    getAllGroups
}