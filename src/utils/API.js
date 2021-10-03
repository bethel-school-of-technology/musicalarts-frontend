import axios from "axios";

const backendUrl = "http://localhost:3001/";

const API = {
  getUser: function () {
    return axios.get(`${backendUrl}` + "users").catch((e) => console.error(e));
  },
  createUser: function (newUser) {
    return axios
      .post(`${backendUrl}` + "users", newUser)
      .catch((e) => console.error(e));
  },
};

export default API;
