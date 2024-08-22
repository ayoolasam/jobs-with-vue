<template>
  <div
    class="h-screen w-screen bg-primary text-white flex items-center justify-center"
  >
    <form
      @submit.prevent="register"
      class="bg-tertiary pt-12 pb-20 px-28 rounded-md text-tertiary"
      
    >
      <div class="text-center font-bold text-5xl text-secondary mb-[30px]">
        <h1 class="font-[Matemasie]">Register</h1>
      </div>
      <div class="mt-[20px]">
        <label id="name" class="block font-semibold mb-[5px] text-secondary"
          >Name:</label
        >
        <input
          type="text"
          placeholder="Name"
          class="pl-4 pr-16 py-2 focus:outline-none focus:border-b-4 text-primary border-secondary"
          v-model="user.name"
        />
      </div>
      <div class="mt-[20px]">
        <label id="email" class="block font-semibold mb-[5px]  text-secondary"
          >Email:</label
        >
        <input
          type="email"
          placeholder="Email"
          class="pl-4 pr-16 py-2 focus:outline-none focus:border-b-4 text-primary border-secondary"
          v-model="user.email"
        />
      </div>
      <div class="mt-[20px]">
        <label id="password" class="mb-[5px] font-semibold text-secondary block"
          >Password:</label
        >
        <input
          type="password"
          placeholder="Password"
          class="focus:outline-none pl-4 pr-16 py-2 focus:border-b-4 text-primary border-secondary"
          v-model="user.password"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          :disabled="!user.email || !user.password || !user.name"
          class="px-[90px] hover:bg-white hover:text-secondary mt-[40px] py-[10px] bg-secondary rounded-lg"
        >
          Register
        </button>
      </div>

      <div class="text-center mt-[20px]">
        <router-link to="/Login">
          <span class="text-secondary cursor-pointer hover:text-primary">
            Have An Account? Login</span
          >
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import useAuthStore from "@/stores/AuthStore";

const user = reactive({
  name: "",
  email: "",
  password: "",
});
const router = useRouter();
const AuthStore = useAuthStore();

const register = async () => {
  try {
    if (user.name === "" || user.email === "" || user.password === "") {
      toast("Please fill in details", {
        autoClose: 3000,
      });
    }
    const response = await axios.post(
      "https://jobee-api-1.onrender.com/api/v1/register",
      user,
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      toast("Regsitered successfully", {
        autoClose: 2000,
      });
      AuthStore.isAuthenticated = true;
      localStorage.setItem("isAuthenticated","true")
      AuthStore.getUser();
      router.push("/jobs");
    }
  } catch (err) {
    const errMessage = err.response?.data?.errMessage;
    toast(errMessage, {
      autoClose: 2000,
    });
  }
};
</script>

<style scoped></style>
