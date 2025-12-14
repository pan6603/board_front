import axios from "axios";
const BASE = import.meta.env.BASE || "/users";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});


/**
 * 유저 생성
 */
export const createUser = (data: {
  phone_name: string;
  email_address: string;
  phone_number?: string;
}) => {
  return api.post(BASE, data);
};

/**
 * 유저 목록 조회
 */

/** 유저 목록 조회 */
export const getUserList = () => {
  return api.get("/users/list");
};


export default api;


