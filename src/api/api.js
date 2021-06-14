const BASE_URL = "https://coding-challenge-api.aerolab.co/";
const PERSONAL_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmY2JmMTliNzc4MTAwMjA5YzVhYTciLCJpYXQiOjE2MjIxMzM3NDV9.wJHwG7IP_nbLIBvNzz5r4oagpb8h-4vQW6kX52AYOzk";

const HEADER = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer " + PERSONAL_TOKEN,
};

export const api = {
  getUser: async () => {
    return fetch(BASE_URL + "user/me", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
  getProducts: async () => {
    return fetch(BASE_URL + "products", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
  getHistory: async () => {
    return fetch(BASE_URL + "user/history", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
  redeem: async (idProduct) => {
    return fetch(BASE_URL + "redeem", {
      body: JSON.stringify({ productId: idProduct }),
      method: "POST",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
  addPoints: async (pointsToAdd) => {
    return fetch(BASE_URL + "user/points", {
      method: "POST",
      body: JSON.stringify({
        amount: pointsToAdd,
      }),
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
};
