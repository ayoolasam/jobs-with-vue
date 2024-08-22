<template>
  <div
    class="h-screen w-screen bg-primary text-white flex items-center justify-center"
  >
    <form
      @submit.prevent="Login"
      class="bg-tertiary pt-12 pb-28 px-28 rounded-md s"
    >
      <div class="text-center font-bold text-5xl text-secondary mb-[30px]">
        <h1 class="font-[Matemasie]">Login</h1>
      </div>
      <div class="">
        <label id="email" class="block font-semibold mb-[5px] text-secondary"
          >Email:</label
        >
        <input
          type="email"
          placeholder="Email"
          class="pl-4 pr-16 py-2 text-primary focus:outline-none focus:border-b-4 border-secondary"
          v-model="email"
        />
      </div>
      <div class="mt-[20px]">
        <label id="password" class="mb-[5px] font-semibold text-secondary block"
          >Password:</label
        >
        <input
          type="password"
          placeholder="Password"
          class="text-primary focus:outline-none pl-4 pr-16 py-2 focus:border-b-4 border-secondary"
          v-model="password"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          :disabled="!email || !password"
          class="px-[90px] hover:bg-white hover:text-secondary mt-[40px] py-[10px] bg-secondary rounded-lg"
        >
          Login
        </button>
      </div>
      <router-link to="/Register">
        <div class="text-center mt-[20px]">
          <span class="text-secondary hover:text-primary"
            >Dont Have An Account?</span
          >
        </div>
      </router-link>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import useAuthStore from "@/stores/AuthStore";

const email = ref("");
const password = ref("");
const router = useRouter();
const AuthStore = useAuthStore();

const Login = async () => {
  try {
    if (email.value === "" || password.value === "") {
      toast("Please fill in details", {
        autoClose: 2000,
      });
    }

    const response = await axios.post(
      "https://jobee-api-1.onrender.com/api/v1/login",
      {
        email: email.value,
        password: password.value,
      },
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      toast("Logged in Successfully", {
        autoClose: 2000,
      });
      await AuthStore.getUser();
      router.push("/jobs");
      AuthStore.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    }
  } catch (err) {
    console.log(err);
    const errMessage = err.response?.data?.errMessage;
    toast(errMessage, {
      autoClose: 2000,
    });
  }
};
</script>

<style scoped></style>
