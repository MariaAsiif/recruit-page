import React from "react";
import jwtDecode from "jwt-decode";
import GenericService from "./GenericService";
class UserService extends GenericService {
  constructor() {
    super();
  }

  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          sessionStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (firstName, lastName, email, password) =>
    this.post("users/register", { password, email, firstName, lastName });
  logout = (session) => {
    sessionStorage.removeItem("token");
    this.get("users/logout", { session });
  };
  isLoggedIn = () => {
    return sessionStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      console.log(
        "jwt",
        jwtDecode(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFhZWViZWQ5YjZmNzAwMTZjZjM2NzIiLCJpYXQiOjE2Mzg2MTQ4OTcsImV4cCI6MTYzOTIxOTY5N30.Pw1HHwHmX6M9cQYhEud5_aZzfWjVlH2nfM_33t6NIwY"
        )
      );
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();
export default userService;
