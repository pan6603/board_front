import api from "./api";

export const createUser = (data: {
  phone_name: string;
  email_address: string;
  phone_number?: string;
}) => {
  return api.post("/users", data);
};
