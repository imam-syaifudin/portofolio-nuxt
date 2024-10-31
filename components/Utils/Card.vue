<template>
  <div>
    <div class="lg:w-[100%] h-full bg-gradient-to-b from-[#161f32] to-[#383f5000] rounded-lg border border-gray-800 py-4 px-5 transition-all ease-in-out duration-300 flex justify-center items-center gap-3">
      <div class="header text-white text-[2rem]">
        <Icon :name="props.icon" />
      </div>
      <div class="title font-extralight text-white lg:text-[1rem] text-xs mt-3">
        <p>{{ props.name }}</p>
      </div>
      <!-- <div class="text text-sm mt-3 text-[#8796aa]">
        <p>
          {{ props.text }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    icon: { type: String, required: true},
    name: { type: String, required: true},
    text: { type: String, required: true},
})

</script>

<style lang="scss" scoped></style>
