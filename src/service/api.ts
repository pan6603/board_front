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

/** 유저 상세 조회 */
export const getUserDetailApi = (id: number) => {
  return api.get(`/users/${id}`);
};


/** ✅ 유저 수정 */
export const editUserApi = (
  id: number,
  data: {
    phone_name: string;
    email_address: string;
    phone_number?: string;
  }
) => {
  return api.put(`/users/${id}`, data);
};



/** ✅ 유저 삭제 */
export const deleteUserApi = (id: number) => {
  return api.delete(`/users/${id}`);
};


/** 프로필 이미지 업로드 */
export const uploadProfileApi = (formData: FormData) => {
  return api.post("/users/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};




export default api;


