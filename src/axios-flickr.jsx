import axios from "axios";

//Created an axios instance

const instance = axios.create({
  baseURL: "https://api.flickr.com/services/rest",
});

export default instance;
