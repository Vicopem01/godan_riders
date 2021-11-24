export const phoneNumberCheck = (value) => {
  const regex = /^[0-9]{11}/;
  return regex.test(value);
};

export const emailCheck = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const extractNumber = (n) => {
  return n.replace(/[^0-9]/g, "");
};
export const logout = (history) => {
  localStorage.clear();
  history.push("/login");
};

export const formatMoney = (n) => {
  return n?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
