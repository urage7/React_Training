import Axios from "axios";
const KEY = "AIzaSyBLUW6cS4HZ-xhw82dQk7uce-t2OvtrPrA";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`
  }
});
