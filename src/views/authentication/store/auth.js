import { defineStore } from "pinia";

// importing user data stored in JSON file
import userData from "@/views/authentication/assets/data/auth.json";

// defining pinia store
export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: localStorage.getItem("authenticated-user") !== null, //check if there's user in local storage and set the value to it
    user: JSON.parse(localStorage.getItem("authenticated-user")) || null,
    showModal: false, // for welcome modal when authenticated
  }),

  actions: {
    // sign In
    async signIn(email, password) {
      const usersArray = userData.users || [];
      //check email and password
      const user = usersArray.find(
        user => user.email === email && user.password === password
      );
      // if data is correct set user to storage
      if (user) {
        this.isAuthenticated = true;
        this.user = user;
        localStorage.setItem("authenticated-user", JSON.stringify(user));
        this.showModal = true;

        return true;
      } else {
        console.log("You are not a user");
        return false;
      }
    },

    // Sign Out
    signOut() {
      //remocing the key of the user form the local storag
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem("authenticated-user");
    },

    // register
    async register(email, password, confirmPassword) {
      if (password !== confirmPassword) {
        return false;
      }

      //convert to array to use array methofs.
      const usersArray = userData.users || [];
      if (usersArray.some(user => user.email === email)) {
        return false;
      }

      // add new user
      const newUser = { id: usersArray.length + 1, email, password };
      usersArray.push(newUser);
      this.isAuthenticated = true;
      this.user = newUser;
      //save to local storage
      localStorage.setItem("authenticated-user", JSON.stringify(newUser));

      //add to json file
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
      return true;
    },
  },
});
