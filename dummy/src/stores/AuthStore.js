import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    isLoading: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
  }),
  actions: {
    async getUser() {
      this.isLoading = true;
      const response = await axios.get(
        "https://jobee-api-1.onrender.com/api/v1/me",
        {
          withCredentials: true,
        }
      );
      console.log(response.data.user);
      const userDetails = response.data.user;
      this.user = userDetails;
      this.isAuthenticated = true;
      this.isLoading = false;
      localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem("isAuthenticated", "true");
    },
    async logOut() {
      try{
        const response = await axios.get(
          "https://jobee-api-1.onrender.com/api/v1/logout",
          {
            withCredentials: true,
          }
        );
  
        if (response.status === 200) {
          toast("Logged out successfully", {
            autoClose: 2000,
          });
          this.user = null;
          this.isAuthenticated = false;
          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");
        }
      }catch(err){
        console.log(err)
      }
   
    },
  },
});

export default useAuthStore;
