import axios from "axios";

const instance = axios.create({
  baseURL: "https://online-burger-ac636-default-rtdb.firebaseio.com/",
});

export default instance;
