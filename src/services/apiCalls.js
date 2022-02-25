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
    url: `${baseUrl}/host/auth/order-history`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getRiderPendingOrder = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/host/auth/get-pending-orders`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getRiderTransitOrder = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/host/auth/get-in-transit-orders`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getRiderAllOrder = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/host/auth/awaiting-orders`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getSinglePendingOrder = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/host/auth/get-single-pending-order/${id}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const approveOrder = async (orderId) => {
  const response = await axios({
    method: "PUT",
    url: `${baseUrl}/host/auth/approve-booking/${orderId}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const confirmDelivery = async (orderId) => {
  const response = await axios({
    method: "PUT",
    url: `${baseUrl}/host/auth/confirm/deliveries/${orderId}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const declineOrder = async (orderId) => {
  const response = await axios({
    method: "PUT",
    url: `${baseUrl}/host/auth/decline-booking/${orderId}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
