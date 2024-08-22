<template>
  <div class="w-screen h-[100vh]  text-white  bg-primary">
   
    <div class="py-[60px] text-center">
      <h1 class="font-bold mt-[5%] text-6xl font-[Matemasie] hover:text-secondary">Join Us</h1>
    </div>
    <div class="flex  items-center flex-col justify-center gap-5  py-[50px] mt-[20px]">
      <button class="px-[80px] hover:bg-white hover:text-secondary py-[10px] bg-secondary rounded-lg">Register</button>

      <router-link to="/Login">
        <button class="px-[90px] hover:bg-white hover:text-secondary   py-[10px] bg-secondary rounded-lg">Login</button>
      </router-link>
   

    </div>
<div class="text-center ">
  <span class="font-semibold hover:text-secondary">Forgot Password?</span>
</div>

  </div>
</template>

<script setup>

</script>

<style scoped>

</style>