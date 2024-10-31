<template>
  <div>
    <el-row class="flex justify items-center p-10 flex-col">
      <div>
        <p class="font-bold lg:text-[3rem] md:text-[2rem] text-[2rem] text-shadow text-white">
            <Icon name="simple-icons:knowledgebase" class="text-green-500"/>
            My Skills
        </p>
      </div>
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-6 lg:w-[80%] w-[100%]">
        <UtilsCard
          v-for="(data, index) in skils"
          :key="index"
          :icon="data.icon"
          :name="data.name"
          :text="data.text"
        />
      </div>
    </el-row>
  </div>
</template>

<script setup>
import skils from "../list/skils";
</script>

<style lang="scss" scoped></style>
