import axios from "axios";

const API = axios.create({
  baseURL:"http://localhost:8080/api/",
});

export const GetFeedbackStatus = async (data) => API.get(`feedback/reached/${data}`);
export const PostFeedback = async (data) => API.post("feedback/submit",data);
