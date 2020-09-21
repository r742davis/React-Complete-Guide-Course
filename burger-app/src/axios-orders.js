import axios from "axios";

const instance = axios.create({
  baseURL: 'https://react-burger-app-2f25b.firebaseio.com'
})

export default instance;