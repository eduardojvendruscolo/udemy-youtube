import axios from "axios";

const KEY = "AIzaSyC5Sk784d4EgAFDVr7ZdvWrjVq9d_6nbtk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
