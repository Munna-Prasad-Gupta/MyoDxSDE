import axios from "axios";

const API = axios.create({
  baseURL:"http://localhost:8080/api/",
});

export const AdminUserSignUp = async (data) => API.post("/admin/signup", data);
export const AdminUserSignIn = async (data) => API.post("/admin/signin", data);
  // export const AdmingoogleAuthSignIn = async(data) => API.get(`/admin/auth/google/login?code=${data}`);
  export const AdmingoogleAuthSignUp = async(data) => API.post("/admin/auth/google/signup",data);
  