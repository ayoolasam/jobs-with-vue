<template>
 
    <li v-for="job in Jobs" :key="job._id" class="bg-card py-12 w-[100%] mt-[20px] list-none rounded-lg shadow-lg flex flex-col px-[10px]" >
    <h1 class="font-semibold text-2xl text-tertiary hover:transform transition-all duration-500 hover:translate-y-[-10px] ml-[20px]">{{job.title}} <span class="text-sm text-gray-400">{{ job.company }}</span></h1>
    <span class="font-semibold ml-[2%] text-gray-400">{{ job.jobType }}</span>
    
      <router-link :to="`/job/${job._id}`">
        <button class="bg-tertiary py-2 px-8 rounded-lg mt-[10px] ml-[20px] transform hover:translate-y-[-10px]">Check Job</button>
      </router-link>
   
  </li>
 
   
  
  
  

  
  
  

 

</template>

<script setup>


const props = defineProps(['Jobs']);
</script>

<style scoped></style>
