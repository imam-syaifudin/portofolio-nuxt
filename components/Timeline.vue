<template>
  <div>
    <ol class="relative border-s border-gray-500 lg:w-[80%]">
      <li class="mb-10 ms-4 p-4 bg-gradient-to-b from-[#161f32] to-[#10182b]" v-for="(value,index) in props.data" :key="index">
        <div
          class="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-gray-900"
        ></div>
        <time
          class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >{{ value.time }}</time
        >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ value.title }}
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ value.description }}
        </p>
      </li>
    </ol>
  </div>
</template>

<script setup>
const props = defineProps({
     data: { type: Array, required: true}
});
</script>

<style lang="scss" scoped></style>
