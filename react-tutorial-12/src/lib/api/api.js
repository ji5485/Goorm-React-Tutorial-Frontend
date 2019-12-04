import axios from "axios";

export const getPhoneList = () => axios.get("/api/phone/");
export const appendPhone = data => axios.post("/api/phone/", data);
export const removePhone = id =>
  axios.delete("/api/phone/", { params: { id } });
