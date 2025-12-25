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
  return api.get(BASE + "/list");
};

/** 유저 상세 조회 */
export const getUserDetailApi = (id: number) => {
  return api.get(BASE + `/${id}`);
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
  return api.put(BASE + `/${id}`, data);
};



/** ✅ 유저 삭제 */
export const deleteUserApi = (id: number) => {
  return api.delete(BASE + `/${id}`);
};


/** 프로필 이미지 업로드 */
export const uploadProfileApi = (formData: FormData) => {
  return api.post(BASE + "/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};




export default api;


