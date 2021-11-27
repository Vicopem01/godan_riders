import axios from "axios";
import { baseUrl } from "../axios/baseUrl";

export const login = async (data) => {
  const res = await axios({
    method: "POST",
    url: ` ${baseUrl}/host/auth/login`,
    headers: {
      accept: "application/json",
    },
    data: data,
  });
  return res;
};

export const adminDashboard = async () => {
  console.log("wiat");
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/aggregates?limit=10&page=1`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getRiderAccounts = async (page) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/riders-info?page=${page}&limit=10`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res;
};
export const getUserAccounts = async (page) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/riders-info?page=${page}&limit=10`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const getSingleRiderInfo = async (id) => {
  const res = await axios({
    method: "GET",
    url: `${baseUrl}/admin/auth/rider-info/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res;
};

export const registerNewRider = async (data) => {
  const response = await axios({
    method: "POST",
    url: `${baseUrl}/admin/auth/register-rider`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
    body: data,
  });
  return response;
};

export const getRiderInfo = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/host/auth/dashboard`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getRiderOrderHistory = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/host/auth/booking-history`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
