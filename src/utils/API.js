import axios from "axios";

const backendUrl = "http://localhost:3001/";

const API = {
  getUser: function () {
    return axios.get(`${backendUrl}user`).catch((e) => console.error(e));
  },
  createUser: function (newUser) {
    return axios
      .post(`${backendUrl}user`, newUser)
      .catch((e) => console.error(e));
  },
  getListings: function () {
    return axios.get(`${backendUrl}inventory`).catch((e) => console.error(e));
  },
  createListing: function (newListing) {
    return axios
      .post(`${backendUrl}inventory`, newListing)
      .catch((e) => console.error(e));
  },
  createShippingInfo: function (newShippingInfo) {
    return axios
      .post(`${backendUrl}shippinginfos`, newShippingInfo)
      .catch((e) => console.error(e));
  },
  createPaymentMethod: function (newPaymentMethod) {
    return axios
      .post(`${backendUrl}paymentmethods`, newPaymentMethod)
      .catch((e) => console.error(e));
  },
};

export default API;
