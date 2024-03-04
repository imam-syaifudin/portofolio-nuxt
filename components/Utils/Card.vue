<template>
  <div>
    <div class="lg:w-[100%] h-full rounded-lg bg-[#161f32] py-4 px-5 hover:border hover:border-green-500 hover:scale-105 transition-all ease-in-out duration-300">
      <div class="header text-white text-[2rem]">
        <Icon :name="props.icon" />
      </div>
      <div class="title font-extralight text-white text-[1rem] mt-3">
        <p>{{ props.name }}</p>
      </div>
      <div class="text text-sm mt-3 text-[#8796aa]">
        <p>
          {{ props.text }}
        </p>
      </div>
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
