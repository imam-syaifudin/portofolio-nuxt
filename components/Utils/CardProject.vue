<template>
  <div>
    <div
      class="lg:w-[100%] md:w-[95%] w-[90%] h-[100%] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
    >
      <a href="#">
        <img class="rounded-t-lg w-full" :src="props.imageSrc" alt="Image Project" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ props.title }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ props.description }}
        </p>
        <div class="flex gap-4 mb-5">
          <Icon v-for="(icon, index) in props.tech" :key="index" :name="icon" class="text-lg"/>
        </div>
        <a
          :href="props.linkProject"
          v-if="!props.isPrivat"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-700 focus:ring-green-800"
        >
          Visit Project
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          v-else
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-red-800"
        >
          Project Private
         <Icon name="material-symbols:lock-outline" class="ml-1"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: { type: String, required: true },
  imageSrc: { type: String, required: true },
  description: { type: String, required: true },
  tech: { type: Array, required: true },
  linkProject: { type: String, required: true },
  isPrivat: { type: Boolean, default: false },
});


</script>

<style lang="scss" scoped></style>
