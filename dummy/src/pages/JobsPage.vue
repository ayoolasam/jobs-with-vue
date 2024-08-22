<template>
  <div class="bg-primary pb-8">
    <div class="1 bg-white px-28 py-8 flex flex-col">
      <div class="heading text-left">
        <h1 class="font-bold text-5xl">Jobs in awesome Tech companies..</h1>
        <h2 class="font-semibold">
          Get on Board the Largest tech jobs website today
        </h2>
      </div>

      <div class="mt-[60px]">
        <div class="flex gap-2 items-center">
          <button
            class="bg-secondary py-4 px-12 text-tertiary rounded-lg shadow-lg hover:transform hover:translate-y-[-9px]"
          >
            Get Jobs in Your NeighbourHood
          </button>
          <h2 class="font-semibold text-primary">Post A job</h2>
        </div>

        <div class="right"></div>
      </div>
    </div>

    <div class="py-4 px-8">
      <h1 class="text-white text-4xl mt-[2%] ml-[2%] font-bold">
        Current Jobs
      </h1>
      <ul class="px-[20px] flex flrx-col flex-wrap">
        <JobCard :Jobs="Jobs" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import JobCard from "@/components/JobCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const Jobs = ref([]);

const getJobs = async () => {
  const response = await axios.get(
    "https://jobee-api-1.onrender.com/api/v1/jobs"
  );

  Jobs.value = response.data.data.jobs;
};

onMounted(() => {
  getJobs();
});
getJobs();
</script>

<style scoped></style>
