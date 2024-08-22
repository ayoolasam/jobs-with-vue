<template>
  <nav class="w-screen bg-secondary py-[10px] px-[10px] flex justify-between">
    <i class="fa-solid fa-bars text-white text-2xl"></i>

    <div class="w-[30%]">
      <input
        type="text"
        class="w-[60%] h-full rounded-lg focus:w-[100%] px-[5px]  border-solid border-tertiary border-4 focus:outline-none transition-all duration-700"
        placeholder="Search"
      />
      <i class="fa-solid fa-magnifying-glass -ml-[24px]"></i>
    </div>

    <div  class="text-white uppercase font-semibold text-center mr-[20px]">
      <button
        @click="logout"
        class="bg-tertiary px-8 py-2 rounded-lg shadow-lg"
      >
        Log out
      </button>
    </div>
    <div  v-if="AuthStore.user"  class="mr-[20px]">
      <span class="font-semibold text-xl"> Welcome {{ AuthStore?.user?.name }}.</span>
    </div>
  </nav>
</template>

<script setup>
import useAuthStore from "@/stores/AuthStore";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";

const AuthStore = useAuthStore();
const router = useRouter();

AuthStore.getUser();

const logout =  () => {
  
      AuthStore.logOut();
  
      router.push("/Login");
  
}
</script>

<style scoped></style>
