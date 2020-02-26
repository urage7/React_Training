import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tPXNEO4kDzT9J19EEK8-v-Bp-pD0KySZM1ZBMR3iCQQ"
  }
});
