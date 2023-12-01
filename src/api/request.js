import apiOMDB from "./apiOMDB";

export const loginRequest = (user) => apiOMDB.post("/login", user)

export const registerRequest = (user) => apiOMDB.post("/register", user)