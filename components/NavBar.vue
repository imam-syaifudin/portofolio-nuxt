<template>
  <div>
    <el-col :lg="24" :md="24" :sm="24">
      <nav class="flex justify-center h-[100px]">
        <div class="w-[1500px] flex items-center justify-between">
          <div class="font-bold flex mr-[190px]">
            <Icon name="simple-icons:codersrank" class="text-green-400 w-20 h-10" />
            <p class="text-white mt-2">Code For Life</p>
          </div>
          <div class="flex items-center w-[577px] justify-between">
            <div class="flex w-[500px] justify-between">
              <a href="" class="text-white">Home</a>
              <a href="" class="text-white">About</a>
              <a href="" class="text-white">Skilss</a>
              <a href="" class="text-white">Contact</a>
            </div>
          </div>
          <div class="w-[279px] flex gap-3">
            <a href="" class="text-white text-[20px]">
              <Icon name="mdi:github" />
            </a>
            <a href="" class="text-white text-[20px]">
              <Icon name="mdi:linkedin" />
            </a>
            <a href="" class="text-white text-[20px]">
              <Icon name="mdi:twitter" />
            </a>
          </div>
        </div>
      </nav>
    </el-col>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentDate = ref(new Date());
</script>
