<template>
  <div class="p-10">
    <div class="grid lg:grid-cols-2 grid-cols-1 text-center place-items-center">
      <div class="sm:mt-10">
        <h1
          class="text-white font-bold lg:text-[4rem] md:text-[2rem] text-[2rem] text-shadow"
        >
          <Icon name="arcticons:expedia" class="text-green-500" />
          My <span class="text-green-500">Experience</span>
        </h1>
        <p
          class="lg:text-lg sm:text-sm lg:w-[50%] mx-auto md:w-[80%] w-[90%] text-[#9fa8b7] mt-2 text-shadow text-center"
        >
          I have made coding a part of my life, the initial interest was only
          because of the colorful code editor which looked so cool, then I tried
          to delve deeper into the world of coding, when I encountered an error
          and was able to solve it, it was a pleasure in itself for me, more
          precisely, I liked coding not because money, but coding is the art of
          fixing bugs
        </p>
        <div class="flex justify-center mt-3">
          <button
            type="button"
            class="text-gray-90 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
          >
            <Icon name="bi:github" class="text-xl" /> Github
          </button>
          <button
            type="button"
            class="text-gray-90 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-800 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-600 focus:ring-blue-700"
          >
            <Icon name="bi:linkedin" class="text-xl" /> Linkedin
          </button>
        </div>
      </div>
      <div class="mt-5">
        <UtilsTimeline :data="experience" />
      </div>
    </div>
  </div>
</template>

<script setup>
import experience from "../list/experience";
</script>
