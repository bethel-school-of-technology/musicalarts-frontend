import axios from 'axios';

const backendUrl = 'http://localhost:3000/users' //Just for now. Once I collaborate with Matt, I will put in the right URL. - Ben Von Achen :)

const API = {
    getUser: function(user) {
        return axios.get(`${backendUrl}`, user)
    },
    createUser: function(user) {
        return axios.create(`${backendUrl}`, user)
    },

}

export default API;