<template>
  <div class="h-screen bg-primary flex items-center justify-center">
<div class="divi text-white w-full  h-full py-12 px-12 flex flex-col items-start">
<h1 class="text-5xl font-bold">{{ job.title }}</h1>
<p>{{ job.description }}</p>
<span> {{ job.company }}</span>
<span>${{ job.salary }}</span>
<span>{{ job.minEducation }}</span>
<span>{{ job.experience }}</span>
<span>{{ job.address }}</span>
<button class="bg-secondary px-12 hover:bg-tertiary hover:text-secondary py-2 rounded-lg font-semibold mt-[30px]">Apply</button>

</div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {useRoute} from 'vue-router'
import {ref} from 'vue'

const route = useRoute()
const jobId = route.params.id
const job = ref({})


const JobDetails = async()=>{
const response = await axios.get(`https://jobee-api-1.onrender.com/api/v1/job/${jobId}`)
job.value = response.data.data.job


}

JobDetails();
</script>

<style lang="scss" scoped>

</style>