import axios from "axios";
import { Order } from "../types/general";

const requestBase = async (url: string) => {
  let result;
  try {
    const response = await axios.get(`http://localhost:3000/${url}`);
    result = response.data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

const addRequest = async (orderInfo: Order) => {
  let result;
  try {
    const response = await axios.post(
      "http://localhost:3000/events",
      orderInfo
    );
    result = response.data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

const deleteRequest = async (id: number) => {
  let result;
  try {
    const response = await axios.delete(`http://localhost:3000/events/${id}`);
    result = response.data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

const putRequest = async (id: number, orderInfo: Order) => {
  let result;
  try {
    const response = await axios.put(
      `http://localhost:3000/events/${id}`,
      orderInfo
    );
    result = response.data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

export { requestBase, addRequest, deleteRequest, putRequest };
